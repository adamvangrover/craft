# CFA Level 2 Cheat Sheet: Portfolio Management

**Note:** L2 Portfolio Management delves into active management, portfolio construction with multifactor models, and application of PM principles to different investor types.

## I. Active Portfolio Management

1.  **Value of Active Management:**
    *   `Information Ratio (IR) = (Portfolio Return - Benchmark Return) / Active Risk`
        *   `Active Return = Rp - Rb`
        *   `Active Risk (Tracking Error) = StdDev(Rp - Rb)`
    *   Goal: Generate positive active return (alpha) consistently.
    *   `E(Ra) = IR * σa` (Expected Active Return = Information Ratio * Active Risk)
    *   **Fundamental Law of Active Management (Grinold):**
        *   `IR ≈ IC * sqrt(BR)`
            *   `IC (Information Coefficient):` Correlation between manager's forecasts and actual outcomes. Skill. (Range -1 to +1).
            *   `BR (Breadth):` Number of independent investment decisions made per year.
    *   Implications: Higher skill (IC) or more independent bets (BR) can lead to higher IR.

2.  **Treynor-Black Model:**
    *   Optimal portfolio construction combining an actively managed portfolio with a passively managed market index fund.
    *   Active portfolio weights securities based on their "appraisal ratio" (alpha / unsystematic risk).
    *   Determines optimal allocation to active vs. passive components.

3.  **Portfolio Construction Techniques for Active Management:**
    *   **Screens:** Filter universe based on criteria.
    *   **Stratification:** Divide universe into cells based on characteristics, then sample from cells.
    *   **Linear Programming:** Optimization with constraints.
    *   **Quadratic Programming (Mean-Variance Optimization):** Incorporates covariance matrix. Used for efficient frontier.

## II. Multifactor Models

1.  **Concept:** Explain asset returns using multiple systematic risk factors beyond just market risk (CAPM).
    *   `E(Ri) = Rf + βi1*E(FactorPremium1) + βi2*E(FactorPremium2) + ...`
2.  **Types of Factors:**
    *   **Macroeconomic Factors:** Inflation, GDP growth, interest rates.
    *   **Fundamental Factors:** P/E ratio, book-to-market, firm size, industry.
    *   **Statistical Factors:** Derived from principal component analysis (PCA) of historical returns.
