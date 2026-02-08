# Cash Flow Waterfall in Project Finance

> **Buy-Side Perspective:**
> The "Waterfall" defines the strict priority of payments. As a creditor, you must ensure that Operating Expenses and Senior Debt Service are paid *before* any cash leaks out to junior lenders or equity holders. A poorly defined waterfall is a major structural risk.

## The Priority of Payments

In a typical Project Finance structure, all revenue goes into a "Lockbox" or "Revenue Account" controlled by the Agent. It is then distributed strictly according to the Waterfall.

### Standard Waterfall Structure

1.  **Operating & Maintenance (O&M) Expenses:** Essential to keep the project running. If the plant stops, nobody gets paid.
2.  **Taxes:** Statutory obligations.
3.  **Senior Debt Interest:** Payment of interest to senior lenders.
4.  **Senior Debt Principal:** Scheduled amortization.
5.  **Debt Service Reserve Account (DSRA) Top-up:** Replenishing the reserve if it was drawn (typically 6 months of debt service).
6.  **Maintenance Reserve Account (MRA):** Funding for major lifecycle maintenance.
7.  **Junior / Mezzanine Debt Service:** Interest and principal on subordinate debt.
8.  **Distribution to Equity:** Dividends to sponsors (only if all covenants are met).

## Key Metrics

### Debt Service Coverage Ratio (DSCR)

$$ \text{DSCR} = \frac{\text{Cash Flow Available for Debt Service (CFADS)}}{\text{Debt Service (Principal + Interest)}} $$

*   **CFADS:** Revenue - O&M - Taxes. (Excludes non-cash items like Depreciation).
*   **Minimum DSCR:** The lowest DSCR encountered over the loan life. Lenders typically require >1.20x - 1.30x for infrastructure.
*   **Average DSCR:** The average coverage over the loan term.

### Loan Life Coverage Ratio (LLCR)

$$ \text{LLCR} = \frac{\text{NPV of CFADS over Loan Life}}{\text{Outstanding Debt Balance}} $$

Measures the project's ability to repay debt over the entire loan tenor, smoothing out period-to-period volatility.

### Project Life Coverage Ratio (PLCR)

$$ \text{PLCR} = \frac{\text{NPV of CFADS over Project Life}}{\text{Outstanding Debt Balance}} $$

Considers the "Tail" \u2013 the value remaining in the project after the debt is fully repaid. A longer tail provides a safety cushion for refinancing.

## Modeling the Waterfall

When building a PF model:
1.  **Calculate CFADS:** Start with Revenue, subtract OpEx and Taxes.
2.  **Apply Waterfall Logic:** Use `MIN()` functions to determine how much cash flows to each bucket.
    *   *Example:* `Senior_Interest_Paid = MIN(CFADS, Senior_Interest_Due)`
    *   *Remaining_Cash = CFADS - Senior_Interest_Paid`
3.  **Check Covenants:** Distributions to Equity (Step 8) are usually gated by a "Distribution Test" (e.g., DSCR > 1.20x for the past 12 months). If the test fails, cash is trapped in a "Cash Sweep" account.

> **Pro Tip:** Always scrutinize the "Permitted Investments" clause for the Reserve Accounts. You don't want your critical safety cushion invested in risky assets.
