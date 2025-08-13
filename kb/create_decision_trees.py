import os
import json
import re

def sanitize_for_filename(filename):
    """Sanitizes a string to be used as a filename."""
    return re.sub(r'[^a-zA-Z0-9_.-]', '_', filename)

def parse_list_to_tree_stack(content_lines):
    """
    Parses lines of markdown with nested lists into a tree structure using a stack.
    """
    root = {'text': 'Root', 'children': []}
    # Stack stores (indentation, node) tuples
    stack = [(-1, root)]

    for line in content_lines:
        line = line.rstrip()
        # Match list items (-, *, 1., etc.) and their indentation
        match = re.match(r'^(\s*)((?:-|\*|\d+\.)\s+)(.*)', line)
        if not match:
            continue

        indentation = len(match.group(1))
        text = match.group(3).strip()
        
        if not text:
            continue

        node = {'text': text, 'children': []}

        # Pop from stack until we find the correct parent for the current indentation level.
        # The parent is the last item on the stack with less indentation.
        while stack and stack[-1][0] >= indentation:
            stack.pop()
        
        # The top of the stack is now our parent
        if not stack: # Should not happen if root is there, but as a safeguard
            stack = [(-1, root)]
            
        parent_node = stack[-1][1]
        parent_node['children'].append(node)
        
        # Push the new node onto the stack to be a potential parent for subsequent nodes
        stack.append((indentation, node))
        
    return root

def main():
    input_file = 'knowledge_base/knowledge_base.jsonl'
    output_dir = 'knowledge_base/decision_trees'
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found.")
        return

    generated_trees = []

    with open(input_file, 'r', encoding='utf-8') as f_in:
        for line in f_in:
            try:
                record = json.loads(line)
            except json.JSONDecodeError:
                continue

            source = record.get('source', '')
            
            # Filter for files likely to contain decision logic based on path
            if 'checklist' in source.lower() or 'case_study' in source.lower() or 'framework' in source.lower():
                
                if record.get('type') == 'markdown':
                    # Reconstruct the full content from sections
                    full_content = "\n".join(
                        f"{'#' * s['level'] if s['level'] > 0 else ''} {s['heading']}\n{s['content']}" 
                        for s in record.get('sections', [])
                    )
                    
                    # Heuristic: Check if the content actually has list items
                    if '- ' in full_content or '* ' in full_content or re.search(r'\d+\.\s', full_content):
                        tree_root = parse_list_to_tree_stack(full_content.split('\n'))
                        
                        # Only save if the parser found children for the root node
                        if tree_root['children']:
                            tree_data = {
                                'title': record.get('title', 'Untitled'),
                                'source': source,
                                'tree': tree_root
                            }
                            
                            # Create a safe filename for the output
                            base_filename = os.path.basename(source)
                            output_filename = sanitize_for_filename(base_filename) + '.json'
                            
                            output_path = os.path.join(output_dir, output_filename)
                            with open(output_path, 'w', encoding='utf-8') as f_out:
                                json.dump(tree_data, f_out, indent=2)
                            
                            generated_trees.append(output_filename)

    print(f"Generated {len(generated_trees)} decision tree files in {output_dir}")

if __name__ == "__main__":
    main()
