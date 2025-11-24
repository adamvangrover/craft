# Transition Risk Modeling Guide

## Overview

This notebook demonstrates how to quantify **Transition Risk**—specifically the financial impact of carbon pricing—on a corporate issuer's credit profile.

> **Why this matters:** A company might look profitable today, but if a $100/tonne carbon tax is introduced in 2028, its EBITDA could evaporate. This notebook allows you to model that "cliff edge."

## Key Concepts Covered

1.  **Scope 1 & 2 Emissions:** Inputting emissions data for a portfolio company.
2.  **Carbon Pricing Scenarios:** Modeling different carbon price paths (e.g., NGFS Scenarios: Net Zero 2050 vs. Delayed Transition).
3.  **Financial Impact:** Calculating the "Unpriced Carbon Cost" and subtracting it from projected EBITDA.
4.  **Credit Metrics:** Re-calculating Net Leverage and Interest Coverage under stress.

## Notebook Structure

*   **Inputs:** Current Financials (Revenue, EBITDA), Current Emissions (tCO2e), Carbon Price Assumptions.
*   **Step 1:** Project baseline financials.
*   **Step 2:** Calculate carbon tax liability for each year.
*   **Step 3:** Adjust EBITDA (EBITDA_adjusted = EBITDA_reported - Carbon_Liability).
*   **Step 4:** Visualize the leverage profile under different carbon price scenarios.

## Visualization Preview

The notebook generates a chart comparing **Base Case Leverage** vs. **Carbon Stressed Leverage**, highlighting the "Transition Risk Premium."

[Download the Notebook](./Transition_Risk_Modeling.ipynb) to run the simulation yourself.
