# Interactive Notebooks for Financial Learning

Welcome to the Interactive Notebooks section! This area of the repository houses Jupyter Notebooks (`.ipynb` files) designed to provide hands-on, engaging learning experiences across various financial topics.

These notebooks are intended to complement the textual content found elsewhere by allowing you to:
*   Interact with Python code directly.
*   Visualize data and concepts.
*   Experiment with financial models and calculations.
*   Understand how programming can be applied to financial analysis.

## How to Use These Notebooks

1.  **Browse the Available Notebooks:** See the list below for currently available interactive guides.
2.  **Read the Overview:** Each notebook has an accompanying `README.md` file (like this one) in its respective subdirectory. This `README.md` provides:
    *   An overview of the notebook's content and learning objectives.
    *   A description of its structure and key sections.
    *   Illustrative code snippets and explanations of expected outputs/visualizations.
    *   A direct link to download the `.ipynb` file.
3.  **Download the `.ipynb` File:** To experience full interactivity, you **must** download the `.ipynb` file and any associated data files (usually in a `data/` subdirectory).
4.  **Run in a Jupyter Environment:** Open and run the downloaded `.ipynb` file in a suitable Jupyter environment, such as:
    *   Jupyter Notebook
    *   JupyterLab
    *   Google Colab
    *   VS Code with the Python and Jupyter extensions.
5.  **Execute Cells & Interact:** Run the code cells sequentially and engage with any interactive widgets (sliders, dropdowns) to explore the concepts.

**Note on Environment & Dependencies:**
The notebooks primarily use common Python libraries like `pandas`, `numpy`, `matplotlib`, `seaborn`, and `ipywidgets`. If you are running them locally, you may need to install these libraries (e.g., via `pip install pandas matplotlib seaborn ipywidgets jupyter`). Each notebook's introductory cells will typically list required imports.

## Available Interactive Notebook Guides:

*   **Financial Modeling & Valuation:**
    *   **Guide & Overview:** [./Financial_Modeling/README.md](./Financial_Modeling/README.md)
    *   **Notebook File:** [EquityValuationNotebook.ipynb](./Financial_Modeling/EquityValuationNotebook.ipynb)
    *   *Description:* Explore DCF valuation, trading comparables, and basic bond pricing with interactive inputs using a sample dataset of mega-cap companies.

*   **Valuation Components:**
    *   **Guide & Overview:** [./Valuation_Components/README.md](./Valuation_Components/README.md)
    *   **Notebook File:** [InteractiveWACCCalculatorNotebook.ipynb](./Valuation_Components/InteractiveWACCCalculatorNotebook.ipynb)
    *   *Description:* Interactively calculate WACC by adjusting its core components (Cost of Equity, Cost of Debt, market values, tax rate) and visualize capital structure weights.

*   **Legal Document Analysis (Credit Agreements):**
    *   **Guide & Overview:** [./Legal_Analysis/README.md](./Legal_Analysis/README.md)
    *   **Notebook File:** [CreditAgreementAnalysisNotebook.ipynb](./Legal_Analysis/CreditAgreementAnalysisNotebook.ipynb)
    *   *Description:* An interactive guide to understanding key sections and clauses in credit agreements, using illustrative examples. Includes an interactive definitions explorer and scenario Q&A.

*(More interactive notebooks will be added here as they are developed.)*

## Contributing New Notebooks

If you are developing new interactive notebooks for this repository, please:
1.  Refer to the guidelines in `Interactive_Notebooks/AGENTS.MD`.
2.  Create a new subdirectory within `Interactive_Notebooks/` relevant to your notebook's topic (e.g., `Quantitative_Methods/`, `Risk_Management/`).
3.  Place your `.ipynb` file and any associated data files (in a `data/` subfolder) there.
4.  Create a comprehensive `README.md` file within your new subdirectory, similar in structure to the ones above, explaining your notebook and linking to the `.ipynb` file.
5.  Add a link to your new notebook's `README.md` in this main `Interactive_Notebooks/README.md` file, under a relevant category.

We encourage the development of more interactive learning tools to make complex financial topics more accessible and engaging!
