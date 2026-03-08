import json
from rdflib import Graph, URIRef, Literal, Namespace
from rdflib.namespace import RDF, RDFS

def main():
    """Main function to generate the TTL knowledge base."""
    NS = Namespace("http://credit-analysis.org/ontology/")
    g = Graph()
    g.bind("cao", NS)

    # Load knowledge graph for relationships
    with open("agentic_knowledge_base/knowledge_graph.json", "r", encoding="utf-8") as f:
        knowledge_graph = json.load(f)

    # Process nodes
    for node in knowledge_graph["nodes"]:
        node_id = node["id"]
        # Replace non-URI-safe characters
        safe_id = node_id.replace(" ", "_").replace("/", "_").replace(".", "_").replace("#", "_")
        node_uri = NS[safe_id]

        node_type = node.get("type", "Unknown")
        if node_type == "File":
            g.add((node_uri, RDF.type, NS.File))
        elif node_type == "Chunk":
            g.add((node_uri, RDF.type, NS.KnowledgeChunk))
            if "subtype" in node:
                g.add((node_uri, NS.hasSubtype, Literal(node["subtype"])))
        elif node_type == "Concept":
            g.add((node_uri, RDF.type, NS.Concept))

        if "label" in node:
            g.add((node_uri, RDFS.label, Literal(node["label"])))

    # Process edges
    for edge in knowledge_graph["edges"]:
        safe_source = edge["source"].replace(" ", "_").replace("/", "_").replace(".", "_").replace("#", "_")
        safe_target = edge["target"].replace(" ", "_").replace("/", "_").replace(".", "_").replace("#", "_")
        source_uri = NS[safe_source]
        target_uri = NS[safe_target]

        edge_type = edge.get("type")
        if edge_type == "CONTAINS":
            g.add((source_uri, NS.contains, target_uri))
        elif edge_type == "MENTIONS":
            g.add((source_uri, NS.mentions, target_uri))

    # Serialize the graph to a TTL file
    g.serialize(destination="agentic_knowledge_base/knowledge_triples.ttl", format="turtle")

if __name__ == "__main__":
    main()
