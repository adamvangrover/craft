# Capstone Project: The Apex Logistics Deal

Welcome to the final challenge of the Credit Risk Analyst program. You have been staffed on a new deal: a $150M financing package for **Apex Logistics**.

Your job is to act as the **Lead Credit Analyst**. You must evaluate the deal, identify the risks, and recommend whether BigBank should commit capital.

## The Scenario
Apex Logistics is growing fast, but their financials are messy. Management is optimistic about their new tech, but cash flow is tight. The proposed term sheet looks aggressive.

## Your Mission
Complete the following three tasks using the provided assets in the `assets/` folder.

### Task 1: The Financial Model
Open `assets/financials.csv` and build a simple 3-statement projection model.
*   **Objective:** Calculate the *actual* leverage and coverage ratios for 2021-2023.
*   **Critical Thinking:**
    *   EBITDA is declining while Revenue is rising. Why?
    *   Calculate "Free Cash Flow" (EBITDA - Capex - Change in Working Capital). Is it positive or negative?
    *   Look at the "Accounts Receivable" growth vs Revenue growth.

### Task 2: The Term Sheet Review
Read `assets/term_sheet.md`. This is the draft sent by the Borrower's Private Equity sponsor. It is *not* bank-friendly.
*   **Objective:** Identify at least **3 Red Flags** in the covenants or definitions.
*   **Hint:**
    *   Look at the **Leverage Ratio** covenant level. Compare it to the leverage you calculated in Task 1. Is there any cushion?
    *   Read the definition of **EBITDA** carefully. Are they adding back "imaginary" money?
    *   Check the **Dividend (Restricted Payments)** basket. Can they take money out of the company while owing you money?

### Task 3: The Credit Memo & Decision
Draft a 1-page Credit Memo (or just a bulleted email to your VP).
*   **Structure:**
    1.  **Recommendation:** Approve, Decline, or Approve with Conditions?
    2.  **Key Risks:** List the top 3 risks (e.g., Customer Concentration).
    3.  **Mitigants:** How are these risks offset? (Or are they?)
    4.  **Proposed Structural Changes:** What would you change in the Term Sheet to make this deal acceptable? (e.g., "Reduce max leverage to 4.5x", "Remove projected cost savings from EBITDA").

---

## Resources
*   [Financials (CSV)](./assets/financials.csv)
*   [Management Presentation (Transcript)](./assets/management_presentation.md)
*   [Draft Term Sheet](./assets/term_sheet.md)

## Final Deliverable
There is no automated grading here. This is a simulation of the real job. Your "grade" is whether you would have saved the bank from a bad loan, or helped the bank win a good one (safely).

*Self-Correction:* If you decided to **Approve** the deal as-is, go back and look at the Free Cash Flow and the Net 60 payment terms from their biggest customer. How will they pay back the debt?
