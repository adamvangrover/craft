# CFA Level 2 Cheat Sheet: Fixed Income

**Core Principle:** Level 2 Fixed Income focuses on more advanced valuation techniques, term structure modeling, analysis of bonds with embedded options, and credit modeling.

## I. Term Structure of Interest Rates and Arbitrage-Free Valuation

*   **Spot Rates (Zero-Coupon Rates):** Yields on zero-coupon bonds for various maturities. `z1, z2, ..., zN`.
    *   The price of a coupon bond can be found by discounting each cash flow using the corresponding spot rate:
        `Price = CPN/(1+z1)^1 + CPN/(1+z2)^2 + ... + (CPN+Par)/(1+zN)^N`.
    *   This is **arbitrage-free valuation**. If bond price deviates, arbitrage is possible by stripping/reconstituting bonds.
*   **Forward Rates (Implied Forward Rates - IFRs):** Interest rates for future periods implied by current spot rates.
    *   `f(j,k)`: Annualized forward rate for a loan starting at time `j` for `k` periods.
    *   E.g., `(1+z2)^2 = (1+z1)^1 * (1+f(1,1))^1` => `f(1,1)` is the 1-year forward rate, 1 year from now.
    *   ` (1+z_A)^A * (1+f(A, B-A))^(B-A) = (1+z_B)^B `
*   **Forward Pricing Model:** Price of a bond at a future date `T`, given forward rates.
    *   `PV_T = CPN/(1+f(T,1))^1 + CPN/(1+f(T,2))^2 + ...`
*   **Yield to Maturity (YTM):** Single discount rate that equates PV of bond's cash flows to its market price. A weighted average of spot rates.
*   **Par Rate (Par Yield):** Coupon rate that makes a bond trade at par value.
    *   For a bond trading at par, Coupon Rate = YTM = Par Rate for that maturity.
    *   Par curve is derived from spot curve: `Par_N = (1 - PV_factor_N) / Sum(PV_factors_1 to N)`.
*   **Bootstrapping:** Process of deriving spot rates from par rates (or coupon bond yields), starting with short maturities and moving to longer ones.
*   **Riding the Yield Curve:** Investment strategy. If yield curve is upward sloping and expected to remain unchanged, investor buys longer-maturity bond and sells it as it approaches maturity (rolls down the curve), potentially earning higher return than implied by initial YTM due to price appreciation. Assumes static yield curve.

## II. The Arbitrage-Free Valuation Framework

*   **Binomial Interest Rate Trees:** Model evolution of interest rates over time. Used to value bonds with embedded options.
    *   **Nodes:** Represent possible interest rates at different time points.
    *   **Interest Rate Volatility (σ):** Key input. Higher volatility -> wider dispersion of rates in tree.
    *   **Calibration:** Tree must be calibrated to match current benchmark term structure (i.e., model prices of current on-the-run issues must equal market prices). This ensures arbitrage-free pricing.
    *   **Backward Induction:** Start from maturity, calculate bond values at each node, working backwards to t=0.
        *   At each node: `Value = 0.5 * [(PV_up + CPN_up)/(1+i_node) + (PV_down + CPN_down)/(1+i_node)]`.
        *   If option exists, check for exercise at each node.
*   **Valuing an Option-Free Bond with a Tree:**
    *   PV at each node = `0.5 * [(V_up + CPN) / (1+i)] + 0.5 * [(V_down + CPN) / (1+i)]`.
*   **Valuing a Callable Bond with a Tree:**
    *   At each node where bond can be called: `Value_node = min(Call Price, PV_if_not_called)`.
    *   `PV_if_not_called` is calculated as for an option-free bond.
    *   Call option value = `Value_option_free_bond - Value_callable_bond`.
*   **Valuing a Putable Bond with a Tree:**
    *   At each node where bond can be put: `Value_node = max(Put Price, PV_if_not_put)`.
    *   Put option value = `Value_putable_bond - Value_option_free_bond`.
*   **Option-Adjusted Spread (OAS):** Constant spread added to all rates in a calibrated interest rate tree that makes model price = market price of the bond *with* options.
    *   Measures spread for credit risk and liquidity risk, after removing option component.
    *   Callable bond: OAS < Z-spread. Putable bond: OAS > Z-spread.
    *   Higher interest rate volatility -> Lower OAS for callable, Higher OAS for putable.

## III. Valuation and Analysis of Bonds with Embedded Options

*   **Callable Bonds:** Issuer has right to redeem bond before maturity at a specified call price. Benefits issuer.
    *   Value_callable = Value_option_free - Value_call_option.
    *   Price compression: Price appreciation is limited as rates fall due to call risk (negative convexity at low yields).
    *   Reinvestment risk for investor if called.
