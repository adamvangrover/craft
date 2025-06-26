# CFA Level 1 Cheat Sheet: Corporate Finance

## Key Concepts:

### Corporate Governance and ESG
- **Corporate Governance:** System of internal controls and procedures by which companies are managed.
  - **Objectives:** Mitigate conflicts of interest, ensure assets are used for shareholder benefit.
  - **Stakeholder Management:** Shareholders, creditors, employees, customers, suppliers, society.
  - **Board of Directors:** Composition (independence), committees (audit, compensation, nominations).
  - **Shareholder Rights.**
- **Environmental, Social, and Governance (ESG) Considerations:**
  - Integration in investment analysis.
  - Risks and opportunities.

### Capital Budgeting
- **Process:** Generating ideas, analyzing individual proposals, planning the capital budget, monitoring and post-auditing.
- **Investment Decision Criteria:**
  - **Net Present Value (NPV):** Sum of PVs of future cash flows minus initial investment. (Accept if NPV > 0)
  - **Internal Rate of Return (IRR):** Discount rate at which NPV = 0. (Accept if IRR > WACC)
  - **Payback Period (PBP):** Time to recover initial investment. (Ignores time value of money and cash flows after PBP)
  - **Discounted Payback Period (DPBP).**
  - **Profitability Index (PI):** (PV of future cash flows / Initial Investment) or (1 + NPV/Initial Investment). (Accept if PI > 1)
- **NPV vs. IRR:** NPV preferred for mutually exclusive projects due to reinvestment rate assumption.
- **Project Cash Flows:** Initial outlay, operating cash flows, terminal year cash flow.
  - Focus on incremental cash flows.
  - Ignore sunk costs. Consider externalities (e.g., cannibalization).

### Cost of Capital
- **Weighted Average Cost of Capital (WACC):**
  - WACC = (wd * rd * (1-t)) + (wp * rp) + (we * re)
    - wd, wp, we: weights of debt, preferred stock, common equity.
    - rd: cost of debt (YTM on new debt).
    - t: marginal tax rate.
    - rp: cost of preferred stock (Dp / Pp).
    - re: cost of common equity.
- **Cost of Debt (rd):** Market YTM on new debt. If not available, use debt rating and matrix pricing.
- **Cost of Preferred Stock (rp):** Preferred Dividend / Market Price of Preferred Stock.
- **Cost of Equity (re):**
  - **Capital Asset Pricing Model (CAPM):** re = Rf + β * (E(Rm) - Rf)
    - Rf: Risk-free rate.
    - β: Equity beta (measures systematic risk).
    - E(Rm) - Rf: Equity risk premium.
  - **Dividend Discount Model (DDM):** re = (D1 / P0) + g
    - D1: Expected dividend next period.
    - P0: Current stock price.
    - g: Sustainable growth rate (g = ROE * retention rate).
  - **Bond Yield Plus Risk Premium (BYPRP):** re = Bond Yield + Risk Premium.
- **Project Beta and Pure-Play Method:** Used to estimate beta for projects with different risk than the company.
- **Marginal Cost of Capital (MCC) Schedule:** Shows WACC increasing as more capital is raised.
- **Flotation Costs:** Costs of issuing new securities. Adjust initial project cost or cost of capital.

### Measures of Leverage
- **Operating Leverage:** Use of fixed operating costs.
  - **Degree of Operating Leverage (DOL):** %ΔEBIT / %ΔSales = Q(P-V) / [Q(P-V) - F]
- **Financial Leverage:** Use of fixed financing costs (debt).
  - **Degree of Financial Leverage (DFL):** %ΔEPS / %ΔEBIT = EBIT / (EBIT - Interest)
- **Total Leverage:** Combined effect of operating and financial leverage.
  - **Degree of Total Leverage (DTL):** DOL * DFL = %ΔEPS / %ΔSales
- **Breakeven Point (Q_BE):** Fixed Operating Costs / (Price - Variable Cost per unit)
- **Operating Breakeven Point (Q_OBE):** (Fixed Operating Costs + Fixed Financing Costs) / (Price - Variable Cost per unit)

### Working Capital Management
- **Objective:** Ensure sufficient liquidity while minimizing cost of holding current assets.
- **Primary Sources of Liquidity:** Cash balances, short-term funding (credit lines), cash flow management.
- **Secondary Sources of Liquidity:** Asset sales, debt renegotiation, bankruptcy reorganization.
- **Drags and Pulls on Liquidity.**
- **Managing Cash:**
  - Motives for holding cash (transaction, precautionary, speculative).
  - Cash forecasting, concentration banking.
- **Managing Accounts Receivable:**
  - Credit policy (credit period, discount, credit standards).
  - Monitoring receivables (aging schedule, DSO).
- **Managing Inventory:**
  - Costs (ordering, carrying, stock-out).
  - Inventory management techniques (EOQ, JIT - not detailed in L1).
- **Managing Accounts Payable:**
  - Centralized vs. decentralized payables.
  - Trade credit (cost of not taking discount).
- **Short-Term Financing:** Bank lines of credit, commercial paper, factoring.

### Dividends and Share Repurchases
- **Forms of Dividends:** Cash, stock, property.
- **Dividend Payment Chronology:** Declaration date, ex-dividend date, holder-of-record date, payment date.
- **Share Repurchases:**
  - Methods: Open market, tender offer, direct negotiation.
  - Equivalence to cash dividends (in perfect markets).
  - Impact on EPS, book value.
- **Dividend Policy Theories (overview):**
  - Irrelevance (Modigliani-Miller).
  - Bird-in-hand (Gordon-Lintner).
  - Tax aversion.
- **Factors Affecting Dividend Policy:** Investment opportunities, expected volatility of earnings, financial flexibility, tax considerations, flotation costs, contractual/legal restrictions.

## Formulas to Memorize:
- **WACC:** (wd * rd * (1-t)) + (wp * rp) + (we * re)
- **CAPM:** re = Rf + β * (E(Rm) - Rf)
- **DDM (Cost of Equity):** re = (D1 / P0) + g
- **Sustainable Growth Rate (g):** ROE * (1 - Dividend Payout Ratio)
- **DOL:** Q(P-V) / [Q(P-V) - F]  OR  S-TVC / (S-TVC-F)
- **DFL:** EBIT / (EBIT - I)
- **DTL:** DOL * DFL
- **Cost of Trade Credit:** (1 + (%Discount / (1-%Discount)))^(365/Days past discount period) - 1

## Common Pitfalls & Tips:
- **NPV vs. IRR:** Understand when they can give conflicting rankings and why NPV is generally preferred.
- **Cash Flows:** Always use incremental, after-tax cash flows for capital budgeting.
- **WACC Components:** Use market values for weights and current market rates for costs.
- **Leverage:** Understand how fixed costs (operating and financing) magnify changes in sales/EBIT.
- **Working Capital:** It's a balancing act – too little is risky, too much is costly.
- **Dividend Policy:** Focus on the practical factors that influence a company's dividend decisions.

*Disclaimer: This cheat sheet is for quick reference. Always refer to official CFA Program curriculum for complete understanding.*
