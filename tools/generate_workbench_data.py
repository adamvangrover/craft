import os
import json
import glob
import re

OUTPUT_FILE = "js/workbench_data.js"

# Load existing workbench_data.js to preserve manual data
existing_data_raw = ""
if os.path.exists(OUTPUT_FILE):
    with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
        existing_data_raw = f.read()

# Try to parse the existing JSON data from the JS file
workbench_data = {
    "notebooks": [],
    "datasets": [],
    "prompts": [],
    "decision_trees": [],
    "quizzes": [],
    "learning_paths": [],
    "primers": [],
    "glossary": [],
    "checklists": {},
    "deals": [],
    "scoring_model": {},
    "memo_narratives": {},
    "clauses": []
}

if existing_data_raw:
    # Extract the JSON part
    match = re.search(r"const workbenchData = (\{.*\});", existing_data_raw, re.DOTALL)
    if match:
        try:
            workbench_data = json.loads(match.group(1))
            print("Successfully loaded existing workbench data to preserve manual additions.")
        except json.JSONDecodeError as e:
            print(f"Error parsing existing workbench data: {e}")

def get_relative_path(path):
    # Normalize path separators
    return path.replace("\\", "/").replace("./", "")

# We only APPEND items that aren't already there.
# Use dicts to keep track of existing items by a unique key to prevent duplicates

existing_notebooks = {n["title"]: n for n in workbench_data.get("notebooks", [])}
# 1. Notebooks
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".ipynb") and ".ipynb_checkpoints" not in root:
            path = os.path.join(root, file)
            # Categorize based on path
            category = "General"
            if "Financial_Modeling" in path: category = "Financial Modeling"
            elif "Accounting" in path: category = "Accounting"
            elif "Legal" in path: category = "Legal Analysis"
            elif "ESG" in path: category = "ESG"
            elif "Risk" in path: category = "Risk Management"
            elif "Data_Science" in path: category = "Data Science"
            elif "fact" in path: category = "FACT Program"
            elif "copilot" in path: category = "AI & Copilot"

            title = file.replace(".ipynb", "").replace("_", " ")
            if title not in existing_notebooks:
                workbench_data["notebooks"].append({
                    "title": title,
                    "path": get_relative_path(path),
                    "category": category
                })

# 2. Datasets
existing_datasets = {d["title"]: d for d in workbench_data.get("datasets", [])}
for root, dirs, files in os.walk("."):
    for file in files:
        path = os.path.join(root, file)
        if ".git" in path or "node_modules" in path: continue

        title = None
        dtype = None
        if file.endswith(".csv"):
            title = file
            dtype = "CSV"
        elif file.endswith("api_schema.json"):
             title = file.replace("_", " ")
             dtype = "JSON Schema"
        elif "clauses" in file and file.endswith(".json"):
             title = "Legal Clauses Database (" + file + ")"
             dtype = "JSON Data"
        elif "narratives" in file and file.endswith(".json"):
             title = "Sector Memo Narratives (" + file + ")"
             dtype = "JSON Data"

        if title and title not in existing_datasets:
            workbench_data["datasets"].append({
                "title": title,
                "path": get_relative_path(path),
                "type": dtype
            })

# 3. Prompts
prompt_files = glob.glob("prompt_engine_library/**/*.json", recursive=True) + \
               glob.glob("credit_analysis_knowledge_base/prompts.json")

existing_prompts_texts = {p.get("prompt_text", p.get("prompt")): True for p in workbench_data.get("prompts", [])}

for p_file in prompt_files:
    try:
        with open(p_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            prompts_to_add = data.get("prompts", data) if isinstance(data, dict) else data

            for p in prompts_to_add:
                p_text = p.get("prompt_text", p.get("prompt"))
                if p_text and p_text not in existing_prompts_texts:
                    p["source_file"] = get_relative_path(p_file)
                    workbench_data["prompts"].append(p)
                    existing_prompts_texts[p_text] = True
    except Exception as e:
        print(f"Error reading prompt file {p_file}: {e}")

# ... Add decision trees, quizzes, learning paths similarly if desired ...
# For now, to be extremely safe, we won't try to automatically pull new ones of those
# unless we explicitly need to, because existing_data already has them.

# 12. Memo Narratives
narratives_file = "modules/Credit_Analysis/datasets/memo_narratives.json"
if os.path.exists(narratives_file):
    try:
        with open(narratives_file, 'r', encoding='utf-8') as f:
            for k, v in json.load(f).items():
                if k not in workbench_data.get("memo_narratives", {}):
                    workbench_data.setdefault("memo_narratives", {})[k] = v
    except Exception as e:
        print(f"Error parsing narratives: {e}")

narratives_expanded_file = "modules/Credit_Analysis/datasets/sector_narratives_expanded.json"
if os.path.exists(narratives_expanded_file):
    try:
        with open(narratives_expanded_file, 'r', encoding='utf-8') as f:
            extra_narratives = json.load(f)
            workbench_data.setdefault("memo_narratives", {}).update(extra_narratives)
            print(f"Merged expanded narratives from {narratives_expanded_file}")
    except Exception as e:
        print(f"Error parsing expanded narratives: {e}")

# 13. Legal Clauses
# Load expanded clauses and merge
clauses_expanded_file = "modules/Loan_and_Capital_Market_Terms/broadly_syndicated_loan_clauses.json"
if os.path.exists(clauses_expanded_file):
    try:
        with open(clauses_expanded_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if "clauses" in data:
                for new_cat in data["clauses"]:
                    existing_cat = next((c for c in workbench_data.setdefault("clauses", []) if c["category"] == new_cat["category"]), None)
                    if existing_cat:
                        existing_titles = {c.get("title") for c in existing_cat["clauses"]}
                        for clause in new_cat["clauses"]:
                            if clause.get("title") not in existing_titles:
                                existing_cat["clauses"].append(clause)
                    else:
                        workbench_data["clauses"].append(new_cat)
                print(f"Merged expanded clauses from {clauses_expanded_file}")
    except Exception as e:
        print(f"Error parsing expanded clauses: {e}")


# Write to JS
with open(OUTPUT_FILE, "w", encoding='utf-8') as f:
    f.write(f"const workbenchData = {json.dumps(workbench_data, indent=2)};")

print(f"Generated {OUTPUT_FILE}")