*   **Putable Bonds:** Investor has right to sell bond back to issuer before maturity at a specified put price. Benefits investor.
    *   Value_putable = Value_option_free + Value_put_option.
    *   Provides floor for bond price.
*   **Convertible Bonds:** Investor has right to convert bond into issuer's common stock at a specified conversion ratio.
    *   Hybrid security (debt + equity option).
    *   **Conversion Value:** `Market Price per Share * Conversion Ratio`.
    *   **Market Conversion Price:** `Bond Price / Conversion Ratio`.
    *   **Conversion Premium:** `(Market Conversion Price - Stock Price) / Stock Price`.
    *   Value_convertible ≈ `max(Value_straight_bond, Conversion_Value) + Value_conversion_option`.
    *   Often callable by issuer (forced conversion if conversion value > call price).
*   **Effective Duration and Effective Convexity:**
    *   Used for bonds with embedded options because cash flows are interest-rate dependent.
    *   `EffDur = (PV_minus - PV_plus) / (2 * PV_0 * ΔCurve)`
    *   `EffConv = (PV_minus + PV_plus - 2*PV_0) / (PV_0 * (ΔCurve)^2)`
    *   Callable bonds: EffDur < Duration of straight bond, can become very low or negative when deeply in the money for call. EffConv can be negative.
    *   Putable bonds: EffDur < Duration of straight bond, especially when put is ITM.
*   **Key Rate Duration:** Sensitivity to changes in specific points (key rates) on yield curve. Useful for non-parallel shifts.

## IV. Credit Analysis Models

*   **Credit Risk:** Risk of loss due to borrower default or decline in credit quality.
    *   **Expected Loss = Probability of Default (PD) * Loss Given Default (LGD)**
    *   `LGD = 1 - Recovery Rate (RR)`.
*   **Credit Scoring/Rating:**
    *   Agency ratings (S&P, Moody's, Fitch). Ordinal rankings of creditworthiness.
    *   Internal credit scores by lenders.
*   **Structural Models of Credit Risk (e.g., Merton Model):**
    *   Based on option pricing theory. Equity is a call option on firm's assets with strike = face value of debt. Debt is risk-free bond minus a put option on assets.
    *   `Equity_t = Assets_t - Debt_t` (simplified).
    *   Default occurs if Asset Value < Debt Value at maturity.
    *   Inputs: Asset value, asset volatility, debt level, time to maturity, risk-free rate.
    *   Provides estimates of PD and LGD.
    *   Pros: Theoretical foundation. Cons: Assumes simple balance sheet, assets not directly observable.
*   **Reduced Form Models of Credit Risk:**
    *   Model PD and LGD statistically, without imposing assumptions about firm structure.
    *   PD is often modeled using hazard rates (conditional probability of default given no prior default).
    *   Inputs: Historical default data, macroeconomic variables, firm-specific variables (financial ratios).
    *   Pros: Can use observable market data, flexible. Cons: Assumes past predicts future, parameters can be unstable.
*   **Credit Spreads:** `Yield_risky_bond - Yield_risk_free_bond`.
    *   Components: Compensation for expected credit loss, liquidity premium, risk premium for uncertainty of default.
*   **Analysis of Asset-Backed Securities (ABS) Credit Risk:**
    *   Focus on credit quality of underlying collateral pool.
    *   Importance of credit enhancement: Subordination (tranching), overcollateralization, excess spread, guarantees.
    *   Waterfall structure for cash flow distribution among tranches.

## V. Fixed-Income Portfolio Management (Introduction at L2)

*   (More detail in L3, but L2 touches on risk aspects)
*   **Interest Rate Risk Management:**
    *   Duration and convexity matching/hedging.
    *   Immunization strategies (matching asset duration to liability duration).
*   **Credit Risk Management:**
    *   Diversification, credit quality limits, credit derivatives (CDS).
*   **Yield Curve Strategies:**
    *   Bullet portfolio (concentrated maturities).
    *   Barbell portfolio (maturities at short and long ends).
    *   Laddered portfolio (maturities spread out).
    *   Riding the yield curve.
    *   Duration management based on yield curve views (e.g., increase duration if rates expected to fall).

**Key for L2 Fixed Income:**
*   **Valuation Nuances:** Arbitrage-free pricing, binomial trees for optionable bonds.
*   **Understanding Embedded Options:** How they affect bond value, duration, convexity.
*   **OAS Interpretation:** Comparing bonds with options.
*   **Credit Models:** Conceptual understanding of structural vs. reduced form.
*   **Risk Measures:** Effective duration/convexity, key rate duration.

This cheat sheet covers the advanced fixed income topics for Level 2. Focus on the valuation of bonds with embedded options and understanding credit risk modeling. Good luck!I will proceed with `L2_CS_Derivatives.md`.
