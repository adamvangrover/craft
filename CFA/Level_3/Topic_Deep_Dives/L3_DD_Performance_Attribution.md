# CFA Level III Deep Dive: Performance Evaluation and Attribution

## Overview
This deep dive covers performance evaluation and attribution, crucial topics in the CFA Level III curriculum. Performance evaluation assesses how well a portfolio has performed, while attribution analyzes the sources of that performance relative to a benchmark.

*(Placeholder for detailed content. This section will cover measures of return and risk, the Capital Asset Pricing Model (CAPM) and multi-factor models for risk adjustment, performance attribution methodologies for equity and fixed income, and the Global Investment Performance Standards (GIPS).)*

## Key Concepts in Performance Evaluation

### 1. Measures of Return
*   **Holding Period Return (HPR):** (Ending Value - Beginning Value + Income) / Beginning Value.
*   **Time-Weighted Rate of Return (TWRR):** Measures compound growth. Preferred for evaluating manager performance as it's not affected by cash inflows/outflows.
    *   Calculated by linking HPRs for sub-periods: (1+TWRR)^n = (1+HPR1) * (1+HPR2) * ... * (1+HPRn).
*   **Money-Weighted Rate of Return (MWRR):** Internal rate of return (IRR) on all cash flows. Affected by timing and size of cash flows. More appropriate for evaluating overall fund performance from the client's perspective.

### 2. Measures of Risk
*   **Standard Deviation (σ):** Total risk.
*   **Beta (β):** Systematic risk relative to the market.
*   **Downside Deviation:** Measures volatility of returns below a minimum acceptable return (MAR).
*   **Value at Risk (VaR):** Maximum loss expected (e.g., 95% confidence) over a specific time horizon.
*   **Tracking Error (Active Risk):** Standard deviation of active returns (Portfolio Return - Benchmark Return).

### 3. Risk-Adjusted Performance Measures
*   **Sharpe Ratio:** (Rp - Rf) / σp. Measures excess return per unit of total risk.
*   **Treynor Ratio:** (Rp - Rf) / βp. Measures excess return per unit of systematic risk.
*   **Jensen's Alpha (α):** Rp - [Rf + βp * (Rm - Rf)]. Measures excess return over CAPM-predicted return.
*   **Information Ratio (IR):** (Rp - Rb) / Tracking Error. Measures active return per unit of active risk. (Rb = Benchmark Return).
*   **M² (Modigliani-Modigliani):** Adjusts portfolio return to match the market's total risk, then compares to market return.

## Performance Attribution

**Objective:** To identify the sources of a portfolio's active return (outperformance or underperformance) relative to its benchmark.

### 1. Equity Performance Attribution
*   **Brinson-Fachler (BF) Model (Macro Attribution):**
    *   **Asset Allocation:** Impact of over/underweighting sectors/asset classes relative to the benchmark.
        *   Contribution = Σ (Portfolio Weight_i - Benchmark Weight_i) * (Benchmark Return_i - Total Benchmark Return).
    *   **Security Selection:** Impact of choosing securities within sectors/asset classes that outperform/underperform the sector/asset class benchmark.
        *   Contribution = Σ (Benchmark Weight_i) * (Portfolio Sector Return_i - Benchmark Sector Return_i).
    *   **Interaction (often combined with selection):** Captures the combined effect of allocation and selection decisions.
        *   Contribution = Σ (Portfolio Weight_i - Benchmark Weight_i) * (Portfolio Sector Return_i - Benchmark Sector Return_i).
*   **Micro Attribution:** Further decomposes security selection into more granular factors (e.g., style, size).

### 2. Fixed Income Performance Attribution
*   More complex due to multiple sources of return (yield income, price changes from duration, convexity, curve reshaping, spread changes).
*   **Common Factors:**
    *   **Expected Interest Rate Effect:** Impact of overall market yield changes (duration effect).
    *   **Interest Rate Management Effect:** Impact of active duration/curve positioning.
    *   **Sector/Quality Effect:** Impact of over/underweighting sectors or credit qualities.
    *   **Security Selection Effect:** Impact of specific bond selection.
    *   **Trading Activity.**

## Global Investment Performance Standards (GIPS)

*   **Purpose:** Ethical standards for calculating and presenting investment performance to ensure fair representation and full disclosure.
*   **Key Objectives:**
    *   Promote comparability among investment management firms.
    *   Facilitate transparency.
    *   Build investor confidence.
*   **Requirements:** Firms must define their "firm" and "composites" (aggregations of discretionary portfolios with similar strategies). Calculations and reporting must adhere to GIPS guidelines.

---

*This page is currently a placeholder and will be expanded with detailed calculation examples for attribution, explanations of different attribution models, and further details on GIPS compliance.*
