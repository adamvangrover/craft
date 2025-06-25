# CFA Level 3 Cheat Sheet: Derivatives and Currency Management

**Core Principle:** Level 3 focuses on the strategic use of derivatives for portfolio risk management (hedging, modifying exposures) and return enhancement, with a significant emphasis on currency risk management for international portfolios.

## I. Risk Management Applications of Derivatives

### A. Managing Equity Risk
1.  **Hedging Equity Portfolios:**
    *   **Short Stock Index Futures:** To reduce systematic market risk (beta).
        `N_contracts = [(β_target - β_portfolio) / β_futures] * (Portfolio Value / Futures Price * Multiplier)`
        If `β_target = 0`, full hedge of systematic risk.
    *   **Buying Index Put Options (Protective Put):** Provides downside protection while retaining upside potential. Costly (premium).
    *   **Equity Swaps (Receive Fixed/Floating, Pay Equity Return):** To neutralize equity exposure.
2.  **Modifying Beta:** Use stock index futures to adjust portfolio beta to a target level.
3.  **Creating Synthetic Equity Positions:**
    *   Synthetic Long Stock: Long call + Short put (same strike/expiry) + Long risk-free bond.
    *   Synthetic Index Fund: Long stock index futures + Invest cash at risk-free rate.

### B. Managing Fixed Income Risk (Interest Rate Risk)
1.  **Hedging Duration:**
    *   **Short Interest Rate Futures (e.g., T-bond futures):** To shorten duration / protect against rising rates.
        `N_contracts ≈ [(Dur_target - Dur_portfolio) / Dur_futures_CTD] * (Portfolio Value * BPV_portfolio) / (Futures Price * Multiplier * BPV_futures_CTD * CF_CTD)`
        (More simply: `N_contracts = -(BPV_Portfolio / BPV_Futures_CTD) * HedgeRatio` where `HedgeRatio` adjusts for relative durations or target change).
        `BPV (Basis Point Value) = ModDur * MarketValue * 0.0001`.
    *   **Interest Rate Swaps:**
        *   *Pay-Fixed Swap (Receive Floating):* Reduces portfolio duration. Benefits if rates rise.
        *   *Receive-Fixed Swap (Pay Floating):* Increases portfolio duration. Benefits if rates fall.
        `Change in Portfolio Duration ≈ (Notional of Swap / Portfolio Value) * Duration_Swap`.
    *   **Buying Put Options on Bonds / Interest Rate Put Options (Receiver Swaption):** Protect against rising rates.
    *   **Selling Call Options on Bonds / Interest Rate Call Options (Payer Swaption):** Generate income, limit upside if rates fall.
2.  **Managing Yield Curve Shape Risk:** Use combinations of futures/swaps with different maturities (e.g., short short-term futures, long long-term futures for a flattening trade).
3.  **Creating Synthetic Fixed Income Positions:** E.g., Synthetic FRN = Long fixed-rate bond + Pay-fixed interest rate swap.

### C. Managing Foreign Currency Risk (Covered in Section II)

### D. Option Strategies for Risk Management & Return Enhancement
*   **Covered Call:** Long stock + Short call. Generates income, limits upside.
*   **Protective Put:** Long stock + Long put. Downside protection.
*   **Collar:** Long stock + Long OTM put + Short OTM call. Zero-cost collar possible. Limits upside and downside.
*   **Spreads (Bull/Bear, Calendar, Diagonal):** Bets on price direction, volatility, time decay.
*   **Volatility Strategies (Straddles, Strangles):** Profit from large price movements, regardless of direction.
    *   Long Straddle/Strangle: Buy call and put. Short Straddle/Strangle: Sell call and put.

### E. Volatility Derivatives
*   **Variance Swaps:** Payoff based on difference between realized variance and strike variance.
*   **Volatility Futures/Options (e.g., VIX futures/options):** Allow direct trading/hedging of market volatility.

## II. Currency Management: An Introduction

*   **Sources of Currency Risk (FX Risk):** Arises from investing in assets denominated in foreign currencies.
    *   Transaction exposure, translation exposure (accounting), economic exposure.
*   **Return in Domestic Currency:** `R_DC ≈ R_FC + R_FX` (Return in foreign currency + Return from currency movement).
    *   More precisely: `R_DC = (1 + R_FC) * (1 + R_FX) - 1`.
*   **Risk of Foreign Asset in Domestic Terms:**
    `σ^2(R_DC) ≈ σ^2(R_FC) + σ^2(R_FX) + 2 * σ(R_FC) * σ(R_FX) * Corr(R_FC, R_FX)`.
    *   Currency risk adds to total risk. Correlation between asset return and currency return is important.
*   **Arguments for Currency Hedging:**
    *   Reduces unrewarded risk (volatility of domestic currency returns).
    *   Can improve Sharpe ratio of international portfolio.
    *   Strategic policy decision (full hedge, partial hedge, no hedge).
*   **Arguments Against Currency Hedging:**
    *   Hedging costs (transaction costs, bid-ask spreads).
    *   Potential to give up currency gains if domestic currency depreciates.
    *   In long run, currency movements may average out (PPP argument, often weak).
    *   Natural hedges might exist (e.g., foreign revenues for a domestic company).
