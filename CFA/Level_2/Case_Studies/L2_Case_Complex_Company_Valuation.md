# CFA Level 2 Case Study: Complex Company Valuation - TechGlobal Inc.

**Scenario:**

You are an equity analyst at a boutique investment firm. Your task is to perform a comprehensive valuation of TechGlobal Inc. (TGI), a publicly traded software development and IT consulting company. TGI has experienced rapid growth in recent years but is now entering a more mature phase.

**Company Background:**
TechGlobal Inc. develops proprietary software for enterprise resource planning (ERP) and also offers IT consulting services. Historically, software development was its main growth driver, but consulting services are becoming increasingly important. The company has a moderate amount of debt.

**Provided Financial Data & Projections (Year 0 is most recent completed year):**

**Income Statement Data (Year 0, $ millions):**
*   Revenue: $1,200
*   Cost of Goods Sold (COGS - primarily software development amortization & direct consulting costs): $480
*   Selling, General & Administrative (SG&A): $300
*   Depreciation (on PP&E for consulting hardware, office): $50
*   Research & Development (R&D - all expensed): $100
*   Interest Expense: $30
*   Tax Rate: 25%

**Balance Sheet Data (End of Year 0, $ millions):**
*   Cash & Equivalents: $80
*   Accounts Receivable: $150
*   Inventory (Work-in-progress for software): $40
*   Net Property, Plant & Equipment (PP&E): $250
*   Goodwill: $100
*   Other Intangibles (net of amortization, e.g., acquired patents): $80
*   Total Assets: $700
*   Accounts Payable: $90
*   Accrued Expenses: $60
*   Deferred Revenue: $50
*   Long-Term Debt: $200 (assume market value ≈ book value)
*   Total Liabilities: $400
*   Common Stock & APIC: $150
*   Retained Earnings: $150
*   Total Equity: $300
*   Shares Outstanding: 50 million

**Analyst's Projections & Assumptions:**

*   **Growth:**
    *   Revenue growth: 10% for Year 1, 8% for Year 2, then stabilizing to a long-term growth rate of 4% from Year 3 onwards for FCFF and FCFE calculations.
*   **Margins & Expenses (as % of Revenue, unless specified):**
    *   COGS: 40%
    *   SG&A: 25%
    *   R&D: Expected to remain at $100 million in Year 1, then grow at 4% annually.
    *   Depreciation: 5% of prior year's Net PP&E.
*   **Capital Expenditures (FCInv):**
    *   Net PP&E represents operating fixed capital.
    *   Capital Expenditures are projected to be 120% of Depreciation for Years 1 and 2, and 110% of Depreciation from Year 3 onwards. Assume no asset sales.
*   **Working Capital (WCInv):**
    *   Operating Working Capital (OWC) is defined as (Accounts Receivable + Inventory - Accounts Payable - Accrued Expenses - Deferred Revenue).
    *   OWC is expected to be 15% of Revenue each year. `WCInv = Change in OWC`.
*   **Debt & Equity:**
    *   The company aims to maintain its current capital structure (Debt/Equity ratio based on market values if possible, otherwise book values as proxy for target if market values not easily determined for debt). For simplicity in FCFE, assume net borrowing is structured to maintain the current book value Debt-to-Total Capital ratio. Total Capital = Debt + Equity.
*   **Valuation Parameters:**
    *   Cost of Equity (k_e): 12%
    *   Weighted Average Cost of Capital (WACC): 9%
    *   Risk-Free Rate: 3%
    *   Equity Risk Premium: 6%
    *   Company Beta: 1.5

**Selected Peer Company Data (for relative valuation):**

| Company        | P/E (TTM) | EV/EBITDA (TTM) | P/S (TTM) |
| :------------- | :-------- | :-------------- | :-------- |
| SoftSolutions  | 25.0x     | 15.0x           | 3.0x      |
| ITConsult Pros | 20.0x     | 12.0x           | 2.0x      |
| Innovatech Sys | 30.0x     | 18.0x           | 4.0x      |

**Case Questions:**

1.  **Calculate TechGlobal's Net Income and FCFF for Year 0 (most recent completed year).**
2.  **Project TechGlobal's FCFF for Year 1 and Year 2.**
3.  **Calculate the terminal value of FCFF at the end of Year 2, assuming the long-term growth rate of 4% applies from Year 3 onwards.**
4.  **Estimate the current total firm value and equity value per share for TechGlobal using the FCFF model.**
5.  **Calculate TechGlobal's FCFE for Year 0. (Hint: Use the relationship `FCFE = NI + NCC – FCInv – WCInv + Net Borrowing`. You'll need to calculate Net Borrowing. Assume for Year 0, Net Borrowing was such that the D/TC ratio was maintained based on *changes* in book values of debt and equity if NI was the only source of equity change). This is a simplification; alternatively, use `FCFE = FCFF - Int(1-t) + Net Borrowing` and derive Net Borrowing differently for projections.**
    *For simplicity for Year 0 Net Borrowing: Calculate change in Total Assets. Assume this change was financed maintaining the D/TC ratio (using end of Year 0 D/TC as target). Net Borrowing = Target D/TC ratio * Change in Total Assets.* (This is a simplification for a single historical year calculation).
