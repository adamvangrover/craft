# MRM 01: Introduction to Market Risk

## 1. Defining Market Risk

**Market Risk** is the risk of financial loss resulting from adverse movements in market prices or rates. These movements can impact the value of on-balance sheet assets and liabilities, as well as off-balance sheet positions (like derivatives). Market risk is inherent in any activity involving trading, investing, or holding assets whose values fluctuate with market conditions.

It is distinct from credit risk (which relates to an obligor's failure to perform), but the two can be interconnected (e.g., a market downturn can increase credit risk).

**Key Characteristics:**
*   Arises from volatility in financial market variables.
*   Can impact a wide range of instruments and portfolios.
*   Often assessed using statistical measures and models.

## 2. Key Categories of Market Risk

Market risk is typically broken down into several major categories:

**2.1. Interest Rate Risk:**
*   **Definition:** The risk of loss due to adverse changes in market interest rates. This is one of the most significant market risks for many financial institutions and fixed-income investors.
*   **Impacts:**
    *   **Value of Fixed-Income Securities:** Bond prices generally move inversely to interest rates. Rising rates decrease the value of existing fixed-rate bonds.
    *   **Net Interest Margin (NIM) / Net Interest Income (NII) for Banks:** Changes in rates can affect the spread between what a bank earns on its assets (loans, securities) and what it pays on its liabilities (deposits, borrowings). This is often analyzed through concepts like:
        *   **Repricing Risk (Gap Risk):** Mismatches in the timing of when assets and liabilities reprice to new market rates.
        *   **Basis Risk:** Imperfect correlation in the adjustment of rates earned and paid on different instruments with otherwise similar repricing characteristics.
        *   **Yield Curve Risk:** Non-parallel shifts in the yield curve can affect different parts of a portfolio differently.
        *   **Option Risk (Embedded Options):** Options like loan prepayments or bond callability can alter cash flows and valuations as rates change.
    *   **Cost of Borrowing:** For corporations, rising rates increase the cost of new debt.
*   **Basic Measurement (Level 1 CFA concepts):**
    *   **Duration (Macaulay, Modified, Effective):** Measures the sensitivity of a bond's price to changes in interest rates. Higher duration means greater price volatility for a given rate change.
    *   **Convexity:** Measures the curvature of the price-yield relationship for a bond, providing a second-order adjustment to duration-based price estimates.

**2.2. Equity Price Risk:**
*   **Definition:** The risk of loss due to adverse changes in the prices of equity securities (stocks).
*   **Impacts:**
    *   Value of equity portfolios held by investors or institutions.
    *   Value of equity-linked derivatives.
    *   Company valuations and market capitalization.
*   **Systematic Risk (Market Risk):** Volatility due to overall market movements, measured by **Beta (β)**. Beta indicates how a stock's price tends to move relative to a broad market index (e.g., S&P 500).
    *   `Beta = 1`: Stock moves in line with the market.
    *   `Beta > 1`: Stock is more volatile than the market.
    *   `Beta < 1`: Stock is less volatile than the market.
*   **Idiosyncratic Risk (Specific Risk):** Volatility due to company-specific factors, which can theoretically be diversified away in a large portfolio.

**2.3. Foreign Exchange (FX) Risk / Currency Risk:**
*   **Definition:** The risk of loss due to adverse movements in foreign exchange rates.
*   **Impacts:**
    *   **Transaction Exposure:** Affects the value of contractual cash flows denominated in foreign currencies (e.g., a UK company selling goods to a US customer in USD faces FX risk until the USD receivable is converted to GBP).
    *   **Translation Exposure (Accounting Exposure):** Affects the reported financial statements (balance sheet and income statement) of companies with foreign subsidiaries when their foreign currency financials are translated back into the parent company's reporting currency. This is an accounting impact, not necessarily a direct cash flow impact.
    *   **Economic Exposure (Operating Exposure):** Affects a company's long-term competitiveness and value due to unexpected changes in exchange rates impacting future cash flows (e.g., a domestic company facing cheaper imports due to a stronger domestic currency).
*   *Credit Analyst Note:* For companies with significant international operations or FX-denominated debt, understanding their FX risk exposure and hedging strategies is crucial.

**2.4. Commodity Price Risk:**
*   **Definition:** The risk of loss due to adverse movements in the prices of commodities (e.g., oil, gas, metals, agricultural products).
*   **Impacts:**
    *   **Producers:** Lower prices reduce revenues and profitability.
    *   **Consumers/Users:** Higher prices increase input costs.
    *   **Investors:** Affects the value of commodity-linked investments or derivatives.
*   *Credit Analyst Note:* Crucial for analyzing companies in commodity-producing or commodity-intensive industries.

## 3. Sources of Market Risk

*   **Economic Factors:** GDP growth, inflation, unemployment, fiscal and monetary policy.
*   **Political & Geopolitical Events:** Elections, wars, trade disputes, political instability.
*   **Market Sentiment & Investor Behavior:** "Animal spirits," risk aversion levels, herding behavior. (Links to Behavioral Finance).
*   **Market Liquidity:** The ease with which an asset can be bought or sold without significantly affecting its price. Illiquid markets can exacerbate price volatility and make it difficult to exit positions.
*   **Company-Specific News (for Equity/Debt):** Earnings announcements, M&A activity, management changes (can become market risk if it affects a large, systemic player or a whole sector).
*   **Natural Disasters & Other External Shocks:** Can impact specific commodities, industries, or overall economic activity.

## 4. Basic Measurement Concepts for Market Risk

While detailed measurement models are complex (covered in future modules), some basic concepts are foundational:

*   **Sensitivity Measures:**
    *   **Duration (Interest Rate Risk):** As described above, measures price sensitivity to yield changes.
    *   **Beta (Equity Price Risk):** As described above, measures sensitivity to market movements.
    *   **"Greeks" (for Options):** Delta (sensitivity to underlying price), Gamma (sensitivity of Delta), Vega (sensitivity to volatility), Theta (sensitivity to time decay), Rho (sensitivity to interest rates). (More advanced, but Delta is a key Level 1 derivatives concept).
*   **Volatility:** Statistical measure of the dispersion of returns for a given security or market index, often measured by standard deviation or variance. Higher volatility implies greater market risk.
*   **Correlation:** Measures the degree to which two variables move in relation to each other. Understanding correlations between different assets is crucial for portfolio diversification.

## 5. Introduction to Value at Risk (VaR)

**5.1. Concept:**
*   **Value at Risk (VaR)** is a widely used statistical technique to measure the maximum potential loss that a portfolio (of financial assets) is likely to suffer over a specific time horizon, at a given confidence level, under normal market conditions.
*   **It answers the question:** "What is the most I can expect to lose (with X% probability) over the next Y days?"
*   **Example:** "A portfolio has a 1-day 99% VaR of $1 million." This means there is a 1% chance that the portfolio will lose more than $1 million in a single day, assuming normal market conditions. (Or, we are 99% confident that losses will not exceed $1 million in one day).

**5.2. Key Parameters of VaR:**
*   **Time Horizon:** The period over which the potential loss is measured (e.g., 1 day, 10 days). Shorter for trading books, longer for investment portfolios.
*   **Confidence Level:** The probability that losses will *not* exceed the VaR amount (e.g., 95%, 99%). Higher confidence level means a higher VaR figure.
*   **Base Currency:** The currency in which VaR is expressed.

**5.3. Common VaR Calculation Methods (Brief Overview - More in MRM_02):**
*   **Parametric Method (Variance-Covariance Method):** Assumes returns are normally distributed and uses historical data to estimate mean, variance, and correlations.
*   **Historical Simulation Method:** Uses actual historical price changes to simulate potential future portfolio P&L. Does not assume normal distribution.
*   **Monte Carlo Simulation Method:** Uses computer modeling to generate many random price paths for portfolio components based on specified statistical properties and correlations.

**5.4. Limitations of VaR:**
*   **Does Not Measure "Worst-Case" Loss:** VaR tells you the maximum loss *up to* the confidence level. It doesn't say how bad losses could be *beyond* that point (in the "tail" of the distribution).
*   **Assumption of Normality (for Parametric VaR):** Financial returns often exhibit "fat tails" (more extreme events than a normal distribution would suggest), meaning parametric VaR can underestimate tail risk.
*   **Historical Data Dependence:** Historical simulation relies on past data being representative of the future, which may not hold during market regime shifts or unprecedented events.
*   **Can Be Misleading if Misunderstood:** VaR is an estimate, not a guarantee.
*   **Does Not Capture Liquidity Risk Well:** Assumes positions can be liquidated at prevailing market prices.

Despite limitations, VaR is a standard tool for market risk measurement, reporting, and setting risk limits, especially in regulated financial institutions. It is often supplemented with Stress Testing and Expected Shortfall (Conditional VaR).

**Conclusion for Credit Analysts:**
Understanding market risk is crucial for credit analysts because:
1.  **Borrower Impact:** Many borrowers are exposed to market risks (interest rates, FX, commodities) that can directly affect their cash flows, profitability, and ability to service debt. Analyzing a borrower's market risk exposures and their hedging strategies (if any) is part of comprehensive credit due diligence.
2.  **Collateral Value:** The value of collateral pledged for loans (e.g., marketable securities, real estate, commodities) can be subject to market risk.
3.  **Economic Conditions:** Broad market movements often reflect or influence underlying economic conditions, which are a key "C" in the Five Cs of Credit.
4.  **Financial Institution Analysis:** For analysts covering banks or other financial institutions, understanding their market risk management practices is vital.

This introduction provides a foundation for understanding the various facets of market risk. Subsequent modules will delve deeper into specific measurement and management techniques.
