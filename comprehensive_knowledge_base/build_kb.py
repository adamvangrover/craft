import os
import json
import re
import hashlib
from datetime import datetime

# Configuration
ROOT_DIR = "."
OUTPUT_DIR = "comprehensive_knowledge_base"
EXCLUDE_DIRS = {
    ".git", "node_modules", "dist", "build", "__pycache__",
    "assets", "css", "images", "img", "fonts", "extracted_content",
    OUTPUT_DIR, "credit_analysis_knowledge_base"
}
INCLUDE_EXTENSIONS = {".md", ".json", ".txt"}
CHECKLIST_FILE = "Toolkits_and_Checklists/checklists_registry.json"

# Data containers
knowledge_chunks = []
entities = set()
relations = []
glossary_terms = {}

def get_file_hash(content):
    return hashlib.md5(content.encode('utf-8')).hexdigest()

def clean_text(text):
    return re.sub(r'\s+', ' ', text).strip()

def scan_repository():
    """Walks the directory tree and yields relevant file paths."""
    print(f"Scanning repository from {ROOT_DIR}...")
    for root, dirs, files in os.walk(ROOT_DIR):
        # Modify dirs in-place to exclude unwanted directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith('.')]

        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in INCLUDE_EXTENSIONS:
                yield os.path.join(root, file)

def parse_markdown(filepath, content):
    """
    Parses markdown content into chunks based on headers.
    Returns a list of chunk objects.
    """
    lines = content.split('\n')
    chunks = []

    current_headers = [] # Stack of (level, text)
    current_content = []
    current_type = "text"

    def flush_chunk():
        nonlocal current_content, current_type
        text = "\n".join(current_content).strip()
        if text:
            # Determine hierarchy from headers
            breadcrumbs = [h[1] for h in current_headers]

            # Special detection for blockquotes
            if text.startswith("> **Buy-Side Perspective:**"):
                current_type = "perspective"
                text = text.replace("> **Buy-Side Perspective:**", "").strip()
            elif text.startswith("> **Pro Tip:**"):
                current_type = "tip"
                text = text.replace("> **Pro Tip:**", "").strip()

            chunk_id = hashlib.md5((filepath + text).encode('utf-8')).hexdigest()

            chunks.append({
                "id": chunk_id,
                "source": filepath,
                "breadcrumbs": breadcrumbs,
                "content": text,
                "type": current_type,
                "length": len(text)
            })
        current_content = []
        current_type = "text"

    for line in lines:
        header_match = re.match(r'^(#{1,6})\s+(.*)', line)
        if header_match:
            flush_chunk()
            level = len(header_match.group(1))
            header_text = header_match.group(2).strip()

            # Update header stack
            while current_headers and current_headers[-1][0] >= level:
                current_headers.pop()
            current_headers.append((level, header_text))

        else:
            current_content.append(line)

    flush_chunk() # Flush last chunk
    return chunks

def extract_glossary(content):
    """
    Extracts terms from Global_Financial_Glossary.md or similar files.
    Assumes format: ## Term \n Definition or **Term**: Definition
    """
    terms = {}
    lines = content.split('\n')
    current_term = None

    for line in lines:
        # Check for header based terms
        header_match = re.match(r'^##\s+(.*)', line)
        if header_match:
            current_term = header_match.group(1).strip()
            continue

        if current_term and line.strip():
            terms[current_term] = line.strip()
            current_term = None # Reset

        # Check for bold terms in list: - **Term**: Definition
        list_match = re.match(r'^-\s*\*\*(.*?)\*\*:\s*(.*)', line)
        if list_match:
            terms[list_match.group(1)] = list_match.group(2)

    return terms

