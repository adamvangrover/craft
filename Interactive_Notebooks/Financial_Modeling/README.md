# Interactive Equity Valuation Notebook - Overview and Guide

## 1. Introduction

Welcome to the Interactive Equity Valuation Notebook! This guide provides an overview of the accompanying Jupyter Notebook, `EquityValuationNotebook.ipynb`.

The notebook is designed to offer a hands-on, interactive experience with common equity valuation techniques. It allows users to explore:

*   A simplified **Discounted Cash Flow (DCF)** model with adjustable key assumptions.
*   **Trading Comparables Analysis** using a sample dataset of mega-cap companies.
*   Basic **Bond Pricing** concepts.

**Purpose:** To provide an intuitive understanding of how different inputs affect valuation outcomes and how companies are valued relative to peers.

**Target Audience:** Students of finance, aspiring analysts, or anyone interested in a practical introduction to equity valuation.

**[➡️ Download the full Jupyter Notebook here: EquityValuationNotebook.ipynb](./EquityValuationNotebook.ipynb)**
*(To experience the full interactivity, please download the `.ipynb` file and run it in a Jupyter Notebook environment.)*

## 2. Learning Objectives

After working through the `EquityValuationNotebook.ipynb`, you should be able to:

*   Understand the basic structure of a simplified DCF model.
*   Identify key drivers in a DCF model (e.g., WACC, growth rates) and observe their impact on valuation.
*   Interpret common trading multiples (e.g., EV/EBITDA, P/E).
*   Visualize and compare trading multiples for a peer group.
*   Understand the basic inputs and mechanics of bond pricing (price-yield relationship).
*   Appreciate how Python can be used for financial modeling and visualization.

## 3. Notebook Structure and Key Sections

The `EquityValuationNotebook.ipynb` is organized into the following main sections:

### Section 1: Setup and Data Loading
*   **Purpose:** Imports necessary Python libraries (`pandas`, `numpy`, `matplotlib`, `seaborn`, `ipywidgets`) and loads the sample dataset of mega-cap companies from `data/mega_cap_equity_data.csv`.
*   **Key Code Snippet (Data Loading):**
    ```python
    import pandas as pd
    # ... other imports
    companies_df = pd.read_csv('data/mega_cap_equity_data.csv')
    print(companies_df.head())
    ```
*   **Illustrative Web Scraping (Conceptual):** Includes a commented-out section showing how one *might* conceptually approach scraping similar data using `yfinance` or `requests/BeautifulSoup`. This part is for educational illustration and is not executed live in the notebook's primary functions.

### Section 2: Interactive Discounted Cash Flow (DCF) Model
*   **Purpose:** Calculates an implied equity value and share price based on projected Free Cash Flows to Firm (FCFF), a terminal value, and user-adjustable assumptions.
*   **Interactivity:** Uses `ipywidgets` sliders and dropdowns for:
    *   Selecting a company from the dataset (or entering manual EBITDA).
    *   Adjusting: Revenue Growth (%), EBITDA Margin (%), Tax Rate (%), CapEx as % of Revenue, Change in Working Capital as % of Change in Revenue, WACC (%), and Terminal Growth Rate (%).
*   **Key Outputs & Visualizations:**
    *   Printed results showing projected FCFFs, Terminal Value, Enterprise Value, Equity Value, and Implied Share Price.
    *   A bar chart visualizing the projected FCFFs for the selected company over 5 years.
*   **Simplified DCF Logic (Conceptual):**
    1.  Project Revenue based on growth rate.
    2.  Project EBITDA based on revenue and margin.
    3.  Estimate NOPAT (Net Operating Profit After Tax).
    4.  Estimate FCFF = NOPAT + D&A (simplified) - CapEx - Change in Working Capital.
    5.  Calculate Terminal Value using Gordon Growth Model: `TV = FCFF_final * (1 + g_terminal) / (WACC - g_terminal)`.
    6.  Discount projected FCFFs and TV to present using WACC.
    7.  Sum PVs to get Enterprise Value.
    8.  EV - Net Debt = Equity Value.
    9.  Equity Value / Shares Outstanding = Implied Share Price.

### Section 3: Trading Comparables Analysis
*   **Purpose:** Compares the valuation multiples of a selected company (or industry group) against its peers.
*   **Interactivity:**
    *   Dropdown to filter companies by `Industry`.
*   **Key Outputs & Visualizations:**
    *   Calculates EV/EBITDA and a simplified P/E multiple for companies in the dataset.
    *   Generates two bar charts:
        *   EV/EBITDA multiples by company ticker.
        *   Simplified P/E multiples by company ticker.
    *   Prints a table of the selected peer group data with their calculated multiples.
*   **Key Code Snippet (Multiple Calculation - Conceptual):**
    ```python
    # (Inside a function, temp_df is a copy of companies_df)
    temp_df['EV_USD_M'] = temp_df['MarketCapUSD_M'] + temp_df['NetDebtUSD_M']
    temp_df['EV_EBITDA'] = temp_df['EV_USD_M'] / temp_df['EBITDA_USD_M'] # Handle division by zero
    # Simplified P/E for illustration
    temp_df['P_E'] = temp_df['MarketCapUSD_M'] / (temp_df['EBITDA_USD_M'] * 0.5) # Proxy for earnings
    ```

### Section 4: Basic Bond Pricing
*   **Purpose:** Demonstrates how a bond's price is calculated based on its face value, coupon rate, yield to maturity (YTM), and time to maturity.
*   **Interactivity:** Uses `ipywidgets` sliders and input fields for:
    *   Face Value ($)
    *   Coupon Rate (%)
    *   YTM (%)
    *   Years to Maturity
*   **Key Outputs:**
    *   Prints the calculated bond price.
    *   Indicates if the bond is trading at a premium, discount, or par.
*   **Formula (Conceptual):**
    `Bond Price = PV(All Coupon Payments) + PV(Face Value)`
    (Discounted using the periodic YTM).

### Section 5: Conclusion
*   Summarizes the notebook's content and provides links to related detailed readings within the broader repository.

## 4. How to Use This Notebook Interactively

1.  **Download:** Click the link above to download `EquityValuationNotebook.ipynb` and the `data/mega_cap_equity_data.csv` file (ensure it's in a `data` subdirectory relative to the notebook).
2.  **Environment:** Open and run the notebook in a Jupyter Notebook environment (e.g., Jupyter Lab, Jupyter Notebook, Google Colab, VS Code with Python/Jupyter extension).
3.  **Run Cells:** Execute the code cells sequentially.
4.  **Interact:** Adjust the sliders and dropdown menus in the DCF and Bond Pricing sections to see how changes in assumptions affect the outcomes. Select different industries in the Trading Comparables section.
5.  **Explore Code:** Examine the Python code to understand how the calculations and visualizations are performed.

## 5. Data Source

The `mega_cap_equity_data.csv` file contains illustrative, simplified data for a selection of mega-cap companies. This data is intended for demonstration purposes within this notebook and may not be current or perfectly accurate for real-world financial analysis. The notebook also includes conceptual code for web scraping to show how such data *might* be obtained, but this code is not run by default.

## 6. Further Exploration

This notebook provides a starting point. For more in-depth knowledge, please refer to:
*   The `/Financial_Modeling/` section of this repository for best practices and theory.
*   The `/CFA/` section for detailed curriculum content on equity and fixed income valuation.
*   The `Global_Financial_Glossary.md` for definitions of key terms.

We hope this interactive notebook enhances your understanding of equity valuation!
