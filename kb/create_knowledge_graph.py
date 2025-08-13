import json
import os
import re

def sanitize_for_dot(text):
    # Sanitize text to be used as a node ID in DOT format
    # Replace non-alphanumeric characters with underscores
    text = re.sub(r'[^a-zA-Z0-9_]', '_', text)
    # Truncate to avoid overly long IDs
    return text[:128]

def main():
    jsonl_file = 'knowledge_base/knowledge_base.jsonl'
    dot_file = 'knowledge_base/knowledge_graph.dot'

    nodes = set()
    edges = set()

    if not os.path.exists(jsonl_file):
        print(f"Error: {jsonl_file} not found. Please generate it first.")
        return

    with open(jsonl_file, 'r', encoding='utf-8') as f_in:
        for line in f_in:
            try:
                record = json.loads(line)
            except json.JSONDecodeError:
                print(f"Warning: Skipping invalid JSON line.")
                continue
            
            source_path = record.get('source')
            title = record.get('title')
            
            if not source_path or not title:
                continue

            # --- Create Nodes and Edges from Directory Structure ---
            path_parts = os.path.normpath(source_path).split(os.sep)
            
            # Create nodes for directories and parent-child edges
            if len(path_parts) > 1:
                for i in range(len(path_parts) - 1):
                    parent_path = os.path.join(*path_parts[:i+1])
                    child_path = os.path.join(*path_parts[:i+2])
                    
                    parent_id = sanitize_for_dot(parent_path)
                    parent_label = path_parts[i]
                    nodes.add((parent_id, parent_label, 'box', 'lightblue'))

                    if i < len(path_parts) - 2: # it's a directory
                        child_id = sanitize_for_dot(child_path)
                        child_label = path_parts[i+1]
                        nodes.add((child_id, child_label, 'box', 'lightblue'))
                    else: # it's a file
                        child_id = sanitize_for_dot(child_path)
                        child_label = path_parts[i+1]
                        nodes.add((child_id, child_label, 'ellipse', 'lightgreen'))
                    
                    edges.add((parent_id, child_id))


            # --- Create Nodes and Edges from Content Structure ---
            file_id = sanitize_for_dot(source_path)
            # Use a more unique ID for titles to avoid collisions
            title_id = sanitize_for_dot(source_path + "_" + title)
            
            nodes.add((title_id, title, 'ellipse', 'orange'))
            edges.add((file_id, title_id))

            if record.get('type') == 'markdown':
                for section in record.get('sections', []):
                    heading = section.get('heading')
                    if heading:
                        # Make heading ID unique by prefixing with title ID
                        heading_id = sanitize_for_dot(title_id + "_" + heading)
                        nodes.add((heading_id, heading, 'ellipse', 'yellow'))
                        edges.add((title_id, heading_id))
            
            elif record.get('type') == 'notebook':
                has_markdown = any(cell['cell_type'] == 'markdown' for cell in record.get('cells', []))
                has_code = any(cell['cell_type'] == 'code' for cell in record.get('cells', []))

                if has_markdown:
                    md_id = sanitize_for_dot(title_id + "_markdown_cells")
                    nodes.add((md_id, "Markdown Content", 'ellipse', 'yellow'))
                    edges.add((title_id, md_id))
                if has_code:
                    code_id = sanitize_for_dot(title_id + "_code_cells")
                    nodes.add((code_id, "Code Snippets", 'ellipse', 'yellow'))
                    edges.add((title_id, code_id))

    # --- Write DOT file ---
    with open(dot_file, 'w', encoding='utf-8') as f_out:
        f_out.write('digraph KnowledgeGraph {\n')
        f_out.write('  rankdir=LR;\n')
        f_out.write('  node [style=filled, fontname="Helvetica"];\n')
        f_out.write('  edge [color="#555555"];\n')
        f_out.write('  graph [bgcolor="transparent"];\n\n')

        # Write nodes
        for node_id, label, shape, color in nodes:
            safe_label = label.replace('"', '\\"')
            f_out.write(f'  "{node_id}" [label="{safe_label}", shape={shape}, fillcolor="{color}"];\n')
        
        f_out.write('\n')

        # Write edges
        for parent_id, child_id in edges:
            f_out.write(f'  "{parent_id}" -> "{child_id}";\n')

        f_out.write('}\n')
        
    print(f"Knowledge graph created at {dot_file}")


if __name__ == "__main__":
    main()
