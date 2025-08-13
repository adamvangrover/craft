import os
import json
import re

def parse_markdown_to_structured_json(content, file_path):
    lines = content.split('\n')
    title = ""
    # Find first H1
    for line in lines:
        if line.startswith('# '):
            title = line[2:].strip()
            break
    
    # Fallback to filename if no H1
    if not title:
        title = os.path.basename(file_path)

    sections = []
    current_heading = "Introduction" # Default for content before first heading
    current_heading_level = 0
    current_content = []

    for line in lines:
        match = re.match(r'^(#+)\s+(.*)', line)
        if match:
            if current_content: # Save previous section
                sections.append({
                    "heading": current_heading,
                    "level": current_heading_level,
                    "content": "\n".join(current_content).strip()
                })

            current_heading_level = len(match.group(1))
            current_heading = match.group(2).strip()
            current_content = []
        else:
            current_content.append(line)

    # Add the last section
    if current_content:
        sections.append({
            "heading": current_heading,
            "level": current_heading_level,
            "content": "\n".join(current_content).strip()
        })

    # Filter out empty sections
    sections = [s for s in sections if s['content']]

    return {
        "source": file_path,
        "type": "markdown",
        "title": title,
        "sections": sections
    }

def parse_notebook_to_structured_json(notebook_content_str, file_path):
    try:
        notebook = json.loads(notebook_content_str)
        cells_data = []
        for i, cell in enumerate(notebook.get('cells', [])):
            cell_type = cell.get('cell_type')
            source = "".join(cell.get('source', []))
            
            if not source.strip():
                continue

            cell_info = {
                "cell_index": i,
                "cell_type": cell_type,
                "source": source
            }
            cells_data.append(cell_info)

        return {
            "source": file_path,
            "type": "notebook",
            "title": os.path.basename(file_path),
            "cells": cells_data
        }
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON for {file_path}: {e}")
        return None

def main():
    output_file = 'knowledge_base/knowledge_base.jsonl'
    
    with open(output_file, 'w', encoding='utf-8') as f_out:
        for root, dirs, files in os.walk('.', topdown=True):
            # Exclude directories we don't want to scan
            dirs[:] = [d for d in dirs if d not in ['.git', 'knowledge_base']]
            
            for file in files:
                file_path = os.path.join(root, file)
                
                record = None
                if file.endswith('.md'):
                    try:
                        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f_in:
                            content = f_in.read()
                            if content.strip():
                                record = parse_markdown_to_structured_json(content, file_path)
                    except Exception as e:
                        print(f"Error reading/parsing markdown file {file_path}: {e}")

                elif file.endswith('.ipynb'):
                    try:
                        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f_in:
                            content = f_in.read()
                            if content.strip():
                                record = parse_notebook_to_structured_json(content, file_path)
                    except Exception as e:
                        print(f"Error reading/parsing notebook file {file_path}: {e}")

                if record:
                    f_out.write(json.dumps(record) + '\n')

    print(f"Knowledge base created at {output_file}")

if __name__ == "__main__":
    main()
