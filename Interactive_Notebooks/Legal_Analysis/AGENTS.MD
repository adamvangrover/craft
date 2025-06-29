# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other interactive notebook guides/READMEs.
*   **Clarity:** Legal concepts can be dense. Notebooks and their README guides must explain these clearly. Python code for any text analysis or interactive display should be understandable.
*   **Markdown Best Practices:** For the `README.md` guide file.
*   **Python Best Practices:** For `.ipynb` files - clear comments, logical flow.
*   **Accuracy:** Ensure descriptions of legal clauses and their implications are conceptually accurate (while maintaining the educational disclaimer).
*   **File Naming:** `[DescriptiveName]Notebook.ipynb`, `README.md` for its guide.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new notebooks:
    *   Update `Interactive_Notebooks/Legal_Analysis/README.md` (if it becomes a catalog).
    *   Update `Interactive_Notebooks/Legal_Analysis/index.html` (`filesInDir` JavaScript array).
    *   Ensure the main `Interactive_Notebooks/README.md` and `Interactive_Notebooks/index.html` are updated.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Interactive Legal Analysis Notebooks

### Inherits From
This document inherits from `Interactive_Notebooks/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Interactive_Notebooks/Legal_Analysis/` directory houses Jupyter Notebooks for interactive exploration of legal documents relevant to finance, currently focusing on credit agreements.

The primary guide for notebooks here is their respective `README.md` (e.g., the main `README.md` in this folder guides `CreditAgreementAnalysisNotebook.ipynb`).
Navigation is supported by `Interactive_Notebooks/Legal_Analysis/index.html`.

### 2. Content Structure for Notebook Modules
*   An `.ipynb` file (e.g., `CreditAgreementAnalysisNotebook.ipynb`).
*   A comprehensive `README.md` file in this directory that acts as its guide.
*   A `data/` subdirectory for sample data (e.g., `sample_credit_agreement_clauses.json`).

### 3. Specific Guidelines for Legal Analysis Notebooks
*   **Educational Focus:** Emphasize that content is for educational purposes and not legal advice. Include disclaimers.
*   **Illustrative Examples:** Use simplified, generic examples of legal clauses.
*   **Interactive Exploration:** `ipywidgets` can be used to allow users to select different clauses, view definitions, or answer scenario-based questions.
*   **Analyst's Perspective:** Highlight what a credit analyst or financial professional should look for in these documents.
*   **Data Source:** Sample data (like JSON for clauses) should be well-structured and easy to parse in the notebook.

### 4. Existing Content Notes
*   `CreditAgreementAnalysisNotebook.ipynb` and its guide `README.md` use `sample_credit_agreement_clauses.json`.

Refer to parent `AGENTS.MD` files for broader Interactive Notebooks and repository guidelines.
