> **Buy-Side Perspective:**
> "Base case" models are necessary but insufficient. A credit analyst earns their keep by understanding the "break points." How much can EBITDA margin compress before covenants are breached? What happens if interest rates rise another 200bps? Stress testing is not about predicting the future; it's about quantifying the margin of safety.

# Stress Testing & Scenario Analysis

## 1. The Difference: Sensitivity vs. Scenario

While often used interchangeably, they are distinct techniques:

1.  **Sensitivity Analysis:** Changing **one variable** at a time to see its impact.
    *   *Example:* "What happens to FCF if revenue growth is 0% instead of 5%?"
    *   *Goal:* Identify the "Key Risk Drivers" (e.g., is the model more sensitive to volume or price?).
2.  **Scenario Analysis:** Changing **multiple variables** simultaneously to model a specific cohesive event.
    *   *Example:* "Recession Scenario" (Revenue down 10%, Margins compress 200bps, Interest rates down 50bps).
    *   *Goal:* Understand the impact of a complex real-world shock.

## 2. Key Stress Variables

When stress testing a corporate credit model, focus on these levers:

| Variable | Stress Logic |
| :--- | :--- |
| **Revenue Growth** | Test for a cyclical downturn (e.g., -5% or -10% decline). |
| **EBITDA Margin** | Test for input cost inflation or pricing pressure (e.g., -200bps compression). |
| **Interest Rates** | Test floating rate exposure (e.g., Base Rate + 2.0%). |
| **Working Capital** | Test for a "cash crunch" (e.g., Days Receivables +15 days). |
| **CaPex** | Test for mandatory maintenance spend rising or growth projects going over budget. |

## 3. The "Break-Even" Analysis

Instead of just guessing stress levels, calculate the **Break-Even Point** for key metrics.

*   **Break-Even Revenue:** "How much can revenue fall before FCCR (Fixed Charge Coverage Ratio) drops below 1.0x?"
*   **Break-Even Margin:** "How low can EBITDA margins go before Net Leverage exceeds the covenant limit of 4.5x?"

### Example Calculation
*   *Current EBITDA:* $100M
*   *Current Interest:* $20M
*   *Covenant (Max Leverage 4.0x):* Debt is $300M.
*   *Required EBITDA:* $300M / 4.0x = $75M.
*   *Cushion:* $100M - $75M = $25M (or 25% decline).

## 4. Constructing Scenarios

### A. The "Downside Case"
This is the standard credit case. It assumes things go wrong, but not catastrophically so.
*   Revenue flat or slightly down.
*   Margins contract moderately.
*   No new M&A.
*   *Outcome:* The company should still be able to service debt (FCCR > 1.0x) and refinance.

### B. The "Liquidity Crisis" Case
Focuses entirely on cash flow and liquidity sources.
*   Revenue crashes significantly.
*   Suppliers cut payment terms (negative working capital shock).
*   Revolver availability is tested.
*   *Outcome:* Does the company run out of cash in the next 12-18 months?

## 5. Visualizing the Stress

<div class="mermaid">
graph TD
    A[Base Case Model] --> B{Apply Stress};
    B --> C[Sensitivity: Revenue -10%];
    B --> D[Sensitivity: Margins -2%];
    B --> E[Scenario: Global Recession];
    C --> F[Check Covenants];
    D --> F;
    E --> F;
    F -- Pass --> G[Investment Grade / Strong];
    F -- Fail --> H[High Yield / Distressed Risk];
</div>

## 6. Summary

A robust credit memo always includes a downside case. If an investment only works when everything goes right (the "Goldilocks" scenario), it is not a sound credit investment. You must know where the cliff edge is, even if you don't think the company will walk off it.

---

### Glossary Terms

*   **Sensitivity Analysis:** A technique used to determine how different values of an independent variable impact a particular dependent variable under a given set of assumptions.
*   **Scenario Analysis:** A process of analyzing possible future events by considering alternative possible outcomes (scenarios).
*   **Break-Even Analysis:** Identifying the specific point at which a metric (like EBITDA or Revenue) falls low enough to trigger a default or covenant breach.
*   **Margin of Safety:** The difference between the intrinsic value (or break-even point) and the current market price or performance level.
