# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other interactive notebook guides/READMEs.
*   **Clarity:** Risk management concepts can be complex. Notebooks and their README guides must explain these clearly. Python code for calculations and visualizations needs to be well-commented.
*   **Markdown Best Practices:** For the `README.md` guide file.
*   **Python Best Practices:** For `.ipynb` files - clear comments, logical flow, use of relevant libraries (`numpy`, `scipy.stats`, `pandas`, `ipywidgets`, `matplotlib`).
*   **Accuracy:** All risk management formulas, methodologies (e.g., VaR calculation steps), and their Python implementations must be accurate.
*   **File Naming:** `Interactive[Concept]Notebook.ipynb` (e.g., `InteractiveVaRCalculatorNotebook.ipynb`). The main guide for the directory is `README.md`.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new notebooks in this category:
    *   Update `Interactive_Notebooks/Risk_Management/README.md` to catalog the new notebook and its guide.
    *   Update `Interactive_Notebooks/Risk_Management/index.html` (`filesInDir` JavaScript array).
    *   Ensure the main `Interactive_Notebooks/README.md` and `Interactive_Notebooks/index.html` are updated to reflect new content here.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Interactive Risk Management Notebooks

### Inherits From
This document inherits from `Interactive_Notebooks/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Interactive_Notebooks/Risk_Management/` directory is for Jupyter Notebooks that provide interactive learning experiences for financial risk management concepts, such as Value at Risk (VaR), scenario analysis, and basic credit risk metrics.

The main guide for this subdirectory is `Interactive_Notebooks/Risk_Management/README.md`.
Navigation is supported by `Interactive_Notebooks/Risk_Management/index.html`.

### 2. Content Structure for Notebook Modules
*   The primary planned notebook is `InteractiveVaRCalculatorNotebook.ipynb`, guided by the main `README.md` in this folder.
*   Each notebook module (if more are added) should have an `.ipynb` file and be described in the main `README.md` of this directory.
*   Data files, if any, should go into a `data/` subfolder.

### 3. Specific Guidelines for Risk Management Notebooks
*   **Conceptual Clarity:** Clearly explain the risk concepts (e.g., VaR, confidence levels, time horizons, distributional assumptions).
*   **Methodology Breakdown:** For techniques like VaR, clearly demonstrate different calculation methods (e.g., Historical Simulation, Parametric).
*   **Interactive Parameters:** Use `ipywidgets` to allow users to change key inputs (confidence levels, lookback periods, asset volatility, etc.) and observe the impact on risk measures.
*   **Visualizations:** Plot return distributions, VaR thresholds, or scenario impacts.
*   **Assumptions and Limitations:** Crucially, each notebook must clearly state the assumptions and limitations of the risk measures being demonstrated.
*   **Data:** Provide options for generated sample data to ensure notebooks run offline, and optionally, code to fetch sample market data (e.g., using `yfinance`) with appropriate disclaimers.

### 4. Development Notes
*   The `InteractiveVaRCalculatorNotebook.ipynb` is currently planned and needs development based on the outline in `Interactive_Notebooks/Risk_Management/README.md`.

Refer to parent `AGENTS.MD` files for broader Interactive Notebooks and repository guidelines.
