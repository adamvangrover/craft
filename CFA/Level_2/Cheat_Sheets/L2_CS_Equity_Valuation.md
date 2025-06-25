# CFA Level 2 Cheat Sheet: Equity Valuation

**Core Principle:** Level 2 Equity Valuation builds on Level 1 concepts, focusing on more advanced models, application, and analysis of various valuation techniques.

## I. Discounted Dividend Valuation (DDM)

*   **Core Idea:** Value of a stock is the present value of its future expected dividends. `V0 = Σ [Dt / (1+ke)^t]`
*   **Gordon Growth Model (Constant Growth DDM):**
    *   `V0 = D1 / (ke - g)`
    *   `D1 = D0 * (1+g)`
    *   `ke` = Required return on equity. `g` = Constant dividend growth rate.
    *   Assumptions: `ke > g`, constant `g`, constant payout ratio.
    *   `g = b * ROE` (b = retention rate = 1 - payout ratio; ROE = Return on Equity).
    *   Value drivers: `D1`, `ke`, `g`.
*   **Multi-Stage DDM:** For companies with non-constant growth phases.
    1.  **Two-Stage DDM:**
        *   Stage 1: Finite period of non-constant growth (or supernormal growth).
        *   Stage 2: Infinite period of constant, sustainable growth (`gL`).
        *   `V0 = Σ [Dt / (1+ke)^t]` for Stage 1 dividends `+ [PN / (1+ke)^N]`
        *   `PN = DN+1 / (ke - gL)` (Terminal value at end of Stage 1, using Gordon Growth).
    2.  **H-Model:** Assumes growth rate declines linearly from an initial supernormal rate (`gS`) to a long-term normal rate (`gL`) over `2H` periods.
        *   `V0 = [D0*(1+gL) / (ke-gL)] + [D0*H*(gS-gL) / (ke-gL)]`
        *   Approximation for a more complex two-stage model.
    3.  **Three-Stage DDM:** Common patterns: Growth, Transition, Maturity.
*   **Estimating `ke` (Cost of Equity):**
    *   CAPM: `ke = Rf + β * ERP`
    *   Build-up Method (for private companies): `Rf + ERP + Size Premium + Specific Company Premium`.
*   **Estimating `g` (Growth Rate):**
    *   Historical growth rates (dividends, earnings).
    *   Analyst forecasts.
    *   Sustainable Growth Rate: `g = ROE * b`.
*   **Strengths of DDM:** Simple, theoretically sound (dividends are cash to shareholders).
*   **Weaknesses of DDM:** Sensitive to inputs, not usable for non-dividend paying firms, `g` must be less than `ke` for Gordon Growth.

## II. Free Cash Flow Valuation

*   **Core Idea:** Value is based on cash flows available to capital providers, rather than just dividends.
*   **Free Cash Flow to Firm (FCFF):** Cash flow available to all investors (debt and equity) after operating expenses and capital expenditures.
    *   `FCFF = NI + NCC + Int(1-Tax Rate) - FCInv - WCInv`
        *   `NI` = Net Income
        *   `NCC` = Non-Cash Charges (e.g., Depreciation, Amortization)
        *   `Int(1-Tax Rate)` = After-tax interest expense
        *   `FCInv` = Fixed Capital Investment (Capital Expenditures - Proceeds from sale of LT assets)
        *   `WCInv` = Working Capital Investment (Change in non-cash current assets - Change in non-cash current liabilities)
    *   `FCFF = CFO + Int(1-Tax Rate) - FCInv`
    *   `FCFF = EBIT(1-Tax Rate) + Dep - FCInv - WCInv` (if Dep is only NCC)
    *   `FCFF = EBITDA(1-Tax Rate) + Dep(Tax Rate) - FCInv - WCInv`
    *   **Firm Value (V_Firm):** `Σ [FCFFt / (1+WACC)^t]`
    *   **Equity Value (V_Equity):** `V_Firm - Market Value of Debt - Market Value of Preferred Stock`.
    *   **WACC (Weighted Average Cost of Capital):** Discount rate for FCFF.
    *   **Constant Growth FCFF Model:** `V_Firm = FCFF1 / (WACC - g)`
