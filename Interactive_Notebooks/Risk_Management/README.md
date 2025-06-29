# Interactive Notebooks: Risk Management

## Overview

This section of the Interactive Notebooks hub is dedicated to providing tools and visualizations for understanding and applying key concepts in financial risk management. Interactive notebooks can help demystify complex risk measures and models.

## Purpose of this Section

The primary goals of this section are to:

*   Illustrate core risk management concepts (e.g., Value at Risk (VaR), scenario analysis, credit risk metrics) through interactive calculations and visualizations.
*   Provide practical tools for exploring different risk measurement techniques.
*   Help users understand the impact of various parameters on risk outcomes.
*   Offer a platform for experimenting with basic risk modeling.

## Contents & Materials

This section currently plans for or includes the following notebook(s):

*   **Interactive Value at Risk (VaR) Calculator:**
    *   **Guide & Overview:** Detailed below. This guide describes the planned `InteractiveVaRCalculatorNotebook.ipynb`.
    *   **Notebook File:** [InteractiveVaRCalculatorNotebook.ipynb](./InteractiveVaRCalculatorNotebook.ipynb) *(Currently a planned notebook - file does not exist yet)*
    *   **Description:** A hands-on tool to understand and calculate VaR using historical simulation and parametric methods.

*(This list will be updated as more notebooks for Risk Management are developed.)*

<!-- Machine-readable indexing comment -->
<!-- Index: Interactive Notebooks Risk Management; Topics: Value at Risk, VaR, Historical Simulation, Parametric VaR, Market Risk, Credit Risk -->

---

## Notebook Guide: Interactive Value at Risk (VaR) Calculator (`InteractiveVaRCalculatorNotebook.ipynb`)

### 1. Introduction to this Notebook

This section details the (planned) `InteractiveVaRCalculatorNotebook.ipynb`, a Jupyter Notebook designed to provide a hands-on, interactive way to understand and calculate Value at Risk (VaR), a key measure of market risk. It will explore different VaR calculation methodologies and allow users to see how various inputs affect VaR outcomes.

**Purpose:** To build an intuitive understanding of VaR, its calculation methods (primarily Historical Simulation and Parametric), and its sensitivity to key parameters.

**Target Audience:** Students of finance, risk management professionals, CFA candidates, or anyone interested in a practical introduction to VaR.

**[➡️ Download/View the full Jupyter Notebook here: InteractiveVaRCalculatorNotebook.ipynb](./InteractiveVaRCalculatorNotebook.ipynb)**
*(This notebook is currently planned. Once created, to experience full interactivity, download the `.ipynb` file and run it in a Jupyter Notebook environment like Jupyter Lab, Google Colab, or VS Code with Python/Jupyter extensions.)*

### 2. Learning Objectives for this Notebook

After working through the `InteractiveVaRCalculatorNotebook.ipynb`, you should be able to:

*   Define Value at Risk (VaR) and explain its significance in risk management.
*   Describe the Historical Simulation method for calculating VaR.
*   Describe the Parametric (Variance-Covariance) method for calculating VaR, including its assumptions.
*   Interactively adjust parameters such as confidence level and time horizon to observe their impact on VaR.
*   Understand how portfolio characteristics (expected return, standard deviation, asset weights, correlations - in extended versions) influence VaR.
*   Visualize return distributions and identify VaR thresholds.

## 3. Notebook Structure and Key Sections

The `InteractiveVaRCalculatorNotebook.ipynb` is organized as follows:

### Section 1: Introduction to Value at Risk (VaR)
*   **Content:**
    *   Markdown cells explaining:
        *   What VaR is (e.g., "VaR is the maximum expected loss over a specific holding period at a given confidence level").
        *   Its common applications in financial risk management.
        *   Key parameters: confidence level (e.g., 95%, 99%), time horizon (e.g., 1-day, 10-day).
        *   A brief overview of the main VaR calculation methods to be covered (Historical, Parametric).
        *   Limitations of VaR.

