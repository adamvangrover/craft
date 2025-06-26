# CFA Level 2 Cheat Sheet: Derivatives

**Note:** L2 Derivatives focuses on the valuation of forwards, futures, options, and swaps, and understanding their more complex strategies.

## I. Forward Commitments: Pricing and Valuation

1.  **Generic Forward Contract Pricing:**
    *   `FP = S0 * (1+Rf)^T - PV(Benefits) * (1+Rf)^T + PV(Costs) * (1+Rf)^T`
    *   `FP = (S0 - PV(Benefits) + PV(Costs)) * (1+Rf)^T`
        *   `S0`: Spot price of underlying
        *   `Rf`: Risk-free rate (continuously compounded: `S0 * e^(Rf*T)`)
        *   `T`: Time to expiration
        *   `PV(Benefits)`: Present value of benefits of holding underlying (e.g., dividends, convenience yield)
        *   `PV(Costs)`: Present value of costs of holding underlying (e.g., storage, insurance)
    *   **Value of Forward Contract (Long Position) at time t:**
        *   `Vt(T) = St - PVt(Benefits) + PVt(Costs) - FP / (1+Rf)^(T-t)`
        *   Or `Vt(T) = St - PVt(Benefits) + PVt(Costs) - (S0 - PV0(Benefits) + PV0(Costs)) * (1+Rf)^t` (if FP was fair at t=0)
        *   Essentially `Vt(T) = St - Forward Price_t` (where Forward Price_t is the current fair forward price for a new contract expiring at T).

2.  **Equity Forwards/Futures:**
    *   **Discrete Dividends:** `FP = (S0 - PV(Divs)) * (1+Rf)^T`
    *   **Continuous Dividend Yield (q):** `FP = S0 * e^((Rf-q)*T)`
    *   **Value (Long):** `Vt(T) = St*e^(-q(T-t)) - FP*e^(-Rf(T-t))`

3.  **Bond Forwards/Futures (e.g., T-Bond Futures):**
    *   Underlying is often a specific bond or a "cheapest-to-deliver" (CTD) bond.
    *   `FP = (Full Price_S0 - PV(Coupons)) * (1+Rf)^T`
    *   `Full Price = Clean Price + Accrued Interest`
    *   **Conversion Factor (CF):** Used for T-Bond futures to adjust for different deliverable bonds. `Futures Price * CF ≈ CTD Bond Full Price`.

4.  **Currency Forwards/Futures:**
    *   Based on Interest Rate Parity: `F(d/f) = S(d/f) * [(1+id*T_act/360) / (1+if*T_act/360)]` (using money market rates)
    *   Or `F(d/f) = S(d/f) * e^((id-if)*T)` (using continuous rates)
    *   `id` = domestic risk-free rate, `if` = foreign risk-free rate.

5.  **Forward Rate Agreements (FRAs):**
    *   Forward contract on an interest rate (e.g., LIBOR/SOFR).
    *   "X x Y" FRA: e.g., 3x9 FRA is a 6-month loan (9-3), 3 months from today.
    *   Payoff for long (pays fixed, receives floating) if Underlying Rate > FRA Rate.
    *   `FRA Price (Fixed Rate) ≈ Implied Forward Rate` from yield curve.
    *   Valuation involves comparing the agreed FRA rate to the current implied forward rate for the remaining period.

6.  **Futures vs. Forwards Pricing:**
    *   If interest rates are constant or uncorrelated with futures prices, Futures Price = Forward Price.
    *   If interest rates are positively correlated with futures prices, Futures Price > Forward Price (long benefits from marking to market).
    *   If interest rates are negatively correlated with futures prices, Futures Price < Forward Price. (Usually small difference).

## II. Option Valuation

1.  **Binomial Option Pricing Model:**
    *   Assumes underlying price can move to one of two possible values over discrete periods.
    *   **Risk-Neutral Pricing:** Create a risk-free hedge portfolio (long option, short Δ shares of stock).
        *   `Δ (Hedge Ratio) = (C+ - C-) / (S+ - S-)` for a call.
        *   Value of Call `C = [πC+ + (1-π)C-] / (1+Rf)`
        *   Risk-neutral probability of up-move `π = ( (1+Rf) - d ) / ( u - d )`
            *   `u` = up-factor (e.g., S+/S), `d` = down-factor (e.g., S-/S).
            *   `u = e^(σ*sqrt(h))`, `d = e^(-σ*sqrt(h))` or `1/u` (h = time step length).
    *   Can be extended to multiple steps. Value at each node is expected future value discounted one period.

2.  **Black-Scholes-Merton (BSM) Model (European Options on Non-Dividend Paying Stocks):**
    *   `Call Price (C) = S0 * N(d1) - X * e^(-Rf*T) * N(d2)`
    *   `Put Price (P) = X * e^(-Rf*T) * N(-d2) - S0 * N(-d1)`
    *   `d1 = [ln(S0/X) + (Rf + σ²/2)*T] / (σ*sqrt(T))`
    *   `d2 = d1 - σ*sqrt(T)`
    *   `N(.)`: Cumulative normal distribution function.
    *   **Assumptions:**
        1.  Underlying price follows lognormal distribution.
        2.  Continuous trading.
        3.  Constant risk-free rate and volatility.
        4.  No taxes or transaction costs.
        5.  No dividends during option life.
        6.  European exercise.
    *   **Delta (Δ):** Change in option price for a one-unit change in stock price.
        *   `Δ_call = N(d1)`
        *   `Δ_put = N(d1) - 1` or `-N(-d1)`
    *   **Gamma (Γ):** Change in delta for a one-unit change in stock price. (Rate of change of delta).
    *   **Vega (ν):** Change in option price for a one-unit change in volatility.
    *   **Theta (θ):** Change in option price for a one-unit change in time (time decay). Usually negative.
    *   **Rho (ρ):** Change in option price for a one-unit change in risk-free rate.
    *   **Implied Volatility:** Volatility implied by current market price of option (solve BSM for σ).

