# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other interactive notebook guides/READMEs.
*   **Clarity:** Valuation components like WACC involve multiple inputs. Notebooks and guides must clearly explain each component and how they interact.
*   **Markdown Best Practices:** For the `README.md` guide file.
*   **Python Best Practices:** For `.ipynb` files - clear comments, logical flow, use of `ipywidgets` for interactivity.
*   **Accuracy:** Financial formulas (e.g., WACC formula) and their Python implementations must be accurate.
*   **File Naming:** `Interactive[Concept]Notebook.ipynb` (e.g., `InteractiveWACCCalculatorNotebook.ipynb`). The main guide for the notebook is `README.md`.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new notebooks in this category:
    *   Update `Interactive_Notebooks/Valuation_Components/README.md` (if it becomes a catalog).
    *   Update `Interactive_Notebooks/Valuation_Components/index.html` (`filesInDir` JavaScript array).
    *   Ensure the main `Interactive_Notebooks/README.md` and `Interactive_Notebooks/index.html` are updated.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Interactive Valuation Components Notebooks

### Inherits From
This document inherits from `Interactive_Notebooks/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Interactive_Notebooks/Valuation_Components/` directory houses Jupyter Notebooks that allow users to interactively explore key inputs and components used in valuation (e.g., WACC).

The primary guide for notebooks here is their respective `README.md` (e.g., the main `README.md` in this folder guides `InteractiveWACCCalculatorNotebook.ipynb`).
Navigation is supported by `Interactive_Notebooks/Valuation_Components/index.html`.

### 2. Content Structure for Notebook Modules
*   An `.ipynb` file (e.g., `InteractiveWACCCalculatorNotebook.ipynb`).
*   A comprehensive `README.md` file in this directory that acts as its guide.
*   A `data/` subdirectory if any specific data files are needed (currently has `.placeholder`).

### 3. Specific Guidelines for Valuation Component Notebooks
*   **Focus on Key Inputs:** Notebooks should allow users to manipulate individual components of a larger valuation model (like WACC components: Cost of Equity, Cost of Debt, weights, tax rate) to understand their impact.
*   **Interactivity for Sensitivity:** Use `ipywidgets` extensively to show how the overall component (e.g., WACC) changes with adjustments to its inputs.
*   **Clear Formulas:** Display the underlying financial formulas being used in Markdown cells.
*   **Visualization:** Use charts (e.g., pie chart for capital structure weights in the WACC notebook) to help users visualize the components.
*   **Connection to Broader Models:** Explain how the component being analyzed (e.g., WACC) fits into larger valuation frameworks like DCF.

### 4. Existing Content Notes
*   `InteractiveWACCCalculatorNotebook.ipynb` and its guide `README.md` are the primary content.
*   The `data/` folder is currently empty (just a placeholder).

Refer to parent `AGENTS.MD` files for broader Interactive Notebooks and repository guidelines.
