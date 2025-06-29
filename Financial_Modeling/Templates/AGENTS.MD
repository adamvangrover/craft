# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and style.
*   **Clarity and Detail:** Template descriptions should be detailed enough to serve as a blueprint for model construction.
*   **Markdown Best Practices:** Use Markdown effectively to describe model structures (e.g., using tables or nested lists to represent spreadsheet layouts).
*   **Accuracy:** Ensure described model logic and interconnections are correct and follow best practices.
*   **File Naming:** Use descriptive names (e.g., `3_Statement_Model_Structure.md`).
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new template guides:
    *   Update `Financial_Modeling/Templates/README.md`.
    *   Update `Financial_Modeling/Templates/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `Financial_Modeling/index.html` and `Financial_Modeling/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Financial Modeling Templates

### Inherits From
This document inherits from `Financial_Modeling/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Financial_Modeling/Templates/` directory contains structural guides and descriptions for common financial models. These are primarily text-based blueprints, not actual spreadsheet files (unless otherwise specified by a human contributor).

The main guide is `Financial_Modeling/Templates/README.md`.
Individual template guides are `.md` files.
Navigation is supported by `Financial_Modeling/Templates/index.html`.

### 2. Content Structure for Template Guides
Each document describing a model template should:
*   **Introduce the Model Type:** Explain what the model is used for (e.g., 3-statement model for integrated financial projections, DCF for valuation).
*   **Key Components/Worksheets:** Describe the typical sheets or sections (e.g., Inputs, Historicals, IS, BS, CFS, Debt Schedule, PPE Schedule, Valuation).
*   **Core Logic and Interconnections:** Detail how the different parts of the model link together. This is crucial. For a 3-statement model, explain all key linkages.
*   **Best Practice Notes:** Reinforce relevant modeling best practices within the context of that specific template.
*   **Assumptions Section:** Describe what typical inputs/assumptions would drive this model.

### 3. Specific Guidelines for Content
*   **Focus on Structure:** The primary goal is to explain *how* to structure the model.
*   **Descriptive, Not Prescriptive for Values:** Avoid putting specific numerical assumptions unless they are purely illustrative of a formula. The focus is on the framework.
*   **Clarity for Replication:** Another user should be able to take the `.md` guide and build a functional model shell based on it.

Refer to parent `AGENTS.MD` files for broader Financial Modeling and repository guidelines.
