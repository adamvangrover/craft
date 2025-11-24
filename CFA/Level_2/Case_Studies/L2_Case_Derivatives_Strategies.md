# CFA Level 2 Case Study: Derivatives Hedging Strategies

> **Buy-Side Perspective:**
> Derivatives are not just for speculation; they are vital risk management tools. A credit analyst must understand how a borrower uses derivatives to hedge FX, interest rate, and commodity risks. Improper hedging (or lack thereof) can lead to massive liquidity crises (e.g., margin calls).

## Scenario

**GlobalTech Inc.** is a US-based technology manufacturer.
*   **Functional Currency:** USD.
*   **Exposure:** It expects to receive **€10,000,000** from a European customer in **3 months**.
*   **Current Spot Rate ($/€):** 1.1000
*   **3-Month Forward Rate ($/€):** 1.1050
*   **3-Month Put Option on Euro:** Strike = 1.1000, Premium = $0.02 per Euro.

**Management Concern:** The CFO is worried the Euro will depreciate against the Dollar, reducing the USD value of the receivable.

## Question 1: Forward Hedge

If GlobalTech enters into a forward contract to sell €10,000,000 in 3 months, what is the guaranteed USD amount it will receive?

**Analysis:**
*   A forward contract locks in the rate today.
*   Action: Sell Euro forward (Short Forward).
*   Rate: 1.1050
*   Proceeds: €10,000,000 * 1.1050 = **$11,050,000**

**Outcome:** GlobalTech has eliminated FX risk. It will receive $11.05m regardless of where the spot rate goes.

## Question 2: Option Hedge (Protective Put)

Management wants to benefit if the Euro appreciates but be protected if it crashes. They decide to buy put options on the Euro.

*   **Cost:** €10,000,000 * $0.02 = **$200,000** (paid upfront).
*   **Strike:** 1.1000

**Scenario A: Euro Crashes to 1.0500**
*   Spot Value: €10m * 1.05 = $10,500,000
*   Option Exercise: Yes. Sell at Strike (1.1000).
*   Option Payoff: (1.1000 - 1.0500) * €10m = $500,000
*   **Net Proceeds:** $10,500,000 (Spot) + $500,000 (Option) - $200,000 (Cost) = **$10,800,000**

**Scenario B: Euro Rallies to 1.1500**
*   Spot Value: €10m * 1.15 = $11,500,000
*   Option Exercise: No (Expire Worthless).
*   **Net Proceeds:** $11,500,000 (Spot) - $200,000 (Cost) = **$11,300,000**

## Comparison

| Strategy | Downside (Spot = 1.05) | Upside (Spot = 1.15) | Risk Profile |
| :--- | :--- | :--- | :--- |
| **No Hedge** | $10,500,000 | $11,500,000 | Full Risk |
| **Forward Hedge** | $11,050,000 | $11,050,000 | No Risk, No Upside |
| **Option Hedge** | $10,800,000 | $11,300,000 | Limited Downside, Retain Upside (minus cost) |

> **Analyst Takeaway:**
> The Forward hedge provides the highest certainty. The Option hedge is expensive ($200k insurance premium) but allows participation in upside. A credit analyst would view the Forward hedge as the most prudent for a company with tight liquidity, whereas a cash-rich company might prefer the Option strategy.
