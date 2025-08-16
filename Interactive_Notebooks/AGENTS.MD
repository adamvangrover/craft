# Agent Instructions: Interactive Notebooks

This document provides instructions for AI agents working with the content in the `/Interactive_Notebooks/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   The specific strategy for handling Jupyter Notebooks (using `README.md` guides).
*   General content creation principles and linking conventions.

### 1. Purpose and Scope of this Directory
The `/Interactive_Notebooks/` directory houses Jupyter Notebooks (`.ipynb` files) designed to provide hands-on, interactive learning experiences across various financial topics. These notebooks complement textual content by allowing direct engagement with code, data, and visualizations.

The main catalog for this section is `Interactive_Notebooks/README.md`, and the interactive hub is `Interactive_Notebooks/index.html`.

### 2. Content Structure and Types
This directory is organized into subdirectories based on the notebook's subject area.
*   **Notebook Module:** Each subdirectory (e.g., `Financial_Modeling/`, `Risk_Management/`) represents a "notebook module" and **must** contain:
    1.  One or more `.ipynb` notebook files.
    2.  A comprehensive `README.md` file that acts as the primary guide for the notebook(s). It must explain the purpose, content, learning objectives, and link to the `.ipynb` file(s).
    3.  An `index.html` file that serves as a simple viewer for the module, displaying the `README.md`.
    4.  An optional `data/` folder for any local data files (e.g., CSVs).
*   **Naming Conventions:**
    *   **Subdirectories:** `Topic_Name/` (e.g., `Valuation_Components/`).
    *   **Notebook Files:** `DescriptiveNameNotebook.ipynb` (e.g., `EquityValuationNotebook.ipynb`).

### 3. Specific Guidelines for Interactive Notebooks
*   **`README.md` is Critical:** The `README.md` guide in each module's subdirectory is the most important part of the user experience. It must be comprehensive and clear.
*   **Code Clarity:** Python code within `.ipynb` files must be well-commented. Use Markdown cells extensively for explanations and narrative flow.
*   **Dependencies:** List all necessary Python libraries (e.g., `pandas`, `numpy`, `plotly`) and their versions at the beginning of the notebook and in its `README.md` guide.
*   **Data Handling:** For portability, prefer including small datasets in a `data/` folder. If demonstrating web scraping, also provide a static fallback dataset.
*   **Interactivity:** Where it adds value, use `ipywidgets` to allow users to change inputs and see results dynamically.

### 4. Linking and Discovery Strategy
*   The main `Interactive_Notebooks/index.html` hub and `README.md` catalog must be updated to link to any new notebook modules.
*   Textual content throughout the repository (e.g., in `/Financial_Modeling/`) **should** link to relevant notebook guides here.
*   Notebooks can link out to the `Global_Financial_Glossary.md`.

### 5. Tools
*   **Jupyter Notebooks (`.ipynb`):** The core content format.
*   **`Interactive_Notebooks/index.html`:** The main hub for this section. Its internal JavaScript array must be updated when new notebook modules are added.
*   **`js/nav_data.js`:** Update the global navigation to link to new, significant notebook modules.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **Current Strategy (No `nbconvert`):** The current policy is to create excellent `README.md` guides, not to convert notebooks to static HTML. This is due to agent environment limitations.
*   **Module Structure:** Strictly adhere to the "Notebook Module" structure defined in Section 2.
*   **Dependencies are Key:** Always document the required libraries to ensure reproducibility.

**Roadmap / Planned Additions:**
*   **Content Expansion:** Systematically develop notebooks for all planned categories: `Fixed_Income/`, `CFA_Quant_Methods/`, `Risk_Management/`, `Market_Analysis/`, and `Fintech/`.
*   **Standardization:** Develop a standard template for notebook `README.md` guides and a template `.ipynb` file with recommended starting cells (imports, disclaimers, etc.).
*   **Interactivity:** Encourage more use of `ipywidgets` for creating simple dashboards and `plotly` for dynamic visualizations.
*   **User Experience:** As a future goal, consider adding "Launch in Binder/Colab" buttons to `README.md` guides to lower the barrier to entry for users.
