import os
import json
import glob

OUTPUT_FILE = "js/workbench_data.js"

workbench_data = {
    "notebooks": [],
    "datasets": [],
    "prompts": [],
    "decision_trees": [],
    "quizzes": []
}

def get_relative_path(path):
    return path.replace("./", "")

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
        if file.endswith(".csv"):
            path = os.path.join(root, file)
            workbench_data["datasets"].append({
                "title": file,
                "path": get_relative_path(path),
                "type": "CSV"
            })
        elif file.endswith("api_schema.json"):
             path = os.path.join(root, file)
             workbench_data["datasets"].append({
                "title": file.replace("_", " "),
                "path": get_relative_path(path),
                "type": "JSON Schema"
            })
        elif file == "sample_credit_agreement_clauses.json":
             path = os.path.join(root, file)
             workbench_data["datasets"].append({
                "title": "Sample Covenant Clauses",
                "path": get_relative_path(path),
                "type": "JSON Data"
            })

# 3. Prompts
# Specifically target prompt_engine_library and credit_analysis_knowledge_base
prompt_files = glob.glob("prompt_engine_library/**/*.json", recursive=True) + \
               glob.glob("credit_analysis_knowledge_base/prompts.json")

for p_file in prompt_files:
    try:
        with open(p_file, 'r') as f:
            data = json.load(f)
            # Assume strict structure or list of prompts
            # If it has "prompts" key
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
        with open(dt_file, 'r') as f:
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
        with open(q_file, 'r') as f:
            data = json.load(f)
            workbench_data["quizzes"].append({
                "id": os.path.basename(q_file).replace(".json", ""),
                "title": data.get("title", "Quiz"),
                "path": get_relative_path(q_file)
            })
     except:
         pass

# Write to JS
with open(OUTPUT_FILE, "w") as f:
    f.write(f"const workbenchData = {json.dumps(workbench_data, indent=2)};")

print(f"Generated {OUTPUT_FILE}")
