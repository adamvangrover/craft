# Credit Analysis Knowledge Base

This directory contains a structured knowledge base extracted from the entire repository. The purpose of this knowledge base is to provide a machine-readable, portable, and comprehensive representation of the information in the repository, with a focus on credit analysis. This knowledge base can be used by another LLM to gain an instant and deep understanding of the subject matter.

## Files

The knowledge base is provided in several formats:

*   **`knowledge_base.jsonl`**: A JSONL file where each line is a JSON object representing a "knowledge chunk". This is the primary data file.
*   **`knowledge_graph.json`**: A JSON file representing the knowledge as a generic graph with nodes and edges. This can be used for graph-based analysis and visualization.
*   **`decision_trees.json`**: A JSON file containing decision trees extracted from checklists and frameworks in the repository.
*   **`ontology.ttl`**: A Turtle file defining the ontology (schema) used for the RDF representation of the knowledge base.
*   **`knowledge_triples.ttl`**: A Turtle file containing the knowledge base represented as RDF triples.
*   **`import_to_neo4j.cypher`**: A Cypher script to import the knowledge graph into a Neo4j database.
*   **`prompts.json`**: A JSON file containing example prompts that can be used to query the knowledge base with an LLM.

## Structure of the Knowledge Base

The knowledge base is built around the concept of "knowledge chunks". A knowledge chunk is a small, self-contained piece of information extracted from a source file. Each chunk has the following properties:

*   `id`: A unique identifier for the chunk.
*   `source_file`: The path to the file from which the chunk was extracted.
*   `content_type`: The type of content, e.g., "section", "glossary", "checklist".
*   `heading`: The heading of the section, if applicable.
*   `content`: The actual content of the chunk.
*   `relations`: A list of relationships to other chunks.

## How to Use the Knowledge Base

### Using the JSONL File

The `knowledge_base.jsonl` file can be easily parsed by any programming language. Each line is a valid JSON object. You can load this file and process the knowledge chunks to perform various NLP tasks, such as summarization, question answering, and information retrieval.

### Using the Knowledge Graph

The `knowledge_graph.json` file can be used to visualize the relationships between different pieces of knowledge. You can use libraries like `networkx` in Python or other graph visualization tools to explore the graph.

### Using the Decision Trees

The `decision_trees.json` file contains decision trees that can be used to guide a user through a process, such as a due diligence checklist.

### Using the RDF Triples

The `knowledge_triples.ttl` file can be loaded into an RDF triplestore (e.g., Apache Jena, GraphDB) to perform SPARQL queries on the knowledge base. The `ontology.ttl` file provides the schema for the data.

### Using the Neo4j Script

To import the knowledge graph into a Neo4j database:
1.  Start your Neo4j database.
2.  Open the Neo4j Browser.
3.  Copy and paste the content of the `import_to_neo4j.cypher` file into the query editor and run it. This will create the nodes and relationships in your database.

## Example Prompts

The `prompts.json` file contains a few example prompts that can be used with an LLM to interact with this knowledge base. For example:

```
"Based on the provided knowledge base, summarize the key aspects of 'Financial Reporting and Analysis'."
```

An LLM can be prompted to use the `knowledge_base.jsonl` file as its source of information to answer such questions.
