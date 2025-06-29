# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other interactive notebook guides/READMEs.
*   **Clarity:** Notebooks and their README guides must clearly explain financial modeling concepts and the Python code used.
*   **Markdown Best Practices:** For the `README.md` guide file.
*   **Python Best Practices:** For `.ipynb` files - clear comments, logical flow, use of relevant libraries (`pandas`, `numpy`, `ipywidgets`, `matplotlib`).
*   **Accuracy:** Financial logic, formulas, and code implementations must be accurate.
*   **File Naming:** `[DescriptiveName]Notebook.ipynb` for notebooks, `README.md` for its main guide, and potentially other `[SpecificConcept]_Guide.md` files.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new notebooks or guides in this directory:
    *   Update `Interactive_Notebooks/Financial_Modeling/README.md` (if it evolves into a catalog for multiple notebooks in this folder).
    *   Update `Interactive_Notebooks/Financial_Modeling/index.html` (`filesInDir` JavaScript array).
    *   Ensure the main `Interactive_Notebooks/README.md` and `Interactive_Notebooks/index.html` are updated to reflect new content here.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Interactive Financial Modeling Notebooks

### Inherits From
This document inherits from `Interactive_Notebooks/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Interactive_Notebooks/Financial_Modeling/` directory houses Jupyter Notebooks that provide hands-on experience with financial modeling concepts, such as valuation, forecasting, and scenario analysis.

The primary guide for notebooks in this directory is their respective `README.md` file (e.g., the main `README.md` in this folder currently serves as the guide for `EquityValuationNotebook.ipynb`).
Navigation is supported by `Interactive_Notebooks/Financial_Modeling/index.html`.

### 2. Content Structure for Notebook Modules
Each primary notebook should have:
*   An `.ipynb` file (e.g., `EquityValuationNotebook.ipynb`).
*   A comprehensive `README.md` file in this directory that acts as its guide, explaining purpose, learning objectives, structure, how to use it, data sources, and linking to the `.ipynb`.
*   Any necessary data files in a `data/` subdirectory.

### 3. Specific Guidelines for Financial Modeling Notebooks
*   **Practical Application:** Focus on demonstrating how modeling concepts are applied.
*   **Interactivity (`ipywidgets`):** Allow users to change key assumptions (e.g., growth rates, discount rates, margins) and see the impact on model outputs (e.g., valuation, projected financials).
*   **Visualization (`matplotlib`, `seaborn`):** Use charts to visualize results, sensitivities, or data.
*   **Clear Code:** Python code should be well-commented and broken into logical cells.
*   **Simplified Models:** For educational purposes, models can be simplified but should still demonstrate core principles and best practices.
*   **Connection to Theory:** Markdown cells should link the practical notebook exercises back to financial theory and modeling best practices described in the `/Financial_Modeling/` text-based section.

### 4. Existing Content Notes
*   `EquityValuationNotebook.ipynb`: Covers DCF, Comps, and Bond Pricing. Its guide is the main `README.md` in this folder.
*   `LBO_Model_Notebook_Guide.md`: A text-based guide for a *planned* LBO notebook. An actual `.ipynb` file for this LBO model needs to be developed.

Refer to parent `AGENTS.MD` files for broader Interactive Notebooks and repository guidelines.
