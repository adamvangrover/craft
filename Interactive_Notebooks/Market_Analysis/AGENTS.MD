# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other interactive notebook guides/READMEs.
*   **Clarity:** Market analysis concepts and visualizations should be clearly explained.
*   **Markdown Best Practices:** For the `README.md` guide file.
*   **Python Best Practices:** For `.ipynb` files - clear comments, logical flow, use of relevant libraries (`matplotlib`, `seaborn`, `pandas`, `numpy`, `ipywidgets`).
*   **Accuracy:** Ensure any data visualizations or calculations are correctly implemented and explained.
*   **File Naming:** `[Concept]VisualizerNotebook.ipynb` or similar descriptive names.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new notebooks:
    *   Update `Interactive_Notebooks/Market_Analysis/README.md`.
    *   Update `Interactive_Notebooks/Market_Analysis/index.html` (`filesInDir` JavaScript array).
    *   Ensure the main `Interactive_Notebooks/README.md` and `Interactive_Notebooks/index.html` are updated.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Interactive Market Analysis Notebooks

### Inherits From
This document inherits from `Interactive_Notebooks/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Interactive_Notebooks/Market_Analysis/` directory is for Jupyter Notebooks that provide interactive tools for market analysis, such as visualizing yield curves, credit spreads, or other market indicators.

The main guide for this subdirectory is `Interactive_Notebooks/Market_Analysis/README.md`.
Individual notebooks are `.ipynb` files (e.g., `YieldCurveAndSpreadVisualizerNotebook.ipynb`).
Navigation is supported by `Interactive_Notebooks/Market_Analysis/index.html`.

### 2. Content Structure for Notebook Modules
*   Each notebook module should have an `.ipynb` file.
*   The `README.md` in this directory should describe each notebook, its learning objectives, structure, how to use it, and link to the `.ipynb` file(s).
*   Data files, if any, should go into a `data/` subfolder (though many market analysis notebooks might use generated or user-inputted data).

### 3. Specific Guidelines for Market Analysis Notebooks
*   **Visualization Focus:** These notebooks should heavily leverage plotting libraries (`matplotlib`, `seaborn`, `plotly`) to help users visualize market concepts.
*   **Interactivity:** Use `ipywidgets` to allow users to change parameters (e.g., dates, rates, spread values) and see the visualizations update.
*   **Conceptual Clarity:** Explain the market concepts being visualized (e.g., what an inverted yield curve signifies, how a G-spread is interpreted).
*   **Data:** If using sample data, make it clear it's illustrative. If demonstrating how to fetch live data, include appropriate disclaimers and ensure the notebook can run with sample/static data as a fallback.

### 4. Development Notes
*   `YieldCurveAndSpreadVisualizerNotebook.ipynb` is currently a placeholder and needs to be developed based on the outline in its `README.md`.

Refer to parent `AGENTS.MD` files for broader Interactive Notebooks and repository guidelines.
