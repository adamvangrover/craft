import os
import json
import sys

def verify_kb_artifacts(kb_dir):
    artifacts = [
        "knowledge_base.jsonl",
        "knowledge_graph.json",
        "decision_trees.json",
        "import.cypher",
        "ontology.ttl",
        "knowledge_triples.ttl"
    ]

    success = True

    for artifact in artifacts:
        filepath = os.path.join(kb_dir, artifact)
        if not os.path.exists(filepath):
            print(f"ERROR: Missing expected artifact: {filepath}")
            success = False
            continue

        print(f"Found {artifact}")

        # Verify JSON/JSONL validity
        if artifact.endswith(".json"):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    print(f"  Valid JSON structure. Keys/Length: {len(data)}")
            except json.JSONDecodeError as e:
                print(f"  ERROR: Invalid JSON in {artifact}: {e}")
                success = False
        elif artifact.endswith(".jsonl"):
            try:
                line_count = 0
                with open(filepath, 'r', encoding='utf-8') as f:
                    for line in f:
                        json.loads(line)
                        line_count += 1
                print(f"  Valid JSONL structure. Rows: {line_count}")
            except json.JSONDecodeError as e:
                print(f"  ERROR: Invalid JSONL on line {line_count+1} in {artifact}: {e}")
                success = False

    if success:
        print("\nAll KB artifacts verified successfully!")
        sys.exit(0)
    else:
        print("\nVerification failed.")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python verify_kb_artifacts.py <kb_directory>")
        sys.exit(1)
    verify_kb_artifacts(sys.argv[1])
