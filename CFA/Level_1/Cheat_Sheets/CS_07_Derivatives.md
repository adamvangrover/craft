# CFA Level 1 Cheat Sheet: Derivatives

## Key Concepts:

### Derivative Markets and Instruments
- **Definition:** A financial instrument that derives its value from the value of an underlying asset (e.g., stocks, bonds, commodities, currencies, interest rates).
- **Key Characteristics:**
  - Value is derived from an underlying.
  - Typically have a defined expiration date.
  - Can be used for hedging, speculation, or arbitrage.
- **Exchange-Traded Derivatives (ETDs):** Standardized contracts, traded on an exchange, cleared through a central counterparty (CCP), lower counterparty risk. (e.g., futures, some options).
- **Over-the-Counter (OTC) Derivatives:** Customized contracts, traded directly between two parties, higher counterparty risk (though often mitigated by collateral/margining). (e.g., forwards, swaps, most options).

### Forward Commitments vs. Contingent Claims
- **Forward Commitments:** Obligation to transact at a future date at a price agreed upon today.
  - **Forward Contracts:** Customized, OTC.
  - **Futures Contracts:** Standardized, exchange-traded, daily settlement (marking to market).
  - **Swaps:** Series of forward contracts (e.g., interest rate swaps, currency swaps).
- **Contingent Claims (Options):** Right, but not obligation, to buy or sell an underlying asset at a predetermined price on or before a specific date.
  - **Call Option:** Right to buy.
  - **Put Option:** Right to sell.
  - **Option Writer (Seller) vs. Option Buyer (Holder).**
  - **Exercise Price (Strike Price):** Price at which the underlying can be bought/sold.
  - **Expiration Date:** Date after which the option is void.
  - **American Option:** Exercisable anytime up to expiration.
  - **European Option:** Exercisable only on the expiration date.

### Forward Markets and Contracts
- **Parties:** Long (buyer), Short (seller).
- **Pricing:** No payment at initiation. Value at initiation is zero.
- **Valuation:** Value can become positive or negative during the life of the contract.
- **Termination:**
  - Delivery of the asset.
  - Cash settlement.
  - Offset by entering an opposite forward contract (less common for forwards, common for futures).
- **Credit Risk (Counterparty Risk):** Risk that the other party will default.

### Futures Markets and Contracts
- **Standardization:** Contract size, underlying asset, delivery location/time.
- **Marking to Market:** Daily settlement of gains and losses.
- **Margin Requirements:**
  - **Initial Margin:** Deposit required to open a position.
  - **Maintenance Margin:** Minimum margin balance required. If balance drops below, a margin call is issued.
  - **Variation Margin:** Additional funds to bring margin back to initial level.
- **Clearinghouse:** Acts as counterparty to all trades, reducing credit risk.
- **Basis:** Spot Price - Futures Price. (Basis Risk: risk that basis will change unexpectedly).
- **Convergence:** Futures price converges to spot price at expiration.
- **Treasury Bill (T-Bill) Futures Pricing (example):** Based on implied forward rate.

### Option Markets and Contracts
- **Option Premium:** Price paid by the buyer to the seller (writer) of the option.
- **Moneyness:**
  - **Call Option:**
    - In-the-money (ITM): Spot Price > Strike Price
    - At-the-money (ATM): Spot Price = Strike Price
    - Out-of-the-money (OTM): Spot Price < Strike Price
  - **Put Option:**
    - In-the-money (ITM): Spot Price < Strike Price
    - At-the-money (ATM): Spot Price = Strike Price
    - Out-of-the-money (OTM): Spot Price > Strike Price
- **Intrinsic Value:** Minimum value of an option (max(0, S-X) for call, max(0, X-S) for put).
- **Time Value (Speculative Value):** Option Premium - Intrinsic Value.
- **Factors Influencing Option Prices (The "Greeks" - not detailed in L1, but concepts are):**
  - Underlying asset price (S)
  - Exercise price (X)
  - Time to expiration (T)
  - Volatility of the underlying (σ)
  - Risk-free interest rate (rf)
  - Dividends or cash flows on the underlying

