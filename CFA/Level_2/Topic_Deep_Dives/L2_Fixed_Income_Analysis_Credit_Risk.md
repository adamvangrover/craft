# CFA Level II Deep Dive: Fixed Income - Analysis of Credit Risk

## Overview
This deep dive focuses on the analysis of credit risk in fixed income securities, a critical area for CFA Level II. It expands on Level I concepts by examining credit spreads, the probability of default, loss given default, expected loss, and an introduction to credit derivatives. Understanding these elements is crucial for valuing corporate bonds and other credit-sensitive instruments.

## 1. Defining and Measuring Credit Risk

*   **Credit Risk:** The risk of loss resulting from a borrower (issuer) failing to make full and timely payments of interest and/or principal.
*   **Components of Credit Risk:**
    *   **Probability of Default (PD):** The likelihood that a borrower will default on its obligations over a specific time horizon.
    *   **Loss Severity or Loss Given Default (LGD):** The portion of a bond's value (including unpaid interest) that is lost if a default occurs. LGD is typically expressed as a percentage.
        *   `LGD = 1 - Recovery Rate (RR)`
        *   Recovery Rate is the percentage of the exposure recovered in the event of default.
*   **Expected Loss (EL):** The anticipated loss from credit risk over a specific period.
    *   `EL = PD * LGD`
    *   `Annual EL ≈ PD * LGD` (assuming default can happen at any point during the year, this is a simplification)
    *   For a portfolio, `Portfolio EL = Σ (EL_i * Exposure_i)`
*   **Credit VaR (Value at Risk):** The maximum credit loss expected at a given confidence level over a specific time horizon. It measures unexpected loss.

## 2. Credit Ratings and Credit Scoring

