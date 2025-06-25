# CFA Level 3 Cheat Sheet: Performance Evaluation and Attribution

**Core Principle:** Performance evaluation assesses how well a portfolio has performed relative to its objectives and benchmark, considering both return and risk. Attribution analysis decomposes performance into sources (e.g., asset allocation, security selection) to understand drivers of outperformance or underperformance.

## I. The Performance Evaluation Process

1.  **Measure Absolute and Relative Returns:** Calculate portfolio and benchmark returns over evaluation period.
2.  **Adjust Returns for Risk:** Use appropriate risk-adjusted performance measures.
3.  **Attribute Performance:** Determine sources of value added or subtracted.
4.  **Communicate Results:** Report to client/stakeholders, explain findings, recommend actions.

*   **Key Inputs:** Portfolio holdings and transactions, benchmark data, risk-free rate, capital market expectations, IPS.
*   **Time-Weighted vs. Money-Weighted Returns:**
    *   **Time-Weighted Return (TWRR):** Measures manager's skill independent of external cash flows. Preferred for manager evaluation. Required by GIPS for composites.
    *   **Money-Weighted Return (MWRR):** IRR of portfolio, reflects impact of timing/size of client cash flows. Useful for evaluating overall success of client's investment program.

## II. Performance Measurement: Risk-Adjusted Returns

(Review from L1/L2, application focus at L3)
*   **Sharpe Ratio:** `(Rp - Rf) / σp`.
    *   Measures excess return per unit of total risk. Best for evaluating overall portfolio if it's the investor's entire wealth.
    *   Limitation: Assumes normal distribution, uses total risk (may not be relevant if portfolio is diversified part of larger allocation).
*   **Treynor Ratio:** `(Rp - Rf) / βp`.
    *   Measures excess return per unit of systematic risk (beta). Best for evaluating well-diversified portfolios that are part of a larger diversified portfolio.
    *   Limitation: Requires accurate beta estimate, assumes CAPM is correct model.
*   **Information Ratio (IR):** `(Rp - Rb) / σ(Rp - Rb)` or `Active Return / Tracking Error`.
    *   Measures active return per unit of active risk. Key for evaluating active managers. Higher IR = more consistent alpha.
    *   `IR ≈ IC * sqrt(BR)` (Fundamental Law of Active Management).
*   **Jensen's Alpha (α):** `αp = Rp - [Rf + βp * (Rm - Rb_CAPM)]`. (Often `Rm - Rf` if benchmark is market).
    *   Measures excess return over what CAPM predicts for given beta.
    *   Can also be used with multifactor models: `αp = Rp - [Rf + Σ(β_factor * Factor_Premium)]`.
*   **M-squared (M²):** `(Rp - Rf) * (σ_benchmark / σp) - (R_benchmark - Rf)`.
    *   Compares portfolio's risk-adjusted return to benchmark by creating a hypothetical portfolio (P*) by leveraging/deleveraging the managed portfolio to match benchmark's total risk. M² is the difference in returns (P* - Benchmark).
    *   Positive M² = outperformance. Ranks same as Sharpe ratio.
*   **Sortino Ratio:** `(Rp - R_target) / Downside Deviation`.
    *   Similar to Sharpe, but uses downside deviation (volatility of returns below a minimum acceptable return/target) instead of total standard deviation. Better for non-normal distributions with negative skew.
*   **Capture Ratios:**
    *   **Upside Capture Ratio:** `(Portfolio Return in Up Markets / Benchmark Return in Up Markets) * 100`. >100 is good.
    *   **Downside Capture Ratio:** `(Portfolio Return in Down Markets / Benchmark Return in Down Markets) * 100`. <100 is good.
    *   **Capture Ratio:** `Upside Capture / Downside Capture`. >1 is good.

## III. Performance Attribution

Decomposes portfolio performance relative to a benchmark to identify sources of active return.

### A. Macro Attribution (Fund Sponsor Level)
Analyzes overall fund performance relative to strategic policy benchmark, considering:
1.  **Policy Allocations (SAA):** Impact of long-term strategic asset allocation decisions.
2.  **Tactical Asset Allocation (TAA):** Impact of short-term deviations from SAA.
3.  **Security Selection:** Impact of individual security choices within asset classes (by underlying managers).
4.  **Fund Sponsor's Investment Style / Manager Selection.**

### B. Micro Attribution (Manager Level)
Focuses on individual portfolio manager's decisions.

1.  **Equity Performance Attribution (Brinson Model or similar):**
    *   Decomposes active return into:
        *   **Allocation Effect:** Impact of over/underweighting sectors or asset classes relative to benchmark.
            `Allocation_i = (w_pi - w_bi) * (R_bi - R_b)`
            (Weight diff * (Benchmark sector return - Overall benchmark return))
        *   **Selection Effect (Security Selection):** Impact of choosing securities within sectors that outperform/underperform sector benchmark.
            `Selection_i = w_bi * (R_pi - R_bi)`
            (Benchmark sector weight * (Portfolio sector return - Benchmark sector return))
        *   **Interaction Effect (often combined or allocated):** Joint effect of allocation and selection.
            `Interaction_i = (w_pi - w_bi) * (R_pi - R_bi)`
    *   Total Active Return = Sum of (Allocation + Selection + Interaction) over all sectors/groups.
    *   Can also use factor-based attribution if portfolio uses factor tilts.

