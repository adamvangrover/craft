# CFA Level 2 Topic Deep Dive: Advanced Equity Valuation Models

## Introduction
CFA Level 2 significantly expands on equity valuation techniques introduced in Level 1. While Level 1 focuses on foundational models like the Gordon Growth Model and single-stage FCFE/FCFF, Level 2 delves into multi-stage models, residual income valuation, and the application of various multiples with greater nuance. This deep dive explores these advanced concepts.

## I. Discounted Cash Flow (DCF) Models - Multi-Stage

Multi-stage DCF models are used when a company is expected to go through different growth phases before settling into a stable, long-term growth rate. Common models include two-stage and three-stage (H-model is a specific type of two-stage).

### A. Two-Stage Dividend Discount Model (DDM)
Assumes an initial period of high (or variable) growth, followed by a stable growth period.
1.  **General Two-Stage DDM:**
    *   Forecast dividends (Dt) for the initial high-growth period (n years).
    *   Calculate the terminal value (Pn) at the end of the high-growth period using the Gordon Growth Model: `Pn = D(n+1) / (ke - gL)` where `gL` is the long-term stable growth rate.
    *   `D(n+1) = Dn * (1 + gL)`.
    *   Discount the forecast dividends and the terminal value back to the present:
        `V0 = Σ [Dt / (1+ke)^t] + [Pn / (1+ke)^n]` (sum from t=1 to n)

2.  **The H-Model (Special Case of Two-Stage DDM):**
    *   Assumes an initial high growth rate (gS) that declines linearly over 2H years to a stable long-term growth rate (gL).
    *   `V0 = [D0 * (1+gL) / (ke-gL)] + [D0 * H * (gS - gL) / (ke-gL)]`
        *   First term: Value if growth was already stable at gL.
        *   Second term: Extra value from the high-growth period.
        *   `H` = half-life of the high-growth period (i.e., high growth lasts 2H years).
    *   Useful for companies expected to have a gradual transition to maturity.

### B. Three-Stage DDM
Often models three phases:
1.  High growth (e.g., new product cycle)
2.  Transitional declining growth
3.  Stable mature growth
Calculation involves forecasting dividends for stages 1 and 2, calculating a terminal value at the end of stage 2 (using Gordon Growth for stage 3), and discounting all cash flows.

### C. Free Cash Flow Models (FCFF and FCFE) - Multi-Stage
Similar logic to multi-stage DDM, but using FCFF or FCFE.
*   **FCFE Model:** `V_Equity = Σ [FCFEt / (1+ke)^t] + [Terminal Value_Equity_n / (1+ke)^n]`
    *   `Terminal Value_Equity_n = FCFE(n+1) / (ke - gL)`
*   **FCFF Model:** `V_Firm = Σ [FCFFt / (1+WACC)^t] + [Terminal Value_Firm_n / (1+WACC)^n]`
    *   `Terminal Value_Firm_n = FCFF(n+1) / (WACC - gL)`
    *   `V_Equity = V_Firm - Market Value of Debt + Cash - Market Value of Preferred Stock`

**Key Considerations for Multi-Stage Models:**
*   Choice of growth rates and duration of stages requires significant judgment and industry knowledge.
*   Terminal value often constitutes a large portion of the total value, so it's sensitive to `ke` (or WACC) and `gL`.
*   Ensure consistency between payout ratios, ROE, and growth assumptions (`g = ROE * b`).

## II. Residual Income (RI) Valuation

Residual Income (also known as Economic Profit or Abnormal Earnings) measures the income earned by a firm in excess of its cost of equity capital.
*   `RIt = Et - (ke * B(t-1))`
    *   `RIt` = Residual income in period t
    *   `Et` = Net income in period t (or comprehensive income)
    *   `ke` = Required return on equity
    *   `B(t-1)` = Book value of equity at the beginning of period t
*   **Valuation Model:** `V0 = B0 + Σ [RIt / (1+ke)^t]` (sum from t=1 to infinity)
    *   `B0` = Current book value of equity.
    *   The model values equity as current book value plus the present value of all expected future residual incomes.

**Single-Stage RI Model (Constant Growth in RI beyond a point, or RI fades):**
If RI is expected to persist at a certain level or grow at a constant rate `g_RI` indefinitely after a forecast horizon `T`, a terminal value for RI can be calculated.
*   If RI is constant after T: `PV(Terminal RI) = RIT / ke` (as a perpetuity, discounted back).
*   If RI grows at `g_RI`: `PV(Terminal RI) = RI(T+1) / (ke - g_RI)` (discounted back).
*   **Persistence Factor (ω):** `0 ≤ ω ≤ 1`. `RI(t+1) = ω * RIt`. If ω=1, RI persists. If ω=0, RI drops to zero after forecast horizon. If 0 < ω < 1, RI fades.
    *   Terminal Value at T assuming fade: `RIT / (1 + ke - ω)` (if RI at T is the last explicitly forecast RI, and it then fades).

