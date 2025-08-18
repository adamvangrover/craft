# Prompt Library: Building a 3-Statement Financial Model

This library provides prompts for building a 3-statement financial model. The prompts are based on the "Comprehensive Guide to Building a Basic 3-Statement Financial Model".

---

## 1. Model Structure and Setup

**Objective:** To set up a well-structured and organized financial model.

### Prompts:

- "Create the basic structure for a 3-statement financial model. Include separate sheets for 'Assumptions', 'Income Statement', 'Balance Sheet', 'Cash Flow Statement', and 'Supporting Schedules'."
- "Set up the 'Assumptions' sheet with clear labels and input cells for key drivers such as growth rates, margins, interest rates, and tax rates."
- "Populate the 'Income Statement' sheet with standard line items from Revenue down to Net Income."
- "Populate the 'Balance Sheet' sheet with standard line items for Assets, Liabilities, and Equity."
- "Populate the 'Cash Flow Statement' sheet with the standard structure for Cash Flow from Operations, Investing, and Financing."

---

## 2. Income Statement Forecasting

**Objective:** To forecast the company's income statement based on key assumptions.

### Prompts:

- "Forecast Revenue based on a specified growth rate."
- "Forecast Cost of Goods Sold (COGS) as a percentage of Revenue."
- "Forecast Selling, General & Administrative (SG&A) expenses as a percentage of Revenue."
- "Forecast Depreciation & Amortization based on a percentage of PP&E."
- "Calculate Interest Expense based on the average debt balance from the Debt Schedule."
- "Calculate Income Tax Expense based on the effective tax rate."
- "Calculate Net Income."

---

## 3. Balance Sheet Forecasting

**Objective:** To forecast the company's balance sheet, ensuring it always balances.

### Prompts:

- "Forecast Accounts Receivable (AR) based on Days Sales Outstanding (DSO)."
- "Forecast Inventory based on Days Inventory Held (DIH)."
- "Forecast Accounts Payable (AP) based on Days Payable Outstanding (DPO)."
- "Forecast Property, Plant & Equipment (PP&E) using a roll-forward schedule (Prior PP&E + CapEx - Depreciation)."
- "Forecast Retained Earnings based on the roll-forward formula (Prior Retained Earnings + Net Income - Dividends)."
- "Link the Ending Cash balance from the Cash Flow Statement to the Cash line item on the Balance Sheet."
- "Create a check to ensure that Total Assets equals Total Liabilities & Equity."

---

## 4. Cash Flow Statement Forecasting

**Objective:** To forecast the company's cash flow statement, linking it to the income statement and balance sheet.

### Prompts:

- "Start the Cash Flow from Operations (CFO) section with Net Income from the Income Statement."
- "Add back non-cash charges such as Depreciation & Amortization."
- "Adjust for changes in working capital accounts (AR, Inventory, AP, etc.)."
- "Forecast Capital Expenditures (CapEx) as a percentage of Revenue."
- "Forecast debt financing activities (new debt issuance and repayments) based on the Debt Schedule."
- "Forecast equity financing activities (stock issuance and repurchases) and dividend payments."
- "Calculate the Net Change in Cash and the Ending Cash Balance."

---

## 5. Supporting Schedules

**Objective:** To create detailed schedules for complex items like debt and fixed assets.

### Prompts:

- "Create a Debt Schedule that tracks the beginning balance, new debt issuance, repayments, and ending balance for each debt tranche."
- "Create a Fixed Asset Schedule (PP&E roll-forward) that tracks the beginning balance, CapEx, depreciation, and ending balance."
- "Create a Working Capital Schedule that calculates the changes in key working capital accounts."
