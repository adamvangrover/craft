# Comprehensive Guide to Building a Basic 3-Statement Financial Model

## Introduction

A 3-statement financial model is the cornerstone of most financial analyses. It links the Income Statement, Balance Sheet, and Cash Flow Statement into a dynamic tool that forecasts a company's financial performance and position. For credit analysts, a robust 3-statement model is essential for assessing repayment capacity, running sensitivity analyses, and understanding a company's financial trajectory.

This guide provides a detailed structure, key line items, common forecasting methodologies, and crucial linkages for building a basic but comprehensive 3-statement model.

**Target Audience:** Financial analysts, credit analysts, students of finance.
**Objective:** To provide a clear blueprint for constructing an integrated 3-statement model.

---

## I. Model Structure and Best Practices

Before diving into the statements, refer to the **[Excel Financial Model Best Practices](./Excel_Financial_Model_Best_Practices.md)** guide for essential tips on formatting, assumption management, and error checking. A well-structured model is easier to build, audit, and understand.

**General Layout:**

*   **Inputs/Assumptions Sheet:** Centralize all key drivers and assumptions (e.g., growth rates, margins, interest rates, tax rates).
*   **Historical Financials Sheet (Optional but Recommended):** Input 3-5 years of historical data from company filings.
*   **Income Statement Sheet.**
*   **Balance Sheet Sheet.**
*   **Cash Flow Statement Sheet.**
*   **Supporting Schedules Sheet(s):** For complex items like:
    *   Debt Schedule (Short-term, Long-term, Revolver)
    *   Fixed Asset Schedule (PP&E Roll-forward)
    *   Working Capital Schedule (AR, Inventory, AP, etc.)
    *   Equity Schedule (Common Stock, Retained Earnings, Other Equity)
    *   (Optional) Revenue Build-up, COGS Build-up, Operating Expense Build-up.

---

## II. Income Statement

The Income Statement shows a company's financial performance over a period.

| Line Item                      | Forecasting Methodology (Common Approaches)                                                                                                | Credit Analyst Notes                                                                                                                               |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Revenue (Sales)**            | - Historical Growth Rate (CAGR)<br>- Volume x Price Build-up (if data available)<br>- Regression vs. Macro Driver (e.g., GDP)<br>- Management Guidance | Crucial top-line driver. Understand cyclicality, customer concentration, pricing power. Stress test revenue for downside scenarios.               |
| Cost of Goods Sold (COGS)      | - % of Revenue (historical average or trended)<br>- Direct Input Cost Build-up (more complex)                                                  | Impacts Gross Profit. Analyze margin stability. Volatile input costs can be a risk.                                                              |
| **Gross Profit**               | `Revenue - COGS`                                                                                                                           | Key measure of production/service efficiency.                                                                                                      |
| Selling, General & Admin (SG&A) | - % of Revenue<br>- Fixed vs. Variable component analysis<br>- Historical Growth Rate                                                        | Analyze operating leverage. Can SG&A be cut in a downturn? Watch for non-recurring items.                                                          |
| Research & Development (R&D)   | - % of Revenue (common for tech/pharma)<br>- Specific project-based forecasts<br>- Historical Growth Rate                                       | Important for future growth but can be discretionary. Significant cuts might impair long-term competitiveness.                                     |
| Depreciation & Amortization (D&A) | - From Fixed Asset & Intangible Asset Schedules (roll-forward method - PREFERRED)<br>- % of Revenue or % of PP&E (simpler, less accurate)     | Non-cash expense but impacts taxes and is added back in CFO. Ensure consistency with CapEx.                                                      |
| Other Operating Income/Expense | - Typically forecasted as $0 or based on specific known items if recurring. Avoid embedding non-recurring items.                             | Scrutinize nature if significant. Often excluded from EBITDA calculations by credit analysts.                                                      |
| **Operating Income (EBIT)**    | `Gross Profit - SG&A - R&D - D&A + Other Operating Income/Expense`                                                                          | Core profitability before financing and taxes. Key for coverage ratios.                                                                            |
| Interest Income                | - Average Cash Balance x Expected Interest Rate on Cash                                                                                    | Usually minor for non-financial companies.                                                                                                         |
| Interest Expense               | - From Debt Schedule (Average Debt Balance x Weighted Avg. Interest Rate) - PREFERRED                                                      | Critical for credit analysis. Ensure all debt tranches and rates are captured. Link directly from debt schedule.                                  |
| (Gain)/Loss on Asset Sales     | - Typically $0 for forecasting unless specific divestitures are planned.                                                                     | Non-recurring. Exclude from core earnings assessment.                                                                                              |
| Other Non-Operating Income/Exp | - Typically $0 or based on specific known items.                                                                                           | Scrutinize if material.                                                                                                                            |
| **Earnings Before Tax (EBT)**  | `EBIT + Interest Income - Interest Expense +/- Gains/Losses +/- Other Non-Op`                                                              | Taxable income base.                                                                                                                               |
| Income Tax Expense             | - EBT x Effective Tax Rate (consider statutory vs. effective, NOLs)                                                                        | Analyze cash vs. reported taxes. Deferred tax liabilities can be significant.                                                                      |
| **Net Income**                 | `EBT - Income Tax Expense`                                                                                                                 | Bottom line. Links to Retained Earnings (Balance Sheet) and is the starting point for indirect Cash Flow Statement.                                |
| _Preferred Dividends_          | _- Fixed amount or % of par value (if preferred stock exists)_                                                                               | _Reduces Net Income available to Common Shareholders._                                                                                             |
| **Net Income to Common**       | `Net Income - Preferred Dividends`                                                                                                         | Used for EPS calculation.                                                                                                                          |
| _EPS (Basic & Diluted)_        | _- (Net Income to Common / Weighted Avg. Shares Outstanding)_                                                                                | _Key equity metric, less direct focus for credit unless analyzing convertibles or equity cure potential._                                          |

