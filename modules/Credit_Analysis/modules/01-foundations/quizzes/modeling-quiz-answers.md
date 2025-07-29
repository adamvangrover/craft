# Answer Key: Quiz - Module 2: Comprehensive Financial Analysis & Modeling

This document provides the answers and brief explanations for the comprehensive quiz in Module 2.

---

**Part 1: Multiple Choice**

1.  **What is the primary objective of building a 3-statement financial model for a credit analyst?**
    *   **Answer:** b) To assess the company's ability to service its debt and understand its financial health under various scenarios.
    *   **Explanation:** While a model might be used in valuation, for a credit analyst, the core purpose is to analyze debt repayment capacity, covenant compliance, and overall financial stability under different operating assumptions.

2.  **Which of the following is a common best practice in financial modeling for differentiating hard-coded inputs from formulas?**
    *   **Answer:** c) Using blue font for inputs and black font for formulas.
    *   **Explanation:** This color-coding convention is widely adopted to make models more transparent and easier to audit by clearly distinguishing between direct inputs (assumptions) and calculated outputs.

3.  **A "circular reference" in an Excel model most commonly occurs in a 3-statement model because:**
    *   **Answer:** b) Interest expense affects net income, which affects cash flow, which can affect the debt balance that determines interest expense.
    *   **Explanation:** This interdependency is the classic cause of circularity: Interest is calculated on debt, but debt levels (especially if a revolver or cash sweep is modeled) can change based on cash flow, which itself is reduced by interest expense.

4.  **If a company's Total Debt / EBITDA ratio increases from 3.0x to 5.0x, it generally signifies:**
    *   **Answer:** c) Increased financial risk and higher leverage.
    *   **Explanation:** A higher Debt/EBITDA ratio means the company has more debt relative to its operating cash flow (as approximated by EBITDA), indicating it would take more years of current cash flow to repay debt. This is a key indicator of increased financial risk.

5.  **Which type of analysis typically involves changing multiple input variables simultaneously to model a specific, plausible future state (e.g., a "recession case")?**
    *   **Answer:** c) Scenario Analysis
    *   **Explanation:** Scenario analysis involves creating different coherent sets of assumptions (e.g., base case, upside case, downside/recession case) to see how the company performs under varying, but internally consistent, future conditions.

6.  **The Fixed Charge Coverage Ratio (FCCR) is often considered more comprehensive than the Interest Coverage Ratio (TIE) for credit analysis because:**
    *   **Answer:** c) It typically includes other fixed charges like scheduled principal repayments and sometimes lease payments in its calculation.
    *   **Explanation:** FCCR aims to measure the ability to cover *all* mandatory fixed obligations (interest, principal, leases), not just interest, providing a more complete picture of cash flow available for fixed commitments.

7.  **When calculating a Debt Service Coverage Ratio (DSCR) for credit analysis, the capital expenditures (CapEx) figure used in the numerator (cash available for debt service, e.g., EBITDA - CapEx - Taxes) should ideally represent:**
    *   **Answer:** b) Maintenance CapEx required to sustain current operations.
    *   **Explanation:** Maintenance CapEx is the capital spending necessary to keep the business operating at its current level. Using total CapEx (which might include growth initiatives) could understate the cash flow actually available for servicing existing debt from ongoing operations.

**Part 2: True/False**

8.  **True or False: In a 3-statement model, the Cash Flow Statement is typically forecasted directly by projecting individual cash inflows and outflows using the "direct method."**
    *   **Answer:** False
    *   **Explanation:** While a direct cash flow forecast is possible, in an integrated 3-statement model, the Cash Flow Statement is usually derived indirectly from the forecasted Income Statement and the changes in the Balance Sheet accounts.

9.  **True or False: Supporting schedules, such as a Debt Schedule or PP&E Schedule, are used to keep the main financial statements cleaner and make complex calculations more transparent.**
    *   **Answer:** True
    *   **Explanation:** Supporting schedules house detailed calculations for items like debt amortization, interest expense, PP&E roll-forwards, etc., which prevents the main IS, BS, and CFS from becoming overly cluttered and complex.

10. **True or False: A Current Ratio of 0.8x indicates strong short-term liquidity for a company.**
    *   **Answer:** False
    *   **Explanation:** A Current Ratio below 1.0x (like 0.8x) indicates that current liabilities exceed current assets, suggesting potential difficulty in meeting short-term obligations. Generally, a ratio above 1.5x-2.0x is preferred by many analysts.

11. **True or False: Stress Testing involves analyzing the impact of a small change in a single key assumption on a model output.**
    *   **Answer:** False
    *   **Explanation:** This describes Sensitivity Analysis. Stress Testing involves analyzing the impact of *severe but plausible crisis scenarios*, often involving multiple adverse changes, to assess resilience under extreme conditions.

