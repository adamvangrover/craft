# AGENTS.MD - Interactive Notebooks Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
The `/Interactive_Notebooks/` directory will house Jupyter Notebooks (`.ipynb` files) designed to provide hands-on, interactive learning experiences across various financial topics. These notebooks are intended to complement the textual content found elsewhere in the repository by allowing users to engage with code, data, and visualizations directly.

This directory itself will have a `README.md` that acts as a catalog or index for the available notebooks.

## 2. Content Structure and Types
This directory should be organized into subdirectories based on the primary subject area the notebook addresses, mirroring the main repository structure where applicable:
*   `Financial_Modeling/`: For interactive models (DCF, LBO, comparables etc.).
*   `Legal_Analysis/`: For deconstructing legal documents or clauses.
*   `Quantitative_Methods/`: For statistical concepts, CFA quant methods, etc.
*   `Risk_Management/`: For risk model simulations, VaR calculations, etc.
*   `Market_Analysis/`: For visualizing market data, trading strategy backtesting (simple).
*   `Data_Analysis_ 금융/` (Data_Analysis_Finance): Placeholder if generic data analysis notebooks are created.

Each notebook (`.ipynb` file) should:
*   Be self-contained as much as possible.
*   Include Markdown cells for clear explanations, instructions, and narrative.
*   Use Python code cells for calculations, visualizations, and interactive elements (using `ipywidgets`).
*   **Have a corresponding detailed `README.md` file in the same subdirectory.** This README acts as the primary "viewer" or guide for the notebook, explaining its content, structure, and linking to the `.ipynb` file.
*   The `.ipynb` file itself should be easily downloadable.

## 3. Specific Guidelines for Interactive Notebooks
*   **Clarity and User-Friendliness:** Notebooks should be easy to follow, even for users with limited Python experience. Provide clear instructions on how to interact with any widgets or change inputs within the `.ipynb` file. The accompanying `README.md` should also explain this.
*   **Code Comments:** Python code within the `.ipynb` should be well-commented.
*   **Data:**
    *   For portability, small datasets should be included directly within the notebook's subdirectory (e.g., in a `data/` folder) and loaded using relative paths from the `.ipynb` file.
    *   If demonstrating web scraping, provide the scraping code for educational purposes but ensure the notebook primarily relies on a fallback static dataset so it runs without live web access when downloaded.
*   **Libraries:**
    *   Stick to commonly used Python libraries: `pandas`, `numpy`, `matplotlib`, `seaborn`, `plotly` for plotting, `ipywidgets` for basic interactivity.
    *   List necessary libraries at the beginning of the notebook and in its `README.md`.
*   **No Direct HTML Embedding of Notebooks (Current Strategy):**
    *   Due to environmental constraints with `jupyter nbconvert` (difficulty running it via agent tools), we are **NOT** currently generating static HTML versions of notebooks for direct embedding in other HTML pages.
    *   Instead, each notebook subdirectory (e.g., `Interactive_Notebooks/Financial_Modeling/`) will contain the `.ipynb` file and a comprehensive `README.md` file that describes the notebook in detail (including code snippets, descriptions of outputs/visuals, and how to use it).
*   **Learning Objectives:** Each notebook (and its `README.md`) should clearly state its learning objectives.

## 4. Linking and Discovery
*   The main `Interactive_Notebooks/README.md` serves as a master index, listing all available notebooks. It links to the specific `README.md` file for each notebook (e.g., `Interactive_Notebooks/Financial_Modeling/README.md`).
*   Relevant textual content throughout the repository (e.g., in `/Financial_Modeling/`, `/Risk_Management/`) **SHOULD** link to these notebook-specific `README.md` files, which in turn link to the `.ipynb` for download. These are the "lightweight connectors."
*   Notebooks themselves can link out to the `Global_Financial_Glossary.md` or other relevant `.md` files.

## 5. Naming Conventions
*   Notebook subdirectories: `Topic_Name/` (e.g., `Financial_Modeling/`, `Valuation_Components/`).
*   Notebook files: `DescriptiveNameNotebook.ipynb` (e.g., `EquityValuationNotebook.ipynb`).
*   Guide files: `README.md` within the same subdirectory as the notebook.

## 6. Roadmap / Planned Additions
*   Pilot notebooks created for:
    *   `Financial_Modeling/EquityValuationNotebook.ipynb` (with its `README.md`)
    *   `Legal_Analysis/CreditAgreementAnalysisNotebook.ipynb` (with its `README.md`)
    *   `Valuation_Components/InteractiveWACCCalculatorNotebook.ipynb` (with its `README.md`)
*   Future notebooks for:
    *   Bond math and fixed income analytics.
    *   Basic option pricing models.
    *   Monte Carlo simulation for risk.
    *   Visualizing economic data.

Refer to the root `AGENTS.MD` for general guidelines on content creation and linking.
The main `Interactive_Notebooks/README.md` should always be updated when a new notebook (and its guide `README.md`) is added.