6.  **Briefly discuss one advantage of using an FCFF model over a DDM for valuing TechGlobal Inc.**
7.  **Calculate TechGlobal's TTM P/E, EV/EBITDA, and P/S ratios based on Year 0 data. (For EV, assume Market Value of Debt ≈ Book Value of Debt. Equity Market Cap = $50/share * 50M shares = $2500M if a price was given; assume for this part only, current market price per share is $50.00 to calculate market cap for EV).**
8.  **Using the average EV/EBITDA multiple from the peer companies, estimate the Enterprise Value of TechGlobal. Then, derive the equity value per share.**

---

**Guideline Answers & Calculations:**

*(Detailed step-by-step calculations would be extensive here. The focus is on the setup and approach. Some key calculations will be shown.)*

**1. Calculate TechGlobal's Net Income and FCFF for Year 0.**

*   **Net Income (Year 0):**
    *   Gross Profit = Revenue - COGS = $1,200 - $480 = $720
    *   Operating Income (EBIT) = Gross Profit - SG&A - Depreciation - R&D
        EBIT = $720 - $300 - $50 - $100 = $220
    *   Earnings Before Tax (EBT) = EBIT - Interest Expense = $220 - $30 = $190
    *   Income Tax = EBT * Tax Rate = $190 * 0.25 = $47.5
    *   **Net Income (Year 0) = EBT - Income Tax = $190 - $47.5 = $142.5 million**

*   **FCFF (Year 0):**
    *   `FCFF = NI + NCC + Int(1–Tax Rate) – FCInv – WCInv`
    *   NCC (Year 0) = Depreciation = $50 (R&D is cash expense here)
    *   Int(1–Tax Rate) = $30 * (1 - 0.25) = $30 * 0.75 = $22.5
    *   FCInv (Year 0): Need change in Net PP&E. `FCInv = Ending Net PP&E - Beginning Net PP&E + Depreciation_Yr0`. Beginning Net PP&E is not given.
        Alternatively, if we assume Year 0 is a steady state or use different formula:
        `FCFF = EBIT(1-Tax Rate) + Depreciation – FCInv – WCInv`
        EBIT(1-Tax Rate) = $220 * (1-0.25) = $220 * 0.75 = $165
        We need FCInv and WCInv for Year 0. These are *changes*. If Year 0 is the base, we'd look at capex *during* Year 0 and change in OWC *during* Year 0. This data is not fully provided for Year 0 historical calculation of FCInv and WCInv.
        *The question implies calculating historical FCFF. We'd typically need capital expenditures for Year 0, not just ending Net PP&E. Assume for this historical calculation, FCInv and WCInv are inputs if given, or we are meant to project starting Year 1.*

    *Let's re-scope Q1 for FCFF to be based on projections starting Year 1, or assume FCInv and WCInv for Year 0 were specific values if this was a real case. Since projections for these start from Year 1 based on Year 0 figures, we can't directly calculate historical Year 0 FCFF without Year -1 data or explicit Year 0 Capex/WCInv.*
    **Clarification for Q1 FCFF:** Assume the question implies we should use the general formula components we *can* calculate for Year 0, and acknowledge what's missing for a full FCFF calc.
    Calculable components for FCFF based on NI:
    NI = $142.5
    NCC = Depreciation = $50
    Int(1-t) = $22.5
    FCFF_Yr0_Partial = $142.5 + $50 + $22.5 = $215. (This is before FCInv and WCInv for Year 0).
    *This indicates Q1 might be primarily focused on NI, and FCFF calculations are forward-looking from Q2.*

**2. Project TechGlobal's FCFF for Year 1 and Year 2.**

