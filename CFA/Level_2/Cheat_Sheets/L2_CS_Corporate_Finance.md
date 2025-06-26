# CFA Level 2 Cheat Sheet: Corporate Finance

**Note:** L2 Corporate Finance builds on L1, focusing on more complex capital budgeting decisions, dividend and share repurchase analysis, corporate governance, and mergers & acquisitions.

## I. Capital Budgeting

1.  **Expanded NPV Analysis:**
    *   **Project Interactions:**
        *   **Mutually Exclusive Projects:** Choose project with highest positive NPV.
        *   **Project Sequencing:** Timing of projects can affect overall NPV.
        *   **Capital Rationing:** If capital is limited, choose combination of projects that maximizes total NPV within budget. Use Profitability Index (PI) if projects are divisible.
    *   **Real Options:** Options embedded in capital projects that allow managers to alter future cash flows. Add value to a project.
        *   **Timing Options:** Delay investment.
        *   **Abandonment Options:** Stop project if unfavorable. Value = NPV(Abandon) - NPV(Continue).
        *   **Expansion Options:** Invest more if successful.
        *   **Flexibility Options:** Vary inputs, outputs, production methods.
        *   **Fundamental Options:** Project itself is an option (e.g., R&D).
        *   *Valuation:* Decision trees, option pricing models (difficult), or `Project NPV = NPV (base case, no options) - Cost of Options + Value of Options`.
    *   **Economic Income vs. Accounting Income:**
        *   **Economic Income:** `Cash Flow - Economic Depreciation`.
            *   Economic Depreciation = `Change in Market Value = MV_beg - MV_end`.
        *   **Accounting Income:** Based on accounting rules (e.g., straight-line depreciation).
        *   In theory, `NPV = PV of Economic Income - Initial Investment`.
        *   **Economic Profit (EP) / Residual Income (RI) / EVA®:**
            *   `EP = NOPAT - (WACC * Capital Invested)`
            *   `NOPAT` = Net Operating Profit After Tax = `EBIT * (1 - Tax Rate)`
            *   `Capital Invested` = Book value of debt + equity (or total assets).
            *   Project accepted if EP > 0. `NPV = PV of future EPs`.

## II. Dividends and Share Repurchases

1.  **Dividend Theories & Policy:**
    *   **Dividend Irrelevance (Modigliani-Miller):** In perfect markets, dividend policy doesn't affect firm value. Investors can create their own homemade dividends.
    *   **Bird-in-Hand (Gordon-Lintner):** Investors prefer dividends now due to less uncertainty (dividends are less risky than capital gains). Implies higher value for firms paying higher dividends.
    *   **Tax Aversion:** Dividends historically taxed at higher rates than capital gains. Investors prefer share repurchases or low dividend payout. Tax laws change, so impact varies.
    *   **Signaling Theory:** Dividend changes signal management's view of future prospects. (Increase = positive, Decrease = negative).
    *   **Clientele Effect:** Different investor groups prefer different payout policies. (e.g., retirees prefer high dividends, wealthy prefer capital gains).
2.  **Factors Affecting Dividend Policy:**
    *   Investment opportunities (more opportunities -> lower payout).
    *   Expected earnings volatility (more volatile -> lower payout).
    *   Financial flexibility (need for cash reserves -> lower payout).
    *   Tax considerations (for investors and firm).
    *   Flotation costs (costs of raising new capital -> lower payout).
    *   Contractual/legal restrictions (debt covenants, capital impairment rules).
3.  **Dividend Payment Policies:**
    *   **Stable Dividend Policy:** Maintain consistent dollar dividend.
    *   **Constant Payout Ratio Policy:** Pay constant % of earnings. Dividends fluctuate with earnings.
    *   **Residual Dividend Policy:** Pay out earnings remaining after funding capital projects. Volatile dividends.
        *   `Dividends = Earnings - (Capital Budget * Equity % in target structure)`
