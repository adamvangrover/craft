# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style. Refer to the main `README.md` and other `AGENTS.MD` files for examples.
*   **Clarity and Conciseness:** Notebook explanations (in Markdown cells within `.ipynb` and in accompanying `README.md` files) should be clear. Code should be well-commented.
*   **Markdown Best Practices:** Follow standard Markdown syntax in `README.md` files and Markdown cells in notebooks.
*   **Accuracy:** Ensure financial logic, formulas, code, and explanations are correct.
*   **File Naming:** Follow conventions outlined in the "Directory-Specific Instructions."
*   **Links:**
    *   Use relative links for internal navigation (e.g., from a notebook's `README.md` to the `.ipynb` file).
    *   Verify that all links are functional.
*   **Updating Navigation:** When adding new notebooks or notebook categories:
    *   Update `Interactive_Notebooks/README.md` (the main catalog).
    *   Update `Interactive_Notebooks/index.html` (the main interactive navigator for this section).
    *   Ensure the new notebook's subdirectory has its own `README.md` (guide) and `index.html` (simple viewer).
*   **Code (Python in `.ipynb` files):**
    *   Comment code adequately, explaining complex logic.
    *   Prioritize clarity and readability of code.
    *   Ensure notebooks run without errors from top to bottom if possible, or clearly state dependencies/setup needed.
    *   Use common libraries as specified in directory instructions.
*   **Review:** Before submitting changes, review your work for adherence to these guidelines and the specific task requirements.

## Directory-Specific Instructions: Interactive Notebooks

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/Interactive_Notebooks/` directory houses Jupyter Notebooks (`.ipynb` files) designed to provide hands-on, interactive learning experiences across various financial topics. These notebooks complement textual content by allowing direct engagement with code, data, and visualizations.

The main human-readable catalog for this section is `Interactive_Notebooks/README.md`.
The main interactive HTML view for this section is `Interactive_Notebooks/index.html`.

### 2. Hierarchy and Development Notes
*   **Structure:** This directory is organized into subdirectories based on the primary subject area of the notebook, mirroring the main repository structure where applicable (e.g., `Financial_Modeling/`, `Risk_Management/`).
*   **Each Notebook Module:** A "notebook module" typically consists of:
    *   A subdirectory (e.g., `Interactive_Notebooks/Financial_Modeling/`).
    *   One or more `.ipynb` notebook files within that subdirectory.
    *   A comprehensive `README.md` file within that subdirectory, acting as the primary guide/viewer for the notebook(s) it contains. This README should explain the notebook's purpose, content, how to use it, learning objectives, and provide a link to download/view the `.ipynb` file.
    *   An `index.html` file (simple viewer) within that subdirectory, which displays the `README.md` and lists the `.ipynb` files.
    *   Optionally, a `data/` subfolder within the notebook's subdirectory if it uses local data files (e.g., CSVs).
*   **Development Strategy (No Direct HTML Embedding of Notebooks):**
    *   Due to potential complexities with `jupyter nbconvert` in some agent environments, the current strategy is **NOT** to generate static HTML versions of `.ipynb` files for direct embedding.
    *   Instead, the focus is on creating excellent `README.md` guides for each notebook/set of notebooks. These `README.md` files will describe the notebook's content, potentially include key code snippets or output descriptions, and link to the actual `.ipynb` file for users to download and run in their own Jupyter environment.

### 3. Specific Content Guidelines for Interactive Notebooks
*   **Clarity and User-Friendliness:** Notebooks should be easy to follow, even for users with limited Python experience. The accompanying `README.md` guide is crucial for this.
*   **Code Comments:** Python code within `.ipynb` files must be well-commented.
*   **Markdown Cells in Notebooks:** Use Markdown cells within `.ipynb` files for explanations, instructions, and narrative flow.
*   **Data Handling:**
    *   For portability, small datasets should be included directly within the notebook's subdirectory (e.g., in a `data/` folder) and loaded using relative paths.
    *   If demonstrating web scraping, provide the code but ensure the notebook can fall back to a static dataset if live access fails or for offline use.
*   **Libraries:**
    *   Primarily use common Python libraries: `pandas`, `numpy`, `matplotlib`, `seaborn`, `plotly`, `ipywidgets`.
    *   List all necessary libraries and their versions (if critical) at the beginning of the notebook and in its `README.md` guide.
*   **Learning Objectives:** Each notebook (and its `README.md` guide) must clearly state its learning objectives.
*   **Interactivity (`ipywidgets`):** Where appropriate, use `ipywidgets` to allow users to change inputs and see results dynamically. Keep widget use straightforward.

### 4. Linking and Discovery Strategy
*   The main `Interactive_Notebooks/README.md` serves as a master catalog, listing all available notebook modules and linking to their respective `README.md` guides (e.g., to `Interactive_Notebooks/Financial_Modeling/README.md`).
*   The main `Interactive_Notebooks/index.html` provides an interactive way to navigate to these notebook module subdirectories (loading their `index.html` or `README.md`).
*   Relevant textual content throughout the repository (e.g., in `/Financial_Modeling/`, `/Risk_Management/`) **SHOULD** link to these notebook-specific `README.md` guides.
*   Notebooks themselves can link out to the `Global_Financial_Glossary.md` or other relevant `.md` files in the repository.

### 5. Naming Conventions
*   **Notebook Subdirectories:** `Topic_Name/` (e.g., `Financial_Modeling/`, `Valuation_Components/`).
*   **Notebook Files:** `DescriptiveNameNotebook.ipynb` (e.g., `EquityValuationNotebook.ipynb`).
*   **Guide Files (within notebook subdirectories):** `README.md`.
*   **Simple Viewer (within notebook subdirectories):** `index.html`.

### 6. Roadmap / Planned Additions (from README)
*   Existing notebooks cover Financial Modeling, Legal Analysis, and Valuation Components.
*   Future notebooks planned for Fixed Income, Quantitative Methods, Risk Management, Market Analysis, etc.

Refer to the root `AGENTS.MD` for general guidelines on content creation and linking.
The main `Interactive_Notebooks/README.md` and `Interactive_Notebooks/index.html` must be updated when new notebook modules are added or significantly changed.