*   **Year 1 Projections:**
    *   Revenue_Y1 = $1,200 * (1+0.10) = $1,320
    *   COGS_Y1 = $1,320 * 0.40 = $528
    *   SG&A_Y1 = $1,320 * 0.25 = $330
    *   R&D_Y1 = $100 (given)
    *   Depreciation_Y1 = Net PP&E_Y0 * 0.05 = $250 * 0.05 = $12.5
    *   EBIT_Y1 = $1,320 - $528 - $330 - $100 - $12.5 = $349.5
    *   Interest_Y1: Assume $30 (simplification, or need debt schedule)
    *   EBT_Y1 = $349.5 - $30 = $319.5
    *   Tax_Y1 = $319.5 * 0.25 = $79.875
    *   NI_Y1 = $319.5 - $79.875 = $239.625
    *   FCInv_Y1 = Depreciation_Y1 * 1.20 = $12.5 * 1.20 = $15
        *   Net PP&E_Y1 = Net PP&E_Y0 + FCInv_Y1 - Depreciation_Y1 = $250 + $15 - $12.5 = $252.5
    *   OWC_Y0 = ($150+$40) - ($90+$60+$50) = $190 - $200 = -$10
    *   OWC_Y1 = Revenue_Y1 * 0.15 = $1,320 * 0.15 = $198
    *   WCInv_Y1 = OWC_Y1 - OWC_Y0 = $198 - (-$10) = $208
    *   **FCFF_Y1** = NI_Y1 + Depr_Y1 + Int_Y1(1-t) - FCInv_Y1 - WCInv_Y1
        FCFF_Y1 = $239.625 + $12.5 + $30(0.75) - $15 - $208
        FCFF_Y1 = $239.625 + $12.5 + $22.5 - $15 - $208 = $51.625 million

*   **Year 2 Projections:**
    *   Revenue_Y2 = $1,320 * (1+0.08) = $1,425.6
    *   COGS_Y2 = $1,425.6 * 0.40 = $570.24
    *   SG&A_Y2 = $1,425.6 * 0.25 = $356.4
    *   R&D_Y2 = $100 * (1+0.04) = $104
    *   Depreciation_Y2 = Net PP&E_Y1 * 0.05 = $252.5 * 0.05 = $12.625
    *   EBIT_Y2 = $1,425.6 - $570.24 - $356.4 - $104 - $12.625 = $382.335
    *   Interest_Y2: Assume $30 (simplification)
    *   EBT_Y2 = $382.335 - $30 = $352.335
    *   Tax_Y2 = $352.335 * 0.25 = $88.08375
    *   NI_Y2 = $352.335 - $88.08375 = $264.25125
    *   FCInv_Y2 = Depreciation_Y2 * 1.20 = $12.625 * 1.20 = $15.15
        *   Net PP&E_Y2 = Net PP&E_Y1 + FCInv_Y2 - Depreciation_Y2 = $252.5 + $15.15 - $12.625 = $255.025
    *   OWC_Y2 = Revenue_Y2 * 0.15 = $1,425.6 * 0.15 = $213.84
    *   WCInv_Y2 = OWC_Y2 - OWC_Y1 = $213.84 - $198 = $15.84
    *   **FCFF_Y2** = NI_Y2 + Depr_Y2 + Int_Y2(1-t) - FCInv_Y2 - WCInv_Y2
        FCFF_Y2 = $264.25125 + $12.625 + $30(0.75) - $15.15 - $15.84
        FCFF_Y2 = $264.25125 + $12.625 + $22.5 - $15.15 - $15.84 = $268.38625 million

**3. Calculate the terminal value of FCFF at the end of Year 2.**

*   `FCFF_3 = FCFF_2 * (1+g_L) = $268.38625 * (1+0.04) = $268.38625 * 1.04 = $279.1217`
*   `Terminal Value_FCFF (Year 2) = FCFF_3 / (WACC - g_L)`
    `TV_FCFF_Y2 = $279.1217 / (0.09 - 0.04) = $279.1217 / 0.05 = $5,582.434 million`

**4. Estimate the current total firm value and equity value per share for TechGlobal using the FCFF model.**

*   `PV(FCFF_Y1) = $51.625 / (1.09)^1 = $47.362`
*   `PV(FCFF_Y2) = $268.38625 / (1.09)^2 = $268.38625 / 1.1881 = $225.895`
*   `PV(TV_FCFF_Y2) = $5,582.434 / (1.09)^2 = $5,582.434 / 1.1881 = $4,700.306`
*   **Total Firm Value (V_Firm) = PV(FCFF_Y1) + PV(FCFF_Y2) + PV(TV_FCFF_Y2)**
    V_Firm = $47.362 + $225.895 + $4,700.306 = $4,973.563 million
*   **Equity Value = V_Firm - Market Value of Debt** (MV of Debt ≈ BV of Debt = $200 million)
    Equity Value = $4,973.563 - $200 = $4,773.563 million
*   **Equity Value per Share = Equity Value / Shares Outstanding**
    Equity Value per Share = $4,773.563 million / 50 million shares = $95.47 per share

