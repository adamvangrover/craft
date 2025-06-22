# Module 2: Financial Analysis & Modeling

## 2.1. Building the 3-Statement Financial Model
A financial model is a spreadsheet-based tool, typically built in Microsoft Excel, that forecasts a company's financial performance into the future. For a credit analyst, the 3-statement model is the cornerstone of quantitative analysis. It integrates the income statement, balance sheet, and cash flow statement, allowing the analyst to test assumptions and project a company's ability to service its debt.

Building a robust and flexible model requires a disciplined, structured approach. The process begins with establishing a standardized format to ensure clarity, accuracy, and ease of use. Best practices include:
*   **Color-Coding:** Differentiate inputs from calculations. A common convention is to use blue font for hard-coded inputs (assumptions) and black font for formulas (outputs). This makes the model transparent and easy to audit.
*   **Periodicity:** Decide on the model's time frame. Annual models are common for long-term valuation, while quarterly models are often used in credit analysis to track near-term performance and covenant compliance.
*   **Structure:** Organize the model logically. A best practice is to have a dedicated "Inputs" or "Assumptions" section, separate from the core financial statements. This centralizes all key drivers, making them easy to adjust. Supporting schedules for complex items like debt and fixed assets should also be built separately to keep the main statements clean.

The first step in building the model is to populate it with historical data. An analyst should input at least three to five years of financial data from the company's public filings (e.g., 10-K reports) to create a baseline. This historical analysis is crucial for understanding past performance and identifying trends that will inform the forecast.

With the historical data in place, the next step is to create the supporting schedules that will drive the projections:
*   **Debt & Interest Schedule:** Tracks the beginning and ending balances of each debt tranche, scheduled principal repayments (amortization), and calculates interest expense based on the outstanding debt balance and interest rate.
*   **Fixed Asset (PP&E) Schedule:** Starts with the beginning PP&E balance, adds capital expenditures (CapEx), and subtracts depreciation to arrive at the ending PP&E balance.
*   **Working Capital Schedule:** Forecasts key operational accounts like accounts receivable, inventory, and accounts payable, often based on turnover day assumptions (e.g., Days Sales Outstanding).

## 2.2. Forecasting with Purpose
The forecast is the heart of the model, and its reliability hinges on the quality of its underlying assumptions. Assumptions for key drivers like revenue growth, profit margins, and CapEx should be well-reasoned and defensible, based on a combination of historical trends, management guidance, and industry analysis.

The forecasting process follows the logic of the financial statements themselves:
1.  **Forecast the Income Statement:** Start with the top line, projecting revenue growth. Then, forecast expenses (COGS, SG&A) as a percentage of revenue to maintain historical margin profiles or to reflect expected changes. This flows down to a projected Net Income.
2.  **Forecast the Balance Sheet:** Project the balance sheet accounts that are driven by operations. For example, Accounts Receivable can be projected as a percentage of revenue or based on a Days Sales Outstanding (DSO) assumption. PP&E is driven by the fixed asset schedule. Retained Earnings is linked to the prior period's balance plus the newly forecasted Net Income.
3.  **Complete the Cash Flow Statement:** The CFS is a reconciliation and is therefore not forecasted directly. It is derived from the forecasted Income Statement and the changes in the forecasted Balance Sheet accounts.
4.  **Balance the Model:** The final, crucial step is to ensure the model "balances" (i.e., Total Assets = Total Liabilities + Equity). This is achieved by linking the ending cash balance from the CFS to the cash account on the Balance Sheet. A "cash plug" or a revolving credit facility is used to handle any cash shortfalls or surpluses, ensuring the accounting equation holds true. Dealing with the resulting circular references in Excel (where interest expense affects net income, which affects cash, which affects the debt balance that determines interest expense) is a key technical skill.

## 2.3. The Analyst's Core Toolkit: Key Credit Ratios
With a fully integrated and balanced model, the analyst can now calculate the key financial ratios that are the lifeblood of credit analysis. These ratios standardize financial data, allowing for comparison over time and against industry peers, and provide a quantitative assessment of a company's creditworthiness. They fall into four main categories.

*   **Leverage Ratios:** These ratios measure the extent to which a company relies on debt to finance its assets. Higher leverage generally implies higher risk.
    *   **Total Debt / EBITDA:** The most common leverage ratio in credit analysis. It indicates how many years of cash flow (before interest, taxes, depreciation, and amortization) it would take to repay all debt. A higher ratio signifies higher risk.
    *   **Debt / Capital:** Measures debt as a percentage of the company's total capital base (Debt + Equity). It provides insight into the company's capital structure.
    *   **Debt / Equity:** Compares total debt to shareholders' equity. A high ratio indicates that the company is financed more by creditors than by its owners.

*   **Coverage Ratios:** These ratios measure a company's ability to meet its debt-related obligations (i.e., to "cover" its payments). They are a direct measure of repayment capacity.
    *   **Interest Coverage Ratio (EBIT / Interest Expense):** Also known as Times Interest Earned (TIE), this measures how many times a company's operating income can cover its interest expense. A ratio below 1.5x is often a red flag.
    *   **Debt Service Coverage Ratio (DSCR):** A broader measure that assesses the ability to cover both interest and scheduled principal payments (debt service). The formula is typically Net Operating Income / Total Debt Service. A ratio below 1.0x means the company is not generating enough cash to meet its current debt obligations.
    *   **Fixed Charge Coverage Ratio (FCCR):** Often considered the most comprehensive coverage ratio for credit analysis, as it uses a better proxy for cash flow available for debt service. A common formula is (EBITDA - CapEx - Cash Taxes) / (Cash Interest + Mandatory Debt Repayments). This ratio compares a pre-financing cash flow figure to all fixed, non-discretionary obligations.

