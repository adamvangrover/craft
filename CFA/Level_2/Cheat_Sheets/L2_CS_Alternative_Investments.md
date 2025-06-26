# CFA Level 2 Cheat Sheet: Alternative Investments

**Note:** L2 Alternatives builds on L1, focusing on due diligence, valuation methods for specific alternative asset classes (real estate, private equity), and commodity derivatives.

## I. Real Estate Investments

1.  **Forms of Real Estate Investment:**
    *   **Direct:** Freehold (outright ownership), Leasehold.
    *   **Indirect:** REITs, Real Estate Limited Partnerships (RELPs), Real Estate Operating Companies (REOCs), Infrastructure Funds.
    *   **Debt:** Mortgages, Mortgage-Backed Securities (MBS), Collateralized Mortgage Obligations (CMOs - covered in Fixed Income).
2.  **Valuation Approaches for Direct Real Estate:**
    *   **Income Approach:**
        *   **Direct Capitalization Method:** `Value = NOI_year1 / Cap Rate`
            *   `NOI (Net Operating Income)` = Potential Gross Income - Vacancy & Collection Loss + Other Income - Operating Expenses (excluding depreciation, financing costs, income taxes).
            *   `Cap Rate (Capitalization Rate)` = `Discount Rate - Growth Rate` OR derived from comparable sales (`NOI_comp / Sales Price_comp`).
            *   Use for stabilized properties with stable growth.
        *   **Discounted Cash Flow (DCF) Method:** Project NOI for a holding period, plus a terminal (resale) value, then discount to PV.
            *   `Terminal Value = NOI_year_H+1 / Terminal Cap Rate`
            *   Discount rate should reflect risk of property.
            *   More flexible, can model uneven cash flows.
    *   **Sales Comparison Approach:** Based on prices of similar recently sold properties. Adjust for differences (size, location, condition, financing terms).
    *   **Cost Approach:** `Value = Land Value + Replacement Cost of Building - Depreciation (physical, functional, locational/economic obsolescence)`.
        *   Often used for unique properties or when comparable sales/income data is scarce.
3.  **Real Estate Investment Trusts (REITs):**
    *   Tax-advantaged (pass-through income if distribute most of taxable income).
    *   Types: Equity REITs (own/operate properties), Mortgage REITs (invest in mortgages/MBS), Hybrid REITs.
    *   **Valuation of REITs:**
        *   **Net Asset Value Per Share (NAVPS):** `(Market Value of Assets - Liabilities) / Shares Outstanding`. Similar to direct property valuation but for a portfolio. Analyst estimates cap rates for REIT's properties.
        *   **Price/Funds From Operations (P/FFO):**
            *   `FFO = Accounting NI + Depreciation - Gains from Property Sales + Losses from Property Sales`. (Proxy for cash flow).
        *   **Price/Adjusted Funds From Operations (P/AFFO):**
            *   `AFFO = FFO - Non-Cash Rents - Recurring Maintenance-type Capital Expenditures (Capital Reserves)`. (More like free cash flow).
        *   **Dividend Discount Model (DDM) or Discounted Cash Flow (DCF).**
4.  **Due Diligence for Real Estate:** Property specific (location, condition, tenants), market (supply/demand, rents), legal/regulatory, environmental.

## II. Private Equity Investments

1.  **Categories:** Venture Capital (VC), Leveraged Buyouts (LBOs), Mezzanine Debt, Distressed Debt.
2.  **Valuation of Private Equity:**
    *   **Income Approach (DCF):** Project FCFE or FCFF, discount at appropriate rate (often high due to risk). Terminal value based on exit multiple (e.g., EV/EBITDA) or Gordon growth.
    *   **Market Approach (Relative Value):**
        *   **Guideline Public Company Method (GPCM):** Uses multiples from comparable public companies. Adjust for control premium and illiquidity discount.
        *   **Guideline Transactions Method (GTM):** Uses multiples from M&A of similar private companies.
        *   **Prior Transactions Method:** Uses multiples from past sales of the subject company's own stock.
    *   **Asset-Based Approach:** Values assets minus liabilities. Less common for going concerns.
3.  **Leveraged Buyouts (LBOs):**
    *   Acquisition of a company financed with high proportion of debt. Equity provided by PE firm (sponsor).
    *   Sources of LBO value creation: Deleverage (pay down debt), operational improvements (increase EBITDA), multiple expansion (exit at higher EV/EBITDA).
    *   Key metrics: IRR to PE sponsor, cash-on-cash multiple.
4.  **Venture Capital:**
    *   Financing for early-stage companies. High risk, potential for high return.
    *   Staged financing (seed, early, late).
    *   Valuation is challenging due to uncertainty. Often uses expectations of future exit value, then discounts back at very high rates.
    *   `Post-Money Value = Pre-Money Value + Investment`
    *   `Fraction Owned by VC = Investment / Post-Money Value`
5.  **Private Equity Fund Structure:** Limited Partnerships. General Partner (GP) manages, Limited Partners (LPs) invest.
    *   **Fees:** Management fee (on committed capital or AUM), incentive fee (carried interest, "carry") often 20% of profits above a hurdle rate.
    *   **Clawback Provision:** GP may have to return past incentive fees if later losses reduce overall fund profitability below agreed thresholds.
    *   **Distribution Waterfall:** How profits are allocated (e.g., return of capital to LPs, preferred return to LPs, catch-up for GP, then split).
