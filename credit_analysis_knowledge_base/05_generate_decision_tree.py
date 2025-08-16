import json
import re

def parse_checklist_to_tree(markdown_content):
    """Parses a Markdown checklist into a tree structure."""
    lines = markdown_content.split('\n')
    tree = {"name": "Credit Analysis Due Diligence Checklist", "children": []}
    current_nodes = [tree]

    for line in lines:
        stripped_line = line.strip()
        if not stripped_line:
            continue

        # Determine level by counting leading spaces or tabs
        level = (len(line) - len(line.lstrip())) // 4

        # Create the node
        node = {"name": stripped_line.lstrip('- ').strip(), "children": []}

        # Add the node to the correct parent
        if level + 1 < len(current_nodes):
            current_nodes = current_nodes[:level + 1]

        current_nodes[-1]["children"].append(node)
        current_nodes.append(node)

    return tree


def main():
    """Main function to generate decision trees from checklists."""
    with open("credit_analysis_knowledge_base/structured_knowledge.json", "r", encoding="utf-8") as f:
        structured_data = json.load(f)

    decision_trees = []
    for chunk in structured_data:
        if chunk["source_file"] == "Toolkits_and_Checklists/Credit_Analysis_Due_Diligence_Checklist.md":
            if chunk["content_type"] == "checklist" or "checklist" in chunk.get("heading", "").lower():
                tree = parse_checklist_to_tree(chunk["content"])
                decision_trees.append(tree)

    with open("credit_analysis_knowledge_base/decision_trees.json", "w", encoding="utf-8") as f:
        json.dump(decision_trees, f, indent=2)

if __name__ == "__main__":
    main()