### Swap Markets and Contracts
- **Definition:** Agreement to exchange a series of cash flows over a period of time.
- **Plain Vanilla Interest Rate Swap:** One party pays a fixed interest rate, the other pays a floating interest rate, on a notional principal amount.
  - **Fixed-Rate Payer (pays fixed, receives floating).**
  - **Floating-Rate Payer (pays floating, receives fixed).**
- **Currency Swap:** Exchange principal and/or interest payments in one currency for principal and/or interest payments in another currency.
- **Equity Swap:** Exchange cash flows based on the return of an equity index or stock for cash flows based on a fixed or floating interest rate.
- **Notional Principal:** The principal amount used to calculate payments (usually not exchanged in interest rate swaps, but can be in currency swaps).
- **Termination:** Can be terminated by agreement, offset with another swap, or held to maturity.

### Risk Management Applications of Derivatives
- **Hedging:** Reducing or eliminating risk.
  - **Short Hedge:** Selling futures/forwards or buying puts to protect against a price decline of an owned asset.
  - **Long Hedge:** Buying futures/forwards or buying calls to protect against a price increase of an asset to be acquired.
- **Speculation:** Taking a position to profit from an expected change in price.
- **Arbitrage:** Exploiting mispricings to earn a risk-free profit. (Helps keep markets efficient).

### Basic Derivative Pricing Concepts
- **No-Arbitrage Principle:** Identical assets or portfolios should have the same price. If not, arbitrage opportunities exist.
- **Pricing a Forward Contract (Conceptual):**
  - F0(T) = S0 * (1 + rf)^T (for an asset with no carrying costs/benefits)
  - F0(T) = (S0 - PV(Benefits)) * (1 + rf)^T + PV(Costs)
- **Put-Call Parity (for European options on non-dividend paying stock):**
  - P0 + S0 = C0 + PV(X)
  - P0 = Price of put, S0 = Spot price of underlying, C0 = Price of call, PV(X) = Present value of strike price (X / (1+rf)^T)
  - Forms a synthetic equivalent: e.g., Long Call + Short Put = Synthetic Long Forward (S0 - PV(X))

## Formulas to Memorize:
- **Value of Forward at Expiration (Long):** ST - F0(T)
- **Value of Forward at Expiration (Short):** F0(T) - ST
- **Payoff of Call Option (Long):** max(0, ST - X)
- **Payoff of Put Option (Long):** max(0, X - ST)
- **Profit of Call Option (Long):** max(0, ST - X) - Call Premium
- **Profit of Put Option (Long):** max(0, X - ST) - Put Premium
- **Intrinsic Value of Call:** max(0, S - X)
- **Intrinsic Value of Put:** max(0, X - S)
- **Put-Call Parity:** P0 + S0 = C0 + X / (1 + rf)^T
  - *Or for a dividend paying stock:* P0 + S0 = C0 + X / (1 + rf)^T + PV(Dividends) (Though L1 typically focuses on non-dividend paying for simplicity here)

## Common Pitfalls & Tips:
- **Terminology:** Be precise with terms like forward vs. futures, option buyer vs. writer.
- **Payoff vs. Profit:** Payoff is before deducting the cost (premium for options, zero for forwards/futures at initiation). Profit includes the initial cost/proceeds.
- **Moneyness:** Understand how to determine if an option is ITM, ATM, or OTM.
- **Put-Call Parity:** This is a fundamental relationship. Understand how to rearrange it to create synthetic positions.
- **Risk:** Distinguish between market risk and counterparty risk. ETDs mitigate counterparty risk.
- **Hedging Direction:** If you own an asset and fear a price drop, you want to be "short" the derivative (sell futures, buy puts). If you need to buy an asset and fear a price rise, you want to be "long" the derivative (buy futures, buy calls).

*Disclaimer: This cheat sheet is for quick reference. Always refer to official CFA Program curriculum for complete understanding.*
