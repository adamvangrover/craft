# CFA Level 1 Deep Dive: Fixed Income Basics - Features, Markets, Valuation

**Reading:** Fixed Income - Fixed-Income Securities: Defining Elements; Fixed-Income Markets: Issuance, Trading, and Funding; Introduction to Fixed-Income Valuation.

**Core Concept:** Fixed-income securities are debt instruments that represent a loan made by an investor (bondholder) to an issuer (borrower). They promise to pay a specified series of cash flows (coupons and principal) over a defined period. Understanding their features, how they are traded, and basic valuation is fundamental.

## 1. Defining Elements of Fixed-Income Securities

*   **Issuer:** The entity borrowing the funds.
    *   **Supranational Organizations:** E.g., World Bank, IMF.
    *   **Sovereign Governments:** National governments (e.g., US Treasuries, UK Gilts). Typically highest credit quality in local currency.
    *   **Non-Sovereign Governments:** States, provinces, municipalities (e.g., municipal bonds in US).
    *   **Quasi-Government Entities (Agencies):** Entities sponsored or owned by governments (e.g., Fannie Mae, Freddie Mac in US). Credit quality varies.
    *   **Corporations:** Companies issuing bonds to finance operations or growth. Credit quality varies widely.
*   **Maturity Date (Tenor):** The date on which the issuer repays the principal amount.
    *   **Money Market Securities:** Maturity ≤ 1 year (e.g., T-bills, commercial paper).
    *   **Capital Market Securities:** Maturity > 1 year.