*   **Free Cash Flow to Equity (FCFE):** Cash flow available to common shareholders after all expenses, debt payments (principal & interest), and capital expenditures.
    *   `FCFE = FCFF - Int(1-Tax Rate) + Net Borrowing`
    *   `FCFE = NI + NCC - FCInv - WCInv + Net Borrowing`
    *   `FCFE = CFO - FCInv + Net Borrowing`
    *   **Equity Value (V_Equity):** `Σ [FCFEt / (1+ke)^t]`
    *   **Constant Growth FCFE Model:** `V_Equity = FCFE1 / (ke - g)`
    *   `ke` (Cost of Equity) is the discount rate for FCFE.
*   **Forecasting FCFF and FCFE:** Often involves forecasting components (sales, margins, capex, working capital). Can be complex.
*   **Single-Stage (Constant Growth) Models:** Similar to Gordon Growth DDM.
*   **Multi-Stage Models (Two-Stage, Three-Stage):** Similar structure to multi-stage DDMs.
*   **Strengths of FCF Models:** Useful for non-dividend paying firms, firms with volatile dividends, or when control perspective is important (FCFF). More fundamentally based than DDM.
*   **Weaknesses of FCF Models:** Sensitive to growth and discount rate assumptions. Forecasting FCFF/FCFE components can be difficult. Terminal value can be a large portion of total value.

## III. Residual Income Valuation

*   **Core Idea:** Value of equity is book value plus the present value of expected future residual income.
*   **Residual Income (RI_t):** `RI_t = Et - (ke * Bt-1)`
    *   `Et` = Net Income in period t
    *   `ke` = Required return on equity
    *   `Bt-1` = Book value of equity at beginning of period t (or end of t-1)
    *   `ke * Bt-1` is the **equity charge** (opportunity cost of equity capital).
*   **Residual Income Model (RIM):**
    *   `V0 = B0 + Σ [RIt / (1+ke)^t]`
    *   `B0` = Current book value of equity.
*   **Single-Stage (Constant Growth) RI Model:** (If RI grows at constant `g`)
    *   Assumes constant ROE and constant growth in book value.
    *   `V0 = B0 + [(ROE - ke) * B0] / (ke - g)` (if RI grows at g, and ROE is constant)
    *   This formula is valid when ROE is constant and `g = b * ROE` where `b` is retention rate based on RI.
*   **Multi-Stage RI Models:** Similar structure to DDM/FCF models. Terminal value often assumes RI fades to zero or a constant level.
*   **Relationship to DDM/FCF:** RIM is theoretically consistent with DDM and FCFE models if assumptions are consistent (especially regarding clean surplus accounting).
*   **Clean Surplus Accounting:** `Bt = Bt-1 + Et - Dt`. All changes in book value of equity, except transactions with owners (share issues/repurchases), flow through net income. Violations (e.g., some OCI items) require adjustments.
*   **Strengths of RIM:** Focuses on economic profitability (NI > equity charge). Uses readily available accounting data. Less sensitive to terminal value assumptions if RI fades. Applicable to non-dividend paying firms.
*   **Weaknesses of RIM:** Relies on accounting data (can be manipulated). Requires clean surplus accounting (or adjustments). Sensitive to book value and ROE estimates.

## IV. Market-Based Valuation (Multiples)

*   **Core Idea:** Estimate value based on multiples of comparable companies or transactions.
*   **Method of Comparables:**
    1.  Select comparable companies/transactions.
    2.  Calculate relevant multiples for comparables.
    3.  Apply average/median multiple to target company's fundamental.
    4.  Adjust for differences.
