# CFA Level 3 Cheat Sheet: Fixed Income Portfolio Management

**Core Principle:** Level 3 Fixed Income Portfolio Management focuses on constructing and managing fixed income portfolios to meet specific investor objectives and constraints, including liability-driven investing (LDI), yield curve strategies, credit strategies, and managing international exposures.

## I. Overview of Fixed Income Portfolio Management

*   **Investor Objectives:** Capital preservation, income generation, capital appreciation, liability matching, diversification.
*   **Fixed Income Portfolio Risks:** Interest rate risk (duration, convexity), credit risk (default, downgrade, spread), liquidity risk, reinvestment risk, inflation risk, currency risk.
*   **Passive, Active, and Enhanced Indexing Strategies:**
    *   **Passive (Indexing):** Replicate performance of a bond index. Full replication, stratified sampling, optimization. Challenges: index size, illiquidity, turnover.
    *   **Enhanced Indexing (Risk Factor Matching):** Match primary risk exposures of index (e.g., duration, convexity, sector weights, quality) but with some active deviations to seek small alpha.
    *   **Active Management:** Aim to outperform benchmark via interest rate anticipation, yield curve strategies, sector rotation, security selection, credit strategies.

## II. Liability-Driven Investing (LDI)

*   **Goal:** Manage assets to meet future liabilities (e.g., pension fund obligations, insurance payouts). Focus on surplus (Assets - PV(Liabilities)) management.
*   **Types of Liabilities:**
    *   **Type I:** Known amount, known timing (e.g., zero-coupon bond payment).
    *   **Type II:** Known amount, uncertain timing (e.g., life insurance payout).
    *   **Type III:** Uncertain amount, known timing (e.g., floating rate annuity payment).
    *   **Type IV:** Uncertain amount, uncertain timing (e.g., P&C insurance claims).
*   **Immunization Strategies (for Type I liabilities or fixed nominal liabilities):** Protect against interest rate risk.
    1.  **Cash Flow Matching (Dedication):** Construct portfolio where asset cash flows exactly match liability cash flows in timing and amount.
        *   Pros: Eliminates interest rate risk if held to maturity. Simple. Cons: Can be expensive, restrictive, reinvestment risk if CFs don't perfectly match.
    2.  **Duration Matching (Classical Immunization):** Match Macaulay duration of assets to Macaulay duration of liabilities.
        *   `PV(Assets) = PV(Liabilities)`.
        *   `MacDur(Assets) = MacDur(Liabilities)`.
        *   `Convexity(Assets) >= Convexity(Liabilities)` (minimizes structural risk from non-parallel shifts).
        *   Requires rebalancing as durations change with time and yield changes. Protects against small, parallel shifts in yield curve.
    3.  **Contingent Immunization:** Active management as long as surplus is positive. If surplus falls to zero, switch to immunization strategy.
*   **Managing Regulatory Surplus:** For entities like banks and insurance companies, focus on managing assets relative to regulatory capital requirements.
*   **Asset-Liability Management (ALM):** Broader concept than LDI, considers all assets and liabilities of an entity.

## III. Yield Curve Strategies (Active Management)

Based on forecasts of interest rate levels, yield curve shape, and volatility.
*   **Strategies Based on Interest Rate Level Forecasts:**
    *   **Rate Decrease Expected:** Increase portfolio duration (buy longer maturity/lower coupon bonds).
    *   **Rate Increase Expected:** Decrease portfolio duration (buy shorter maturity/higher coupon bonds, or use derivatives).
*   **Strategies Based on Yield Curve Shape Forecasts:**
    *   **Bullet Portfolio:** Concentrates maturities around a specific point on the curve. Useful if expect stable curve or want to target specific segment.
    *   **Barbell Portfolio:** Concentrates maturities at short and long ends, with nothing in middle. Higher convexity than bullet with same duration. Performs well if curve flattens (twist) or if rates fall significantly (convexity effect).
    *   **Laddered Portfolio:** Maturities spread evenly across the curve. Provides regular cash flow, diversifies reinvestment risk.
    *   **Riding the Yield Curve (Rolling Down the Curve):** If curve is upward sloping and expected to remain static, buy bonds with maturity longer than investment horizon. As bond "rolls down" the curve (maturity shortens), its yield typically falls, leading to price appreciation.
*   **Strategies Based on Yield Volatility Forecasts:**
    *   **Buy Convexity:** If expect high volatility. E.g., barbells, bonds with embedded options that benefit from volatility (putable bonds).
    *   **Sell Convexity:** If expect low volatility. E.g., callable bonds, mortgage-backed securities (MBS) with prepayment risk. Can earn higher yield for taking on this risk.

## IV. Fixed Income Credit Strategies (Active Management)

