# CFA Level 1 Cheat Sheet: Portfolio Management

## Key Concepts:

### Portfolio Management: An Overview
- **Definition:** Coordinated management of investment assets to meet specified objectives.
- **Portfolio Perspective:** Evaluating individual investments based on their contribution to the overall portfolio's risk and return.
- **Steps in the Portfolio Management Process:**
  1.  **Planning Step:**
      - Understanding client needs and constraints.
      - Developing an Investment Policy Statement (IPS).
  2.  **Execution Step:**
      - Asset allocation (strategic and tactical).
      - Security analysis and selection.
      - Portfolio construction.
  3.  **Feedback Step:**
      - Portfolio monitoring and rebalancing.
      - Performance measurement and reporting.
- **Types of Investors:** Individual, Institutional (pensions, endowments, insurance companies, sovereign wealth funds).

### Investment Policy Statement (IPS)
- **Purpose:** A written plan detailing client's objectives and constraints. Guides investment decisions.
- **Key Components:**
  - **Client Description.**
  - **Purpose of the IPS.**
  - **Duties and Responsibilities** (client, manager).
  - **Investment Objectives:**
    - **Return Objectives:** Desired return (e.g., capital preservation, capital appreciation, current income, total return). Quantified if possible.
    - **Risk Objectives:** Willingness and ability to take risk. (Absolute vs. Relative risk objectives).
  - **Investment Constraints:**
    - **Time Horizon:** Short, intermediate, long term.
    - **Liquidity Needs:** Anticipated cash withdrawals.
    - **Legal and Regulatory Factors:** Restrictions on investments.
    - **Tax Considerations:** Impact of taxes on investment returns.
    - **Unique Circumstances:** Client-specific preferences or restrictions (e.g., ESG, concentrated holdings).
- **Strategic Asset Allocation (SAA):** Long-term target weights for asset classes based on IPS.

### Risk Management: An Introduction
- **Risk Management Process:** Identify risks, measure/monitor risks, manage risks.
- **Risk Governance:** Top-down process to establish risk tolerance and oversight.
- **Types of Risk:** Financial (market, credit, liquidity) and Non-financial (operational, legal, regulatory, model, tail risk).
- **Measuring Risk:** Standard deviation, beta, duration, VaR (Value at Risk - brief mention).
- **Risk Modification Techniques:**
  - **Risk Avoidance:** Not undertaking activities with risk.
  - **Risk Acceptance:** Bearing the risk.
  - **Risk Transfer:** Shifting risk to a third party (e.g., insurance, derivatives).
  - **Risk Shifting (Mitigation):** Actions to reduce exposure or severity of risk (e.g., diversification).

### Portfolio Risk and Return: Part I
- **Measures of Return:**
  - **Holding Period Return (HPR):** (Ending Value - Beginning Value + Income) / Beginning Value.
  - **Arithmetic Mean Return:** Simple average.
  - **Geometric Mean Return:** Time-weighted compound rate of return. (Better for multi-period returns).
  - **Money-Weighted Return (IRR):** Affected by timing and size of cash flows.
  - **Time-Weighted Return:** Not affected by external cash flows (used for manager evaluation).
- **Measures of Risk (Volatility):**
  - **Variance (σ²):** Average squared deviation from the mean.
  - **Standard Deviation (σ):** Square root of variance.
- **Covariance:** Measures how two variables move together.
  - Cov(Ri, Rj) = E[(Ri - E(Ri))(Rj - E(Rj))]
- **Correlation Coefficient (ρij):** Standardized measure of co-movement (-1 to +1).
  - ρij = Cov(Ri, Rj) / (σi * σj)
- **Portfolio Expected Return (Two Assets):** E(Rp) = wA * E(RA) + wB * E(RB)
- **Portfolio Variance (Two Assets):** σp² = wA²σA² + wB²σB² + 2wAwBσAσBρAB
  - *Or using Covariance:* σp² = wA²σA² + wB²σB² + 2wAwBCov(A,B)
- **Diversification:** Reduces portfolio risk by combining assets with low correlation.

