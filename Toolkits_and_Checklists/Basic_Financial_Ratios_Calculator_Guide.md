# Guide: Building a Basic Financial Ratios Calculator in Excel

## Introduction

Financial ratio analysis is a cornerstone of financial statement analysis, providing insights into a company's liquidity, solvency, profitability, efficiency, and coverage capabilities. While sophisticated software exists, building a basic ratio calculator in Excel is an excellent way to understand the formulas and their components.

This guide provides a step-by-step approach to setting up a simple Excel template for calculating key financial ratios commonly used by credit analysts and financial analysts.

**Purpose:** To empower users to create their own basic ratio calculation tool for quick analysis and learning.
**Audience:** Students of finance, junior analysts, anyone looking to understand ratio calculations practically.
**Note:** This guide describes how to build the calculator; it does not provide a downloadable Excel file.

---

## I. Setting Up Your Excel Workbook

1.  **Create Sheets:**
    *   **`Input_IS`:** For inputting Income Statement data.
    *   **`Input_BS`:** For inputting Balance Sheet data.
    *   **`Ratios_Output`:** Where the calculated ratios will be displayed.
    *   **(Optional) `Assumptions`:** For any specific assumptions like tax rate if not directly derivable.

2.  **Basic Formatting (Refer to Excel Best Practices Guide):**
    *   Use clear labels for rows (financial statement line items) and columns (periods - e.g., Year 1, Year 2, TTM).
    *   Color-code input cells (e.g., blue font or light yellow fill) to distinguish them from formula cells (black font).
    *   Ensure consistent number formatting.

---

## II. Inputting Financial Statement Data

### A. `Input_IS` Sheet (Income Statement)

Structure this sheet to mirror a standard Income Statement. Below are essential line items. Add more as needed.

| Line Item                      | Period 1 (e.g., Year 1) | Period 2 (e.g., Year 2) |
| :----------------------------- | :----------------------: | :----------------------: |
| Revenue (Sales)                |        [Input]         |        [Input]         |
| Cost of Goods Sold (COGS)      |        [Input]         |        [Input]         |
| **Gross Profit**               |         `=B2-B3`         |         `=C2-C3`         |
| SG&A Expenses                  |        [Input]         |        [Input]         |
| Depreciation & Amortization    |        [Input]         |        [Input]         |
| Other Operating Expenses/Income|        [Input]         |        [Input]         |
| **Operating Income (EBIT)**    |     `=B4-B5-B6-B7`     |     `=C4-C5-C6-C7`     |
| Interest Expense               |        [Input]         |        [Input]         |
| Interest Income                |        [Input]         |        [Input]         |
| Pre-Tax Income (EBT)           |    `=B8-B9+B10`        |    `=C8-C9+C10`        |
| Income Tax Expense             |        [Input]         |        [Input]         |
| **Net Income**                 |        `=B11-B12`        |        `=C11-C12`        |
| *(Optional for EBITDA)*        |                        |                        |
| **EBITDA**                     |       `=B8+B6`         |        `=C8+C6`        |

*(Assume B2 is Revenue for Period 1, B3 is COGS for Period 1, etc. Adjust cell references based on your actual layout.)*

### B. `Input_BS` Sheet (Balance Sheet)

Structure for two periods (current and prior) to calculate averages and changes for some ratios and the Cash Flow Statement (if you extend this).