def process_file(filepath):
    """Reads and processes a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        filename = os.path.basename(filepath)

        # Special handling for Glossary
        if "Glossary" in filename:
            terms = extract_glossary(content)
            for term, definition in terms.items():
                glossary_terms[term] = definition
                # Also add as a chunk
                knowledge_chunks.append({
                    "id": hashlib.md5((filepath + term).encode('utf-8')).hexdigest(),
                    "source": filepath,
                    "breadcrumbs": ["Glossary", term],
                    "content": definition,
                    "type": "definition",
                    "term": term
                })

        if filepath.endswith(".md"):
            chunks = parse_markdown(filepath, content)
            knowledge_chunks.extend(chunks)

        elif filepath.endswith(".json"):
            # Capture JSON content as a single chunk
            try:
                # Validate JSON structure first
                json_data = json.loads(content)
                # Pretty print for readability in the KB
                formatted_json = json.dumps(json_data, indent=2)

                chunk_id = hashlib.md5((filepath + formatted_json).encode('utf-8')).hexdigest()
                knowledge_chunks.append({
                    "id": chunk_id,
                    "source": filepath,
                    "breadcrumbs": [filename],
                    "content": formatted_json,
                    "type": "data",
                    "length": len(formatted_json)
                })
            except json.JSONDecodeError:
                print(f"Skipping invalid JSON: {filepath}")

    except Exception as e:
        print(f"Error processing {filepath}: {e}")

# --- Decision Tree Logic ---

def parse_checklist_content(content):
    """
    Parses markdown content of a checklist into a tree structure.
    Items starting with "- [ ]" are nodes.
    Bold text is the node label, rest is description/question.
    """
    nodes = []
    lines = content.split('\n')

    current_category = "General"

    for line in lines:
        line = line.strip()
        if line.startswith("**") and line.endswith("**"):
            current_category = line.replace("**", "")
            continue

        match = re.match(r'- \[ \] \*\*(.*?)\*\*[:?]?\s*(.*)', line)
        if match:
            label = match.group(1)
            description = match.group(2)
            nodes.append({
                "category": current_category,
                "node": label,
                "question": description,
                "type": "decision_node"
            })

    return nodes

def generate_decision_trees():
    print("Generating Decision Trees...")
    if not os.path.exists(CHECKLIST_FILE):
        print(f"File not found: {CHECKLIST_FILE}")
        return {}

    with open(CHECKLIST_FILE, 'r', encoding='utf-8') as f:
        registry = json.load(f)

    trees = {}

    for key, data in registry.items():
        title = data.get("title", key)
        content = data.get("content", "")

        nodes = parse_checklist_content(content)

        # Ensure we have nodes before accessing index 0
        if not nodes:
             trees[key] = {
                "id": key,
                "title": title,
                "root": None,
                "nodes": {}
             }
             continue

        tree_structure = {
            "id": key,
            "title": title,
            "root": {
                "id": "start",
                "label": "Start Analysis",
                "next": nodes[0]["node"]
            },
            "nodes": {}
        }

        for i, node in enumerate(nodes):
            node_id = node["node"]
            next_node = nodes[i+1]["node"] if i < len(nodes) - 1 else "Conclusion"

            tree_structure["nodes"][node_id] = {
                "question": node["question"],
                "category": node["category"],
                "next": next_node
            }

        trees[key] = tree_structure
    return trees

# --- Main ---

def main():
    print("Starting Knowledge Base Build...")

    files = list(scan_repository())
    print(f"Found {len(files)} files to process.")

    for filepath in files:
        process_file(filepath)

    print(f"Processed {len(knowledge_chunks)} knowledge chunks.")
    print(f"extracted {len(glossary_terms)} glossary terms.")

    # OUTPUT 1: JSONL Knowledge Base
    jsonl_path = os.path.join(OUTPUT_DIR, "knowledge_base.jsonl")
    with open(jsonl_path, 'w', encoding='utf-8') as f:
        for chunk in knowledge_chunks:
            f.write(json.dumps(chunk) + '\n')
    print(f"Generated {jsonl_path}")

    # OUTPUT 2: Knowledge Graph (Nodes/Edges JSON)
    nodes = []
    edges = []

    # Create nodes for files
    file_nodes = {chunk['source'] for chunk in knowledge_chunks}
    for file in file_nodes:
        nodes.append({"id": file, "type": "File", "label": os.path.basename(file)})

    # Create nodes for chunks and edges to files
    for chunk in knowledge_chunks:
        chunk_node_id = chunk['id']
        label = chunk['breadcrumbs'][-1] if chunk['breadcrumbs'] else "Content"
        nodes.append({
            "id": chunk_node_id,
            "type": "Chunk",
            "subtype": chunk['type'],
            "label": label[:50] # Truncate
        })

        edges.append({
            "source": chunk['source'],
            "target": chunk_node_id,
            "type": "CONTAINS"
        })

        content_lower = chunk['content'].lower()
        for term in glossary_terms:
            if term.lower() in content_lower and len(term) > 4:
                term_id = f"term_{hashlib.md5(term.encode()).hexdigest()}"
                if not any(n['id'] == term_id for n in nodes):
                     nodes.append({"id": term_id, "type": "Concept", "label": term})

                edges.append({
                    "source": chunk_node_id,
                    "target": term_id,
                    "type": "MENTIONS"
                })

    kg_path = os.path.join(OUTPUT_DIR, "knowledge_graph.json")
    with open(kg_path, 'w', encoding='utf-8') as f:
        json.dump({"nodes": nodes, "edges": edges}, f, indent=2)
    print(f"Generated {kg_path}")

    # OUTPUT 3: Ontology (TTL)
    ttl_content = """
