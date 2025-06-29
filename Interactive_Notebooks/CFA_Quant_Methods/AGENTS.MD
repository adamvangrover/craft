# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, and the style of other interactive notebook guides.
*   **Clarity:** Notebooks and their README guides must be exceptionally clear, especially when explaining quantitative concepts and Python code.
*   **Markdown Best Practices:** For the `README.md` guide.
*   **Python Best Practices:** For `.ipynb` files - clear comments, logical flow, efficient code where appropriate (though clarity trumps minor efficiency gains for educational notebooks).
*   **Accuracy:** All financial formulas, quantitative methods, and their implementation in Python must be accurate and align with CFA curriculum principles.
*   **File Naming:** `Interactive[Concept]Notebook.ipynb` for notebooks, `README.md` for its guide.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new notebooks in this category:
    *   Create a comprehensive `README.md` guide for it within this directory.
    *   Update `Interactive_Notebooks/CFA_Quant_Methods/index.html` (the `filesInDir` JavaScript array).
    *   Update `Interactive_Notebooks/README.md` (the main catalog for all notebooks).
    *   Update `Interactive_Notebooks/index.html` (the main hub's `subDirectoryModules` array if this is the first notebook in this category, though it's already listed).
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Interactive Notebooks for CFA Quantitative Methods

### Inherits From
This document inherits from `Interactive_Notebooks/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Interactive_Notebooks/CFA_Quant_Methods/` directory is for Jupyter Notebooks that provide interactive learning experiences for Quantitative Methods topics from the CFA Program curriculum.

The main guide for this subdirectory is `Interactive_Notebooks/CFA_Quant_Methods/README.md`, which should also serve as an index for notebooks within.
Navigation is supported by `Interactive_Notebooks/CFA_Quant_Methods/index.html`.

### 2. Content Structure for Notebook Modules
Each notebook module should consist of:
*   An `.ipynb` file (e.g., `InteractiveTVMSolverNotebook.ipynb`).
*   The `README.md` in this directory should describe each notebook, its learning objectives, structure, how to use it, and link to the `.ipynb` file. (Currently, the README focuses on one planned TVM notebook).
*   Data files in a `data/` subfolder if needed, loaded with relative paths.

### 3. Specific Guidelines for CFA Quant Methods Notebooks
*   **Curriculum Alignment:** Notebooks should clearly relate to specific Learning Outcome Statements (LOS) from the CFA Quantitative Methods curriculum (primarily Level 1, but could extend to L2 applications).
*   **Interactive Elements (`ipywidgets`):** Make use of sliders, dropdowns, text boxes, etc., to allow users to change inputs and see immediate results for calculations (e.g., TVM variables, statistical distributions, regression parameters).
*   **Visualizations (`matplotlib`, `seaborn`):** Use plots to help visualize concepts like probability distributions, investment growth curves, regression lines, etc.
*   **Code Clarity:** Python code should be clear, well-commented, and demonstrate the application of `numpy_financial`, `scipy.stats`, `statsmodels`, or other relevant libraries.
*   **Step-by-Step Explanations:** Markdown cells within the notebook should walk users through the concepts and the code.

### 4. Key Areas for Notebook Development (from README)
*   Time Value of Money (TVM) solver (as described in the current `README.md`).
*   Probability distributions (e.g., normal, binomial) with interactive parameter changes.
*   Hypothesis testing examples.
*   Simple and multiple regression analysis with sample data.
*   Time series analysis basics.

Refer to parent `AGENTS.MD` files for broader Interactive Notebooks and repository guidelines.