3.  **Extensions of BSM:**
    *   **Merton Model (Dividends):** Adjust S0 to `S0*e^(-qT)` for continuous dividend yield `q`.
    *   **Black Model (Options on Futures):** `C = e^(-Rf*T) * [F0*N(d1) - X*N(d2)]`. Uses futures price F0 instead of S0, and discounts at Rf.
    *   **American Options:** BSM not directly applicable for calls on dividend-paying stocks or puts (early exercise may be optimal). Binomial model is better.

## III. Swap Valuation

1.  **Interest Rate Swaps (Plain Vanilla - Fixed for Floating):**
    *   **Pricing (Determining Fixed Swap Rate `SFR`):**
        *   `SFR` is set such that PV(Fixed Leg) = PV(Floating Leg) at initiation (Value of swap = 0).
        *   `SFR = (1 - Final Discount Factor_n) / Sum of Discount Factors_1 to n` (for annual payments).
        *   Discount factors derived from current spot or forward LIBOR/SOFR curve.
    *   **Valuation (After Initiation):**
        *   `Value_swap (to fixed payer) = PV(Receive Floating) - PV(Pay Fixed)`
        *   Floating leg revalues to par (Notional) at each reset date immediately after payment.
        *   PV of remaining fixed payments is calculated using current discount factors.
        *   Can also be valued as a series of off-market FRAs or as difference between two bonds (long floating-rate bond, short fixed-rate bond).

2.  **Currency Swaps:**
    *   Exchange principal at initiation and maturity (can be same or different rates). Exchange fixed/floating interest payments in different currencies.
    *   **Valuation:** Convert cash flows of one leg into currency of the other using spot/forward rates, then discount using that currency's yield curve.
        *   `Value_swap_currA = Notional_A - PV(Foreign CFs converted to Curr A)` (if receiving fixed in A, paying fixed in B, and principals exchanged).

3.  **Equity Swaps:**
    *   One party pays return on equity (index/stock), other pays fixed or floating rate.
    *   **Valuation:** `Value_swap (to equity return payer) = PV(Receive Fixed/Floating Leg) - PV(Pay Equity Leg)`
    *   PV of equity leg is current value of notional principal of equity.

## IV. Option Strategies & Risk Management

1.  **Delta Hedging:** Creating a portfolio of options and underlying asset such that portfolio delta is zero. Protects against small changes in underlying price. Requires rebalancing as delta changes (dynamic hedging).
2.  **Gamma Risk:** Risk that delta changes significantly. Gamma is highest for ATM options near expiration.
3.  **Covered Call:** Long stock + Short call. Income generation, limited upside profit, downside protection limited to premium received.
4.  **Protective Put:** Long stock + Long put. Portfolio insurance, limits downside loss, upside potential reduced by put premium.
5.  **Spreads:** Combine options of same type (calls or puts) with different strikes/expirations.
    *   **Bull Spread:** Buy low strike call, sell high strike call. Limited profit/loss.
    *   **Bear Spread:** Buy high strike put, sell low strike put. Limited profit/loss.
    *   **Calendar Spread:** Buy long-term option, sell short-term option (same strike). Profit from time decay differences.
6.  **Combinations:** Options of different types.
    *   **Straddle:** Long call + Long put (same strike/expiration). Bet on high volatility.
    *   **Strangle:** Long OTM call + Long OTM put (same expiration). Cheaper than straddle, needs larger price move.
    *   **Collar:** Long stock + Long OTM put + Short OTM call. "Zero-cost collar" if premiums offset. Brackets return.

## Key Formulas & Concepts:
- **Forward Pricing (general):** `(S0 - PV(Benefits) + PV(Costs)) * (1+Rf)^T`
- **Put-Call Parity (BSM):** `C + X*e^(-Rf*T) = P + S0*e^(-qT)` (for dividend yield q)
- **BSM for Call:** `S0*e^(-qT)*N(d1) - X*e^(-Rf*T)*N(d2)` (with continuous dividend q)
- **Swap Fixed Rate (annual):** `(1 - DF_n) / Σ(DF_i)`
- **Delta, Gamma, Vega, Theta, Rho:** Understand their meaning and behavior.

## L2 Derivatives Focus:
- **No-arbitrage valuation:** Core principle for all derivatives.
- **Binomial model mechanics:** For American options and understanding option properties.
- **BSM model:** Application, interpretation of inputs/outputs, and "Greeks."
- **Swap valuation:** As series of FRAs or difference between bonds.
- **Currency and interest rate effects:** How they feed into derivative pricing.
- **Strategic use of options:** Understanding payoff profiles of common strategies.

*This cheat sheet is a summary. Always refer to official CFA curriculum for detailed explanations and examples.*Derivatives for L2 is done. Next is Alternative Investments.