*   **Liquidity Ratios:** These ratios measure a company's ability to meet its short-term obligations (those due within one year). Poor liquidity can lead to a financial crisis even for a profitable company.
    *   **Current Ratio (Current Assets / Current Liabilities):** The most basic liquidity measure. A ratio above 1.0 is necessary, with creditors typically preferring to see ratios of 2.0 or higher.
    *   **Quick Ratio ((Current Assets - Inventory) / Current Liabilities):** Also called the "acid-test" ratio, this is a stricter measure that excludes inventory, which may not be easily converted to cash.

*   **Profitability Ratios:** These ratios measure a company's ability to generate profits from its sales and assets. While credit analysis is downside-focused, a consistently profitable business is fundamentally a better credit risk.
    *   **Gross, Operating, and Net Profit Margins:** These ratios (e.g., Operating Profit / Revenue) show what percentage of sales is turned into profit at different stages. They are crucial for analyzing operational efficiency and pricing power.
    *   **Return on Assets (ROA) (Net Income / Total Assets):** Measures how efficiently a company is using its assets to generate profit.
    *   **Return on Equity (ROE) (Net Income / Total Equity):** Measures the rate of return generated on the money invested by shareholders.

**Table 2.1: Core Credit Ratio Formulas and Interpretations**

| Category & Ratio         | Formula                                                                       | Interpretation & Importance                                                                 |
| ------------------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Leverage Ratios**      |                                                                               |                                                                                             |
| Total Debt / EBITDA      | Total Debt / Earnings Before Interest, Taxes, Depreciation & Amortization     | Measures the years of cash flow needed to repay debt. The primary indicator of leverage risk. |
| Debt / Capital           | Total Debt / (Total Debt + Total Equity)                                      | Shows the proportion of debt in the company's capital structure.                            |
| **Coverage Ratios**      |                                                                               |                                                                                             |
| Interest Coverage (TIE)  | Earnings Before Interest & Taxes (EBIT) / Interest Expense                    | Measures the ability to cover interest payments from operating profits.                     |
| Fixed Charge Coverage (FCCR) | (EBITDA - CapEx - Cash Taxes) / (Cash Interest + Mandatory Debt Repayments) | A comprehensive measure of cash flow available to cover all fixed financing obligations.    |
| **Liquidity Ratios**     |                                                                               |                                                                                             |
| Current Ratio            | Current Assets / Current Liabilities                                          | Assesses the ability to meet short-term obligations with short-term assets.                 |
| Quick Ratio (Acid-Test)  | (Current Assets - Inventory) / Current Liabilities                            | A stricter liquidity test, excluding less-liquid inventory.                                 |
| **Profitability Ratios** |                                                                               |                                                                                             |
| Operating Profit Margin  | Operating Income (EBIT) / Revenue                                             | Indicates the profitability of core business operations.                                    |
| Return on Assets (ROA)   | Net Income / Average Total Assets                                             | Measures the efficiency of asset use in generating profit.                                  |

## 2.4. Beyond the Base Case: Advanced Analysis
A static, base-case model is insufficient for true risk analysis. The analyst must test the model's resilience to change using a tiered system of advanced techniques. This progression allows the analyst to move from identifying specific sensitivities to understanding plausible business scenarios and finally to assessing the impact of severe, systemic shocks.

*   First, **Sensitivity Analysis**, also known as "what-if" analysis, is used to determine how changes in a single independent variable affect a key dependent variable. For example, an analyst might test how a 1% increase in interest rates impacts the company's interest coverage ratio. This technique is invaluable for identifying the key drivers of credit risk; the variables that cause the largest swings in credit metrics are the ones that warrant the most scrutiny during due diligence. Visual tools like Tornado Diagrams can effectively display which variables have the most significant impact on an output.
*   Second, **Scenario Analysis** builds on this by changing multiple input variables simultaneously to model a specific, plausible future state. Rather than asking "what if interest rates go up?", scenario analysis asks "what if we enter a recession?". This would involve modeling a combination of lower revenue growth, compressed margins, and higher interest rates all at once. Analysts typically build a "base case," a "best case" (or upside), and a "worst case" (or downside) scenario to understand the range of potential outcomes. This transforms the analysis from an abstract sensitivity test into a concrete business narrative.
*   Finally, **Stress Testing** is a specialized and more extreme form of scenario analysis. It is used to gauge the potential impact of a severe but plausible crisis where normal market conditions and correlations break down. These scenarios are often mandated by regulators (like the Federal Reserve's annual stress tests for large banks) and might include events like a severe global recession, a sharp drop in asset prices, or a major liquidity freeze. While scenario analysis might model a mild recession, a stress test would model a deep and prolonged one. It is a fundamental tool for assessing capital adequacy and understanding the vulnerabilities of a portfolio at the "tail" of the loss distribution, answering the question of what happens in a worst-case outcome.
