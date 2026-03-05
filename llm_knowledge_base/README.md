# LLM Knowledge Base

This directory contains a structured knowledge base extracted from the entire repository. The primary purpose of this knowledge base is to provide a machine-readable, portable, and comprehensive representation of the information in the repository, with a focus on credit analysis and finance. It is designed specifically to be used by an LLM to gain an instant and deep understanding of the subject matter.

## Artifacts

The knowledge base is provided in multiple formats for ease of integration:

*   **`knowledge_base.jsonl`**: A JSONL file where each line is a JSON object representing a "knowledge chunk". This is the primary data file. It extracts headings, contexts, and types to break down large markdown documents.
*   **`knowledge_graph.json`**: A JSON file representing the knowledge as a generic graph with nodes and edges. Useful for graph-based analysis, visualization, and constructing entity relations.
*   **`decision_trees.json`**: A JSON file containing decision trees extracted from checklists and frameworks in the repository. Can be used for multi-step reasoning validation.
*   **`ontology.ttl`**: A Turtle file defining the ontology (schema) used for the RDF representation of the knowledge base.
*   **`knowledge_triples.ttl`**: A Turtle file containing the knowledge base represented as RDF triples. It can be queried using SPARQL.
*   **`import.cypher`**: A Cypher script to import the knowledge graph into a Neo4j database.
*   **`prompts.json`**: A JSON file containing example prompts that can be used to query the knowledge base with an LLM.
*   **`system_prompts.md`**: Example system prompts for configuring AI agents that use this knowledge base.
*   **`model_card.md`**: Metadata and schema descriptions for the generated knowledge base.

## Scripts

*   **`build_kb.py`**: The main script to generate the knowledge base from the entire repository. Run `python llm_knowledge_base/build_kb.py` to regenerate the JSONL, Graph, Ontology, Cypher, and Decision Trees.
*   **`generate_ttl.py`**: A secondary script to generate the RDF triples (`knowledge_triples.ttl`) from the `knowledge_graph.json` using the `rdflib` library. To run this script, first install the dependencies with `pip install -r llm_knowledge_base/requirements.txt`, then run `python llm_knowledge_base/generate_ttl.py` to regenerate the TTL file.

## Integration

You can easily mount these files to an LLM context or upload them into vector databases (like Milvus or Pinecone), graph databases (like Neo4j), or triplestores (like GraphDB) for Retrieval-Augmented Generation (RAG).