---

## III. Balance Sheet

The Balance Sheet is a snapshot of a company's assets, liabilities, and equity at a specific point in time. **Assets = Liabilities + Equity** must always hold.

**Assets:**

| Line Item                        | Forecasting Methodology                                                                                                  | Credit Analyst Notes                                                                                                                                |
| :------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Current Assets:**              |                                                                                                                          | Focus on liquidity and working capital management.                                                                                                  |
| Cash & Cash Equivalents          | - Plug from Cash Flow Statement (Ending Cash Balance) - PREFERRED<br>- Minimum cash balance target (less common as primary) | The "balancing item" in many models. Reflects operational, investing, and financing activities.                                                     |
| Accounts Receivable (AR)         | - Days Sales Outstanding (DSO) x (Revenue / 365)<br>- % of Revenue                                                       | Monitor DSO trends. Rising DSO can signal collection issues or aggressive revenue recognition. Quality of receivables.                              |
| Inventory                        | - Days Inventory Held (DIH) x (COGS / 365)<br>- % of COGS or % of Revenue                                                 | Monitor DIH/Inventory Turnover. Rising DIH can mean obsolescence or slowing sales. Consider LIFO/FIFO impact if material.                         |
| Prepaid Expenses                 | - % of SG&A or % of Revenue<br>- Historical trend                                                                         | Usually less material but track if significant changes.                                                                                             |
| Other Current Assets             | - Historical trend or specific item forecast.                                                                            | Understand components if material.                                                                                                                  |
| **Total Current Assets**         | `Sum of above Current Assets`                                                                                              | Used in Current Ratio, Quick Ratio.                                                                                                                 |
| **Non-Current Assets:**          |                                                                                                                          |                                                                                                                                                     |
| Property, Plant & Equipment (Net) | - From Fixed Asset Schedule: `Prior PPE + CapEx - Depreciation`                                                          | CapEx is a major cash outflow. Understand maintenance vs. growth CapEx. Asset quality and age. Potential for asset sales in distress.             |
| Goodwill                         | - `Prior Goodwill + Goodwill from new acquisitions`. Test for impairment.                                                | Non-amortizing but subject to impairment (non-cash charge). Large goodwill can indicate acquisitive strategy.                                       |
| Intangible Assets (Net)          | - `Prior Intangibles + New Intangibles Acquired - Amortization`. From Intangible Asset Schedule.                           | Patents, licenses, trademarks. Amortization is a non-cash expense.                                                                                  |
| Deferred Tax Assets (Long-Term)  | - Driven by tax schedule and differences in accounting/tax rules.                                                        | Complex. Understand drivers if material.                                                                                                            |
| Other Non-Current Assets         | - Historical trend or specific item forecast.                                                                            | E.g., investments in affiliates.                                                                                                                    |
| **Total Non-Current Assets**     | `Sum of above Non-Current Assets`                                                                                        |                                                                                                                                                     |
| **TOTAL ASSETS**                 | `Total Current Assets + Total Non-Current Assets`                                                                        |                                                                                                                                                     |

**Liabilities & Equity:**