6.  **Due Diligence for Private Equity:** Management team, market, product/service, financial projections, legal/regulatory, exit strategy. For PE funds: GP track record, alignment of interest, fund terms.

## III. Commodities

1.  **Commodity Markets:** Spot markets, futures markets.
2.  **Sources of Return for Commodity Futures:**
    *   **Collateral Yield:** Interest earned on margin deposit.
    *   **Price Return (Spot Yield):** Change in spot price of commodity.
    *   **Roll Yield (Roll Return):**
        *   Gain or loss from rolling maturing futures contracts into new ones.
        *   **Backwardation (F < S):** Positive roll yield for long positions (sell expensive near-term, buy cheaper far-term).
        *   **Contango (F > S):** Negative roll yield for long positions (sell cheaper near-term, buy more expensive far-term).
        *   Roll yield = `(Near-term Futures Price - Far-term Futures Price) / Near-term Futures Price` (simplified).
3.  **Theories of Futures Returns:**
    *   **Insurance Theory (Keynes):** Producers hedge by selling futures (short hedgers). Speculators take long side, demand risk premium. Implies futures prices are downward biased estimates of future spot (normal backwardation).
    *   **Hedging Pressure Hypothesis:** Extends insurance theory. If long hedging (consumers) dominates, futures could be upward biased (normal contango).
    *   **Theory of Storage:** Futures price = `Spot Price + Direct Storage Costs - Convenience Yield`.
        *   `Convenience Yield:` Benefit of holding physical commodity (e.g., avoiding production stoppage). Higher when inventory is low.
        *   If `Storage Costs > Convenience Yield`, then `F > S` (Contango).
        *   If `Storage Costs < Convenience Yield`, then `F < S` (Backwardation).
4.  **Commodity Swaps:** Exchange payments based on commodity price vs. fixed price or another floating price.
5.  **Commodity Indexes:** S&P GSCI, Bloomberg Commodity Index. Differ in weighting (production vs. liquidity/global presence) and rolling methodology.

## IV. Hedge Funds (Review & L2 Focus)

1.  **Characteristics:** Broad range of strategies, use of leverage, derivatives, short selling, less regulation, lock-ups/notice periods, incentive fees.
2.  **Strategies (L2 may require deeper understanding of mechanics/risk):**
    *   **Equity Market Neutral:** Long/short with beta neutrality. Profit from stock selection.
    *   **Convertible Arbitrage:** Long convertible bond, short underlying stock. Exploit mispricing.
    *   **Fixed Income Arbitrage:** Exploit small mispricings in related debt securities. High leverage.
    *   **Event-Driven:** Merger arbitrage, distressed securities, activist.
    *   **Global Macro:** Top-down bets on major market trends using various instruments.
3.  **Fees:** "2 and 20" is common. Hurdle rates, high-water marks.
4.  **Due Diligence for Hedge Funds:** Critical due to opacity and manager risk. Investment strategy, operational soundness, risk management, legal/regulatory compliance, service providers, manager background/track record.
5.  **Valuation Issues:** Illiquid securities, model-based valuations. Potential for smoothing of returns.
6.  **Hedge Fund Indexes:** Biases (survivorship, backfill, self-selection).

## V. Due Diligence of Alternative Investments - General Principles
- **Organizational Structure:** Management team, staff, systems, processes.
- **Investment Process:** Strategy, research, portfolio construction, risk management.
- **Operational Due Diligence:** Trade execution, settlement, valuation, accounting, IT, compliance, service providers (auditor, prime broker, administrator).
- **Risk Management:** Identification, measurement, monitoring of risks (market, credit, liquidity, operational, counterparty).
- **Performance and Fees:** Track record, attribution, fee structure, alignment of interests.
- **Legal and Regulatory:** Fund documents, compliance, litigation history.

## Key Formulas & Concepts:
- **Real Estate Value (Direct Cap):** `NOI_1 / Cap Rate`
- **FFO:** `NI + Depr - Gains on Sale + Losses on Sale`
- **AFFO:** `FFO - Non-cash Rents - Recurring Maintenance Capex`
- **PE Post-Money Value:** `Pre-Money Value + Investment`
- **Commodity Roll Yield:** Related to `F_near - F_far`.
- **Convenience Yield:** Benefit of holding physical commodity.

## L2 Alternatives Focus:
- **Valuation techniques:** Applying income, market, and cost approaches to real estate. DCF and market multiples for private equity.
- **LBO mechanics and value creation.**
- **PE fund structures and fee calculations (waterfalls, carried interest).**
- **Commodity futures returns:** Collateral, price, and roll yield. Understanding contango/backwardation and theories of futures returns.
- **Thorough due diligence process** for all alternative investment classes, especially hedge funds and private equity.
- **Risk management considerations** specific to each alternative asset class.

*This cheat sheet is a summary. Always refer to official CFA curriculum for detailed explanations and examples.*Alternative Investments for L2 is done. Last one for this section is Portfolio Management.
