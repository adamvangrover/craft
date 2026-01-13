# Comprehensive Knowledge Base

This folder contains a machine-readable, structured knowledge base derived from the entire Credit Analysis repository. It is designed to facilitate machine learning tasks, knowledge graph construction, and the development of specialized AI agents.

## Contents

### 1. Core Data
*   **`knowledge_base.jsonl`**: The primary text corpus. Each line is a JSON object representing a "chunk" of knowledge (a section of a Markdown file, a definition, or a checklist item).
    *   **Fields**: `id`, `source` (filepath), `breadcrumbs` (hierarchy), `content` (text), `type` (text, definition, perspective, tip).
*   **`knowledge_graph.json`**: A JSON representation of the repository's structure and concepts.
    *   **Nodes**: Files, Content Chunks, Concepts (Glossary Terms).
    *   **Edges**: `CONTAINS` (File->Chunk), `MENTIONS` (Chunk->Concept).

### 2. Structured Logic
*   **`decision_trees.json`**: Hierarchical decision trees extracted from checklists (e.g., LBO Screening, Credit Memo Review). Useful for building guided agents.
*   **`ontology.ttl`**: A lightweight RDF/OWL ontology defining the classes (`File`, `Chunk`, `Concept`) and properties used in the graph.

### 3. Graph Database Import
*   **`import.cypher`**: A script to import the node and edge data into a Neo4j graph database.

### 4. AI Development Assets
*   **`system_prompts.md`**: Instructions and prompts for configuring an LLM to use this knowledge base effectively.

## How to Use

### For RAG (Retrieval-Augmented Generation)
Ingest `knowledge_base.jsonl` into a vector database (e.g., Pinecone, Weaviate).
*   **Embedding**: Embed the `content` field.
*   **Metadata**: Store `breadcrumbs`, `source`, and `type` as metadata for filtering.
*   **Retrieval**: When a user asks a question, retrieve the top 3-5 chunks. If the chunk is a checklist item, retrieve its siblings to provide the full context.

### For Knowledge Graph Analysis
1.  Install Neo4j Desktop or use AuraDB.
2.  Run the contents of `import.cypher`.
3.  Query the graph to find connections between concepts (e.g., "What modules mention 'EBITDA'?").

### For Fine-Tuning
Convert `knowledge_base.jsonl` into the chat format required by your model provider. Use the `system_prompts.md` to define the model's persona during inference.

## Generation Scripts
*   `build_kb.py`: Scans the repo and generates `knowledge_base.jsonl`, `knowledge_graph.json`, `ontology.ttl`, and `import.cypher`.
*   `build_decision_trees.py`: Parses specific checklist files to generate `decision_trees.json`.
