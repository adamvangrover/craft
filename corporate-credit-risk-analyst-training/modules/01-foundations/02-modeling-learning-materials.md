# Learning Materials & Further Resources: Module 2 - Financial Analysis & Modeling

## Key Terms Glossary (Module 2)

*   **3-Statement Model:** An integrated financial model that projects a company's Income Statement, Balance Sheet, and Cash Flow Statement, ensuring they are dynamically linked and consistent.
*   **Financial Modeling:** The process of creating a spreadsheet-based representation of a company's financial performance, past and future. Used for forecasting, valuation, and decision-making.
*   **Inputs/Assumptions:** Variables or data points that are manually entered into a model (e.g., revenue growth rate, margin percentages, interest rates). Often color-coded blue.
*   **Formulas/Outputs:** Calculations within the model that are derived from inputs or other formulas. Often color-coded black.
*   **Supporting Schedules:** Separate worksheets or sections within a model that detail the calculation of complex items like debt, fixed assets, working capital, etc.
*   **Periodicity:** The time frame of the model's columns (e.g., quarterly, annually).
*   **Historical Data:** Actual financial results from past periods, used as a basis for projections.
*   **Forecast/Projection Period:** Future periods for which financial performance is estimated in the model.
*   **Circular Reference ("Circ"):** Occurs in Excel when a formula refers back to its own cell, either directly or indirectly. Common in 3-statement models due to the interdependency of interest expense and debt balances.
*   **Balancing the Model:** Ensuring that the Balance Sheet always balances (Assets = Liabilities + Equity) for all projected periods, typically by using cash or a revolver as a "plug."
*   **Leverage Ratios:** Measure the extent to which a company uses debt to finance its assets (e.g., Debt/EBITDA, Debt/Equity).
*   **Coverage Ratios:** Measure a company's ability to meet its debt-related obligations (e.g., Interest Coverage Ratio/TIE, FCCR, DSCR).
*   **Liquidity Ratios:** Measure a company's ability to meet its short-term obligations (e.g., Current Ratio, Quick Ratio).
*   **Profitability Ratios:** Measure a company's ability to generate profits from its sales and assets (e.g., Gross Margin, Operating Margin, Net Margin, ROA, ROE).
*   **Days Sales Outstanding (DSO):** A measure of the average number of days it takes a company to collect payment after a sale has been made. `DSO = (Accounts Receivable / Revenue) * Days in Period`.
*   **Days Inventory Held (DIH):** A measure of the average number of days a company holds its inventory before selling it. `DIH = (Inventory / COGS) * Days in Period`.
*   **Days Payable Outstanding (DPO):** A measure of the average number of days it takes a company to pay its suppliers. `DPO = (Accounts Payable / COGS) * Days in Period`.
*   **Cash Conversion Cycle (CCC):** `DSO + DIH - DPO`. Measures the length of time it takes for a company to convert its investments in inventory and other resources into cash flows from sales.
*   **Sensitivity Analysis:** A technique used to determine how different values of an independent variable (an assumption) will impact a particular dependent variable (an output) under a given set of assumptions. Typically changes one variable at a time.
*   **Scenario Analysis:** A process of analyzing possible future events by considering alternative possible outcomes (scenarios), often involving changes to multiple assumptions simultaneously (e.g., base case, upside case, downside case).
*   **Stress Testing:** A specialized form of scenario analysis that examines the impact of severe but plausible adverse scenarios on a company's financial health and solvency.
*   **Revolving Credit Facility (Revolver):** A line of credit that allows a borrower to draw down, repay, and re-draw funds up to a certain limit. Often used as a plug in models to cover cash shortfalls.
*   **Cash Sweep:** A loan agreement feature requiring a borrower to use a portion of its excess cash flow to pay down outstanding debt principal ahead of schedule.

## Recommended Reading & External Resources

*   **Wall Street Prep - Financial Modeling:** [https://www.wallstreetprep.com/knowledge/category/financial-modeling/](https://www.wallstreetprep.com/knowledge/category/financial-modeling/)
    *   Offers numerous articles and tutorials on various aspects of 3-statement modeling, LBO modeling, etc.
*   **Macabacus - Financial Modeling:** [https://macabacus.com/learn/financial-modeling](https://macabacus.com/learn/financial-modeling)
    *   Provides templates, tutorials, and best practices for financial modeling in Excel.
*   **Corporate Finance Institute (CFI) - Financial Modeling Resources:** [https://corporatefinanceinstitute.com/resources/financial-modeling/](https://corporatefinanceinstitute.com/resources/financial-modeling/)
    *   Articles, free courses, and templates related to financial modeling and analysis.
*   **Breaking Into Wall Street (BIWS) / Mergers & Inquisitions:** [https://mergersandinquisitions.com/financial-modeling/](https://mergersandinquisitions.com/financial-modeling/)
    *   Extensive articles and paid courses on detailed financial modeling.
*   **Textbooks:**
    *   "Financial Modeling and Valuation: A Practical Guide to Investment Banking and Private Equity" by Paul Pignataro.
    *   "Investment Banking: Valuation, LBOs, M&A, and IPOs" by Joshua Rosenbaum and Joshua Pearl (contains sections on modeling).
*   **Excel Resources:**
    *   Microsoft Excel's own help files and online tutorials are invaluable for learning specific functions and features.
    *   Numerous websites (e.g., ExcelJet, Chandoo.org) offer tips and tutorials for advanced Excel usage in modeling.

## Downloadable Templates (Conceptual)

Effective financial modeling relies heavily on well-structured Excel templates. While building from scratch is a key learning experience, understanding common template structures is beneficial.

*   **3-Statement Model Shell:**
    *   **Input Sheet:** Assumptions for revenue growth, margins, working capital days, CapEx, interest rates, tax rates, etc.
    *   **Historical Sheets:** Standardized IS, BS, CFS for inputting 3-5 years of historical data.
    *   **Projection Sheets (IS, BS, CFS):** Linked IS, BS, CFS for 3-5 years of projections.
    *   **Supporting Schedules:**
        *   *Working Capital Schedule:* Calculates A/R, Inventory, A/P based on DSO, DIH, DPO and links to BS.
        *   *PP&E Schedule:* Rolls forward PP&E (Beg PP&E + CapEx - Depr = End PP&E) and links to BS & CFS.
        *   *Debt Schedule:* Models different tranches of debt, interest expense, scheduled/optional repayments, and links to IS, BS, CFS. Includes revolver "plug" logic.
        *   *Equity Schedule:* Rolls forward retained earnings and other equity accounts.
    *   **Ratios Sheet:** Calculates key leverage, coverage, liquidity, and profitability ratios.
    *   **Balance Check:** Prominent check (Assets - Liabilities - Equity = 0).
*   **Sensitivity Analysis Template:**
    *   Data tables in Excel to show how key outputs (e.g., EPS, DSCR, Net Income) change based on variations in 1 or 2 key input assumptions (e.g., revenue growth vs. gross margin).
*   **Scenario Manager Template:**
    *   Using Excel's Scenario Manager or custom setup to define different scenarios (Base, Upside, Downside) by changing multiple input assumptions simultaneously and displaying comparative outputs.

*(Note: Building these templates step-by-step is a core component of many advanced financial modeling courses.)*

---
This document should be considered a supplement to the main Module 2 content.
