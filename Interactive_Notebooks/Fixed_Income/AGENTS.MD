# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other interactive notebook guides/READMEs.
*   **Clarity:** Fixed income concepts can be complex. Notebooks and their README guides must explain these clearly, along with the Python code.
*   **Markdown Best Practices:** For the `README.md` guide file.
*   **Python Best Practices:** For `.ipynb` files - clear comments, logical flow, use of relevant libraries (`numpy_financial`, `scipy`, `matplotlib`).
*   **Accuracy:** All bond math formulas, calculations, and their Python implementations must be accurate.
*   **File Naming:** `[Concept]Notebook.ipynb` (e.g., `Bond_Math.ipynb`), with the main guide being `README.md`.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new notebooks in this category:
    *   Update `Interactive_Notebooks/Fixed_Income/README.md` (if it becomes a catalog for multiple notebooks).
    *   Update `Interactive_Notebooks/Fixed_Income/index.html` (`filesInDir` JavaScript array).
    *   Ensure the main `Interactive_Notebooks/README.md` and `Interactive_Notebooks/index.html` are updated.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Interactive Fixed Income Notebooks

### Inherits From
This document inherits from `Interactive_Notebooks/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Interactive_Notebooks/Fixed_Income/` directory is for Jupyter Notebooks providing interactive learning for fixed income analysis, including bond pricing, yield calculations, and risk measures.

The main guide for this subdirectory is `Interactive_Notebooks/Fixed_Income/README.md`.
Navigation is supported by `Interactive_Notebooks/Fixed_Income/index.html`.

### 2. Content Structure for Notebook Modules
*   The primary planned notebook is `Bond_Math.ipynb`, guided by the main `README.md` in this folder.
*   Each notebook module (if more are added) should have an `.ipynb` file and be described in the main `README.md` of this directory.
*   Data files, if any, should go into the `data/` subfolder.

### 3. Specific Guidelines for Fixed Income Notebooks
*   **Core Concepts:** Focus on fundamental bond math: pricing based on yield, calculating yields (YTM, current yield), duration (Macaulay, Modified, Dollar), and convexity.
*   **Interactive Calculations:** Use `ipywidgets` to allow users to input bond parameters (par, coupon, maturity, yield) and see results.
*   **Visualizations:** Plot price-yield curves, demonstrate the impact of duration/convexity, or visualize amortization schedules.
*   **Python Libraries:** Utilize `numpy_financial` for TVM functions, `scipy.optimize` for root finding (e.g., YTM), and `matplotlib`/`seaborn` for plots.
*   **Step-by-Step Approach:** Break down complex calculations (like duration or convexity) into understandable steps in both Markdown explanations and code comments.

### 4. Development Notes
*   The `Bond_Math.ipynb` is currently planned and needs to be developed based on the outline in `Interactive_Notebooks/Fixed_Income/README.md`.
*   The `data/` folder currently contains a `.placeholder` file; actual data files would be added if specific notebooks require them (e.g., a portfolio of bonds).

Refer to parent `AGENTS.MD` files for broader Interactive Notebooks and repository guidelines.