*   **Credit Ratings:** Opinions issued by credit rating agencies (e.g., S&P, Moody's, Fitch) on the creditworthiness of an issuer or a specific debt issue.
    *   **Investment Grade:** Baa3/BBB- or higher. Lower credit risk.
    *   **Speculative Grade (High-Yield or Junk):** Ba1/BB+ or lower. Higher credit risk.
    *   Ratings consider business risk, financial risk, industry factors, and management quality.
    *   **Limitations:** Ratings can lag market events, potential for conflicts of interest, may not capture all risks.
*   **Credit Scoring:** Quantitative models that assign a numerical score to a borrower based on financial and non-financial characteristics to predict the probability of default. More common for consumer lending and small/medium enterprises.

## 3. Credit Spreads

The yield spread is the additional yield an investor demands for taking on the credit risk of a bond compared to a risk-free benchmark.

*   **Yield Spread:** `Yield_CreditRiskyBond - Yield_RiskFreeBenchmark`
*   **Benchmark:** Typically an on-the-run government bond of similar maturity.
*   **Factors Influencing Spreads:**
    *   Credit quality of the issuer.
    *   Macroeconomic conditions (e.g., spreads widen during recessions).
    *   Market liquidity for the specific bond or issuer.
    *   Tax treatment of the bond.
    *   Embedded options in the bond.

### Types of Spreads:

*   **G-Spread (Government Spread):** Yield spread over an actual government bond yield (e.g., a specific Treasury bond). Simplest to calculate but can be affected by differences in liquidity or specific features of the chosen government bond.
*   **I-Spread (Interpolated Spread):** Yield spread over a benchmark swap rate (e.g., LIBOR or SOFR-based swap curve). Swap curves are often more comparable across issuers than government bond yields. Requires interpolation if bond maturity doesn't match standard swap maturities.
*   **Z-Spread (Zero-volatility Spread):** The constant spread that, when added to each spot rate on the default-free spot rate curve (e.g., Treasury spot curve), makes the present value of the bond's cash flows equal to its current market price.
    *   Assumes no interest rate volatility.
    *   `Market Price = CF₁/(z₁+Z) + CF₂/(z₂+Z)² + ... + CFn/(zn+Z)ⁿ` (Solve for Z)
*   **Option-Adjusted Spread (OAS):**
    *   Used for bonds with embedded options (e.g., callable or putable bonds).
    *   The Z-spread includes the value of the embedded option. OAS removes the option's value to reflect the spread attributable purely to credit risk and liquidity.
    *   `OAS = Z-Spread - Option Value (in spread terms)`
    *   For a **callable bond** (option benefits issuer): `OAS < Z-Spread`. The option makes the bond riskier for the investor, so the Z-spread is wider to compensate. OAS is narrower as it reflects the "option-free" spread.
    *   For a **putable bond** (option benefits investor): `OAS > Z-Spread`. The option makes the bond less risky for the investor.

## 4. Models of Credit Risk

### Structural Models
*   Based on the economic theory of the firm, specifically option pricing theory (Merton model).
*   The company's equity is viewed as a call option on the company's assets, with the strike price being the face value of its debt. Default occurs if the value of the company's assets (VA) falls below the face value of its debt (K) at the maturity of the debt.
*   `Equity Value (VE) = Call Option(VA, K, T, r, σA)`
*   `Debt Value (VD) = VA - VE` (simplified) or `VD = Risk-free bond - Put Option(VA, K, T, r, σA)`
*   **Inputs:** Value of company assets (VA), volatility of asset value (σA), time to maturity (T), risk-free rate (r), face value of debt (K).
*   **Outputs:** Can derive PD, LGD, and fair value of debt.
*   **Advantages:** Economic intuition, links default probability to company fundamentals.
*   **Disadvantages:** Asset value and volatility are not directly observable, assumes simple capital structure, assumes default only at maturity.

### Reduced-Form Models
*   Do not assume an underlying economic model for why default occurs. Instead, they model the probability of default as an exogenous (external) statistical process (e.g., a Poisson process or hazard rate model).
*   Default is treated as a surprise event.
*   **Inputs:** Focus on estimating default intensity (hazard rate), which is the conditional probability of default given no prior default. These inputs are often calibrated using historical default data or market prices of credit-sensitive instruments (like CDS).
*   **Advantages:** Can be calibrated to market data, can model time-varying default probabilities, does not require unobservable asset values.
*   **Disadvantages:** Less economic intuition, relies heavily on historical data which may not predict future well, default intensity itself is not directly observable.

## 5. Analyzing High-Yield (Speculative Grade) Debt

High-yield bonds carry significantly higher credit risk and thus require more intensive analysis:
*   **Sources of Repayment:** Focus on cash flow generation, asset sales, and potential refinancing.
*   **Liquidity:** Crucial for meeting short-term obligations. Analyze cash balances, working capital, and access to credit lines.
*   **Debt Structure:** Seniority in the capital structure, security (collateral), covenants.
*   **Covenants:** Particularly important. Negative covenants (restrictions on debt incurrence, asset sales, restricted payments) and financial maintenance covenants (if present) provide key protections. "Cov-lite" structures reduce lender protection.
*   **Equity Cushion:** A larger equity base (lower leverage) provides more buffer against losses.
*   **Business Risk:** Industry prospects, competitive position, operating leverage.
*   **Management Quality and Strategy:** Track record, alignment with creditors.
*   **Recovery Analysis:** Estimating potential recovery rates in a default scenario based on asset values and seniority.

## 6. Introduction to Credit Derivatives

*   **Credit Default Swap (CDS):** The most common credit derivative.
    *   **Protection Buyer:** Pays a periodic premium (CDS spread) to the protection seller.
    *   **Protection Seller:** Receives the premium and agrees to make a payment to the buyer if a predefined credit event (e.g., bankruptcy, failure to pay, restructuring) occurs for a specific reference entity (e.g., a corporate bond issuer).
    *   **CDS Spread:** Quoted in basis points per annum. A higher spread indicates higher perceived credit risk.
    *   **Uses:** Hedging credit risk, speculating on credit quality changes, gaining synthetic exposure to credit.
*   Other credit derivatives include credit spread options, total return swaps on bonds, and various structured credit products (e.g., CDOs, though less emphasized at L2 now).

---

*This deep dive covers essential aspects of credit risk analysis for fixed income securities. For the CFA Level II exam, be prepared to apply these concepts in vignettes, including calculating spreads, understanding the implications of different credit models, and analyzing credit quality for specific issuers.*