*   **Par Value (Face Value, Principal, Nominal Value, Redemption Value):** The amount the issuer agrees to repay the bondholder at maturity. Typically $1,000 or $100 per bond.
*   **Coupon Rate (Nominal Rate):** The annual interest rate stated on the bond, expressed as a percentage of par value.
    *   **Coupon Payment (CPN):** `Coupon Rate * Par Value`.
    *   **Payment Frequency:** Annual, semi-annual (most common for US corporate/gov't bonds), quarterly, monthly.
    *   **Fixed-Rate Bonds:** Coupon rate is constant throughout the bond's life.
    *   **Floating-Rate Notes (FRNs or Floaters):** Coupon rate resets periodically based on a reference rate (e.g., LIBOR, SOFR) plus a spread. `Coupon Rate = Reference Rate + Quoted Margin`.
        *   Protects against rising interest rates (coupon adjusts up).
*   **Yield-to-Maturity (YTM):** The total return anticipated on a bond if it is held until it matures. YTM is expressed as an annual rate. It is the discount rate that equates the present value of the bond's future cash flows to its current market price.
*   **Bond Indenture (Trust Deed):** The legal contract between the issuer and bondholders.
    *   Specifies issuer's obligations, bond features, and bondholder rights.
    *   Managed by a **trustee** (often a bank) who acts for bondholders.
    *   **Covenants:** Provisions to protect bondholders.
        *   **Affirmative Covenants:** Actions the issuer *must* perform (e.g., make timely payments, maintain insurance, comply with laws).
        *   **Negative Covenants:** Restrictions on the issuer's actions (e.g., limits on additional debt, restrictions on asset sales, limits on dividend payments). More restrictive covenants generally mean lower risk for bondholders.
*   **Secured vs. Unsecured Bonds:**
    *   **Secured Bonds:** Backed by specific collateral (assets pledged to bondholders in case of default). Lower risk, generally lower yield.
        *   Examples: Mortgage bonds (backed by real estate), equipment trust certificates (backed by specific equipment like airplanes).
    *   **Unsecured Bonds (Debentures):** Backed only by the issuer's general creditworthiness and ability to pay. Higher risk, generally higher yield.
        *   **Seniority Ranking:** In case of default, claims are paid in order of seniority (e.g., senior secured, senior unsecured, subordinated unsecured, preferred stock, common stock). Subordinated debentures rank below senior debt.
*   **Embedded Options:** Options included in the bond indenture that give either the issuer or the bondholder the right to take some action.
    *   **Callable Bonds:** Issuer has the right to redeem (call) the bond before maturity at a specified call price on specified dates. Benefits the issuer (e.g., can refinance at lower rates if rates fall). Higher yield for investor to compensate for call risk.
    *   **Putable Bonds:** Bondholder has the right to sell (put) the bond back to the issuer before maturity at a specified put price. Benefits the bondholder (e.g., can reinvest at higher rates if rates rise). Lower yield for investor.
    *   **Convertible Bonds:** Bondholder has the right to convert the bond into a specified number of common shares of the issuer. Offers upside potential of equity. Lower yield than comparable non-convertible bond.
*   **Currency of Denomination:** Bonds can be issued in various currencies.
    *   **Dual-Currency Bonds:** Pay coupon in one currency, principal in another.
    *   **Currency Option Bonds:** Give bondholder choice of currency for payments.

## 2. Fixed-Income Markets: Issuance, Trading, and Funding

### A. Issuance
*   **Primary Market:** Where new bonds are issued and sold to investors for the first time.
    *   **Public Offering:** Sold to the general public. Often underwritten by investment banks.
        *   **Underwriting:** Investment bank(s) buy the issue from the issuer and resell it (firm commitment), or act as an agent to sell it (best efforts).
    *   **Private Placement:** Sold directly to a small number of qualified institutional investors. Less regulation, less liquidity.
    *   **Auctions:** Common for government bonds. (e.g., single-price or multiple-price auctions).
*   **Secondary Market:** Where existing bonds are traded among investors.
    *   Predominantly **Over-the-Counter (OTC) markets**. Dealers act as principals, buying and selling for their own account, profiting from the bid-ask spread.
    *   Some bonds (especially government) may trade on exchanges, but OTC is dominant for corporates.
    *   Generally less liquid than equity markets, especially for smaller corporate issues.

### B. Trading and Settlement
*   **Bid-Ask Spread:** Difference between price dealer is willing to buy (bid) and sell (ask). Represents dealer's profit and cost of liquidity. Wider for less liquid bonds.
*   **Trade Settlement:** Typically T+1, T+2, or T+3 (trade date plus 1, 2, or 3 business days). Cash and securities change hands.

### C. Short-Term Funding for Banks and Corporations
*   **Retail Deposits:** For banks.
*   **Central Bank Funds (e.g., Fed Funds market in US):** Banks lend reserves to each other.
*   **Interbank Market:** Unsecured lending between banks.
*   **Certificates of Deposit (CDs):** Time deposits issued by banks. Negotiable CDs can be traded.
*   **Commercial Paper (CP):** Short-term unsecured promissory notes issued by large, creditworthy corporations. Maturity typically < 270 days (to avoid SEC registration).
*   **Repurchase Agreements (Repos):**
    *   Sale of a security with a simultaneous agreement to buy it back at a later date (often overnight) at a slightly higher price.
    *   Essentially a collateralized loan. The difference in prices is the repo interest (repo rate).
    *   The party selling the security and agreeing to repurchase is borrowing funds.
    *   The party buying the security and agreeing to resell is lending funds.
    *   **Repo Margin (Haircut):** Difference between market value of collateral and loan amount. Protects lender against decline in collateral value.
    *   **Reverse Repo:** The other side of a repo transaction (lending funds, taking collateral).

## 3. Introduction to Fixed-Income Valuation

### A. Bond Price and Yield Relationship
*   The price of a bond is the present value (PV) of its expected future cash flows (coupons and principal), discounted at an appropriate discount rate (yield-to-maturity).
    `Price = CPN_1/(1+y)^1 + CPN_2/(1+y)^2 + ... + (CPN_N + ParValue)/(1+y)^N`
    *   `CPN`: Coupon payment per period.
    *   `y`: Yield-to-maturity per period (market discount rate).
    *   `N`: Number of periods to maturity.
    *   If semi-annual coupons: `CPN = Annual Coupon/2`, `y = YTM/2`, `N = Years*2`.
*   **Inverse Relationship:** Bond prices and yields move in opposite directions.
    *   If Yield ↑, Price ↓.
    *   If Yield ↓, Price ↑.
*   **Convexity:** The price-yield relationship is convex (curved). For a given change in yield, the price increase from a yield decrease is larger than the price decrease from an equal yield increase.
*   **Comparison of Coupon Rate and YTM:**
    *   If Coupon Rate < YTM  =>  Bond sells at a **Discount** (Price < Par).
    *   If Coupon Rate > YTM  =>  Bond sells at a **Premium** (Price > Par).
    *   If Coupon Rate = YTM  =>  Bond sells at **Par** (Price = Par).
*   **"Pull to Par":** As a bond approaches its maturity date, its price will converge towards its par value (assuming no default).

### B. Accrued Interest
*   When a bond is traded between coupon payment dates, the buyer must compensate the seller for the interest earned (accrued) since the last coupon payment date.
*   **Full Price (Dirty Price):** The actual price paid by the buyer. `Full Price = Flat Price + Accrued Interest`.
*   **Flat Price (Clean Price):** The quoted price of the bond, does not include accrued interest. Most bonds are quoted flat.
*   **Accrued Interest (AI):**
    `AI = (Coupon per Period) * (Days from last coupon payment to settlement date / Days in coupon period)`
    *   **Day Count Conventions:** Vary by bond market/type (e.g., 30/360 for US corporates, Actual/Actual for US Treasuries).

### C. Yield Measures
*   **Yield-to-Maturity (YTM):** The single discount rate that equates the PV of a bond's remaining cash flows to its current market price. It's the bond's IRR.
    *   Assumes bond held to maturity and all coupons reinvested at the YTM (often unrealistic).
    *   Expressed as an annualized rate (e.g., Bond Equivalent Yield - BEY for semi-annual bonds = `2 * semi-annual YTM`).
*   **Current Yield:** `Annual Coupon Payment / Current Flat Market Price`. Simple measure, ignores capital gains/losses and TVM of principal.
*   **Yield-to-Call (YTC):** YTM calculated assuming the bond is called on the first possible call date at the specified call price.
*   **Yield-to-Put (YTP):** YTM calculated assuming the bond is put on the first possible put date at the specified put price.
*   **Yield-to-Worst (YTW):** The lowest of YTM, YTCs, YTPs for a bond with embedded options. Conservative measure.
*   **Spot Rates (Zero-Coupon Yields):** Yields on zero-coupon bonds for various maturities. Each spot rate `z_t` is the discount rate for a single cash flow at time `t`. A bond can be valued by discounting each of its cash flows by the corresponding spot rate.
*   **Forward Rates:** Interest rates for future periods implied by current spot rates.

### D. Bond Pricing with a Market Discount Rate (Yield)
Given a market discount rate (YTM), one can calculate the fair value of a bond.
**Example:** 3-year, 5% annual coupon bond, par $1000. Market discount rate = 6%.
CF1 = $50, CF2 = $50, CF3 = $1050.
`Price = 50/(1.06)^1 + 50/(1.06)^2 + 1050/(1.06)^3`
`Price = 47.17 + 44.50 + 881.66 = $973.33` (Discount bond as Coupon < YTM).

### E. Matrix Pricing
Used to estimate YTM or price for illiquid bonds that don't trade often.
1.  Find comparable actively traded bonds with similar maturity, coupon rate, and credit quality.
2.  Calculate YTMs of these comparable bonds.
3.  Use linear interpolation to estimate YTM for the illiquid bond based on YTMs of comparables.
4.  Price the illiquid bond using this estimated YTM.

This deep dive covers the foundational elements of fixed-income securities. Understanding these building blocks is essential before moving to more complex topics like risk measurement and portfolio strategies. Good luck!I have now created the first of the planned 2-3 additional Topic Deep Dives for Level 1: `Fixed_Income_Basics.md`.

Next, I will create another Level 1 Deep Dive: `Derivatives_Introduction.md`.
File: `CFA/Level_1/Topic_Deep_Dives/Derivatives_Introduction.md`