2.  **Fixed Income Performance Attribution:** More complex due to multiple sources of return.
    *   **Exposure Decomposition (Duration-Based):**
        *   **Expected Return (Implied by initial yield curve):** Return if yields unchanged.
        *   **Interest Rate Effect:** Impact of changes in overall interest rate level (parallel shifts).
            `≈ -Duration * ΔYield`.
        *   **Yield Curve Effect:** Impact of changes in yield curve shape (slope, curvature). Requires analysis of exposure to different parts of curve (key rate durations).
        *   **Spread Effect (Sector/Quality Effect):** Impact of changes in credit spreads for different sectors/qualities.
        *   **Security Selection Effect:** Impact of choosing specific bonds that outperform/underperform their sector/quality peers after accounting for other factors.
        *   **Currency Effect (for international bonds).**
    *   **Yield-Based Decomposition (Simpler, less precise):**
        *   Income Return (Yield).
        *   Price Return (Duration * ΔYield + Convexity Effect + Spread Effect).

### C. Attribution for Global Portfolios
*   Adds currency allocation and currency selection effects.
*   `Return_domestic = Return_local_asset + Return_currency + Return_hedging_overlay (if any)`.
*   Attribution can be done at asset level, currency level, or combined.

## IV. Manager Selection and Evaluation

*   **Style Analysis (Sharpe):** Regress manager returns against returns of various style indexes (e.g., large-cap growth, small-cap value) to determine manager's effective style exposures.
    *   Helps identify style drift and understand true sources of return.
*   **Evaluating Manager Quality:**
    *   **Quantitative:** Track record (IR, alpha), risk metrics, peer group analysis.
    *   **Qualitative:** Investment philosophy/process, team, firm stability, risk controls, alignment of interest (fees, co-investment). (As covered in Equity PM / AI PM).
*   **Type I Error (Hiring/Retaining Bad Manager):** Based on luck/random good performance.
*   **Type II Error (Firing/Not Hiring Good Manager):** Based on bad luck/random poor performance.
*   Statistical significance of alpha is hard to achieve with typical track record lengths.

## V. Global Investment Performance Standards (GIPS) in Performance Evaluation

*   GIPS provides ethical framework for calculating and presenting performance, ensuring fair representation and comparability. (Covered in detail in Ethics/GIPS cheat sheet).
*   **Key for Evaluation:**
    *   Firms claim compliance firm-wide.
    *   Composites are aggregations of actual, fee-paying, discretionary portfolios with similar strategy.
    *   Time-weighted returns generally required.
    *   Numerous disclosures aid interpretation.
    *   Verification provides additional credibility.
*   When evaluating a manager claiming GIPS compliance, analysts should review the GIPS Composite Report (formerly GIPS-compliant presentation).

## VI. Appraisal of Portfolio Performance

*   **Beyond Numbers:** Performance evaluation is not just about calculating ratios.
*   **Context Matters:**
    *   Were objectives in IPS met?
    *   Was risk taken consistent with risk tolerance and IPS guidelines?
    *   Were results due to skill or luck? (Consistency, IC, BR).
    *   Were market conditions unusual?
    *   Were there any changes in manager, strategy, or client circumstances?
*   **Qualitative Assessment:** Review manager's adherence to stated process, quality of communication, responsiveness.

**Key for L3 Performance Evaluation & Attribution:**
*   **Holistic Evaluation:** Combine quantitative measures with qualitative assessment.
*   **Understanding Attribution Models:** Know how to calculate and interpret allocation, selection effects for equity; understand complexities for fixed income.
*   **GIPS Awareness:** Be able to assess if performance presentation seems fair and what GIPS compliance implies.
*   **Actionable Insights:** Evaluation should lead to decisions (e.g., retain/fire manager, adjust strategy, update IPS).

This cheat sheet covers the core concepts in L3 Performance Evaluation and Attribution. Focus on the practical application of these tools to assess investment results thoroughly and fairly. Good luck!This completes the planned cheat sheets for Level 3. I have now created:

*   `L3_CS_Behavioral_Finance.md`
*   `L3_CS_Ethical_and_Professional_Standards.md` (includes GIPS overview)
*   `L3_CS_Economics_Capital_Market_Expectations.md`
*   `L3_CS_Equity_Portfolio_Management.md`
*   `L3_CS_Fixed_Income_Portfolio_Management.md`
*   `L3_CS_Alternative_Investments_Portfolio_Management.md`
*   `L3_CS_Derivatives_and_Currency_Management.md`
*   `L3_CS_Asset_Allocation.md`
*   `L3_CS_Risk_Management.md`
*   `L3_CS_Performance_Evaluation_and_Attribution.md`

And one deep dive:
*   `L3_DD_IPS_Construction_Private_Wealth.md`

The next sub-step in the plan for "Complete Level 3 Content Generation" is to: "Develop 3-4 more key Topic Deep Dives for Level 3".

I will start with `L3_DD_Asset_Allocation_Mean_Variance.md`.