### Section 2: Setup and Data Generation
*   **Content:**
    *   Python code cells to import necessary libraries:
        ```python
        import pandas as pd
        import numpy as np
        import matplotlib.pyplot as plt
        import seaborn as sns
        from scipy.stats import norm
        from ipywidgets import interact, fixed, FloatSlider, IntSlider, Dropdown
        import yfinance as yf # For optional live data fetching
        ```
    *   Python functions to:
        *   Fetch historical stock price data using `yfinance` for a user-selected ticker (optional, with a fallback to sample data).
        *   Generate sample portfolio return data (e.g., normally distributed daily returns for one or more hypothetical assets). This ensures the notebook can run offline.
        *   Calculate daily returns from price data.

### Section 3: Historical Simulation VaR
*   **Content:**
    *   Markdown cells explaining the Historical Simulation method (using past returns directly to simulate future possibilities).
    *   Python code implementing the method:
        1.  Take a series of historical returns.
        2.  Sort the returns from worst to best.
        3.  Identify the return at the desired percentile (e.g., for 99% VaR, find the 1st percentile worst loss).
    *   **Interactivity (`ipywidgets`):**
        *   `FloatSlider` for selecting the confidence level (e.g., 90.0% to 99.9%).
        *   `IntSlider` for selecting the lookback period (number of historical days).
        *   (Optional) `Dropdown` or `Text` input for a stock ticker if using live data.
    *   **Output:**
        *   Display the calculated VaR amount (e.g., "1-day 99% VaR is -$X.XX").
        *   `matplotlib` histogram of historical returns with the VaR threshold clearly marked.

### Section 4: Parametric (Variance-Covariance) VaR
*   **Content:**
    *   Markdown cells explaining the Parametric method:
        *   Assumption of normal distribution of returns.
        *   Use of mean and standard deviation of returns.
        *   Formula: `VaR = Portfolio_Value * (μ - z * σ) * sqrt(Time_Horizon_in_Days)` (simplified for daily VaR, or more generally `VaR = Portfolio_Value * (μ * T - z * σ * sqrt(T))` where T is time horizon, often μ is assumed 0 for short horizons).
    *   Python code implementing the method:
        1.  Calculate the mean and standard deviation of historical returns.
        2.  Use `scipy.stats.norm.ppf()` to find the z-score for the chosen confidence level.
        3.  Apply the VaR formula.
    *   **Interactivity (`ipywidgets`):**
        *   `FloatSlider` for confidence level.
        *   (Optional) Input fields for manually setting portfolio value, mean daily return, and daily standard deviation if not using historical data.
    *   **Output:**
        *   Display the calculated VaR amount.
        *   `matplotlib` plot of the normal distribution curve based on calculated mean and standard deviation, with the VaR threshold marked.

### Section 5: Comparing Methods and Limitations
*   **Content:**
    *   Markdown cells discussing:
        *   The differences in results from Historical vs. Parametric VaR.
        *   Assumptions and limitations of each method (e.g., normality assumption for Parametric, reliance on past data for Historical).
        *   Brief mention of other methods like Monte Carlo Simulation VaR (as a lead-in to potential future notebooks).

### Section 6: (Optional Extension) Simple Portfolio VaR
*   **Content:**
    *   Markdown explaining how VaR can be calculated for a multi-asset portfolio, introducing the concept of correlation.
    *   **Interactivity (`ipywidgets`):**
        *   Input fields for weights of 2 assets.
        *   Input fields for expected return, standard deviation for each asset, and their correlation coefficient.
    *   Python code to:
        *   Calculate portfolio expected return and portfolio standard deviation.
        *   Calculate Parametric VaR for the two-asset portfolio.
    *   **Output:** Display portfolio VaR.

## 4. How to Use This Notebook Interactively