| Line Item                        | Forecasting Methodology                                                                                                 | Credit Analyst Notes                                                                                                                                  |
| :------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Current Liabilities:**         |                                                                                                                          | Focus on short-term obligations and refinancing risk.                                                                                                 |
| Accounts Payable (AP)            | - Days Payable Outstanding (DPO) x (COGS / 365)<br>- % of COGS                                                            | Monitor DPO. Stretching payables can be a sign of liquidity strain (or strong supplier terms).                                                      |
| Accrued Expenses                 | - % of Revenue or % of SG&A<br>- Historical trend                                                                         | Salaries, rent, utilities payable.                                                                                                                    |
| Short-Term Debt                  | - From Debt Schedule (current portion of long-term debt, revolver drawdowns).                                            | Critical for liquidity assessment. Understand terms and maturity.                                                                                     |
| Deferred Revenue (Current)       | - Based on revenue recognition policy and customer prepayments.                                                          | Obligation to provide future services. Can be a source of cash but also future expense/revenue recognition.                                           |
| Other Current Liabilities        | - Historical trend or specific item forecast.                                                                            | Taxes payable, dividends payable.                                                                                                                     |
| **Total Current Liabilities**    | `Sum of above Current Liabilities`                                                                                       | Used in Current Ratio, Quick Ratio.                                                                                                                   |
| **Non-Current Liabilities:**     |                                                                                                                          |                                                                                                                                                       |
| Long-Term Debt                   | - From Debt Schedule: `Prior LTD + New LTD Issuance - Repayments`.                                                       | Major component of leverage. Analyze covenants, maturity profile, interest rates, security.                                                           |
| Deferred Tax Liabilities (L-T)   | - Driven by tax schedule and differences in accounting/tax rules.                                                        | Can be a significant long-term liability.                                                                                                             |
| Pension & OPEB Liabilities       | - Actuarial assumptions, contributions vs. expense. Complex. Often taken from notes or simplified.                       | Can represent significant off-balance-sheet-like obligations. Underfunded status is a concern.                                                        |
| Other Non-Current Liabilities    | - Specific items like lease liabilities (under new standards).                                                           | Understand their nature, especially if interest-bearing or requiring significant cash outflows.                                                       |
| **Total Non-Current Liabilities**| `Sum of above Non-Current Liabilities`                                                                                   |                                                                                                                                                       |
| **TOTAL LIABILITIES**            | `Total Current Liabilities + Total Non-Current Liabilities`                                                              | Used in Debt/Equity, Debt/Capital, Debt/EBITDA ratios.                                                                                                |
| **Shareholders' Equity:**        |                                                                                                                          |                                                                                                                                                       |
| Common Stock & APIC              | - `Prior Common Stock & APIC + Proceeds from new stock issuance - Stock repurchases (treasury stock method)`             | Changes driven by equity financing activities.                                                                                                        |
| Retained Earnings                | - `Prior Retained Earnings + Net Income - Common Dividends Paid`                                                         | Accumulation of historical profits less dividends.                                                                                                    |
| Treasury Stock                   | - `Prior Treasury Stock + Cost of Shares Repurchased - Cost of Shares Reissued` (contra-equity)                          | Represents company's repurchased shares.                                                                                                              |
| Accumulated Other Comp. Income   | - Changes due to currency translation, unrealized gains/losses on certain investments. Complex. Often simplified.        | Can be volatile. Understand drivers if material.                                                                                                      |
| **Total Shareholders' Equity**   | `Sum of above Equity items (Treasury Stock is negative)`                                                                 | Represents owners' residual claim. Cushion for debt holders.                                                                                          |
| **TOTAL LIABILITIES & EQUITY**   | `Total Liabilities + Total Shareholders' Equity`                                                                       | **Must equal TOTAL ASSETS.** This is the fundamental check of Balance Sheet integrity.                                                                |

---

## IV. Cash Flow Statement

The Cash Flow Statement (CFS) reconciles Net Income to the change in cash on the Balance Sheet. It's often built using the **Indirect Method** for Cash Flow from Operations (CFO).

