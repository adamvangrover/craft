# CFA Level II Deep Dive: Derivatives - Option Valuation (Binomial & BSM)

## Overview
This deep dive covers option valuation models, specifically the Binomial Model and the Black-Scholes-Merton (BSM) Model, which are fundamental to understanding derivatives at CFA Level II. These models provide frameworks for determining the theoretical fair value of options.

## 1. Key Option Concepts Review

*   **Option:** A contract giving the owner the right, but not the obligation, to buy (call option) or sell (put option) an underlying asset at a specified strike price (X or K) on or before a specified expiration date (T).
*   **Underlying Asset (S):** The asset on which the option is written (e.g., stock, currency, commodity).
*   **Strike Price (X or K):** The price at which the underlying asset can be bought or sold.
*   **Expiration Date (T):** The date after which the option is void.
*   **European Option:** Can only be exercised at the expiration date.
*   **American Option:** Can be exercised at any time up to and including the expiration date.
*   **Intrinsic Value:** The value of the option if exercised immediately.
    *   Call Option: `Max(0, S - X)`
    *   Put Option: `Max(0, X - S)`
*   **Time Value (Speculative Value):** The portion of the option's price that exceeds its intrinsic value. `Time Value = Option Price - Intrinsic Value`. It reflects the probability that the option will become more valuable before expiration.

## 2. Binomial Option Pricing Model

The binomial model is a discrete-time model that breaks down the time to expiration into a number of steps or periods. In each period, the price of the underlying asset is assumed to move to one of two possible values.

*   **Assumptions:**
    *   The underlying asset price follows a binomial multiplicative process over discrete periods.
    *   No arbitrage opportunities exist.
    *   Trading is frictionless (no transaction costs or taxes).
    *   The risk-free interest rate (r) is constant over the life of the option.

*   **One-Period Binomial Model:**
    1.  **Define Parameters:**
        *   `S₀`: Current price of the underlying asset.
        *   `u`: Up-move factor (S₀ * u = Su, price if asset goes up). `u > 1`.
        *   `d`: Down-move factor (S₀ * d = Sd, price if asset goes down). `0 < d < 1`. Often `d = 1/u`.
        *   `r`: Risk-free rate for one period.
    2.  **Calculate Option Payoffs at Expiration:**
        *   `Cu` (Call up-state payoff) = `Max(0, Su - X)`
        *   `Cd` (Call down-state payoff) = `Max(0, Sd - X)`
        *   `Pu` (Put up-state payoff) = `Max(0, X - Su)`
        *   `Pd` (Put down-state payoff) = `Max(0, X - Sd)`
    3.  **Calculate Risk-Neutral Probability (πu) of an Up-Move:**
        *   `πu = ( (1+r) - d ) / ( u - d )`
        *   `πd = 1 - πu` (Risk-neutral probability of a down-move)
        *   Condition for no arbitrage: `d < (1+r) < u`.
    4.  **Calculate Expected Option Payoff at Expiration (using risk-neutral probabilities):**
        *   `E(Call Payoff) = πu * Cu + πd * Cd`
        *   `E(Put Payoff) = πu * Pu + πd * Pd`
    5.  **Discount Expected Payoff to Present Value:**
        *   `Call Value (c₀) = E(Call Payoff) / (1+r)`
        *   `Put Value (p₀) = E(Put Payoff) / (1+r)`

*   **Two-Period (or Multi-Period) Binomial Model:**
    *   The same logic is extended. Start at the final expiration date and calculate payoffs at each possible end node (e.g., Suu, Sud, Sdd for two periods).
    *   Work backward through the tree, calculating the option value at each preceding node by taking the present value of the expected future option values (discounted at `1+r` and weighted by risk-neutral probabilities).
    *   For **American options**, at each node before expiration, compare the calculated binomial value with the intrinsic value (value if exercised early). The option value at the node is the higher of the two.

## 3. Black-Scholes-Merton (BSM) Model

The BSM model is a continuous-time model used for valuing **European options** on non-dividend-paying stocks.

