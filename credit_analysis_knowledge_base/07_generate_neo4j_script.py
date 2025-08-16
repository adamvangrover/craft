import json

def main():
    """Main function to generate the Neo4j import script."""
    with open("credit_analysis_knowledge_base/knowledge_graph.json", "r", encoding="utf-8") as f:
        knowledge_graph = json.load(f)

    cypher_script = []

    # Create nodes
    for node in knowledge_graph["nodes"]:
        node_id = node["id"]
        # Escape single quotes in label
        node_label = node["label"].replace("'", "\\'")
        node_type = node["type"]

        cypher_script.append(f"CREATE (:`{node_type}` {{id: '{node_id}', label: '{node_label}'}});")

    # Create relationships
    for edge in knowledge_graph["edges"]:
        source_id = edge["source"]
        target_id = edge["target"]
        rel_label = edge["label"]

        cypher_script.append(
            f"MATCH (a), (b) "
            f"WHERE a.id = '{source_id}' AND b.id = '{target_id}' "
            f"CREATE (a)-[:`{rel_label}`]->(b);"
        )

    with open("credit_analysis_knowledge_base/import_to_neo4j.cypher", "w", encoding="utf-8") as f:
        f.write("\n".join(cypher_script))

if __name__ == "__main__":
    main()