@prefix : <http://credit-analysis.org/ontology/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

:KnowledgeChunk a owl:Class ;
    rdfs:label "Knowledge Chunk" .

:File a owl:Class ;
    rdfs:label "File" .

:Concept a owl:Class ;
    rdfs:label "Concept" .

:contains a owl:ObjectProperty ;
    rdfs:domain :File ;
    rdfs:range :KnowledgeChunk .

:mentions a owl:ObjectProperty ;
    rdfs:domain :KnowledgeChunk ;
    rdfs:range :Concept .
    """
    ttl_path = os.path.join(OUTPUT_DIR, "ontology.ttl")
    with open(ttl_path, 'w', encoding='utf-8') as f:
        f.write(ttl_content)
    print(f"Generated {ttl_path}")

    # OUTPUT 4: Neo4j Import Script
    cypher_path = os.path.join(OUTPUT_DIR, "import.cypher")
    with open(cypher_path, 'w', encoding='utf-8') as f:
        f.write("// Neo4j Import Script\n")
        f.write("CREATE CONSTRAINT IF NOT EXISTS FOR (n:File) REQUIRE n.id IS UNIQUE;\n")
        f.write("CREATE CONSTRAINT IF NOT EXISTS FOR (n:Chunk) REQUIRE n.id IS UNIQUE;\n")
        f.write("CREATE CONSTRAINT IF NOT EXISTS FOR (n:Concept) REQUIRE n.id IS UNIQUE;\n")

        # Write ALL nodes
        for node in nodes:
            # Escape single quotes in label
            safe_label = node.get('label', '').replace("'", "\\'")
            # Remove control characters to be safe
            safe_label = re.sub(r'[\x00-\x1f]', '', safe_label)
            f.write(f"MERGE (n:{node['type']} {{id: '{node['id']}'}}) SET n.label = '{safe_label}';\n")

        # Write ALL edges
        for edge in edges:
             f.write(f"MATCH (a {{id: '{edge['source']}'}}), (b {{id: '{edge['target']}'}}) MERGE (a)-[:{edge['type']}]->(b);\n")

    print(f"Generated {cypher_path}")

    # OUTPUT 5: Decision Trees
    decision_trees = generate_decision_trees()
    dt_path = os.path.join(OUTPUT_DIR, "decision_trees.json")
    with open(dt_path, 'w', encoding='utf-8') as f:
        json.dump(decision_trees, f, indent=2)
    print(f"Generated {dt_path}")

if __name__ == "__main__":
    main()