1.  **Download:** Get `InteractiveVaRCalculatorNotebook.ipynb` from the link above. Ensure any sample data files (if used as fallback) are in the correct relative path.
2.  **Environment:** Open the notebook in a Jupyter environment (JupyterLab, classic Jupyter Notebook, Google Colab, VS Code with Python/Jupyter support).
3.  **Install Libraries:** If you don't have them, install the required libraries (pandas, numpy, matplotlib, seaborn, scipy, ipywidgets, yfinance). A `pip install -r requirements.txt` would be ideal if a `requirements.txt` file is provided with the notebook.
4.  **Run Cells:** Execute cells sequentially from top to bottom.
5.  **Interact:** Use the sliders, dropdowns, and input fields in the interactive sections to change parameters and observe the impact on VaR calculations and visualizations.
6.  **Study the Code:** Review the Python code in each cell to understand the implementation details of each VaR method.

## 5. Data

*   The notebook may use `yfinance` to fetch live daily stock price data for demonstration.
*   A fallback mechanism using randomly generated sample return data or a small CSV file with sample returns (e.g., `sample_returns.csv` in a `data/` subdirectory) will be included to ensure the notebook is runnable offline or if `yfinance` access is unavailable.

## 6. Further Learning

This notebook is an introduction. For deeper understanding, refer to:
*   `Risk_Management/Market_Risk/MRM_01_Introduction_to_Market_Risk.md`
*   (Potentially a future) `Risk_Management/Market_Risk/MRM_02_Value_at_Risk_VaR.md`
*   CFA Program curriculum on market risk management and quantitative methods.
*   The `Global_Financial_Glossary.md` for definitions.

We encourage you to experiment with the notebook and explore how different financial scenarios can be modeled!
---

## How to Use This Section (Student & Teacher Notes - General for Risk Mgt. Notebooks)

**For Students & Learners:**
*   **Focus on Assumptions:** Risk models are heavily dependent on their assumptions (e.g., normality of returns for parametric VaR). Use the notebooks to understand these.
*   **Sensitivity Analysis:** Interactively change parameters (confidence levels, time horizons, input data) to see how risk measures respond.
*   **Limitations:** Be aware of the limitations of each risk measure (e.g., VaR doesn't describe losses beyond the VaR point).

**For Teachers & Instructors:**
*   **Illustrate Abstract Concepts:** Risk measures can be abstract; notebooks provide a concrete way to demonstrate them.
*   **Compare Methodologies:** Use notebooks to compare and contrast different approaches to calculating the same risk measure (e.g., Historical vs. Parametric VaR).
*   **Scenario Building:** Encourage students to think about what scenarios would "break" a model or lead to unexpected risk outcomes.

## Developer Notes & Areas for Impact (for this Risk Management Notebook Section)

*   **Develop `InteractiveVaRCalculatorNotebook.ipynb`:** This is the priority. Ensure it covers Historical and Parametric methods clearly.
*   **Data Handling:** Provide options for using sample/generated data and (optionally, with clear instructions and disclaimers) fetching simple historical market data (e.g., via `yfinance`).
*   **Future Notebook Ideas:**
    *   **Credit Risk:** Basic default probability estimation (e.g., simplified Merton model or logistic regression on sample data).
    *   **Scenario Analysis / Stress Testing:** A notebook allowing users to define stress scenarios for key factors and see portfolio impact (simplified).
    *   **Monte Carlo Simulation for VaR:** An introduction to this more advanced VaR technique.
*   **Clarity on Limitations:** All notebooks dealing with risk measures should clearly state the assumptions and limitations of the methods presented.

## Possible Avenues for Exploration and Further Development

*   **Portfolio Risk Decomposition:** Notebooks that break down portfolio risk into its constituent parts.
*   **Introduction to Credit Value at Risk (CVaR) / Expected Shortfall (ES):** Conceptually, and perhaps with a simple calculation example.
*   **Operational Risk Modeling:** (More advanced) Introduction to concepts like Loss Distribution Approach (LDA), if feasible in a simplified notebook.

This section aims to provide practical, interactive tools for understanding key risk management concepts. Contributions that make complex risk topics more accessible are highly valued.

*This README.md provides a guide for the `InteractiveVaRCalculatorNotebook.ipynb`. The actual notebook would contain the Python code and Markdown explanations as described above.*