| Line Item                               | Source / Calculation                                                                                               | Credit Analyst Notes                                                                                                                                                              |
| :-------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cash Flow from Operations (CFO):**    |                                                                                                                    | Most critical section for assessing debt repayment capacity from core business. Quality of earnings.                                                                              |
| Net Income                              | `From Income Statement`                                                                                            | Starting point for indirect method.                                                                                                                                               |
| Add: Depreciation & Amortization        | `From Income Statement (or D&A Schedule)`                                                                          | Non-cash expense added back.                                                                                                                                                      |
| Add: Stock-Based Compensation           | `From Income Statement or Notes (if material)`                                                                     | Non-cash expense added back.                                                                                                                                                      |
| Add: (Gain)/Loss on Asset Sales         | `From Income Statement (reverse non-cash gains/add back losses)`                                                   | These are investing activities; their cash impact is in CFI.                                                                                                                      |
| Add: Deferred Income Taxes              | `Change in Net Deferred Tax Liabilities (Liability increase = add back)`                                           | Non-cash portion of tax expense.                                                                                                                                                  |
| Changes in Working Capital:             |                                                                                                                    | Key drivers of operating cash flow.                                                                                                                                               |
|   (Increase)/Decrease in AR             | `-(Current Year AR - Prior Year AR)`                                                                               | Increase in AR is a use of cash.                                                                                                                                                  |
|   (Increase)/Decrease in Inventory      | `-(Current Year Inventory - Prior Year Inventory)`                                                                 | Increase in Inventory is a use of cash.                                                                                                                                           |
|   (Increase)/Decrease in Prepaid Exp.   | `-(Current Year Prepaid - Prior Year Prepaid)`                                                                     |                                                                                                                                                                                   |
|   Increase/(Decrease) in AP             | `(Current Year AP - Prior Year AP)`                                                                                | Increase in AP is a source of cash.                                                                                                                                               |
|   Increase/(Decrease) in Accrued Exp.   | `(Current Year Accrued - Prior Year Accrued)`                                                                      |                                                                                                                                                                                   |
|   Increase/(Decrease) in Def. Rev (Curr)| `(Current Year Def. Rev - Prior Year Def. Rev)`                                                                    |                                                                                                                                                                                   |
| Other Adjustments                       | `Specific items like pension contributions vs. expense`                                                            |                                                                                                                                                                                   |
| **Net Cash from Operations (CFO)**      | `Sum of above items`                                                                                               | Primary source of cash for debt service & reinvestment. Watch for sustainability and quality.                                                                                     |
| **Cash Flow from Investing (CFI):**     |                                                                                                                    | Relates to investments in long-term assets.                                                                                                                                       |
| Capital Expenditures (CapEx)            | `-(From Fixed Asset Schedule or input)`                                                                            | Purchase of PP&E. Usually a major use of cash. Differentiate maintenance vs. growth CapEx.                                                                                        |
| Proceeds from Sale of PP&E              | `Input if applicable`                                                                                              | Source of cash.                                                                                                                                                                   |
| Acquisitions, Net of Cash Acquired      | `-(Input if applicable)`                                                                                           | Use of cash for M&A.                                                                                                                                                              |
| Divestitures                            | `Input if applicable`                                                                                              | Source of cash from selling business units.                                                                                                                                       |
| Purchases/Sales of Marketable Sec.    | `Input if applicable`                                                                                              | Relates to short-term investments not classified as cash equivalents.                                                                                                             |
| **Net Cash from Investing (CFI)**       | `Sum of above items`                                                                                               | Typically negative for growing companies.                                                                                                                                         |
| **Cash Flow from Financing (CFF):**     |                                                                                                                    | Relates to how the company is financed.                                                                                                                                           |
| Net Borrowings (Debt Issuance - Repay)| `(New Debt Issued - Debt Repaid) from Debt Schedule`                                                               | Issuance is source, repayment is use.                                                                                                                                             |
| Net Stock Issuance (Issuance - Repurch)| `(New Stock Issued - Shares Repurchased) from Equity Schedule`                                                     | Issuance is source, repurchase is use.                                                                                                                                            |
| Payment of Common Dividends             | `-(From Retained Earnings roll-forward or input)`                                                                  | Use of cash.                                                                                                                                                                      |
| Payment of Preferred Dividends          | `-(From Income Statement or input)`                                                                                | Use of cash.                                                                                                                                                                      |
| **Net Cash from Financing (CFF)**       | `Sum of above items`                                                                                               | Shows reliance on external financing.                                                                                                                                             |
| Effect of Exchange Rate on Cash         | `Input if significant multinational operations (often minor or ignored in basic models)`                           |                                                                                                                                                                                   |
| **Net Change in Cash**                  | `CFO + CFI + CFF + FX Effect`                                                                                      |                                                                                                                                                                                   |
| Cash at Beginning of Period             | `Prior Year's Ending Cash Balance (from Balance Sheet)`                                                            |                                                                                                                                                                                   |
| **Cash at End of Period**               | `Net Change in Cash + Beginning Cash`                                                                              | **This MUST link to (or equal) the Cash & Cash Equivalents line on the current period's Balance Sheet.** This is the "balancing" of the 3-statement model. |

