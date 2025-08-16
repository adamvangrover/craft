# Agent Instructions: Data Science

This document provides instructions for AI agents working with the content in the `/Data_Science/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles.
*   Jupyter Notebook guidelines.
*   Linking conventions.

### 1. Purpose and Scope of this Directory
This `/Data_Science/` directory explores the intersection of data science and finance. It provides resources, primarily through Jupyter Notebooks, for learning how to use data science techniques to analyze financial data, build predictive models, and gain insights into market trends.

The main entry point for this section is `Data_Science/index.html`.

### 2. Content Structure and Types
The content in this section is primarily delivered through Jupyter Notebooks.
*   `Notebooks/`: This directory contains all Jupyter Notebooks (`.ipynb` files) that provide practical examples, tutorials, and case studies on data science applications in finance.

### 3. Specific Guidelines for Data Science Content
*   **Code Quality:** All Python code in notebooks must be well-documented, with clear comments explaining the logic. Adhere to PEP 8 style guidelines.
*   **Reproducibility:** Notebooks are paramount for reproducibility. Ensure that they are self-contained, with all necessary data and dependencies clearly listed. If data cannot be included, provide a script or clear instructions for downloading it.
*   **Practicality:** Focus on practical, real-world applications of data science in finance, such as quantitative analysis, risk modeling, or NLP for news analysis.
*   **Clear Explanations:** Combine code cells with Markdown cells to provide clear, step-by-step explanations of the concepts and the code.

### 4. Linking Strategy
*   Link key data science and financial terms to the `Global_Financial_Glossary.md`.
*   From notebooks, link to related theoretical concepts in other sections, such as `/Financial_Modeling/` or `/Risk_Management/`.
*   The `Data_Science/index.html` hub page should provide links to the key notebooks in this section.

### 5. Tools
*   **Jupyter Notebooks:** The primary tool for content creation in this section. Follow the guidelines in the root `AGENTS.MD` for creating and describing notebooks.
*   **`Data_Science/index.html`:** This hub page must be updated to feature new notebooks.
*   **`js/nav_data.js`:** Add links to new, significant notebooks or guides in the global navigation menu.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **Focus on Notebooks:** The primary value of this section is hands-on learning. Prioritize creating high-quality, interactive, and well-explained Jupyter Notebooks.
*   **Environment and Dependencies:** Always include a `requirements.txt` file or a list of dependencies (e.g., in a Markdown cell at the top of the notebook) to ensure users can set up the correct environment.

**Roadmap / Planned Additions:**
*   **Foundational Skills:** Create notebooks on core topics like data visualization, feature engineering, and model evaluation.
*   **Advanced Topics:** Develop content on more advanced subjects like deep learning, reinforcement learning, and natural language generation (NLG) as applied to finance.
*   **Time Series Analysis:** Add more notebooks specifically focused on time series analysis for stock price prediction and volatility modeling.
*   **Cloud Computing:** Create guides or notebooks on using cloud platforms (e.g., AWS, Azure, GCP) for financial data science tasks.