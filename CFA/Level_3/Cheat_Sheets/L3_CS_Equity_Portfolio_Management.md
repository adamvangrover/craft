# CFA Level 3 Cheat Sheet: Equity Portfolio Management

**Core Principle:** Level 3 Equity Portfolio Management focuses on the practical construction and management of equity portfolios, including passive vs. active strategies, portfolio construction techniques, and managing different equity styles and international exposures.

## I. Passive vs. Active Equity Investing

*   **Passive Equity Investing (Indexing):**
    *   **Goal:** Replicate the performance of a specific market index (benchmark).
    *   **Rationale:** Belief in market efficiency, lower costs, tax efficiency.
    *   **Methods of Index Replication:**
        1.  **Full Replication:** Hold all securities in the index in exact proportion to their index weights.
            *   Pros: Low tracking error. Cons: High transaction costs, difficult for broad/illiquid indexes.
        2.  **Stratified Sampling (Cell Matching):** Divide index into cells based on characteristics (e.g., sector, size, style). Sample securities from each cell to match cell weights.
            *   Pros: Lower costs than full replication. Cons: Higher tracking error.
        3.  **Optimization:** Use quantitative models to find a portfolio that minimizes tracking error relative to the index, subject to constraints.
            *   Pros: Can handle complex constraints, potentially lower tracking error than stratified sampling for a given number of stocks. Cons: Can be complex, model risk.
    *   **Tracking Error (Active Risk):** Standard deviation of (Portfolio Return - Benchmark Return). Key measure for passive managers (aim for low TE).
    *   **Sources of Tracking Error:** Fees, transaction costs, cash drag, sampling, dividend timing.
    *   **Exchange-Traded Funds (ETFs):** Common vehicle for passive equity investing.
*   **Active Equity Investing:**
    *   **Goal:** Outperform a benchmark on a risk-adjusted basis (generate positive alpha).
    *   **Rationale:** Belief in market inefficiencies, ability to identify mispriced securities or time market/factors.
    *   **Active Return (Alpha):** `Rp - Rb`.
    *   **Information Ratio (IR):** `(Rp - Rb) / Tracking Error`. Measures skill of active manager. `IR ≈ IC * sqrt(BR)`.
    *   **Active Share:** Percentage of portfolio holdings that differ from benchmark holdings. Higher active share = more active.
    *   **Styles of Active Management:**
        *   **Value Investing:** Focus on undervalued stocks (low P/E, P/B, high dividend yield).
        *   **Growth Investing:** Focus on companies with high growth potential (high earnings growth, sales growth).
        *   **Market Cap Based:** Small-cap, mid-cap, large-cap.
        *   **Contrarian Investing:** Investing against prevailing market sentiment.
        *   **Activist Investing:** Taking significant stakes to influence company management/strategy.

## II. Equity Investment Styles

*   **Value Style:**
    *   Characteristics: Low P/E, low P/B, high dividend yield, low price/cash flow. Often mature companies, potentially out of favor.
    *   Rationale: Belief that market overreacts to negative news, leading to undervaluation. Mean reversion.
    *   Risks: Value traps (stocks that are cheap for good reason and remain cheap), may underperform in growth-led markets.
*   **Growth Style:**
    *   Characteristics: High P/E, high P/B, low/no dividend yield, high expected earnings growth, high sales growth. Often innovative companies in growing industries.
    *   Rationale: Belief that market underappreciates long-term growth potential.
    *   Risks: High valuations may not be sustained if growth disappoints, sensitive to interest rate increases.
*   **Market-Oriented (Blend/Core) Style:**
    *   Portfolio resembles broad market index. May tilt slightly towards value or growth.
*   **Style Drift:** Manager deviates from stated investment style. Can make portfolio construction and manager selection difficult.
*   **Style Indexes:** Benchmarks for value, growth, and market-cap styles (e.g., Russell Value/Growth Indexes, S&P Style Indexes).

## III. Portfolio Construction Approaches

### A. Fundamental Approaches
1.  **Bottom-Up Security Selection:** Focus on individual company analysis (valuation, fundamentals) to find mispriced stocks. Portfolio is aggregation of best ideas. Sector/country weights are residuals.
2.  **Top-Down Approach:** Start with macroeconomic analysis to determine attractive countries/sectors, then select stocks within those.
3.  **Factor-Based Investing (Smart Beta / Strategic Beta):**
    *   Systematically tilt portfolio towards factors historically associated with higher risk-adjusted returns (e.g., value, size, momentum, quality, low volatility, dividend yield).
    *   Can be implemented passively (factor indexes) or actively (dynamic factor timing).
    *   Benefits: Potential for enhanced returns, diversification, transparency, lower cost than traditional active.
    *   Risks: Factors can underperform for extended periods, data mining concerns, crowding.