---

## V. Key Linkages ("Balancing the Model")

Ensuring the statements are correctly linked is critical:

1.  **Net Income (Income Statement)**
    *   Flows into **Retained Earnings** on the Equity section of the Balance Sheet (`Prior RE + NI - Dividends = Current RE`).
    *   Is the starting point for **Cash Flow from Operations (CFO)** (indirect method).
2.  **Depreciation & Amortization (Income Statement & Supporting Schedules)**
    *   Reduces **Net PP&E** and **Net Intangible Assets** on the Balance Sheet.
    *   Is added back to Net Income in **CFO** (as it's a non-cash expense).
3.  **Capital Expenditures (Fixed Asset Schedule / CFI)**
    *   Increases **Gross PP&E** on the Balance Sheet (via Fixed Asset Schedule).
    *   Is a use of cash in **Cash Flow from Investing (CFI)**.
4.  **Changes in Working Capital Accounts (Balance Sheet)**
    *   The period-over-period changes in AR, Inventory, Prepaid Expenses, AP, Accrued Expenses, etc., are used to adjust Net Income in **CFO**.
5.  **Debt & Interest (Debt Schedule / Income Statement / Balance Sheet / CFF)**
    *   **Interest Expense** (from Debt Schedule, based on average debt balances and rates) flows to the Income Statement.
    *   Net change in **Debt Balances** (new issuance less repayments, from Debt Schedule) flows to Cash Flow from Financing (CFF) and updates the Debt lines on the Balance Sheet.
6.  **Equity Issuance/Repurchases & Dividends (Equity Schedule / Balance Sheet / CFF)**
    *   Net change in **Common Stock/APIC/Treasury Stock** (from Equity Schedule) flows to CFF and updates Equity lines on the Balance Sheet.
    *   **Dividends** reduce Retained Earnings on the Balance Sheet and are a use of cash in CFF.
7.  **Ending Cash Balance (Cash Flow Statement)**
    *   The **Cash at End of Period** from the CFS becomes the **Cash & Cash Equivalents** line item on the current period's Balance Sheet. This is the ultimate check. If this links correctly and Assets = Liabilities + Equity, the model is "balanced."

---

## VI. Revolver / Cash Sweep Logic (Optional Advanced Step)

For models that include a revolving credit facility (revolver) or a cash sweep mechanism:

*   After calculating preliminary Ending Cash (before revolver/sweep), check if it's below a minimum required cash balance or above a target maximum.
*   **If Below Minimum:** Draw on the revolver to bring cash up to the minimum. This increases Debt on BS and is a source of cash in CFF. Interest Expense will increase in future periods.
*   **If Above Maximum (and cash sweep is active):** Pay down the revolver (or other specified debt) with excess cash. This decreases Debt on BS and is a use of cash in CFF. Interest Expense will decrease.
*   This often creates **circular references** in Excel because interest expense affects net income, which affects cash, which affects debt levels, which in turn affects interest expense. Enable iterative calculations in Excel Options or use algebraic solutions/copy-paste values carefully.

---

## VII. Conclusion for Credit Analysts

A well-built 3-statement model allows a credit analyst to:

*   **Project Future Financial Performance:** Understand potential revenue, profitability, and cash flow generation.
*   **Assess Debt Service Capacity:** Calculate key credit ratios (Leverage, Interest Coverage, DSCR, FCCR) based on forecasted numbers.
*   **Run Sensitivity & Scenario Analysis:** Test the impact of changes in key assumptions (e.g., lower revenue growth, higher interest rates) on the company's ability to meet its obligations.
*   **Evaluate Refinancing Risk:** Analyze future debt maturities and the company's capacity to repay or refinance.
*   **Inform Credit Decisions:** Provide a quantitative basis for loan approvals, pricing, and structuring (e.g., covenant setting).

Continuous practice and attention to detail are key to mastering 3-statement modeling. This guide provides the structure; the quality of the model depends on the thoughtfulness of the assumptions and the rigor of the analysis.

Once proficient with the 3-statement model, this foundation can be extended to more specialized analyses, such as Leveraged Buyout (LBO) models. To explore the basics of LBO modeling, see the [Interactive LBO Model Basics Notebook Guide](../../Interactive_Notebooks/Financial_Modeling/LBO_Model_Basics/README.md).
