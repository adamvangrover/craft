import json
import re

def main():
    """Main function to generate the generic knowledge graph."""
    with open("credit_analysis_knowledge_base/structured_knowledge.json", "r", encoding="utf-8") as f:
        structured_data = json.load(f)

    nodes = []
    edges = []

    # Create nodes for each chunk
    for chunk in structured_data:
        label = chunk.get("heading", chunk["source_file"])
        if len(label) > 50:
            label = label[:50] + "..."

        nodes.append({
            "id": chunk["id"],
            "label": label,
            "type": chunk["content_type"],
            "source": chunk["source_file"]
        })

    # Create nodes for each source file
    source_files = set(chunk["source_file"] for chunk in structured_data)
    for source_file in source_files:
        nodes.append({
            "id": source_file,
            "label": source_file,
            "type": "source_file"
        })

        # Create edges from source file to chunks
        for chunk in structured_data:
            if chunk["source_file"] == source_file:
                edges.append({
                    "source": source_file,
                    "target": chunk["id"],
                    "label": "CONTAINS"
                })

    # Infer "MENTIONS" relationships
    headings = {chunk.get("heading"): chunk["id"] for chunk in structured_data if chunk.get("heading")}
    for chunk in structured_data:
        content = str(chunk["content"])
        for heading, target_id in headings.items():
            if heading and re.search(r'\b' + re.escape(heading) + r'\b', content, re.IGNORECASE):
                if chunk["id"] != target_id:
                    edges.append({
                        "source": chunk["id"],
                        "target": target_id,
                        "label": "MENTIONS"
                    })

    knowledge_graph = {
        "nodes": nodes,
        "edges": edges
    }

    with open("credit_analysis_knowledge_base/knowledge_graph.json", "w", encoding="utf-8") as f:
        json.dump(knowledge_graph, f, indent=2)

if __name__ == "__main__":
    main()
