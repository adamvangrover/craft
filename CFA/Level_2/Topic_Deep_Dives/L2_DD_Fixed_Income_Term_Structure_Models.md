# CFA Level II Deep Dive: Fixed Income - Term Structure Models

## Overview
This deep dive explores term structure models for fixed income securities, a quantitative and conceptually challenging topic in the CFA Level II curriculum. These models aim to explain or predict the shape and dynamics of the yield curve. Understanding these models is crucial for valuing bonds with embedded options and for sophisticated interest rate risk management.

## 1. Fundamental Concepts

*   **Yield Curve:** A graphical representation of the relationship between yields (YTM) and maturities of bonds of the same credit quality.
*   **Spot Rate Curve (Zero Curve):** The curve composed of yields on zero-coupon bonds. Each spot rate, `z(T)`, is the appropriate discount rate for a single cash flow occurring at time `T`. This is theoretically the most accurate curve for discounting cash flows.
*   **Forward Rate Curve:** Contains forward rates, which are interest rates agreed upon today for a loan to be made at some future date.
    *   `f(j,k)` denotes the annualized k-period forward rate, contracted j periods from today.
    *   Forward rates can be derived from spot rates: `(1 + z(T₂))^T₂ = (1 + z(T₁))^T₁ * (1 + f(T₁, T₂-T₁))^(T₂-T₁)`
*   **Par Rate Curve:** Shows the coupon rates for bonds of different maturities that would cause the bonds to be priced at par.
*   **Bootstrapping:** The process of deriving the spot rate curve from the par rate curve (or coupon bond prices). Starting with short-maturity bonds, one can solve for short-term spot rates and then use those to find longer-term spot rates sequentially.

## 2. Theories of the Term Structure of Interest Rates

These theories attempt to explain the shape of the yield curve:

*   **Pure Expectations Theory:**
    *   Asserts that forward rates are unbiased estimators of expected future spot rates.
    *   `f(j,k) = E[z(j,k)]` (where `z(j,k)` is the future k-period spot rate starting at time j).
    *   An upward-sloping yield curve implies market expectation of rising short-term rates.
    *   A downward-sloping (inverted) curve implies expectations of falling rates.
    *   Does not account for risk premia.

*   **Liquidity Preference Theory:**
    *   Investors prefer more liquid short-term bonds and demand a liquidity premium to hold longer-term bonds.
    *   Forward rates are therefore greater than expected future spot rates: `f(j,k) = E[z(j,k)] + Liquidity Premium(j,k)`.
    *   An upward-sloping yield curve can result even if future spot rates are expected to be constant, due to the liquidity premium.

*   **Market Segmentation Theory:**
    *   Assumes that lenders and borrowers have strong preferences for particular maturity segments (e.g., banks prefer short-term, pension funds prefer long-term).
    *   Yields in each segment are determined independently by supply and demand within that segment.
    *   Does not assume investors will shift segments even for higher yields.

*   **Preferred Habitat Theory:**
    *   An extension of market segmentation. Investors have preferred maturity segments (habitats) but are willing to shift if they are adequately compensated by higher expected returns (yields) in other segments.
    *   Allows for both expectations and risk premia to influence the yield curve shape.

## 3. Term Structure Models (Interest Rate Models)

These models describe the stochastic process of interest rates over time.

### Equilibrium Term Structure Models
These models describe the dynamics of the short-term interest rate `r` based on underlying economic variables. They derive a process for `r` and then use it to price bonds and construct the yield curve.

*   **Cox-Ingersoll-Ross (CIR) Model:**
    *   `dr = k(θ - r)dt + σ√r dZ`
    *   `dr`: change in the short-term interest rate.
    *   `k`: speed of mean reversion.
    *   `θ`: long-run mean of the interest rate.
    *   `r`: current interest rate.
    *   `dt`: small change in time.
    *   `σ`: volatility of the interest rate.
    *   `√r`: term ensuring rates don't become negative (if `2kθ >= σ²`).
    *   `dZ`: standard Wiener process (random shock).
    *   **Features:** Mean-reverting, non-negative interest rates, incorporates volatility increasing with the level of rates.

*   **Vasicek Model:**
    *   `dr = k(θ - r)dt + σdZ`
    *   Similar to CIR but lacks the `√r` term, meaning interest rates can theoretically become negative.
    *   **Features:** Mean-reverting, analytically tractable, but allows negative rates.

### Arbitrage-Free Term Structure Models
These models are calibrated to perfectly fit the current market-observed term structure of interest rates (i.e., the current spot curve). This ensures that the model does not generate arbitrage opportunities when pricing current bonds.

*   **Ho-Lee Model:**
    *   `dr = θ(t)dt + σdZ`
    *   `θ(t)`: time-dependent drift term calibrated to match the current term structure.
    *   `σ`: constant volatility.
    *   **Features:** Simple, generates a normal distribution of rates, but can produce negative interest rates. The first arbitrage-free model.

*   **Kalotay-Williams-Fabozzi (KWF) Model:**
    *   Assumes a lognormal distribution for the short-term rate, thus preventing negative rates.
    *   `d(ln r) = θ(t)dt + σdZ` (Simplified representation)
    *   Calibrated to fit the current term structure.

*   **Interest Rate Trees (Binomial Trees):**
    *   A discrete-time framework for modeling interest rate movements and valuing bonds, especially those with embedded options.
    *   Nodes represent possible future interest rates. Rates move up or down with certain probabilities.
    *   **Calibration:** The tree is constructed such that it correctly prices a set of benchmark on-the-run (risk-free) bonds. This ensures the tree is arbitrage-free.
    *   **Process:**
        1.  Start with the current spot curve.
        2.  Model short-term rate movements (e.g., `r_up = r_low * e^(2σ)`).
        3.  Calculate bond values by working backward from maturity, discounting expected future values at each node's interest rate.
        4.  At nodes where options can be exercised (e.g., call dates for a callable bond), check if exercise is optimal. If so, the bond's value is the exercise price.

## 4. Yield Curve Factor Models
These models seek to explain yield curve movements using a small number of independent statistical factors.
*   Common factors identified by Litterman and Scheinkman (1991):
    1.  **Level (Parallel Shifts):** Most significant factor (explains ~70-90% of variation). All rates move up or down together.
    2.  **Steepness (Slope/Twist):** Short-term rates move differently from long-term rates, changing the slope.
    3.  **Curvature (Butterfly):** Medium-term rates move differently from short and long-term rates, changing the bend in the curve.
*   **Principal Component Analysis (PCA):** Statistical technique used to identify these unobservable factors.
*   **Applications:** Risk management (e.g., key rate duration), constructing hedging strategies. Key Rate Duration measures a bond's sensitivity to a change in a specific point (key rate) on the yield curve, holding other rates constant.

## Implications for Valuation and Risk Management
*   Term structure models are essential for valuing bonds with embedded options (e.g., callable bonds, putable bonds, mortgage-backed securities) because the decision to exercise depends on future interest rates.
*   Understanding yield curve dynamics helps in formulating active portfolio strategies (e.g., duration bets, curve reshaping trades).
*   Models provide a framework for hedging interest rate risk.

---

*This deep dive provides a conceptual and introductory mathematical overview. Further study involves detailed calibration techniques for arbitrage-free models, advanced applications of binomial trees, and the nuances of each specific equilibrium model.*