12. **True or False: Return on Invested Capital (ROIC) is primarily a measure of a company's short-term liquidity and ability to meet immediate obligations.**
    *   **Answer:** False
    *   **Explanation:** ROIC is a measure of a company's profitability and efficiency in using all its capital (debt and equity) to generate returns. Liquidity is measured by ratios like the Current Ratio or Quick Ratio.

**Part 3: Short Answer**

13. **List the four main categories of financial ratios used in credit analysis, as discussed in the module.**
    *   **Answer:**
        1.  Leverage Ratios
        2.  Coverage Ratios
        3.  Liquidity Ratios
        4.  Profitability Ratios

14. **Explain the purpose of a "Debt Schedule" in a 3-statement financial model. What key information does it typically track and calculate concerning a company's debt (e.g. revolver, term loans)?**
    *   **Answer:** The purpose of a Debt Schedule is to model a company's debt obligations in detail. For each debt instrument (like revolvers, term loans, bonds), it typically tracks:
        *   Beginning and ending balances.
        *   New borrowings (drawdowns).
        *   Scheduled principal repayments (amortization).
        *   Mandatory prepayments (e.g., from cash sweeps or asset sales).
        *   Optional prepayments.
        It calculates:
        *   Interest expense (both cash and any Payment-In-Kind/PIK interest) based on outstanding balances and interest rates.
        *   Total debt outstanding.
        This information then flows into the Income Statement (interest expense), Balance Sheet (debt balances), and Cash Flow Statement (changes in debt principal, cash interest paid).

15. **What is the final "check" that ensures a 3-statement model is balanced, and what balance sheet item often acts as the "plug" to achieve this balance, especially when a revolving credit facility is part of the capital structure?**
    *   **Answer:** The final "check" is ensuring the **Balance Sheet balances** (Total Assets = Total Liabilities + Equity), meaning the difference is zero or very close to zero.
    *   The **Cash and Cash Equivalents** line item on the Balance Sheet is the ultimate plug, as it's derived from the Cash Flow Statement's ending cash calculation. When a **revolving credit facility** is present, it often acts as an intermediate plug: draws on the revolver increase cash (and debt) to meet shortfalls or maintain a minimum cash balance, while repayments reduce cash (and debt). The revolver's activity directly impacts the final cash balance.

16. **A company has an EBIT of $20 million and Cash Interest Expense of $5 million. What is its Interest Coverage Ratio (TIE) using these figures? What does this ratio generally indicate about the company?**
    *   **Answer:**
        *   Interest Coverage Ratio (TIE) = EBIT / Cash Interest Expense = $20 million / $5 million = **4.0x**
        *   This ratio indicates that the company's operating income (before interest and taxes) is sufficient to cover its cash interest expense 4 times over. A ratio of 4.0x generally suggests a healthy ability to meet current interest obligations, providing a good cushion against a decline in earnings.

17. **Briefly describe the difference between Sensitivity Analysis and Scenario Analysis. Why would a credit analyst use both techniques when evaluating a company's financial projections?**
    *   **Answer:**
        *   **Sensitivity Analysis:** Examines the impact of changing *one single input variable* (assumption) at a time on a key output (e.g., how a 1% change in revenue growth affects Net Income or a specific ratio). It helps identify which assumptions are most critical to the model's outcomes.
        *   **Scenario Analysis:** Involves changing *multiple input variables simultaneously* to reflect a specific, plausible future state or narrative (e.g., a "base case," "recession case," "upside case"). It tests the model under different internally consistent sets of conditions.
        *   **Why use both:** A credit analyst uses **sensitivity analysis** to understand which individual assumptions are the most powerful drivers of risk and financial performance – these are the assumptions that need the most scrutiny and robust support. They use **scenario analysis** to understand how the company might perform under broader, more holistic (and often more realistic) changes in the operating environment, assessing overall resilience and the range of potential outcomes. Together, they provide a more comprehensive view of risk.

18. **When "normalizing" or "adjusting" EBITDA for credit analysis, what is an example of a 'non-recurring' or 'one-time' item that an analyst might add back or subtract, and what is the primary goal of making such adjustments?**
    *   **Answer:**
        *   **Example of a non-recurring item:** Large restructuring charges, significant gains or losses from the sale of assets not part of core operations, major litigation settlements, or costs associated with a natural disaster.
        *   **Primary goal:** The goal of making these adjustments is to arrive at a measure of EBITDA (or other earnings figures) that reflects the company's ongoing, sustainable operating performance and cash flow generation capability, free from distortions caused by unusual or one-off events. This "normalized" figure is considered more representative for comparing across periods and with peers, and for forecasting future ability to service debt.

---