4.  **Share Repurchases:**
    *   **Methods:** Open market, tender offer (fixed price or Dutch auction), direct negotiation.
    *   **Equivalence to Cash Dividends (from shareholder perspective, ignoring taxes/transaction costs):**
        *   If repurchase price = market price, wealth effect is same as equivalent cash dividend.
    *   **Reasons for Repurchases:** Potential tax advantages, share price support, offset dilution from stock options, increase EPS, flexibility.
    *   **Impact on EPS:** Reduces shares outstanding, usually increases EPS (if earnings don't fall significantly).
    *   **Impact on Book Value Per Share (BVPS):**
        *   If repurchase price > BVPS -> BVPS decreases.
        *   If repurchase price < BVPS -> BVPS increases.
5.  **Global Trends:** Increasing use of share repurchases, especially in developed markets.
6.  **Dividend Safety Analysis:**
    *   **Dividend Coverage Ratio:** `Net Income / Dividends`. (Higher is safer).
    *   **FCFE Coverage Ratio:** `FCFE / (Dividends + Share Repurchases)`. (Higher is safer).
        *   `FCFE = CFO - Net Capex + Net Borrowing`.

## III. Corporate Governance

1.  **Definition:** System of internal controls and procedures by which companies are managed and controlled.
2.  **Objective:** Mitigate conflicts of interest between managers and shareholders (principal-agent problem) and between different shareholder groups. Ensure assets are used to maximize shareholder value.
3.  **Key Elements of Effective Governance:**
    *   **Board of Directors:**
        *   Independence (majority independent directors).
        *   Composition (skills, experience relevant to company).
        *   Key Committees: Audit, Compensation, Nominations/Governance (should be independent).
        *   Responsibilities: Oversight of management, strategy, risk management, succession planning.
    *   **Shareholder Rights:** Voting rights, ability to propose resolutions, fair treatment.
    *   **Management Incentives:** Aligning management compensation with long-term shareholder value (e.g., stock options, restricted stock with vesting periods).
    *   **Transparency and Disclosure:** Accurate and timely financial reporting.
    *   **Internal Controls and Risk Management Framework.**
4.  **ESG (Environmental, Social, and Governance) Factors:**
    *   Increasingly integrated into investment analysis and corporate strategy.
    *   Can impact long-term sustainability and value.
    *   Governance is the "G" in ESG.

## IV. Mergers and Acquisitions (M&A)

1.  **Motivations for M&A:**
    *   Synergies (cost savings, revenue enhancement).
    *   Rapid growth / market share.
    *   Acquiring unique capabilities/technology.
    *   Diversification (though often not value-creating for shareholders).
    *   Tax benefits (e.g., using NOLs).
    *   Managerial hubris or empire building.
2.  **Types of Mergers:**
    *   **Horizontal:** Between competitors.
    *   **Vertical:** Between companies in same production chain (supplier/customer).
    *   **Conglomerate:** Between unrelated companies.
3.  **Transaction Characteristics:**
    *   **Stock Purchase vs. Asset Purchase:**
        *   Stock: Acquirer buys target's stock, assumes all assets and liabilities.
        *   Asset: Acquirer buys specific assets, may assume specific liabilities. Target entity may survive.
    *   **Method of Payment:**
        *   **Cash Offer:** Certainty for target shareholders. Acquirer bears risk/reward of merger.
        *   **Stock Offer:** Target shareholders participate in merged entity's risk/reward. Exchange ratio is key. Can be fixed shares or fixed value.
4.  **Takeover Defenses (Pre-Offer & Post-Offer):**
    *   **Pre-Offer:** Poison pills/puts, staggered boards, supermajority provisions, golden parachutes.
    *   **Post-Offer:** "Just say no," litigation, greenmail, white knight/squire, leveraged recapitalization, crown jewel.
5.  **Valuation of Target Company in M&A:**
    *   **Comparable Company Analysis:** Uses multiples (P/E, EV/EBITDA) of similar publicly traded companies.
    *   **Comparable Transaction Analysis (Precedent Transactions):** Uses multiples from recent M&A deals for similar companies.
    *   **Discounted Cash Flow (DCF) Analysis:** Projects target's future free cash flows and discounts to PV.
        *   FCFF or FCFE. WACC or Cost of Equity.
        *   Incorporate synergies into cash flow projections.
    *   **Takeover Premium:** `(Deal Price per share - Target's Pre-deal Market Price per share) / Target's Pre-deal Market Price per share`.
6.  **Post-Merger Integration:** Crucial for realizing synergies. Often challenging.
7.  **Who Benefits from M&A?**
    *   Target shareholders usually benefit (receive premium).
    *   Acquirer shareholders benefit if synergies are realized and price paid is not too high. Often, acquirer overpays or fails to integrate effectively, leading to value destruction.

## Formulas & Key Concepts:
- **Economic Profit (EP):** `NOPAT - (WACC * Capital Invested)`
- **Residual Dividend:** `Earnings - (Capital Budget * Equity %)`
- **FCFE:** `CFO - Net Capex + Net Borrowing` OR `NI + NCC - FCInv - WCInv + Net Borrowing`
- **Takeover Premium:** `(Price Paid - Target Pre-Offer Price) / Target Pre-Offer Price`
- **Herfindahl-Hirschman Index (HHI):** Sum of squared market shares of firms in an industry. Used by regulators to assess market concentration in horizontal mergers. `ΔHHI` is key.

## L2 Corporate Finance Focus:
- **Valuation in context:** How capital budgeting, dividend policy, and M&A decisions affect firm value.
- **Real options:** Identifying and qualitatively assessing their impact on project value.
- **Dividend vs. Repurchase:** Understanding shareholder impact under different tax scenarios and market conditions.
- **M&A valuation:** Applying different methods and understanding how synergies are incorporated. Analyzing deal terms and likelihood of success.
- **Corporate governance:** How it impacts firm performance and risk. Evaluating governance structures.

*This cheat sheet is a summary. Always refer to official CFA curriculum for detailed explanations and examples.*
