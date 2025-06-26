# 04: Valuation Rules of Thumb & Quick Assessment

While detailed financial modeling and intrinsic valuation are crucial for in-depth analysis, credit analysts often use "rules of thumb" or quick heuristics to rapidly assess market levels, relative value, and the general reasonableness of a company's valuation or debt capacity. These are not substitutes for thorough analysis but serve as useful initial checks or contextual references.

## 1. Common Enterprise Value (EV) Multiples

Enterprise Value (EV) is a measure of a company's total value, often seen as a more comprehensive alternative to equity market capitalization. `EV = Market Cap + Total Debt - Cash & Cash Equivalents + Preferred Stock + Minority Interest`.

*   **EV/EBITDA:**
    *   **What it is:** Compares a company's total value to its Earnings Before Interest, Taxes, Depreciation, and Amortization. It's a widely used multiple because EBITDA is a proxy for operating cash flow before capital structure and tax effects.
    *   **Typical Ranges (Highly Variable by Industry & Cycle):**
        *   Mature, stable industries (e.g., some manufacturing, utilities): 6x - 10x
        *   Growth industries (e.g., technology, healthcare): 10x - 20x+
        *   Highly cyclical or lower margin industries: May be lower.
    *   **Use for Credit Analysts:**
        *   **Debt Capacity:** A common approach is to assume a "supportable" EV/EBITDA multiple for a company based on its peers and industry, then work backwards to see how much debt can be supported at a target leverage ratio (e.g., if industry average EV/EBITDA is 8x and target Debt/EBITDA is 4x, roughly half of EV could be debt).
        *   **Relative Value:** Compare a company's EV/EBITDA to its direct peers. A significantly higher multiple might indicate market optimism (or overvaluation), while a lower multiple might suggest undervaluation or higher perceived risk.
        *   **LBO Context:** Private equity firms often buy companies at a certain EV/EBITDA multiple and aim to sell them at a higher multiple (multiple expansion) or after increasing EBITDA.

*   **EV/Sales (EV/Revenue):**
    *   **What it is:** Compares total company value to its total revenue.
    *   **Use When:** Useful for companies with negative EBITDA or earnings (e.g., early-stage growth companies, cyclical companies at a trough). Also used when comparing companies with very different operating models or cost structures within an industry.
    *   **Typical Ranges:** Highly variable (e.g., 1x-3x for mature industries, much higher for high-growth tech/SaaS).
    *   **Credit Relevance:** Less direct for debt capacity but can indicate market perception of growth potential.

## 2. Leverage Multiples (Debt/EBITDA)

*   **What it is:** Measures total debt relative to EBITDA. A primary indicator of leverage and debt repayment capacity from cash flow.
*   **Typical "Acceptable" Ranges (Very General):**
    *   **Investment Grade Corporates:** Often below 2.5x - 3.5x.
    *   **Leveraged Buyouts (LBOs) / High Yield Issuers:** Can range from 4.0x to 6.0x+, depending on industry stability, asset coverage, and market conditions. During "hot" credit markets, LBO leverage can creep higher.
    *   **Highly Cyclical Industries:** Lenders prefer lower leverage.
    *   **Stable, Contracted Cash Flow Industries (e.g., some infrastructure, utilities):** Can support higher leverage.
*   **Rule of Thumb:** If a company's pro-forma Debt/EBITDA significantly exceeds typical levels for its rating category or industry without clear justification (e.g., very strong growth, unique contracts), it's a red flag.

## 3. Interest Coverage Ratios (EBITDA/Interest Expense)

*   **What it is:** Measures ability to cover interest payments from operating cash flow.
*   **Typical "Minimum" Levels:**
    *   **Investment Grade:** Often comfortably above 5.0x - 8.0x+.
    *   **High Yield:** Lenders might look for at least 2.0x - 3.0x, but this varies greatly. Covenants might be set around 1.75x-2.5x.
*   **Rule of Thumb:** An Interest Coverage Ratio below 2.0x often signals heightened risk, especially for companies with any operational volatility.

## 4. Credit Spreads and Implied Risk

*   **Conceptual Link:** Wider credit spreads imply higher perceived default probability and/or higher loss given default (lower recovery).
*   **Quick Check:**
    *   Compare a company's bond/loan spread to the average spread for its credit rating category (e.g., if a BBB-rated bond trades 100 bps wider than the BBB index average, it suggests the market sees it as a riskier BBB or closer to BB).
    *   Significant spread widening for an issuer without broader market moves is a negative signal.
*   **Simplified Default Probability:** While complex models exist, a very rough heuristic sometimes used is `Spread ≈ Default Probability * Loss Given Default`. (e.g., if LGD is assumed at 50%, a 400 bps spread (4%) might imply a rough 8% annual default probability. This is highly simplified and ignores risk premiums, liquidity, etc.).

## 5. Impact of Interest Rate Changes (Duration Rule of Thumb)

*   **Concept:** For every 1% (100 bps) change in interest rates, a bond's price will change in the opposite direction by approximately its duration percentage.
*   **Example:** A bond with a duration of 5 years.
    *   If interest rates rise by 1% (100 bps), the bond's price will fall by approximately 5%.
    *   If interest rates fall by 0.5% (50 bps), the bond's price will rise by approximately 2.5%.
*   **Use:** Quick estimate of price volatility due to interest rate shifts. More accurate for smaller rate changes. Convexity adjusts this for larger changes.

## 6. Basic LBO Math & Private Equity Returns

*   **Leverage Amplifies Equity Returns:** PE firms use debt to reduce the amount of equity they need to invest, which can magnify their percentage return on that equity if the investment is successful.
*   **Typical PE Target IRR:** Often 20-25%+.
*   **Sources of Value Creation in LBOs:**
    1.  **Deleveraging:** Using company cash flow to pay down acquisition debt, increasing equity value.
    2.  **EBITDA Growth:** Improving operations, growing revenue, cutting costs.
    3.  **Multiple Expansion:** Buying at a lower EV/EBITDA multiple and selling at a higher one.
*   **Rule of Thumb for "Money Multiple":** A common goal is to achieve a 2.0x - 3.0x return on invested equity over a 3-5 year holding period.
*   **Credit Analyst View:** Understand that PE sponsors are highly incentivized to maximize equity returns, which can sometimes be at the expense of creditors if not properly structured (e.g., dividend recapitalizations, aggressive add-on acquisitions).

## 7. Market Flex in Loan Syndication

*   **Concept:** In the leveraged loan market, when a new loan is being syndicated (sold to investors), the initial terms (especially the interest rate spread and original issue discount/OID) proposed by the arranging banks are subject to change based on investor demand.
*   **Flex Up:** If demand is weak, banks might "flex up" the spread (increase it) or offer a larger OID to make the loan more attractive to investors. This is negative for the borrower (higher cost of debt).
*   **Flex Down:** If demand is strong, banks might "flex down" the spread (decrease it) or reduce the OID. This is positive for the borrower (lower cost of debt).
*   **Relevance:** Market flex provides a real-time indicator of investor appetite for a specific credit and for the broader market conditions. Significant upward flex can be a warning sign.

**Important Caveat:**
These rules of thumb are generalizations and should be applied with caution and critical thinking. They are useful for quick assessments and context but must always be supplemented by detailed, company-specific analysis. Market conditions, industry specifics, and individual company strengths/weaknesses can lead to significant deviations from these general heuristics.