**5. Calculate TechGlobal's FCFE for Year 0.**
    `FCFE = NI + NCC – FCInv – WCInv + Net Borrowing`
    NI_Y0 = $142.5
    NCC_Y0 = $50 (Depreciation)
    *FCInv_Y0 and WCInv_Y0 are not directly calculable from provided Year 0 data without Year -1 data or explicit Year 0 Capex/WC changes.*
    The hint suggests a simplification for Net Borrowing for Year 0.
    End of Year 0 D = $200, E = $300, Total Capital (TC) = $500. D/TC = 200/500 = 40%.
    To use the hint: "Assume for Year 0, Net Borrowing was such that the D/TC ratio was maintained based on *changes* in book values... Change in Total Assets."
    This requires Balance Sheet from Year -1 to find Change in Total Assets in Year 0. This is not given.

    Alternative for FCFE_Y0 using FCFF_Y0_Partial from Q1:
    `FCFE_Y0 = FCFF_Y0_Partial - FCInv_Y0 - WCInv_Y0 - Int_Y0(1-t) + Net Borrowing_Y0` (No, this is wrong)
    Correct: `FCFE_Y0 = FCFF_Y0 - Int_Y0(1-t) + Net Borrowing_Y0`
    Or `FCFE_Y0 = NI_Y0 + NCC_Y0 - FCInv_Y0 - WCInv_Y0 + Net Borrowing_Y0`
    *Without historical FCInv_Y0 and WCInv_Y0, or a clear basis for Net Borrowing_Y0, this cannot be precisely calculated.*
    **This question part is problematic as posed with the provided data for a historical Year 0 calculation.**
    If we were to project FCFE_Y1:
    FCFF_Y1 = $51.625
    Int_Y1(1-t) = $22.5
    Net Borrowing_Y1: Need to project debt change.
    If target D/TC ratio is 40% (from Y0 end).
    Total capital needed to finance `FCInv_Y1 - Depr_Y1` (net new fixed capital) and `WCInv_Y1`.
    Net new investment = ($15 - $12.5) + $208 = $2.5 + $208 = $210.5
    Net Borrowing_Y1 = 0.40 * $210.5 = $84.2
    FCFE_Y1 = $51.625 - $22.5 + $84.2 = $113.325 million.
    *(This is for Year 1, not Year 0 as asked).*

**6. Briefly discuss one advantage of using an FCFF model over a DDM for valuing TechGlobal Inc.**
One advantage of using an FCFF model for TechGlobal is that it's applicable even if the company does not pay dividends or has an unstable dividend policy. FCFF focuses on the cash flow generated by the company's core operations available to all capital providers, which is a more fundamental measure of value than discretionary dividend payments. This is especially relevant for a company like TGI that has been in a growth phase and might be reinvesting heavily rather than paying large dividends.

**7. Calculate TechGlobal's TTM P/E, EV/EBITDA, and P/S ratios based on Year 0 data. (Assume current market price per share is $50.00).**

*   Market Price per Share (P0) = $50.00
*   Market Cap = $50.00 * 50 million shares = $2,500 million
*   **Year 0 Data:**
    *   NI_Y0 = $142.5 million => EPS_Y0 = $142.5 / 50 = $2.85
    *   Revenue_Y0 = $1,200 million => SPS_Y0 = $1,200 / 50 = $24.00
    *   EBIT_Y0 = $220 million
    *   Depreciation_Y0 = $50 million
    *   EBITDA_Y0 = EBIT_Y0 + Depreciation_Y0 = $220 + $50 = $270 million
*   **P/E (TTM):** `$50.00 / $2.85 = 17.54x`
*   **P/S (TTM):** `$50.00 / $24.00 = 2.08x`
*   **Enterprise Value (EV):**
    *   EV = Market Cap + MV of Debt + MV of Preferred (0) - Cash & Equivalents
    *   EV = $2,500 + $200 (assume BV≈MV for debt) - $80 (Cash) = $2,620 million
*   **EV/EBITDA (TTM):** `$2,620 / $270 = 9.70x`

**8. Using the average EV/EBITDA multiple from the peer companies, estimate the Enterprise Value of TechGlobal. Then, derive the equity value per share.**

*   **Peer EV/EBITDA:** SoftSolutions=15.0x, ITConsult Pros=12.0x, Innovatech Sys=18.0x
*   Average Peer EV/EBITDA = (15.0 + 12.0 + 18.0) / 3 = 45.0 / 3 = 15.0x
*   **Estimated EV for TechGlobal = Average Peer EV/EBITDA * TechGlobal's EBITDA_Y0**
    Estimated EV = 15.0 * $270 million = $4,050 million
*   **Estimated Equity Value = Estimated EV - MV of Debt + Cash & Equivalents**
    Estimated Equity Value = $4,050 - $200 + $80 = $3,930 million
*   **Estimated Equity Value per Share = Estimated Equity Value / Shares Outstanding**
    Estimated Equity Value per Share = $3,930 million / 50 million shares = $78.60 per share

*(Note: Calculations are illustrative. Minor rounding differences may occur. Q1 FCFF and Q5 FCFE for Year 0 are problematic without more historical data or assumptions specified for those historical flows.)*
