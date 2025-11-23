# ESG Score Analysis and Financial Performance

## Overview
This interactive notebook explores the relationship between Environmental, Social, and Governance (ESG) scores and key financial performance metrics for a sample of S&P 500 companies.

## Learning Objectives
- **Data Ingestion:** Load ESG data and financial metrics from CSV files.
- **Exploratory Data Analysis (EDA):** Visualize the distribution of ESG scores across different sectors.
- **Correlation Analysis:** Investigate if companies with higher ESG scores exhibit better financial performance (e.g., higher ROE, lower volatility).
- **Visualization:** Create scatter plots and heatmaps to communicate findings.

## Key Sections
1.  **Loading Data:** Importing `esg_data.csv` and `financials.csv`.
2.  **Sector Analysis:** Box plots of ESG scores by GICS Sector.
3.  **Financial Correlation:** Calculating the correlation coefficient between 'Total ESG Score' and 'Return on Equity (ROE)'.
4.  **Risk Analysis:** Analyzing the relationship between 'Governance Score' and 'Beta' (stock volatility).

## How to Use
1.  Download the [ESG_Score_Analysis.ipynb](./ESG_Score_Analysis.ipynb) file.
2.  Ensure you have `pandas`, `matplotlib`, and `seaborn` installed.
3.  Run the cells sequentially to reproduce the analysis.

> **Buy-Side Perspective:** ESG is no longer just a "nice to have." For credit investors, Governance (G) is a proxy for management quality and risk controls. Environmental (E) factors are critical for assessing transition risk in energy and utility sectors. This notebook helps quantify those "soft" factors.
