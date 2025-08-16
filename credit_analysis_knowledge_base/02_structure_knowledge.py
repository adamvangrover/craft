import json
import re
import uuid

def structure_markdown(content, source_file):
    """Structures knowledge from a Markdown file."""
    chunks = []
    # Split by headings (h1, h2, h3)
    sections = re.split(r'(^# .*\n|^## .*\n|^### .*\n)', content, flags=re.MULTILINE)

    # The first element is the content before the first heading
    if sections[0].strip():
        chunks.append({
            "id": str(uuid.uuid4()),
            "source_file": source_file,
            "content_type": "introduction",
            "content": sections[0].strip(),
            "relations": []
        })

    # Process the rest of the sections
    for i in range(1, len(sections), 2):
        heading = sections[i].strip()
        body = sections[i+1].strip()

        content_type = "section"
        if "glossary" in heading.lower() or "terms" in heading.lower():
            content_type = "glossary"
        elif "checklist" in heading.lower():
            content_type = "checklist"

        chunks.append({
            "id": str(uuid.uuid4()),
            "source_file": source_file,
            "content_type": content_type,
            "heading": heading,
            "content": body,
            "relations": []
        })
    return chunks

def structure_json(content, source_file):
    """Structures knowledge from a JSON file."""
    chunks = []
    try:
        data = json.loads(content)
        # For now, just dump the whole JSON as a single chunk
        chunks.append({
            "id": str(uuid.uuid4()),
            "source_file": source_file,
            "content_type": "json_data",
            "content": data,
            "relations": []
        })
    except json.JSONDecodeError:
        # Handle cases where the content is not valid JSON
        chunks.append({
            "id": str(uuid.uuid4()),
            "source_file": source_file,
            "content_type": "unstructured_text",
            "content": content,
            "relations": []
        })
    return chunks

def main():
    """Main function to structure the extracted knowledge."""
    with open("credit_analysis_knowledge_base/extracted_content.json", "r", encoding="utf-8") as f:
        extracted_data = json.load(f)

    structured_knowledge = []
    for item in extracted_data:
        source_file = item["source_file"]
        content = item["content"]

        if source_file.endswith(".md"):
            structured_knowledge.extend(structure_markdown(content, source_file))
        elif source_file.endswith(".json"):
            structured_knowledge.extend(structure_json(content, source_file))
        else:
            # For other file types, just add them as unstructured text for now
            structured_knowledge.append({
                "id": str(uuid.uuid4()),
                "source_file": source_file,
                "content_type": "unstructured_text",
                "content": content,
                "relations": []
            })

    with open("credit_analysis_knowledge_base/structured_knowledge.json", "w", encoding="utf-8") as f:
        json.dump(structured_knowledge, f, indent=2)

if __name__ == "__main__":
    main()
