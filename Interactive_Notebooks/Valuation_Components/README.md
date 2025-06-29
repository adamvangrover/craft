# Interactive WACC Calculator - Overview and Guide

## 1. Introduction

Welcome to the Interactive WACC (Weighted Average Cost of Capital) Calculator guide! This document provides an overview of the accompanying Jupyter Notebook: `InteractiveWACCCalculatorNotebook.ipynb`.

The notebook offers a hands-on tool to understand and calculate WACC by allowing users to interactively adjust its core components.

**Purpose:** To illustrate the WACC formula, demonstrate the impact of different inputs on the final WACC figure, and explain the significance of each component.

**Target Audience:** Students of finance, analysts learning valuation, or anyone needing a quick, interactive way to calculate or understand WACC.

**[➡️ Download the full Jupyter Notebook here: InteractiveWACCCalculatorNotebook.ipynb](./InteractiveWACCCalculatorNotebook.ipynb)**
*(To experience the full interactivity, please download the `.ipynb` file and run it in a Jupyter Notebook environment.)*

**Disclaimer:** This notebook is for educational and illustrative purposes only. The calculations are based on user inputs and simplified assumptions. It is NOT financial advice.

## 2. Learning Objectives

After working through the `InteractiveWACCCalculatorNotebook.ipynb`, you should be able to:

*   Recall and understand the WACC formula: `WACC = (E/V * Re) + [(D/V * Rd) * (1 - Tc)]`.
*   Identify and define each component of the WACC formula (Cost of Equity, Cost of Debt, market values of equity and debt, tax rate).
*   Interactively manipulate input values and observe the direct impact on the calculated WACC.
*   Understand the concept of capital structure weights (E/V and D/V) and see them visualized.
*   Appreciate why the cost of debt is adjusted for taxes in the WACC calculation.

## 3. Notebook Structure and Key Sections

The `InteractiveWACCCalculatorNotebook.ipynb` is structured as follows:

### Section 1: Setup
*   **Purpose:** Imports necessary Python libraries (`ipywidgets`, `IPython.display`, `matplotlib`, `numpy`).
*   **Code Snippet:**
    ```python
    import ipywidgets as widgets
    from IPython.display import display, Markdown, HTML
    import matplotlib.pyplot as plt
    # ...
    ```

### Section 2: WACC Calculator Inputs
*   **Purpose:** Provides interactive input elements for the user to define the WACC components.
*   **Interactivity:** Uses `ipywidgets` sliders and float text boxes for:
    *   Cost of Equity (Re %)
    *   Cost of Debt (Rd %)
    *   Market Value of Equity (E) ($M)
    *   Market Value of Debt (D) ($M)
    *   Corporate Tax Rate (Tc %)
*   **Visual:** Input widgets are displayed in a `VBox` for clear organization.

### Section 3: Calculate and Display WACC
*   **Purpose:** Contains the Python function that takes the user inputs, calculates the WACC, and displays the results.
*   **Interactivity:** Uses `widgets.interactive_output` to dynamically update the results whenever an input widget changes.
*   **Key Outputs & Visualizations:**
    *   **Textual Output:** Displays the calculated Total Value (V), Weight of Equity (E/V), Weight of Debt (D/V), After-Tax Cost of Debt, and the final WACC percentage.
    *   **Pie Chart:** A `matplotlib` pie chart visualizing the capital structure weights (Equity vs. Debt).
*   **Calculation Logic (Conceptual):**
    1.  `V = E + D`
    2.  `Weight_E = E / V`
    3.  `Weight_D = D / V`
    4.  `WACC = (Weight_E * Re_decimal) + (Weight_D * Rd_decimal * (1 - Tc_decimal))`

### Section 4: Explanation of Components
*   **Purpose:** Provides brief Markdown explanations for each input component (Cost of Equity, Cost of Debt, Market Values, Tax Rate), clarifying their meaning and typical sources.

### Section 5: Interpretation & Use Cases
*   **Purpose:** Briefly discusses how WACC is used (e.g., as a discount rate in DCF, as a hurdle rate for investments).

### Section 6: Further Learning
*   **Purpose:** Directs users to other relevant sections within the broader repository for deeper dives into related topics (e.g., DCF modeling, CFA Cost of Capital materials).

## 4. How to Use This Notebook Interactively

1.  **Download:** Click the link at the top of this guide to download `InteractiveWACCCalculatorNotebook.ipynb`.
2.  **Environment:** Open and run the notebook in a Jupyter Notebook environment (Jupyter Lab, Jupyter Notebook, Google Colab, VS Code with Python/Jupyter extension).
3.  **Run Cells:** Execute the code cells, especially the setup cell and the cell that displays the input widgets.
4.  **Interact:** Adjust the sliders and input values in the "WACC Calculator Inputs" section.
5.  **Observe:** The "Calculated WACC and Capital Structure" section (text and pie chart) will update automatically to reflect your changes.
6.  **Understand:** Read the explanations for each component and the interpretation notes.

## 5. Key Concepts Illustrated

*   The mathematical formula for WACC.
*   The impact of leverage (debt vs. equity weighting) on WACC.
*   The effect of changes in cost of equity, cost of debt, and tax rate on WACC.
*   The concept of an after-tax cost of debt.

This interactive tool aims to make the WACC calculation more tangible and understandable.