### B. Quantitative Approaches
*   Use models and data to make investment decisions.
*   **Screening:** Filter universe of stocks based on predefined criteria (e.g., low P/E, high ROE).
*   **Multifactor Models:** Use multiple factors to rank stocks or forecast returns.
*   **Algorithmic Trading:** Automated execution of trades based on pre-set rules. High-frequency trading (HFT) is a subset.

### C. Long/Short Strategies
*   Take long positions in undervalued stocks and short positions in overvalued stocks.
*   Aims to generate alpha from both long and short side, potentially with reduced market exposure.
*   **Market Neutral:** Aim for zero beta (zero net market exposure). Returns primarily from security selection skill.
*   **Equity Hedge Funds:** Often employ long/short strategies.

## IV. Managing Concentrated Equity Positions

*   **Concentrated Position:** Significant portion of portfolio value in a single stock (e.g., employer stock, inherited stock).
*   **Risks:** High unsystematic risk, lack of diversification, potential for large losses.
*   **Objectives in Managing Concentrated Positions:**
    1.  Reduce risk.
    2.  Generate liquidity.
    3.  Optimize tax efficiency.
*   **Strategies:**
    1.  **Outright Sale:** Simplest, but may trigger large capital gains tax.
    2.  **Staged Sales Over Time:** Spread tax liability, but prolongs risk exposure.
    3.  **Hedging Strategies (using derivatives):**
        *   **Short Sale Against the Box (less common now due to tax rules in some jurisdictions):** Lock in price, defer tax.
        *   **Equity Forward Sale Contract:** Lock in future sale price.
        *   **Purchasing Put Options:** Provide downside protection (protective put). Costly.
        *   **Collar Strategy:** Buy put (floor) + Sell call (cap). Often zero-cost collar. Limits upside and downside.
    4.  **Monetization Strategies (borrow against position):**
        *   Margin loan against shares.
        *   Loan against a prepaid variable forward (PVF).
    5.  **Yield Enhancement:** Write covered calls against the position to generate income. Caps upside.
    6.  **Tax-Optimized Strategies:**
        *   Gifting to charity or family members.
        *   Exchange funds (swap shares for diversified portfolio - for qualified investors).
*   Consider client's emotional attachment, tax basis, and overall financial situation.

## V. International Equity Investing

*   **Benefits:** Diversification (imperfect correlation between markets), exposure to higher growth economies/sectors.
*   **Risks:**
    *   **Currency Risk (Exchange Rate Risk):** Fluctuations in exchange rates affect returns.
        *   `Return_domestic = (1 + Return_local) * (1 + Return_currency) - 1`.
        *   Can be hedged using currency forwards, futures, options, swaps.
    *   **Political Risk:** Government instability, expropriation, changes in laws/taxes.
    *   **Economic Risk:** Recessions, inflation in foreign country.
    *   **Liquidity Risk:** Some foreign markets less liquid.
    *   **Transaction Costs:** Often higher in foreign markets.
    *   **Information Asymmetry / Transparency:** Less information, different accounting standards.
*   **Methods of International Investing:**
    *   Direct purchase of foreign stocks.
    *   American Depository Receipts (ADRs), Global Depository Receipts (GDRs).
    *   International mutual funds / ETFs.
    *   Country-specific funds / ETFs.
*   **Strategic Asset Allocation for Global Portfolios:** Consider global market cap weights, but also home bias, currency considerations, and specific country views.

## VI. Equity Mandates and Manager Selection

*   **Types of Mandates:** Passive (index tracking), Active (value, growth, small-cap, etc.), Long/short, Market neutral.
*   **Manager Selection Process (Due Diligence):**
    *   **Quantitative Analysis:** Past performance (alpha, IR, Sharpe, Sortino), risk metrics, style consistency, attribution analysis.
    *   **Qualitative Analysis:**
        *   Investment philosophy and process (clear, consistent, repeatable?).
        *   Investment team (experience, stability, depth).
        *   Firm structure and ownership (alignment of interests, stability).
        *   Risk management approach.
        *   Operations and compliance.
        *   Fees and expenses.
*   **Performance Attribution:** Decomposing active return into components (e.g., asset allocation, security selection, factor exposures).

**Key for L3 Equity PM:**
*   **Practical Application:** How to actually build and manage different types of equity portfolios.
*   **Integration:** Connects with CME, Behavioral Finance, Risk Management, IPS construction.
*   **Active vs. Passive Nuances:** Deep understanding of implementation, costs, and when each is appropriate.
*   **Managing Specific Challenges:** Concentrated positions, international risks.

This cheat sheet covers the core concepts in L3 Equity Portfolio Management. Focus on the strategic and practical aspects of managing equity investments. Good luck!I will continue with the Level 3 Cheat Sheets. Next is `L3_CS_Fixed_Income_Portfolio_Management.md`.
