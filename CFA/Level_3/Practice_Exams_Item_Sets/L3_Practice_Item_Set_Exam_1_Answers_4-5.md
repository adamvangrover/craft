# CFA Level 3 Sample Practice Item Set Exam 1: Answers & Explanations (Item Sets 4-5)

## Item Set 4: Derivatives & Currency Management (Questions 19-24)

**Question 19:**
**Correct Answer: A) Sell EUR 60 million forward.**
**Explanation:** GIM has an asset (Eurozone equities) denominated in EUR. They are concerned about EUR depreciation against the USD. To hedge this, they need to lock in a future USD/EUR exchange rate for their EUR exposure. This means they should sell EUR (and buy USD) forward.

**Question 20:**
**Correct Answer: A) -1.74% (cost)**
**Explanation:**
Spot S(USD/EUR) = 1.1500
3-month Forward F(USD/EUR) = 1.1450
The forward rate shows fewer USD per EUR than the spot rate, meaning the EUR is trading at a forward discount (or USD at a forward premium). Hedging by selling EUR forward means selling them at a lower rate than spot.
Percentage difference = `(F - S) / S = (1.1450 - 1.1500) / 1.1500 = -0.0050 / 1.1500 = -0.0043478`
This is for 3 months. Annualized cost = `-0.0043478 * (12/3) = -0.0043478 * 4 = -0.0173912` or `-1.739%`.
Closest to -1.74% (cost).

**Question 21:**
**Correct Answer: C) Buy EUR put options (or USD call options on EUR).**
**Explanation:** To protect against EUR depreciation (EUR value falling relative to USD), GIM wants the right to sell EUR at a predetermined strike price. This is achieved by buying EUR put options. An equivalent position is buying USD call options (the right to buy USD using EUR at a certain rate).
A) Buying EUR call options protects against EUR appreciation.
B) Selling EUR put options creates an obligation to buy EUR if they depreciate below the strike, increasing risk.

**Question 22:**
**Correct Answer: A) Sell 20 contracts.**
**Explanation:**
Number of contracts `N_f = [(β_T - β_P) / β_F] * (Portfolio Value / Futures Contract Value)`
`β_T = 0.90`
`β_P = 1.05`
`β_F = 0.98`
Portfolio Value (PV) = $200,000,000
Futures Contract Value (FV) = $150,000
`N_f = [(0.90 - 1.05) / 0.98] * ($200,000,000 / $150,000)`
`N_f = [-0.15 / 0.98] * (200000 / 150) = [-0.15 / 0.98] * (4000 / 3)`
`N_f = -0.15306122 * 1333.3333`
`N_f = -204.08`
A negative sign means sell futures contracts. So, sell 204 contracts.
This matches option C. Let me re-check the options in the prompt for Q22.
The options were: A) Sell 20 contracts, B) Buy 20 contracts, C) Sell 204 contracts.
My calculation of -204 contracts (Sell 204) matches Option C.
*Self-correction: The originally generated question for Q22 had options A) Sell 20, B) Buy 20, C) Sell 204. My answer key here should reflect the choice C based on calculation.*
**Final Answer for Q22: C) Sell 204 contracts.**

*(If the question intended option A, "Sell 20 contracts", then the inputs would need to be different. E.g., if `(Portfolio Value / Futures Contract Value)` was `(200,000,000 / 1,500,000) * 0.98 / 0.15 = 133.33 * 0.98 / 0.15`
Let's assume the values given are correct and calculation to C is correct).*

**Question 23:**
**Correct Answer: B) Borrowing in a low-yield currency and investing in a high-yield currency.**
**Explanation:** A carry trade involves exploiting the interest rate differential between two currencies. The investor borrows in a currency with a low interest rate (funding currency) and invests the proceeds in a currency with a high interest rate (investment currency). The profit comes from the net interest differential, assuming the exchange rate does not move adversely enough to offset this differential.

**Question 24:**
**Correct Answer: B) Buying protective puts.**
**Explanation:**
A) Writing covered calls generates income but limits upside potential and offers only limited downside protection (equal to the premium received).
B) Buying protective puts (buying put options on the portfolio or a correlated index) provides downside insurance by setting a floor on the portfolio's value, while allowing participation in upside gains (minus the cost of the puts).
C) Selling cash-secured puts is a strategy to acquire stock at a lower price or generate income; it does not protect an existing portfolio against a market decline (it profits if stock stays above strike or is put to seller).

---

## Item Set 5: Performance Evaluation & GIPS (Questions 25-30)

**Question 25:**
**Correct Answer: B) 0.583**
**Explanation:**
Sharpe Ratio = `(Rp - Rf) / σp`
Sharpe Ratio = `(12.5% - 2.0%) / 18.0% = 10.5% / 18.0% = 0.5833...`

**Question 26:**
**Correct Answer: B) 0.625**
**Explanation:**
Information Ratio (IR) = `(Rp - Rb) / Tracking Error`
Active Return = `Rp - Rb = 12.5% - 10.0% = 2.5%`
Tracking Error = `4.0%`
`IR = 2.5% / 4.0% = 0.625`

**Question 27:**
**Correct Answer: A) -0.10%**
**Explanation:**
Allocation Effect (US Equity) = `(w_p_US - w_b_US) * (R_b_US - R_B_Total)`
`w_p_US = 45%`
`w_b_US = 50%`
`R_b_US = 12.0%` (Benchmark Sector Return for US Equity)
`R_B_Total = 10.0%` (Total Benchmark Return)
Allocation (US Equity) = `(0.45 - 0.50) * (0.12 - 0.10)`
Allocation (US Equity) = `(-0.05) * (0.02) = -0.0010` or `-0.10%`.

**Question 28:**
**Correct Answer: A) 0.60%**
**Explanation:**
Selection Effect (European Equity) = `w_b_Europe * (R_p_Europe - R_b_Europe)`
`w_b_Europe = 30%`
`R_p_Europe = 10.0%` (Portfolio Return for European Equity)
`R_b_Europe = 8.0%` (Benchmark Sector Return for European Equity)
Selection (European Equity) = `0.30 * (0.10 - 0.08)`
Selection (European Equity) = `0.30 * (0.02) = 0.0060` or `0.60%`.

**Question 29:**
**Correct Answer: C) GIPS requires firms to include all actual, fee-paying, discretionary portfolios in at least one composite.**
**Explanation:**
A) GIPS compliance ensures fair representation and full disclosure of performance, not accuracy of every data point nor guaranteed outperformance.
B) Firms must claim compliance on a firm-wide basis, not for specific composites only. All composites must be presented if the firm claims compliance.
C) This is a key requirement of GIPS for composite construction to prevent cherry-picking.

**Question 30:**
**Correct Answer: B) Show the range of returns achieved by the portfolios within the composite.**
**Explanation:**
Internal dispersion (e.g., standard deviation of returns of portfolios within the composite, or high/low returns) is a required GIPS disclosure. It indicates the consistency of the manager's strategy across the portfolios included in that composite. A wide dispersion might suggest the portfolios are not truly managed similarly or that the strategy is not consistently applied.
A) While low dispersion might correlate with consistent alpha, it's not its primary purpose.
C) Dispersion measures do not guarantee normality of returns.

---
**End of Answer Key for Item Sets 4-5**