| Line Item                        | Period 0 (e.g., Year 0) | Period 1 (e.g., Year 1) | Period 2 (e.g., Year 2) |
| :------------------------------- | :----------------------: | :----------------------: | :----------------------: |
| **Current Assets**               |                        |                        |                        |
| Cash & Cash Equivalents          |        [Input]         |        [Input]         |        [Input]         |
| Accounts Receivable, Net         |        [Input]         |        [Input]         |        [Input]         |
| Inventory, Net                   |        [Input]         |        [Input]         |        [Input]         |
| Other Current Assets             |        [Input]         |        [Input]         |        [Input]         |
| **Total Current Assets**         |         `=SUM()`         |         `=SUM()`         |         `=SUM()`         |
| **Non-Current Assets**           |                        |                        |                        |
| Property, Plant & Equipment, Net |        [Input]         |        [Input]         |        [Input]         |
| Goodwill & Intangibles, Net      |        [Input]         |        [Input]         |        [Input]         |
| Other Non-Current Assets         |        [Input]         |        [Input]         |        [Input]         |
| **Total Non-Current Assets**     |         `=SUM()`         |         `=SUM()`         |         `=SUM()`         |
| **TOTAL ASSETS**                 |         `=SUM()`         |         `=SUM()`         |         `=SUM()`         |
|                                  |                        |                        |                        |
| **Current Liabilities**          |                        |                        |                        |
| Accounts Payable                 |        [Input]         |        [Input]         |        [Input]         |
| Short-Term Debt                  |        [Input]         |        [Input]         |        [Input]         |
| Other Current Liabilities        |        [Input]         |        [Input]         |        [Input]         |
| **Total Current Liabilities**    |         `=SUM()`         |         `=SUM()`         |         `=SUM()`         |
| **Non-Current Liabilities**      |                        |                        |                        |
| Long-Term Debt                   |        [Input]         |        [Input]         |        [Input]         |
| Other Non-Current Liabilities    |        [Input]         |        [Input]         |        [Input]         |
| **Total Non-Current Liabilities**|         `=SUM()`         |         `=SUM()`         |         `=SUM()`         |
| **TOTAL LIABILITIES**            |         `=SUM()`         |         `=SUM()`         |         `=SUM()`         |
|                                  |                        |                        |                        |
| **Equity**                       |                        |                        |                        |
| Common Stock & APIC              |        [Input]         |        [Input]         |        [Input]         |
| Retained Earnings                |        [Input]         |        [Input]         |        [Input]         |
| Other Equity (e.g., AOCI)        |        [Input]         |        [Input]         |        [Input]         |
| **TOTAL EQUITY**                 |         `=SUM()`         |         `=SUM()`         |         `=SUM()`         |
| **TOTAL LIABILITIES & EQUITY**   |         `=SUM()`         |         `=SUM()`         |         `=SUM()`         |
| **Balance Check (Assets - L&E)** |        `=B10-B24`        |        `=C10-C24`        |        `=D10-D24`        |

*(Adjust cell references. The Balance Check row should ideally be zero.)*
*For ratios requiring averages (e.g., Avg. Total Assets), you'll use `(Current_Period_Balance + Prior_Period_Balance)/2`.*

---

## III. `Ratios_Output` Sheet: Calculating and Interpreting Ratios

This sheet will pull data from `Input_IS` and `Input_BS` to calculate ratios.

**Example Layout for Period 2 Ratios (Column C in Ratios_Output):**

| Ratio Category        | Ratio Name                        | Formula (Conceptual Excel - Link to Input Sheets)                                     | Result (Col C) | Interpretation Notes for Credit Analysts                                                                    |
| :-------------------- | :-------------------------------- | :------------------------------------------------------------------------------------ | :------------: | :---------------------------------------------------------------------------------------------------------- |
| **Liquidity**         |                                   |                                                                                       |                |                                                                                                             |
|                       | Current Ratio                     | `=Input_BS!D6 / Input_BS!D19`                                                         |    [Formula]   | Ability to cover short-term liabilities with short-term assets. >1x generally preferred.                    |
|                       | Quick Ratio                       | `=(Input_BS!D2 + Input_BS!D3) / Input_BS!D19`                                         |    [Formula]   | Stricter liquidity measure, excludes inventory.                                                             |
|                       | Cash Ratio                        | `=(Input_BS!D2) / Input_BS!D19`  *(Assuming D2 is Cash, adjust if Marketable Sec exists)* |    [Formula]   | Most conservative; ability to pay CL with cash & equivalents.                                             |
| **Solvency/Leverage** |                                   |                                                                                       |                |                                                                                                             |
|                       | Debt-to-Equity                    | `=(Input_BS!D17 + Input_BS!D21) / Input_BS!D27` *(Total Debt / Total Equity)*         |    [Formula]   | Measures leverage. Higher = more risk. (Total Debt = STD+LTD)                                               |
|                       | Debt-to-Capital                   | `=B6 / (B6 + Input_BS!D27)` *(Where B6 is a cell calculating Total Debt for Period 2)* |    [Formula]   | Proportion of capital financed by debt.                                                                     |
|                       | Debt-to-Assets                    | `=B6 / Input_BS!D10`                                                                  |    [Formula]   | Proportion of assets financed by debt.                                                                      |
|                       | Financial Leverage                | `=AVERAGE(Input_BS!D10, Input_BS!C10) / AVERAGE(Input_BS!D27, Input_BS!C27)`           |    [Formula]   | How many times assets are a multiple of equity (using averages).                                            |
|                       | Total Debt / EBITDA               | `=B6 / Input_IS!C15` *(Assuming C15 on IS is EBITDA for Period 2)*                    |    [Formula]   | Key leverage metric for credit agreements.                                                                  |
| **Coverage**          |                                   |                                                                                       |                |                                                                                                             |
|                       | Interest Coverage (TIE)           | `=Input_IS!C8 / Input_IS!C9` *(EBIT / Interest Expense)*                               |    [Formula]   | Ability to cover interest payments from operating income. Higher is better.                                 |
|                       | EBITDA Coverage                   | `=Input_IS!C15 / Input_IS!C9` *(EBITDA / Interest Expense)*                            |    [Formula]   | Alternative coverage; EBITDA is a proxy for pre-interest cash flow.                                         |
| **Profitability**     |                                   |                                                                                       |                |                                                                                                             |
|                       | Gross Profit Margin               | `=Input_IS!C4 / Input_IS!C2`                                                          |    [Formula]   | Efficiency of production.                                                                                   |
|                       | Operating Profit Margin           | `=Input_IS!C8 / Input_IS!C2`                                                          |    [Formula]   | Profitability from core operations.                                                                         |
|                       | Net Profit Margin                 | `=Input_IS!C13 / Input_IS!C2`                                                         |    [Formula]   | Overall profitability after all expenses.                                                                   |
|                       | Return on Assets (ROA)            | `=Input_IS!C13 / AVERAGE(Input_BS!D10, Input_BS!C10)`                                 |    [Formula]   | Efficiency in using assets to generate profit.                                                              |
|                       | Return on Equity (ROE)            | `=Input_IS!C13 / AVERAGE(Input_BS!D27, Input_BS!C27)`                                 |    [Formula]   | Return to shareholders. High ROE from leverage can be risky.                                                |
| **Activity/Efficiency**|                                   |                                                                                       |                |                                                                                                             |
|                       | Days Sales Outstanding (DSO)      | `=(AVERAGE(Input_BS!D3, Input_BS!C3) / Input_IS!C2) * 365`                             |    [Formula]   | Avg. collection period. (Assumes all revenue is credit sales for simplicity).                               |
|                       | Days Inventory Held (DIH)         | `=(AVERAGE(Input_BS!D4, Input_BS!C4) / Input_IS!C3) * 365`                             |    [Formula]   | Avg. days inventory is held.                                                                                |
|                       | Days Payables Outstanding (DPO)   | `=(AVERAGE(Input_BS!D16, Input_BS!C16) / Input_IS!C3) * 365`                            |    [Formula]   | Avg. time to pay suppliers.                                                                                 |
|                       | Cash Conversion Cycle (CCC)       | `=C19+C20-C21` *(Assuming C19,C20,C21 are cells for DSO,DIH,DPO results)*             |    [Formula]   | Time to convert inventory investment to cash.                                                               |
|                       | Asset Turnover                    | `=Input_IS!C2 / AVERAGE(Input_BS!D10, Input_BS!C10)`                                  |    [Formula]   | Efficiency in using assets to generate sales.                                                               |