*   **Price Multiples:**
    *   **P/E (Price-to-Earnings):** `P0 / E1` (leading) or `P0 / E0` (trailing).
        *   **Justified P/E (from Gordon Growth):** `(D1/E1) / (ke - g) = Payout Ratio / (ke - g)`.
        *   Drivers: Growth (g ↑, P/E ↑), Risk (ke ↓, P/E ↑), Payout (↑, P/E ↑).
        *   **Normalized EPS:** Adjust for cyclicality or temporary effects.
        *   **PEG Ratio:** `(P/E) / g`. Lower PEG suggests undervaluation (if risk similar). `g` is % growth.
    *   **P/BV (Price-to-Book Value):** `P0 / B0`.
        *   **Justified P/BV (from RI model):** `1 + [PV of future RI / B0]`. Or `(ROE - g) / (ke - g)`.
        *   Drivers: ROE (↑, P/BV ↑), g (↑, P/BV ↑), ke (↓, P/BV ↑).
        *   Adjust B0 for off-balance sheet items, accounting differences.
    *   **P/S (Price-to-Sales):** `P0 / S0`.
        *   **Justified P/S (from Gordon Growth):** `(E0/S0) * Payout * (1+g) / (ke - g) = Profit Margin * Payout * (1+g) / (ke - g)`.
        *   Useful for negative EPS firms. Sales less manipulable.
    *   **P/CF (Price-to-Cash Flow):** `P0 / CF0`. (CF can be CFO, FCFE, etc.).
        *   Cash flow less manipulable than earnings.
    *   **Dividend Yield (D/P):** `D0 / P0`.
*   **Enterprise Value (EV) Multiples:**
    *   `EV = Market Cap + MV Debt + MV Preferred - Cash & Equivalents`.
    *   **EV/EBITDA:** Common. EBITDA is pre-tax, pre-interest, pre-D&A.
        *   Good for comparing firms with different capital structures or D&A.
        *   EBITDA can overstate CFO if WCInv or taxes are high.
    *   **EV/Sales:** Useful for firms with negative EBITDA.
*   **Momentum Indicators:** Relate price to price trends (e.g., relative strength). Not valuation per se.
*   **Strengths of Multiples:** Simple, widely used, reflect current market sentiment.
*   **Weaknesses of Multiples:** Can be hard to find truly comparable companies. Affected by market mispricing. Accounting differences can distort. Can be a "beauty contest."

## V. Private Company Valuation

*   **Challenges:** Less liquidity, less information, different objectives of owners, potential for key person discounts.
*   **Valuation Adjustments:**
    *   **Discount for Lack of Control (DLOC):** If valuing a minority stake.
    *   **Discount for Lack of Marketability (DLOM):** For illiquidity of private shares.
*   **Approaches:**
    1.  **Income Approach (FCFF/FCFE):** Requires estimating `ke` or WACC, often using build-up method or CAPM with adjustments for size/specific risk.
    2.  **Market Approach (Guideline Public Company Method - GPCM / Guideline Transactions Method - GTM):** Uses multiples from comparable public companies or M&A transactions. Adjust for control and marketability.
    3.  **Asset Approach:** Values assets minus liabilities. (e.g., for holding companies or liquidation).

## VI. Sum-of-the-Parts Valuation

*   Value individual business segments or divisions separately.
*   Sum the values of the parts to get total company value.
*   Useful for conglomerates or companies with distinct business lines.

## VII. Key Considerations in Equity Valuation

*   **Analyst's Role:** Understand the business, industry, and economic context. Select appropriate models. Make reasonable assumptions.
*   **Quality of Inputs:** Forecasts (dividends, FCF, earnings, growth), discount rates. "Garbage in, garbage out."
*   **Sensitivity Analysis:** Test how value changes with different input assumptions.
*   **Valuation is an Art and a Science:** Requires judgment and experience. No single model is perfect. Often use multiple models.

This cheat sheet summarizes key equity valuation models and concepts for Level 2. Focus on application, understanding drivers of value for each model, and comparing models. Good luck!Now I will create the deep dive for Level 2: `L2_DD_FCFF_FCFE_Valuation.md`. This will go into more detail on Free Cash Flow valuation.