### Portfolio Risk and Return: Part II
- **Efficient Frontier:** Set of portfolios that offer the highest expected return for a given level of risk, or the lowest risk for a given expected return.
- **Global Minimum Variance Portfolio:** Portfolio on the efficient frontier with the lowest risk.
- **Investor's Optimal Portfolio:** Point of tangency between the investor's highest indifference curve and the efficient frontier.
- **Indifference Curves:** Represent combinations of risk and return that provide equal utility to an investor. Steeper curve = more risk-averse.
- **Capital Allocation Line (CAL):** Line representing possible combinations of a risk-free asset and an optimal risky portfolio.
  - Slope of CAL = Sharpe Ratio of the risky portfolio.
- **Capital Market Line (CML):** Special case of CAL where the risky portfolio is the market portfolio. All investors hold a combination of the risk-free asset and the market portfolio.
  - Equation: E(Rp) = Rf + [(E(Rm) - Rf) / σm] * σp
  - Slope = Sharpe Ratio of the Market = (E(Rm) - Rf) / σm
- **Systematic Risk (Market Risk, Non-diversifiable Risk):** Risk that cannot be eliminated by diversification (e.g., economic recessions, interest rate changes). Measured by beta.
- **Unsystematic Risk (Specific Risk, Diversifiable Risk):** Risk specific to an individual asset or company. Can be reduced/eliminated through diversification.
- **Total Risk = Systematic Risk + Unsystematic Risk.**
- **Security Market Line (SML):** Graphical representation of CAPM. Plots expected return against beta.
  - Equation: E(Ri) = Rf + βi * [E(Rm) - Rf]
  - Assets above SML are undervalued; assets below SML are overvalued.
- **Beta (β):** Measure of an asset's systematic risk relative to the market.
  - βi = Cov(Ri, Rm) / σm² = ρim * (σi / σm)
- **Capital Asset Pricing Model (CAPM):** E(Ri) = Rf + βi * (Market Risk Premium).
  - Assumptions: Rational, risk-averse investors; homogenous expectations; frictionless markets, etc.
  - Limitations: Based on strong assumptions, parameters are difficult to estimate (beta, market risk premium).

### Basics of Portfolio Planning and Construction
- **Asset Allocation:** Deciding how to distribute investments across different asset classes (e.g., stocks, bonds, real estate). Most important determinant of portfolio performance.
  - **Strategic Asset Allocation (SAA):** Long-term target weights.
  - **Tactical Asset Allocation (TAA):** Short-term deviations from SAA to capitalize on market opportunities.
- **Security Selection:** Choosing specific securities within each asset class.
- **Rebalancing:** Adjusting portfolio back to target asset allocation weights.
  - Calendar rebalancing, percentage-range rebalancing.

### Fintech in Investment Management (Brief Overview)
- **Robo-Advisors:** Automated investment advisory services, often low-cost, passive strategies.
- **Big Data and AI/Machine Learning:** Used for analyzing large datasets, identifying patterns, algorithmic trading.
- **Distributed Ledger Technology (Blockchain):** Potential applications in clearing, settlement, record-keeping.

## Formulas to Memorize:
- **HPR:** (P1 - P0 + D1) / P0
- **Portfolio Expected Return (2 assets):** E(Rp) = wA*E(RA) + wB*E(RB)
- **Portfolio Variance (2 assets):** σp² = wA²σA² + wB²σB² + 2wAwBσAσBρAB
- **Correlation:** ρAB = Cov(A,B) / (σA * σB)
- **Beta:** βi = Cov(Ri, Rm) / σm²   OR   βi = ρim * (σi / σm)
- **CAPM / SML Equation:** E(Ri) = Rf + βi * [E(Rm) - Rf]
- **Sharpe Ratio:** (Rp - Rf) / σp (for a portfolio)
  - Market Sharpe Ratio (Slope of CML): (Rm - Rf) / σm

## Common Pitfalls & Tips:
- **IPS is Key:** Understand all components and their implications for portfolio choices.
- **Risk Tolerance vs. Risk Capacity:** Willingness vs. Ability to take risk. Both are important.
- **Geometric vs. Arithmetic Mean:** Use geometric for performance evaluation over time.
- **Diversification Limits:** Only unsystematic risk can be diversified away. Systematic risk remains.
- **CML vs. SML:**
  - CML uses total risk (standard deviation) on x-axis; applies to efficient portfolios.
  - SML uses systematic risk (beta) on x-axis; applies to any security or portfolio (efficient or not).
- **Assumptions of CAPM:** Be aware of them and their limitations in the real world.

*Disclaimer: This cheat sheet is for quick reference. Always refer to official CFA Program curriculum for complete understanding.*