*   **Assumptions:**
    *   The price of the underlying asset follows a lognormal distribution (i.e., continuously compounded returns are normally distributed - geometric Brownian motion).
    *   The risk-free rate (r) and volatility (σ) of the underlying asset are constant and known.
    *   There are no dividends paid on the underlying stock during the option's life.
    *   There are no transaction costs or taxes.
    *   The markets are perfectly liquid, and borrowing and lending at the risk-free rate are possible.
    *   The option is European.

*   **BSM Formulas (for a non-dividend paying stock):**
    *   **Call Option Price (c):**
        ```
        c = S₀ * N(d₁) - X * e^(-rT) * N(d₂)
        ```
    *   **Put Option Price (p) (using Put-Call Parity or direct formula):**
        ```
        p = X * e^(-rT) * N(-d₂) - S₀ * N(-d₁)
        ```
    *   Where:
        *   `S₀`: Current price of the underlying asset
        *   `X`: Strike price of the option
        *   `T`: Time to expiration (in years)
        *   `r`: Continuously compounded risk-free interest rate (annualized)
        *   `σ`: Volatility of the continuously compounded returns of the underlying asset (annualized standard deviation)
        *   `N(.)`: Cumulative standard normal distribution function for a variable. `N(d₁)` and `N(d₂)` represent probabilities.
        *   `e`: Base of the natural logarithm (approx. 2.71828)
        *   `d₁ = [ln(S₀/X) + (r + (σ²/2)) * T] / (σ * √T)`
        *   `d₂ = d₁ - σ * √T`

*   **Adjustments for Dividends:**
    *   **Continuous Dividend Yield (q):** Replace `S₀` with `S₀ * e^(-qT)` in the call formula and in `d₁`.
        ```
        c = S₀ * e^(-qT) * N(d₁) - X * e^(-rT) * N(d₂)
        d₁ = [ln(S₀/X) + (r - q + (σ²/2)) * T] / (σ * √T)
        ```
        (Put formula also adjusts similarly or via put-call parity).
    *   **Discrete Dividends:** Subtract the present value of expected dividends during the option's life from `S₀` before using it in the BSM model.

## 4. Option Greeks (Sensitivity Measures from BSM)

The Greeks measure the sensitivity of an option's price to changes in underlying parameters.

*   **Delta (Δ):** Change in option price for a one-unit change in the price of the underlying asset.
    *   Call Delta: `N(d₁)` (for non-dividend stock). Ranges from 0 to 1.
    *   Put Delta: `N(d₁) - 1` (for non-dividend stock). Ranges from -1 to 0.
    *   Approximates the probability of the option expiring in-the-money (for N(d₂)). Delta is the hedge ratio.

*   **Gamma (Γ):** Rate of change of delta for a one-unit change in the price of the underlying asset. Measures the curvature of the option's value.
    *   Highest when the option is at-the-money and close to expiration.

*   **Vega (ν):** Change in option price for a one-percentage-point change in the volatility of the underlying asset.
    *   Options are more valuable when volatility is higher. Highest for at-the-money options with longer time to expiration.

*   **Theta (Θ):** Change in option price for a one-unit decrease in time to expiration (i.e., time decay).
    *   Usually negative for long option positions, as options lose value as they approach expiration.

*   **Rho (ρ):** Change in option price for a one-percentage-point change in the risk-free interest rate.
    *   Calls generally have positive rho; puts generally have negative rho.

## 5. Relationship between Binomial and BSM Models
The BSM model can be viewed as a limiting case of the binomial model as the number of periods (n) in the binomial model approaches infinity. For a large number of steps, the binomial model results converge to the BSM results.

## Key Differences & Applications
*   **Binomial:** More flexible, can value American options due to its ability to check for early exercise at each node. Useful for options on assets with discrete dividends. Computationally intensive for many steps.
*   **BSM:** Closed-form solution, computationally efficient for European options. Relies on more restrictive assumptions.

---

*This deep dive provides a conceptual and mathematical foundation for option valuation. For the CFA Level II exam, it's crucial to understand the assumptions, mechanics, and interpretations of both models, as well as the calculation and meaning of the Greeks.*
