# CFA Level 1 Cheat Sheet: Fixed Income (CS_07)

This cheat sheet summarizes key concepts for Level 1 Fixed Income. For detailed explanations, refer to the [Fixed Income Basics Deep Dive](../Topic_Deep_Dives/Fixed_Income_Basics.md).

## 1. Basic Bond Features

*   **Issuer:** Entity borrowing funds (Gov't, Corporation, etc.).
*   **Maturity Date (Tenor):** Date principal is repaid.
    *   Money Market: ≤ 1 year.
    *   Capital Market: > 1 year.
*   **Par Value (Face Value):** Amount repaid at maturity (typically $1000 or $100).
*   **Coupon Rate:** Annual interest rate stated on the bond (% of par).
    *   **Coupon Payment (CPN):** `Coupon Rate * Par Value`. Paid annually, semi-annually, etc.
*   **Bond Indenture:** Legal contract specifying terms, obligations, and bondholder rights.
    *   **Covenants:** Rules to protect bondholders (Affirmative: must do; Negative: cannot do).
*   **Secured vs. Unsecured:**
    *   **Secured:** Backed by specific collateral. Lower risk.
    *   **Unsecured (Debentures):** Backed by issuer's general creditworthiness. Higher risk.

## 2. Bond Valuation & Yields

*   **Bond Price:** Present value (PV) of all future cash flows (coupons + principal) discounted at the market discount rate (YTM).
    `Price = CPN_1/(1+y)^1 + ... + (CPN_N + Par)/(1+y)^N`
    *   `y` = YTM per period, `N` = number of periods. Adjust for payment frequency (e.g., for semi-annual, divide CPN and y by 2, multiply N by 2).
*   **Price-Yield Relationship:** INVERSE.
    *   If Market Yield (YTM) ↑, Bond Price ↓.
    *   If Market Yield (YTM) ↓, Bond Price ↑.
*   **Relationship to Par:**
    *   Coupon Rate < YTM  =>  **Discount** (Price < Par).
    *   Coupon Rate > YTM  =>  **Premium** (Price > Par).
    *   Coupon Rate = YTM  =>  **Par** (Price = Par).
*   **"Pull to Par":** Price converges to par value as maturity approaches.
*   **Yield-to-Maturity (YTM):**
    *   The IRR of the bond's cash flows if held to maturity and coupons are reinvested at YTM.
    *   The single discount rate equating PV of future CFs to the bond's current market price.
*   **Current Yield:** `Annual Coupon Payment / Current Flat Market Price`. Ignores capital gains/losses and time value of principal.
*   **Accrued Interest (AI):** Interest earned between coupon dates. Buyer compensates seller.
    *   **Full Price (Dirty Price):** `Flat Price + Accrued Interest`. This is the actual price paid.
    *   **Flat Price (Clean Price):** Quoted price, excludes AI.
    *   `AI = (Coupon per Period) * (Days from last CPN to settlement / Days in CPN period)`. (Day count conventions vary).

## 3. Interest Rate Risk

*   Bond prices are sensitive to changes in interest rates.
*   **Longer Maturity:** Generally implies greater interest rate sensitivity (price volatility).
*   **Lower Coupon Rate:** Generally implies greater interest rate sensitivity.
*   **(Macaulay) Duration:** A measure of a bond's interest rate sensitivity. Higher duration means higher sensitivity. (Conceptual understanding for L1, detailed calculations in L2/L3).
*   **Convexity:** Curvature of the price-yield relationship. Price increase for a yield drop is larger than the price decrease for an equal yield rise.

## 4. Key Bond Types (Brief Overview)

*   **Government Bonds:** Issued by national governments (e.g., US Treasuries).
*   **Corporate Bonds:** Issued by companies.
*   **Municipal Bonds (Munis):** Issued by state/local governments (US-specific, often tax-exempt).
*   **Floating-Rate Notes (FRNs):** Coupon rate adjusts periodically based on a reference rate (e.g., SOFR + spread). Protects against rising rates.
*   **Zero-Coupon Bonds:** No coupon payments. Sold at a discount to par. Price is PV of par value. Interest is implied (accretion).
*   **Callable Bonds:** Issuer can redeem early. Benefits issuer. Higher YTM for investor.
*   **Putable Bonds:** Investor can sell back to issuer early. Benefits investor. Lower YTM.
*   **Convertible Bonds:** Investor can convert to issuer's common stock. Offers equity upside. Lower YTM.

## 5. Securitization & Asset-Backed Securities (ABS)

*   **Securitization:** Process of pooling assets (e.g., mortgages, auto loans, credit card receivables) and issuing securities backed by these cash flows.
*   **Asset-Backed Securities (ABS):** Securities created through securitization.
    *   **Mortgage-Backed Securities (MBS):** ABS backed by residential or commercial mortgages.
*   **Benefits:** Diversification for investors, liquidity for originators.
*   **Risks:** Prepayment risk (for some types like MBS), credit risk of underlying assets.

---
*This is a high-level summary. Always refer to the official curriculum and detailed study notes for comprehensive understanding.*