**Advantages of RI Models:**
*   Focuses on economic profitability.
*   Less sensitive to terminal value assumptions compared to DDM/FCF if RI is expected to fade to zero.
*   Uses readily available accounting data (book value, net income).
*   Can be used when dividends are zero or FCF is negative/volatile.

**Disadvantages of RI Models:**
*   Relies on accounting data, which can be subject to manipulation or distortions (e.g., from aggressive accounting, fair value adjustments).
*   Requires careful adjustment for accounting quality issues.
*   Forecasting future ROE and book value growth can be challenging.

**Relationship between RI, DDM, and FCFE:**
Theoretically, if applied consistently and correctly, all three models should yield the same intrinsic value. Differences arise from practical forecasting challenges and assumptions.

**Clean Surplus Relation:** `Bt = B(t-1) + Et - Dt`.
RI model assumes clean surplus accounting (all changes in book value other than transactions with owners flow through income statement). If not, adjustments are needed.

## III. Market-Based Valuation: Price and Enterprise Value Multiples (L2 Nuances)

Level 2 emphasizes understanding the drivers of multiples, making cross-company comparisons, and normalizing multiples.

### A. Price Multiples (P/E, P/B, P/S, P/CF, Dividend Yield)

1.  **Price-to-Earnings (P/E):**
    *   **Leading P/E:** `P0 / E1`
    *   **Trailing P/E:** `P0 / E0`
    *   **Justified P/E (from Gordon Growth):** `(D1/E1) / (ke - g) = Payout Ratio / (ke - g)`
    *   **Normalized (Underlying) EPS:** Adjust reported EPS for cyclical effects or temporary items.
        *   Method of historical average EPS.
        *   Method of average ROE (Normalized EPS = Avg ROE * Current BVPS).
    *   **P/E affected by:** Growth prospects, risk (ke), quality of earnings, inflation.

2.  **Price-to-Book (P/B):**
    *   **Justified P/B (from RI model logic):** `(ROE - g) / (ke - g)` (assuming constant ROE and g < ROE).
    *   More stable than P/E, useful for firms with negative earnings.
    *   Affected by accounting conventions (historical cost vs. fair value). Adjust B0 for off-balance sheet items, fair value of assets.

3.  **Price-to-Sales (P/S):**
    *   Useful for startups, distressed firms, or when earnings are volatile/negative.
    *   Sales are less subject to accounting manipulation than earnings or book value.
    *   **Justified P/S:** `(Net Profit Margin * Payout Ratio * (1+g)) / (ke - g)`
    *   Does not capture differences in cost structure or profitability.

4.  **Price-to-Cash Flow (P/CF):**
    *   CF can be CFO, FCFE, or EBITDA (though EV/EBITDA is more common for the latter).
    *   Less subject to accounting manipulation than earnings.
    *   Definitions of CF can vary.

### B. Enterprise Value (EV) Multiples

*   `EV = Market Cap of Common Equity + Market Value of Debt - Cash & Cash Equivalents + Market Value of Preferred Stock + Minority Interest`
*   EV represents total company value. Multiples are useful for comparing firms with different capital structures.

1.  **EV/EBITDA:**
    *   EBITDA is a pre-tax, pre-interest, pre-depreciation measure of operating cash flow.
    *   Useful for capital-intensive industries or when D&A is significant.
    *   Less affected by accounting choices for depreciation.
    *   Ignores differences in capex, taxes, and interest expense.
    *   **Justified EV/EBITDA (approx):** Related to FCFF / (WACC-g) and how EBITDA relates to FCFF. `EBITDA(1-T)/WACC-g` if FCInv and WCInv are minimal.

2.  **EV/Sales (EV/S):** Useful when EBITDA or earnings are negative.

### C. Other Multiples
*   **Dividend Yield (D/P):** Important for income-oriented investors.

**Using Multiples - Best Practices:**
*   Use comparable companies (similar industry, size, risk, growth).
*   Understand fundamental drivers of the multiple.
*   Use consistent calculation methods (e.g., trailing vs. leading).
*   Normalize for cyclical or temporary effects.
*   Consider differences in accounting standards.
*   Use a range of multiples.

## IV. Valuing Private Companies (Covered in Alternatives, but relevant context)
Valuation of private companies often uses similar models (DCF, multiples) but with adjustments:
*   **Discount Rate:** Higher due to illiquidity, less transparency, higher risk.
*   **Multiples:** May use guideline public companies or M&A transaction data, with discounts for lack of marketability (DLOM) and control (DLOC, if valuing a minority stake).
*   Data availability can be a challenge.

## Conclusion
Advanced equity valuation models provide analysts with a richer toolkit to assess intrinsic value. Multi-stage DCF models allow for more realistic growth patterns. Residual income models offer a unique perspective by focusing on economic profit. Mastery of these techniques, along with a nuanced understanding of market multiples, is crucial for effective equity analysis and investment decision-making at Level 2. Always remember that valuation is both an art and a science, requiring sound judgment and critical analysis of assumptions.
