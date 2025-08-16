import json

def main():
    """Main function to generate the JSONL knowledge base."""
    with open("credit_analysis_knowledge_base/structured_knowledge.json", "r", encoding="utf-8") as f:
        structured_data = json.load(f)

    with open("credit_analysis_knowledge_base/knowledge_base.jsonl", "w", encoding="utf-8") as f:
        for item in structured_data:
            f.write(json.dumps(item) + "\n")

if __name__ == "__main__":
    main()