**Notes on Formulas:**
*   **Cell References:** Replace conceptual references like `Input_BS!D6` with actual cell references from your input sheets.
*   **Averages:** For ratios using balance sheet items (e.g., ROA, ROE, Turnover Ratios, DSO, DIH, DPO), it's best practice to use **average** balances ( (Beginning Balance + Ending Balance) / 2 ). This requires data from Period 0, Period 1, and Period 2 to calculate ratios for Period 1 and Period 2.
    *   Example for Average Total Assets for Period 2: `AVERAGE(Input_BS!D10, Input_BS!C10)` (where D10 is Year 2 Assets, C10 is Year 1 Assets).
*   **Total Debt:** Ensure you sum Short-Term Debt and Long-Term Debt from the `Input_BS` sheet for ratios like Debt-to-Equity. It's good practice to have a "Total Debt" line item calculated on the `Input_BS` sheet and link to that.
*   **EBITDA:** If not directly in your Income Statement input, calculate it: `EBIT + Depreciation & Amortization`.
*   **Error Handling:** Use `IFERROR(your_formula, "")` to avoid #DIV/0! errors if a denominator is zero.

---

## IV. Enhancements & Further Steps

*   **Trend Analysis:** Add columns for multiple periods (e.g., Year 1, Year 2, Year 3) on the `Ratios_Output` sheet to easily see trends.
*   **Common-Size Analysis:**
    *   **Income Statement:** Express all line items as a % of Revenue.
    *   **Balance Sheet:** Express all line items as a % of Total Assets.
*   **Peer Comparison:** Add columns to input peer company ratios for benchmarking.
*   **Charts:** Create simple charts to visualize key ratio trends.
*   **DuPont Analysis:** Decompose ROE into its components (Net Profit Margin x Asset Turnover x Financial Leverage).
*   **Basic Cash Flow Statement:** You can extend this by adding an `Input_CFS_Changes` sheet to input changes in BS accounts not captured by IS (e.g., asset sales/purchases, debt/equity issuance/repayment) and then build a simplified Cash Flow Statement.

---

## V. Conclusion

Building this basic ratio calculator provides a hands-on understanding of how financial ratios are derived and what they signify. For credit analysts, this tool, even in its simple form, can be a valuable first step in dissecting a company's financial health. Remember that ratios are just one piece of the puzzle; qualitative analysis, industry understanding, and forward-looking projections are equally important.

Always ensure your inputs are accurate and that you understand the underlying business reasons for the ratio values and trends you observe.
