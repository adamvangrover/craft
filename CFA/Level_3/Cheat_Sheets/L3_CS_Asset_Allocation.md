# CFA Level 3 Cheat Sheet: Asset Allocation

**Core Principle:** Asset allocation is the process of deciding how to distribute a portfolio's investments among various asset classes (e.g., equities, fixed income, real estate, alternatives) to meet the investor's objectives and constraints. It is the primary determinant of portfolio risk and return over the long term.

## I. Overview of Asset Allocation

*   **Strategic Asset Allocation (SAA):** Establishes long-term target weights for asset classes based on investor's IPS and long-term capital market expectations (CMEs). Reviewed periodically or when major changes occur.
*   **Tactical Asset Allocation (TAA):** Short-term deviations from SAA to capitalize on perceived temporary market inefficiencies or opportunities. Involves market timing or factor timing.
*   **Importance of Asset Allocation:** Studies show that asset allocation decisions account for a very large portion (often >90%) of a portfolio's return variability over time.
*   **Steps in the Asset Allocation Process:**
    1.  Determine investor objectives and constraints (from IPS).
    2.  Develop capital market expectations (risk, return, correlation for asset classes).
    3.  Determine the SAA (using optimization or other methods).
    4.  Consider TAA (if applicable).
    5.  Implement, monitor, and rebalance the portfolio.

## II. Asset Classes for Allocation

*   **Criteria for Specifying Asset Classes:**
    1.  Assets within an asset class should have similar risk and return characteristics.
    2.  Correlations between asset classes should be relatively low (for diversification benefits).
    3.  Asset classes should cover a significant portion of the investable universe.
    4.  Sufficient liquidity for investment and rebalancing.
*   **Major Asset Classes:** Domestic equity, international equity (developed, emerging), domestic fixed income, international fixed income, real estate, commodities, private equity, hedge funds, cash.
*   Sub-asset classes can also be defined (e.g., large-cap vs. small-cap equity, government vs. corporate bonds).

## III. Approaches to Strategic Asset Allocation (SAA)

### A. Mean-Variance Optimization (MVO) - Markowitz
*   **Goal:** Find portfolios on the efficient frontier (highest expected return for a given level of risk, or lowest risk for a given expected return).
*   **Inputs:** Expected returns, variances (or standard deviations), and covariances (or correlations) for all asset classes.
*   **Output:** Set of optimal portfolio weights.
*   **Limitations:**
    1.  **Sensitivity to Inputs:** Output (weights) can be highly sensitive to small changes in input assumptions (especially expected returns). "Garbage in, garbage out."
    2.  **Concentrated Portfolios:** May lead to highly concentrated, unintuitive allocations (e.g., large weights in few asset classes, zero weight in others).
    3.  **Ignores Skewness and Kurtosis:** Assumes returns are normally distributed (or investors only care about mean and variance).
    4.  **Single-Period Framework:** Does not explicitly account for multi-period nature of investing or changing CMEs.
    5.  **Ignores Liabilities:** Standard MVO is asset-only.
*   **Addressing MVO Limitations:**
    *   **Constraints:** Add constraints (e.g., min/max weights per asset class) to get more diversified/realistic portfolios.
    *   **Reverse Optimization (Black-Litterman implied returns):** Start with global market portfolio weights, derive implied equilibrium returns. Then adjust these based on analyst's views. More stable.
    *   **Resampled Efficient Frontier (Michaud):** Uses Monte Carlo simulation to generate many efficient frontiers based on ranges of input estimates. Averages the results to get more robust allocations.
    *   **Robust Optimization:** Incorporates estimation error directly into optimization process.

### B. Risk Budgeting
*   Allocates portfolio's total risk (e.g., standard deviation, VaR, tracking error) among asset classes or investment managers.
*   Focuses on contribution of each asset class to overall portfolio risk.
*   Can lead to different allocations than MVO, especially if correlations change.

### C. Factor-Based Asset Allocation
*   Allocates based on exposure to desired systematic risk factors (e.g., value, size, momentum, inflation, interest rates) rather than traditional asset class labels.
*   Aims to build a more diversified portfolio in terms of underlying risk drivers.
*   Requires identifying relevant factors and estimating their risk premiums and correlations.

### D. Goals-Based Investing (GBI) / Liability-Relative Asset Allocation
*   Portfolio is structured to meet specific investor goals or liabilities.
*   Often involves segmenting portfolio into sub-portfolios, each dedicated to a specific goal (e.g., "safety" module for essential needs, "aspirational" module for discretionary goals).
*   Asset allocation for each module tailored to that goal's risk/return requirements and time horizon.
*   Similar to Liability-Driven Investing (LDI) for institutions.

### E. Heuristic Approaches / Experience-Based
*   Simpler rules of thumb (e.g., 60/40 stock/bond split, 100 minus age in stocks).
*   May not be optimal but can be a reasonable starting point.