*   **Goal:** Generate alpha by exploiting perceived mispricings in credit markets or by forecasting changes in credit quality/spreads.
*   **Approaches:**
    1.  **Bottom-Up Credit Selection:** Analyze individual issuers and bonds to find undervalued securities. Focus on credit research, financial statement analysis.
    2.  **Top-Down Credit Strategy:** Focus on macroeconomic factors, industry trends, and credit cycle to determine optimal allocation to credit sectors (e.g., investment grade vs. high yield, specific industries) and credit quality tiers.
    3.  **Credit Spread Analysis:**
        *   Forecast changes in credit spreads (yield difference vs. benchmark Treasuries).
        *   If spreads expected to narrow (improve): Overweight credit risk (lower quality, longer duration credit).
        *   If spreads expected to widen (deteriorate): Underweight credit risk (higher quality, shorter duration credit).
    4.  **High-Yield Investing:** Focus on below-investment-grade bonds. Higher potential return, higher risk. Requires deep credit analysis, understanding of covenants, recovery rates. Often equity-like analysis.
    5.  **Distressed Debt Investing:** Investing in bonds of companies near or in bankruptcy. Potential for high returns if company recovers or through restructuring process. Highly specialized.
*   **Managing Credit Risk:** Diversification, credit quality limits, scenario analysis, credit derivatives (CDS).

## V. International Fixed Income Portfolio Management

*   **Benefits:** Diversification, potentially higher yields, exposure to different economic cycles.
*   **Risks:**
    *   **Currency Risk:** Primary risk. Fluctuations in exchange rates impact domestic currency returns.
        *   `Return_domestic ≈ Return_local + Return_currency`.
        *   **Hedging Currency Risk:**
            *   **Passive Hedging:** Hedge fully or partially back to domestic currency using forwards, futures, swaps. Reduces volatility but incurs hedging costs and gives up potential currency gains.
            *   **Active Currency Management:** Take views on currency movements to add alpha.
            *   **No Hedge:** Accept currency risk.
    *   **Country Risk:** Political risk, economic risk, legal/regulatory risk specific to a country.
    *   **Differences in Market Structure, Liquidity, Taxation.**
*   **Emerging Market Debt (EMD):**
    *   Can be sovereign or corporate, denominated in local currency or hard currency (e.g., USD, EUR).
    *   Higher yields, higher potential returns, but also higher risks (credit, currency, political).
    *   Requires specialized analysis.

## VI. Fixed Income Derivatives in Portfolio Management

*   **Interest Rate Futures:** Hedge duration, modify portfolio duration, speculate on rate movements.
*   **Interest Rate Swaps:**
    *   **Pay-Fixed Swap (Receive Floating):** Shortens duration (reduces interest rate risk if rates rise).
    *   **Receive-Fixed Swap (Pay Floating):** Lengthens duration (increases interest rate risk if rates rise, benefits if rates fall).
    *   Used to manage duration gap in LDI.
*   **Interest Rate Options (Caps, Floors, Collars):**
    *   **Cap:** Buy cap to protect against rising floating rates (pays if rate > strike).
    *   **Floor:** Buy floor to protect against falling floating rates (pays if rate < strike).
    *   **Collar:** Buy cap + Sell floor (or vice versa). Zero-cost collar possible.
*   **Credit Derivatives:**
    *   **Credit Default Swaps (CDS):** Buyer pays premium, seller provides protection against credit event (e.g., default) on a reference entity/obligation.
        *   Buy CDS to hedge credit risk (like insurance).
        *   Sell CDS to earn premium (take on credit risk, synthetic long credit).
    *   **Credit Spread Options/Forwards.**
    *   **Collateralized Debt Obligations (CDOs) / Synthetic CDOs:** (More complex, less emphasis on structuring them at L3, more on understanding risk).

## VII. Measuring Fixed Income Portfolio Returns and Risk

*   **Total Return:** Includes income, capital gains/losses, currency gains/losses.
*   **Key Risk Measures:**
    *   **Duration (Effective Duration):** Sensitivity to parallel shifts in benchmark yield curve.
    *   **Convexity (Effective Convexity):** Second-order sensitivity.
    *   **Key Rate Durations:** Sensitivity to non-parallel shifts.
    *   **Spread Duration:** Sensitivity to changes in credit spreads.
    *   **Tracking Error:** For indexed/enhanced indexing portfolios.
    *   **Surplus Volatility:** For LDI portfolios.
*   **Performance Attribution:** Decomposing portfolio return into contributions from:
    *   Expected return (from initial yield curve and holdings).
    *   Unexpected return (alpha) due to:
        *   Interest rate management (duration, curve positioning).
        *   Sector/quality allocation.
        *   Security selection.
        *   Currency management (if applicable).

**Key for L3 Fixed Income PM:**
*   **Holistic Approach:** Integrating client objectives (especially liabilities) with market views.
*   **Risk Management:** Understanding and managing various fixed income risks, especially interest rate and credit risk.
*   **Strategy Application:** Knowing when and how to use different yield curve, credit, and LDI strategies.
*   **Derivatives Usage:** Practical application of derivatives for hedging and active management.

This cheat sheet covers the core concepts in L3 Fixed Income Portfolio Management. Focus on the strategic application of these tools and concepts to meet diverse investor needs. Good luck!I will continue with the Level 3 Cheat Sheets. Next is `L3_CS_Alternative_Investments_Portfolio_Management.md`.
