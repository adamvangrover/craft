import json
from rdflib import Graph, URIRef, Literal, Namespace
from rdflib.namespace import RDF, RDFS

def main():
    """Main function to generate the TTL knowledge base."""
    # Define namespaces
    NS = Namespace("http://example.org/credit-analysis-kb/")

    g = Graph()
    g.bind("cakb", NS)

    # Load structured knowledge
    with open("credit_analysis_knowledge_base/structured_knowledge.json", "r", encoding="utf-8") as f:
        structured_data = json.load(f)

    # Load knowledge graph for relationships
    with open("credit_analysis_knowledge_base/knowledge_graph.json", "r", encoding="utf-8") as f:
        knowledge_graph = json.load(f)

    # Create triples for chunks
    for chunk in structured_data:
        chunk_uri = NS[chunk["id"]]
        g.add((chunk_uri, RDF.type, NS.KnowledgeChunk))
        g.add((chunk_uri, NS.hasContent, Literal(str(chunk["content"]))))
        g.add((chunk_uri, NS.hasContentType, Literal(chunk["content_type"])))
        g.add((chunk_uri, NS.hasSourceFile, Literal(chunk["source_file"])))

        # Add a triple to link the chunk to its source document
        doc_uri = NS[chunk["source_file"].replace("/", "_")]
        g.add((doc_uri, RDF.type, NS.Document))
        g.add((doc_uri, NS.hasChunk, chunk_uri))


    # Create triples for relationships
    for edge in knowledge_graph["edges"]:
        source_uri = NS[edge["source"]]
        target_uri = NS[edge["target"]]

        if edge["label"] == "CONTAINS":
            # This is already handled above
            pass
        elif edge["label"] == "MENTIONS":
            g.add((source_uri, NS.mentions, target_uri))

    # Serialize the graph to a TTL file
    g.serialize(destination="credit_analysis_knowledge_base/knowledge_triples.ttl", format="turtle")

if __name__ == "__main__":
    main()