3.  **Arbitrage Pricing Theory (APT):**
    *   Assumes well-diversified portfolios have no unsystematic risk.
    *   If expected return deviates from APT model, arbitrage is possible.
    *   Fewer assumptions than CAPM (e.g., doesn't assume market portfolio is efficient).
4.  **Carhart Four-Factor Model (Extension of Fama-French Three-Factor):**
    *   `E(Ri) - Rf = βmkt*(E(Rm)-Rf) + βsmb*SMB + βhml*HML + βmom*WML`
        *   `SMB (Small Minus Big):` Small-cap premium.
        *   `HML (High Minus Low):` Value premium (high book-to-market minus low).
        *   `WML (Winners Minus Losers) / MOM (Momentum):` Momentum premium.
5.  **Uses of Multifactor Models:**
    *   Return attribution (decompose excess return into factor exposures and security selection).
    *   Risk management (understand portfolio's sensitivity to different factors).
    *   Portfolio construction (build portfolios with desired factor exposures - "smart beta" / factor investing).
    *   Estimating expected returns.

## III. Measuring and Managing Market Risk

1.  **Value at Risk (VaR):**
    *   Minimum loss expected over a specific period at a given probability level (e.g., 5% VaR of $1M means 5% chance of losing at least $1M).
    *   **Methods for Calculating VaR:**
        *   **Parametric (Variance-Covariance) Method:** Assumes normal distribution of returns. Requires expected return, standard deviation, correlation matrix. `VaR = [E(R) - z*σ] * Portfolio Value`.
        *   **Historical Simulation Method:** Uses historical distribution of returns. Sort past returns, find the one corresponding to the VaR probability. Non-parametric.
        *   **Monte Carlo Simulation Method:** Generate random scenarios based on assumed distributions and parameters. Most flexible but complex.
    *   **Advantages of VaR:** Single number for risk, widely accepted.
    *   **Limitations of VaR:** Doesn't measure worst-case loss (only minimum loss at probability level), can be misleading if distributions are not normal (fat tails), sensitive to assumptions and inputs.
2.  **Conditional VaR (CVaR) / Expected Shortfall (ES):** Expected loss given that the VaR threshold has been breached. Better measure of tail risk.
3.  **Stress Testing & Scenario Analysis:** Evaluate portfolio performance under extreme market conditions or specific scenarios.
4.  **Other Risk Measures:** Beta, duration, standard deviation, tracking error.

## IV. Economics and Investment Markets (Application of L2 Economics)

1.  **Taylor Rule:** `Policy Rate = Neutral Rate + Target Inflation + α(Actual Inflation - Target Inflation) + β(Output Gap)`
    *   Guides central bank policy rate decisions.
2.  **Yield Curve and Business Cycle:**
    *   Typically upward sloping. Inverted yield curve (short rates > long rates) often precedes recessions.
    *   Steepening: Often indicates economic recovery or rising inflation expectations.
    *   Flattening: Can indicate slowing growth or central bank tightening.
3.  **Credit Spreads and Business Cycle:**
    *   Widen during recessions (higher perceived credit risk).
    *   Narrow during expansions.
4.  **Impact of Inflation on Asset Returns:**
    *   Unexpected inflation generally negative for bonds.
    *   Impact on equities varies (can pass through costs vs. demand destruction).
    *   Real assets (commodities, real estate) may hedge inflation.

## V. Analysis of Active Portfolio Management

1.  **Return Attribution:** Decomposing portfolio's excess return relative to benchmark.
    *   **Brinson Model (Macro Attribution):**
        *   **Asset Allocation:** `Σ (Portfolio Weight_i - Benchmark Weight_i) * (Benchmark Return_i - Total Benchmark Return)`
        *   **Security Selection:** `Σ (Benchmark Weight_i) * (Portfolio Return_i - Benchmark Return_i)`
        *   **Interaction (often small or combined):** `Σ (Portfolio Weight_i - Benchmark Weight_i) * (Portfolio Return_i - Benchmark Return_i)`
2.  **Risk Attribution:** Decomposing portfolio's active risk (tracking error) into contributions from active factor tilts and security selection.
3.  **Manager Selection:**
    *   **Type I Error:** Hiring/retaining a manager who subsequently underperforms.
    *   **Type II Error:** Not hiring/firing a manager who subsequently outperforms.
    *   Due diligence: Investment process, philosophy, people, performance, terms. Style analysis.

## VI. Portfolio Management for Institutional Investors (Overview)

1.  **Defined Benefit Pension Plans:**
    *   Objective: Meet future pension obligations to retirees.
    *   Constraints: Time horizon (long), liquidity needs (predictable), legal/regulatory (ERISA in US).
    *   Risk Tolerance: Depends on funded status, sponsor financial strength, workforce characteristics.
    *   Asset-Liability Management (ALM) is key.
2.  **Endowments and Foundations:**
    *   Objective: Maintain purchasing power of assets in perpetuity while funding spending needs.
    *   Constraints: Time horizon (very long), liquidity (spending rule), legal/regulatory (UMIFA/UPMIFA in US).
    *   Risk Tolerance: Generally high due to long horizon.
    *   Often invest heavily in alternatives.
3.  **Insurance Companies (Life vs. P&C):**
    *   Objective: Meet future claims, earn spread.
    *   Constraints: Liquidity (P&C more unpredictable), time horizon (Life longer), regulatory (significant).
    *   Risk Tolerance: Generally conservative, focus on fixed income. ALM crucial.
4.  **Banks:** Manage assets (loans, securities) and liabilities (deposits) to earn net interest margin and manage risk (credit, liquidity, interest rate). Highly regulated.

## VII. Trading Costs and Electronic Markets

1.  **Explicit Costs:** Commissions, fees, taxes.
2.  **Implicit Costs:**
    *   **Bid-Ask Spread:** Cost of immediate execution.
    *   **Market Impact (Price Impact):** Large trades can move prices adversely.
    *   **Delay Costs (Slippage):** Price changes while order is pending.
    *   **Opportunity Costs:** Unfilled orders or missed trades.
3.  **Measuring Implicit Costs:**
    *   **VWAP (Volume Weighted Average Price):** Compare execution price to VWAP during trade period.
    *   **Implementation Shortfall:** Difference between value of hypothetical portfolio (if executed instantly at decision price) and actual portfolio value. Captures all costs.
4.  **Types of Orders:** Market, Limit, Stop, Iceberg, Pegged.
5.  **Electronic Trading:** Algorithmic trading, High-Frequency Trading (HFT).
    *   Impact: Increased speed, reduced spreads, but potential for market fragmentation, systemic risk.
    *   Market structures: Exchanges, ECNs, Dark Pools.

## Key Formulas & Concepts:
- **Information Ratio (IR):** `Active Return / Active Risk`
- **Fundamental Law:** `IR ≈ IC * sqrt(BR)`
- **Carhart Model Factors:** Mkt, SMB, HML, WML.
- **VaR Calculation Methods.**
- **Brinson Attribution Components.**
- **Implementation Shortfall.**

## L2 Portfolio Management Focus:
- **Justifying active management:** IR, Fundamental Law.
- **Using multifactor models:** For risk/return attribution and portfolio construction.
- **VaR:** Understanding its calculation, interpretation, and limitations.
- **Connecting economic analysis to portfolio decisions.**
- **Evaluating manager performance:** Attribution, style analysis.
- **Understanding institutional investor differences.**
- **Trading costs:** Identifying, measuring, and managing them.

*This cheat sheet is a summary. Always refer to official CFA curriculum for detailed explanations and examples.*
