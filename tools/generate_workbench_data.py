import os
import json
import glob
import re

OUTPUT_FILE = "js/workbench_data.js"

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

def get_relative_path(path):
    # Normalize path separators
    return path.replace("\\", "/").replace("./", "")

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

            workbench_data["notebooks"].append({
                "title": file.replace(".ipynb", "").replace("_", " "),
                "path": get_relative_path(path),
                "category": category
            })

# 2. Datasets
for root, dirs, files in os.walk("."):
    for file in files:
        path = os.path.join(root, file)
        # Skip hidden folders or node_modules if any
        if ".git" in path or "node_modules" in path: continue

        if file.endswith(".csv"):
            workbench_data["datasets"].append({
                "title": file,
                "path": get_relative_path(path),
                "type": "CSV"
            })
        elif file.endswith("api_schema.json"):
             workbench_data["datasets"].append({
                "title": file.replace("_", " "),
                "path": get_relative_path(path),
                "type": "JSON Schema"
            })
        elif file == "sample_credit_agreement_clauses.json" or file == "legal_clauses.json":
             workbench_data["datasets"].append({
                "title": "Legal Clauses Database",
                "path": get_relative_path(path),
                "type": "JSON Data"
            })
        elif file == "memo_narratives.json":
             workbench_data["datasets"].append({
                "title": "Sector Memo Narratives",
                "path": get_relative_path(path),
                "type": "JSON Data"
            })

# 3. Prompts
prompt_files = glob.glob("prompt_engine_library/**/*.json", recursive=True) + \
               glob.glob("credit_analysis_knowledge_base/prompts.json")

for p_file in prompt_files:
    try:
        with open(p_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if "prompts" in data:
                for p in data["prompts"]:
                    p["source_file"] = get_relative_path(p_file)
                    workbench_data["prompts"].append(p)
            elif isinstance(data, list):
                 for p in data:
                    p["source_file"] = get_relative_path(p_file)
                    workbench_data["prompts"].append(p)
    except Exception as e:
        print(f"Error reading prompt file {p_file}: {e}")

# 4. Decision Trees
dt_files = glob.glob("kb/decision_trees/*.json")
for dt_file in dt_files:
    try:
        with open(dt_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            workbench_data["decision_trees"].append({
                "title": data.get("title", os.path.basename(dt_file)),
                "tree": data.get("tree", {}),
                "source": data.get("source", "")
            })
    except:
        pass

# 5. Quizzes
q_files = glob.glob("quizzes/*.json")
for q_file in q_files:
     try:
        with open(q_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            workbench_data["quizzes"].append({
                "id": os.path.basename(q_file).replace(".json", ""),
                "title": data.get("title", "Quiz"),
                "path": get_relative_path(q_file)
            })
     except:
         pass

# 6. Learning Paths
lp_files = glob.glob("Learning_Paths/*.md")
for lp_file in lp_files:
    if "README.md" in lp_file: continue
    workbench_data["learning_paths"].append({
        "title": os.path.basename(lp_file).replace(".md", "").replace("_", " "),
        "path": get_relative_path(lp_file),
        "type": "Markdown"
    })

# 7. Primers
primer_files = glob.glob("Primers/*.md") + glob.glob("modules/primers/*.md")
for p_file in primer_files:
    if "README.md" in p_file: continue
    workbench_data["primers"].append({
        "title": os.path.basename(p_file).replace(".md", "").replace("_", " "),
        "path": get_relative_path(p_file),
        "category": "Industry & Product"
    })

# 8. Glossary
glossary_file = "Global_Financial_Glossary.md"
if os.path.exists(glossary_file):
    try:
        with open(glossary_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            for line in lines:
                # Regex to capture * **Term:** Definition
                match = re.match(r"^\*\s*\*\*(.*?):\*\*\s*(.*)", line.strip())
                if match:
                    term = match.group(1)
                    definition = match.group(2)
                    workbench_data["glossary"].append({
                        "term": term,
                        "definition": definition
                    })
    except Exception as e:
        print(f"Error parsing glossary: {e}")

# 9. Checklists
checklist_file = "Toolkits_and_Checklists/checklists_registry.json"
if os.path.exists(checklist_file):
    try:
        with open(checklist_file, 'r', encoding='utf-8') as f:
            workbench_data["checklists"] = json.load(f)
    except Exception as e:
        print(f"Error parsing checklists: {e}")

# 10. Mock Deals
deals_file = "modules/Credit_Analysis/datasets/mock_deals.json"
if os.path.exists(deals_file):
    try:
        with open(deals_file, 'r', encoding='utf-8') as f:
            workbench_data["deals"] = json.load(f)
    except Exception as e:
         print(f"Error parsing mock deals: {e}")

# 11. Scoring Model
scoring_file = "modules/Credit_Analysis/datasets/credit_scoring_model.json"
if os.path.exists(scoring_file):
    try:
        with open(scoring_file, 'r', encoding='utf-8') as f:
            workbench_data["scoring_model"] = json.load(f)
    except Exception as e:
         print(f"Error parsing scoring model: {e}")

# 12. Memo Narratives
narratives_file = "modules/Credit_Analysis/datasets/memo_narratives.json"
if os.path.exists(narratives_file):
    try:
        with open(narratives_file, 'r', encoding='utf-8') as f:
            workbench_data["memo_narratives"] = json.load(f)
    except Exception as e:
        print(f"Error parsing narratives: {e}")

# 13. Legal Clauses
clauses_file = "modules/Loan_and_Capital_Market_Terms/legal_clauses.json"
if os.path.exists(clauses_file):
    try:
        with open(clauses_file, 'r', encoding='utf-8') as f:
            workbench_data["clauses"] = json.load(f)
    except Exception as e:
        print(f"Error parsing clauses: {e}")

# Write to JS
with open(OUTPUT_FILE, "w", encoding='utf-8') as f:
    f.write(f"const workbenchData = {json.dumps(workbench_data, indent=2)};")

print(f"Generated {OUTPUT_FILE}")