## IV. Tactical Asset Allocation (TAA)

*   **Goal:** Generate short-term excess returns by deviating from SAA based on market forecasts.
*   **Approaches:**
    *   **Market Timing:** Shifting overall exposure to risky assets (e.g., increase equity allocation if market expected to rise).
    *   **Sector/Country/Style Rotation:** Over/underweighting specific segments.
    *   **Valuation-Based TAA:** Overweight undervalued asset classes, underweight overvalued ones.
    *   **Momentum-Based TAA:** Follow recent trends.
*   **Requires Skill:** TAA is difficult to execute successfully and consistently. High transaction costs can erode benefits.
*   **Implementation:** Often through ETFs, futures, or swaps for quick and low-cost adjustments.
*   **TAA vs. SAA:** SAA is long-term policy; TAA is short-term opportunistic.

## V. Asset Allocation for Specific Investor Types

### A. Individual Investors
*   **Life-Cycle Approach:** Asset allocation changes over investor's lifetime. Younger -> higher equity allocation (longer time horizon, higher risk capacity). Older/Retired -> lower equity, higher fixed income/cash (shorter horizon, income needs, lower risk capacity).
*   **Goals-Based Approach:** (Discussed above).
*   **Tax Considerations:** Crucial. Asset location (taxable vs. tax-advantaged accounts). Tax loss harvesting.
*   **Behavioral Biases:** Can significantly impact asset allocation decisions. Advisor must manage these.

### B. Institutional Investors
1.  **Defined Benefit Pension Plans:**
    *   **LDI Focus:** Match assets to PV of future pension liabilities. Duration matching, cash flow matching.
    *   **Surplus Management:** `Surplus = Assets - PV(Liabilities)`. Goal is to maximize surplus return for a given level of surplus risk.
    *   Asset allocation depends on funded status, plan features (e.g., active vs. frozen), sponsor's financial strength, regulatory environment.
2.  **Endowments and Foundations:**
    *   **Long Time Horizon:** Often perpetual. Can take significant equity risk.
    *   **Spending Needs:** Must generate returns to cover annual spending (e.g., 4-5% of assets) and preserve purchasing power of corpus (grow with inflation).
    *   Often have higher allocations to alternative investments (e.g., Yale model).
3.  **Insurance Companies:**
    *   **Life Insurance:** Long-duration liabilities. Invest in long-duration fixed income, some equity. ALM focus.
    *   **Property & Casualty (P&C) Insurance:** Shorter, less predictable liabilities. More conservative, liquid investments. Higher allocation to fixed income and cash.
4.  **Banks:**
    *   Manage assets (loans, securities) against liabilities (deposits, borrowed funds).
    *   Focus on net interest margin, liquidity management, regulatory capital.
    *   Asset allocation driven by ALM and regulatory constraints.
5.  **Sovereign Wealth Funds (SWFs):**
    *   Diverse objectives (e.g., stabilization, savings, development). Asset allocation varies accordingly.

## VI. Rebalancing the Portfolio

*   Bringing portfolio back to its target SAA weights after market movements cause drifts.
*   **Reasons for Rebalancing:** Control risk, maintain desired asset class exposures.
*   **Rebalancing Strategies:**
    1.  **Calendar Rebalancing:** Rebalance at fixed intervals (e.g., quarterly, annually). Simple.
    2.  **Percentage-Range (Corridor) Rebalancing:** Rebalance when an asset class weight deviates by a predetermined percentage or absolute amount from its target (e.g., +/- 5% of target weight, or if equity > 65%).
        *   Wider corridors -> less frequent trading, lower costs, but more deviation from SAA.
        *   Narrower corridors -> tighter SAA adherence, but higher costs.
    *   Corridor width depends on: Transaction costs, risk tolerance, volatility of asset class, correlation with other assets.
*   **Considerations:** Transaction costs, taxes (especially in taxable accounts - rebalance with inflows/outflows or tax-loss harvesting where possible).

## VII. Integrating Capital Market Expectations with Asset Allocation

*   SAA is based on **long-term** CMEs.
*   TAA uses **short-term** CMEs or market views.
*   Consistency between CMEs and the chosen asset allocation model is important.
*   Scenario analysis and stress testing of SAA based on different CME environments.

**Key for L3 Asset Allocation:**
*   **IPS Integration:** SAA must flow logically from client's IPS.
*   **Understanding Different Approaches:** MVO, risk budgeting, goals-based, and their pros/cons.
*   **Practical Implementation:** Rebalancing, managing constraints.
*   **Investor-Specific Needs:** Tailoring AA to different types of individual and institutional clients.
*   **Dynamic Nature:** AA is not a one-time decision; requires monitoring and adjustment.

This cheat sheet covers the core concepts in L3 Asset Allocation. Focus on the strategic decision-making process and how it applies to various investor types. Good luck!I will continue with the Level 3 Cheat Sheets. Next is `L3_CS_Risk_Management.md`.