*   **Strategic Hedging Decisions:**
    *   Based on long-term risk tolerance, correlations, costs.
    *   **Optimal Hedge Ratio:** Hedge ratio that minimizes variance of domestic currency returns.
        `Hedge Ratio = Cov(R_FC, R_FX) / Var(R_FX)` (regression beta of R_FC on R_FX).
*   **Tactical (Active) Currency Management:** Take views on currency movements to add alpha.

## III. Currency Management: Tools and Strategies

### A. Hedging Tools
1.  **Forward Contracts:** Lock in future exchange rate. Most common tool.
    *   `Cost of Hedging (Forward Premium/Discount) ≈ (Forward Rate - Spot Rate) / Spot Rate`.
    *   Related to interest rate differential (IRP).
2.  **Currency Futures:** Standardized forwards, exchange-traded. Less customization.
3.  **Currency Options:**
    *   **Buy Put on Foreign Currency (or Call on Domestic Currency):** Protects against depreciation of foreign currency. Costly (premium). Allows participation in appreciation.
    *   **Buy Call on Foreign Currency (or Put on Domestic Currency):** Protects against appreciation of foreign currency (e.g., for a liability).
    *   **Collars (Range Forwards):** Buy put + Sell call. Reduces cost, but limits upside.
4.  **Currency Swaps:** Exchange principal and/or interest in one currency for another. Used for longer-term hedges or asset-liability management.
5.  **Non-Deliverable Forwards (NDFs):** For emerging market currencies with trading restrictions. Cash-settled in major currency.

### B. Hedging Strategies
1.  **Passive Hedging:** Maintain a predetermined hedge ratio (e.g., 0%, 50%, 100%).
2.  **Discretionary (Selective) Hedging:** Manager decides when and how much to hedge based on views.
3.  **Active Currency Management:** Treat currency as separate asset class, seek alpha from currency movements.
    *   **Economic Fundamentals Approach:** Based on PPP, growth, BOP, interest rates.
    *   **Technical Analysis Approach:** Chart patterns, trends.
    *   **Carry Trade:** Borrow in low-yield currency, invest in high-yield currency. Profitable if high-yield currency doesn't depreciate enough to offset yield differential. Risky (prone to crashes).
    *   **Volatility Trading:** Use options to bet on changes in currency volatility.
4.  **Minimum Variance Hedge Ratio (MVHR):**
    *   `MVHR = - Cov(ΔS_DC/FC, ΔR_FC,DC) / Var(ΔS_DC/FC)` (regression beta of asset return on FX rate changes).
    *   The hedge ratio that minimizes the volatility of the hedged portfolio's return.
5.  **Cross-Hedging:** Hedging exposure in one currency using derivatives on a correlated currency (if direct hedge unavailable/costly). Basis risk exists.
6.  **Rolling Hedges:** Using short-term forward contracts to hedge longer-term exposure. Requires rolling contracts at expiration. Subject to changes in forward points.

### C. Costs of Currency Hedging
*   Transaction costs (bid-ask spreads on forwards/options).
*   Option premiums.
*   Opportunity cost if currency moves favorably and hedge limits gains.
*   Management fees for active currency overlay.

## IV. Swaps, Forwards, and Futures Strategies (Broader Portfolio Applications)

*   **Equity Swaps:**
    *   Replicate equity index exposure synthetically.
    *   Change asset allocation quickly and cheaply.
    *   International diversification without direct investment.
    *   Tax advantages in some cases.
*   **Fixed Income Swaps (Interest Rate Swaps):**
    *   Manage duration and interest rate exposure (as discussed in Section I.B).
    *   Convert fixed-rate assets/liabilities to floating, or vice-versa.
*   **Commodity Swaps:** Gain/hedge exposure to commodity prices.
*   **Forward Rate Agreements (FRAs):** Hedge short-term interest rate risk.
*   **Futures Overlay Strategies:** Use futures to adjust overall market exposure (beta for equity, duration for fixed income) of a portfolio without disturbing underlying security selection by active managers.

## V. Option Strategies (Broader Portfolio Applications)

*   **Portfolio Insurance:** Using protective puts or dynamic hedging with futures to limit downside risk.
*   **Generating Income:** Covered calls, selling cash-secured puts.
*   **Volatility Exposure:** Long/short straddles, strangles.
*   **Modifying Payoff Profiles:** Creating asymmetric return profiles (e.g., collars).
*   **Delta Hedging:** Maintaining a delta-neutral position to isolate exposure to other factors (e.g., volatility - gamma/vega trading).

**Key for L3 Derivatives & Currency Management:**
*   **Strategic Implementation:** How derivatives fit into overall portfolio strategy to achieve objectives.
*   **Risk Management Focus:** Using derivatives to manage specific risks (market, interest rate, currency).
*   **Currency Hedging Decisions:** Understanding the trade-offs, costs, and different strategic/tactical approaches.
*   **Option Strategy Nuances:** Payoffs, risks, and when each strategy is appropriate.
*   **Integration:** Connecting derivative strategies with asset allocation, equity, and fixed income management.

This cheat sheet covers the core concepts for L3 Derivatives and Currency Management. Focus on the practical application of these tools for risk management and return generation in a portfolio context. Good luck!I will continue with the Level 3 Cheat Sheets. Next is `L3_CS_Asset_Allocation.md`.
