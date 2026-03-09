# Machine Learning Core Knowledge Base

This folder contains a fully self-contained, modular, and portable machine-readable structured knowledge base derived from the entire Financial Learning Hub repository. It is designed to combine learning, example input/output, observability, agentic workflows, human-in-the-loop, human-on-the-loop, and automation capabilities. It is specifically designed to facilitate machine learning tasks, knowledge graph construction, and the development of specialized AI agents to interact with a dynamic frontend UI UX.

## Contents

### 1. Core Data
*   **`knowledge_base.jsonl`**: The primary text corpus. Each line is a JSON object representing a "chunk" of knowledge (a section of a Markdown file, a definition, or a checklist item).
    *   **Fields**: `id`, `source` (filepath), `breadcrumbs` (hierarchy), `content` (text), `type` (text, definition, perspective, tip).
*   **`knowledge_graph.json`**: A JSON representation of the repository's structure and concepts.
    *   **Nodes**: Files, Content Chunks, Concepts (Glossary Terms).
    *   **Edges**: `CONTAINS` (File->Chunk), `MENTIONS` (Chunk->Concept).

### 2. Structured Logic & Ontology
*   **`decision_trees.json`**: Hierarchical decision trees extracted from checklists (e.g., LBO Screening, Credit Memo Review). Useful for building guided agents.
*   **`ontology.ttl`**: A lightweight RDF/OWL ontology defining the classes (`File`, `Chunk`, `Concept`) and properties used in the graph.
*   **`knowledge_triples.ttl`**: Standard Semantic Web representations of the knowledge, connecting data nodes and their relationships in Turtle format.

### 3. Graph Database Import
*   **`import.cypher`**: Ready-to-use commands to import the node and edge data into a Neo4j graph database.

### 4. AI Development Assets
*   **`system_prompts.md`**: Instructions and prompts for configuring an LLM to use this knowledge base effectively.
*   **`prompts.json`**: Prompt templates to interact with the KB.
*   **`model_card.md`**: Documentation on dataset description, artifacts, and schemas.

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

### For Agentic Workflows
Use `decision_trees.json` and the provided `prompts.json` templates to enable step-by-step reasoning or interactive workflows where an AI agent dynamically guides a user through credit analysis tasks.

## Generation Scripts
*   `build_kb.py`: Scans the repo and generates `knowledge_base.jsonl`, `knowledge_graph.json`, `ontology.ttl`, `import.cypher`, and `decision_trees.json`.
*   `generate_ttl.py`: Converts `knowledge_graph.json` into the comprehensive semantic ontology representation `knowledge_triples.ttl`.
