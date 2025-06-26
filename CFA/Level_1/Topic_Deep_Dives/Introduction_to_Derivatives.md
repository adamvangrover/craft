# CFA Level 1 Topic Deep Dive: Introduction to Derivatives

## Introduction
Derivatives are financial instruments whose value is derived from an underlying asset or benchmark. They are fundamental tools in modern finance, used for a variety of purposes including risk management (hedging), speculation, and arbitrage. This deep dive will cover the basic types of derivatives, their characteristics, how they are traded, and their primary applications, as relevant for CFA Level 1.

## I. What are Derivatives?
- **Definition:** A contract between two or more parties whose value is based on an agreed-upon underlying financial asset, index, or security.
- **Underlying Assets:** Can be very diverse:
    - Equities (stocks)
    - Fixed Income (bonds, interest rates)
    - Currencies
    - Commodities (oil, gold, agricultural products)
    - Market Indexes (S&P 500, FTSE 100)
    - Even other derivatives or non-financial items like weather.
- **Key Characteristics:**
    1.  **Leverage:** Derivatives often allow investors to gain exposure to an underlying asset with a smaller initial investment than buying the asset outright. This magnifies both potential gains and losses.
    2.  **Expiration Date:** Most derivatives have a finite life, expiring on a specific date.
    3.  **Zero-Sum Game (for some):** For many derivatives (like forwards and futures), one party's gain is the other party's loss (excluding transaction costs). Options are slightly different as the buyer's loss is limited to the premium paid.

## II. Types of Derivatives

Derivatives can be broadly classified into two main categories:

### A. Forward Commitments (Obligations)
These are contracts where the parties agree to transact at a future date at a price agreed upon today. Both parties are obligated to fulfill the contract.

1.  **Forward Contracts:**
    *   **Definition:** A customized agreement between two parties to buy or sell an asset at a specified price on a future date.
    *   **Traded:** Over-the-Counter (OTC), meaning they are not traded on an exchange.
    *   **Customization:** Terms (asset, quantity, price, date) are negotiated between the parties.
    *   **Risk:** High counterparty risk (risk that the other party will default).
    *   **Payment:** No payment is typically made at the initiation of the contract. Value at initiation is zero.
    *   **Example:** A farmer agrees to sell 1,000 bushels of corn to a food processor in 3 months at $5 per bushel.

2.  **Futures Contracts:**
    *   **Definition:** A standardized agreement to buy or sell an asset at a specified price on a future date, traded on an organized exchange.
    *   **Traded:** Exchange-Traded Derivative (ETD).
    *   **Standardization:** Contract size, underlying asset quality, delivery date, and location are standardized by the exchange.
    *   **Clearinghouse:** The exchange's clearinghouse acts as the counterparty to every trade, significantly reducing counterparty risk.
    *   **Marking to Market:** Gains and losses are settled daily. If an account balance falls below the maintenance margin, a margin call is issued.
    *   **Margin:** Both buyer and seller must deposit an initial margin.
    *   **Example:** An investor buys an S&P 500 futures contract, obligating them to "buy" the index at a set price on the delivery date (though most are cash-settled).

3.  **Swaps:**
    *   **Definition:** An agreement between two parties to exchange a series of cash flows over a period of time. Essentially, a series of forward contracts.
    *   **Traded:** Primarily OTC, but some are becoming more standardized and centrally cleared.
    *   **Types:**
        *   **Interest Rate Swap:** Exchange fixed interest payments for floating interest payments on a notional principal amount (e.g., one party pays 5% fixed, receives LIBOR/SOFR).
        *   **Currency Swap:** Exchange principal and/or interest payments in one currency for principal and/or interest payments in another currency.
        *   **Equity Swap:** Exchange cash flows based on the return of an equity index or stock for cash flows based on a fixed or floating interest rate.
    *   **Notional Principal:** The principal amount used to calculate payments; usually not exchanged in interest rate swaps but can be in currency swaps.

### B. Contingent Claims (Rights, Not Obligations)
These are contracts where one party has the right, but not the obligation, to buy or sell an underlying asset at a predetermined price on or before a specific date. The other party (the seller/writer) has the obligation to perform if the buyer exercises their right.

1.  **Options:**
    *   **Definition:** Gives the buyer (holder) the right, but not the obligation, to either buy or sell an underlying asset at a specified price (strike price) on or before a certain date (expiration date).
    *   **Option Premium:** The price paid by the option buyer to the option seller (writer). This is the maximum loss for the buyer and the maximum profit for the seller (if the option expires worthless).
    *   **Types of Options:**
        *   **Call Option:** Gives the holder the right to *buy* the underlying asset.
            *   *Buyer (Long Call):* Expects the price of the underlying to rise.
            *   *Seller (Short Call/Written Call):* Expects the price of the underlying to stay flat or fall.
        *   **Put Option:** Gives the holder the right to *sell* the underlying asset.
            *   *Buyer (Long Put):* Expects the price of the underlying to fall.
            *   *Seller (Short Put/Written Put):* Expects the price of the underlying to stay flat or rise.
    *   **Key Terms:**
        *   **Strike Price (Exercise Price):** The price at which the underlying asset can be bought (call) or sold (put).
        *   **Expiration Date:** The date after which the option is no longer valid.
        *   **American Option:** Can be exercised at any time up to and including the expiration date.
        *   **European Option:** Can only be exercised on the expiration date.
    *   **Moneyness (at a point in time, or at expiration):**
        *   **Call Option:**
            *   *In-the-money (ITM):* Spot Price (S) > Strike Price (X)
            *   *At-the-money (ATM):* S = X
            *   *Out-of-the-money (OTM):* S < X
        *   **Put Option:**
            *   *In-the-money (ITM):* S < X
            *   *At-the-money (ATM):* S = X
            *   *Out-of-the-money (OTM):* S > X
    *   **Intrinsic Value:** The value an option would have if exercised immediately.
        *   Call Intrinsic Value = max(0, S - X)
        *   Put Intrinsic Value = max(0, X - S)
    *   **Time Value (Speculative Value):** Option Premium - Intrinsic Value. Reflects the probability the option will become more valuable before expiration. Decreases as expiration approaches (time decay).

## III. Purposes of Using Derivatives

1.  **Risk Management (Hedging):**
    *   Used to reduce or eliminate existing risks from an underlying asset or portfolio.
    *   **Example (Hedging a Long Stock Position):** An investor owns 100 shares of XYZ Corp at $50/share and is concerned about a potential price decline. They could:
        *   **Buy a Put Option:** Gives them the right to sell their shares at a predetermined strike price, limiting downside risk.
        *   **Sell a Futures Contract (if available for single stock, or an index future if portfolio):** Obligates them to sell at a future price, locking in a sale price.
    *   **Example (Hedging Future Purchase):** A company needs to buy euros in 3 months for an import. They are concerned the EUR/USD exchange rate will rise. They could:
        *   **Enter into a Forward Contract to buy EUR/USD.**
        *   **Buy a Call Option on EUR/USD.**

2.  **Speculation:**
    *   Used to bet on the future direction of an underlying asset's price.
    *   Leverage allows for potentially large profits (and losses) from small price movements.
    *   **Example:** An investor believes a stock currently at $100 will rise significantly. Instead of buying 100 shares for $10,000, they could buy call options controlling 100 shares for a much smaller premium (e.g., $500). If the stock price rises as expected, the percentage gain on the option premium can be much larger than on the stock itself.

3.  **Arbitrage:**
    *   Exploiting mispricings between a derivative and its underlying asset, or between related derivatives, to earn a risk-free profit.
    *   Arbitrage activities help ensure that markets are efficient (i.e., prices reflect their true economic value).
    *   **Example:** If a stock is trading at $100, and a synthetic stock created using options (e.g., long call + short put with same strike, via Put-Call Parity) is priced at $98, an arbitrageur could buy the synthetic stock and sell the actual stock short for a $2 risk-free profit (ignoring transaction costs).

4.  **Modifying Portfolio Characteristics:**
    *   Derivatives can be used to adjust a portfolio's risk exposure (e.g., beta, duration) or to gain exposure to certain asset classes more efficiently than transacting in the underlying assets.

## IV. Basic Derivative Pricing Concepts

-   **No-Arbitrage Principle:** The cornerstone of derivative pricing. It states that two assets or portfolios with identical future cash flows, regardless of future events, should have the same price today. If they don't, an arbitrage opportunity exists.
-   **Replication:** Creating a portfolio of other assets (often the underlying and a risk-free asset) that has the same payoffs as the derivative. The derivative's price must equal the cost of creating this replicating portfolio.
-   **Put-Call Parity (for European options on a non-dividend paying stock):**
    *   `C + PV(X) = P + S`
    *   Where:
        *   C = Call premium
        *   PV(X) = Present value of the strike price (X / (1+rf)^T)
        *   P = Put premium
        *   S = Current spot price of the underlying asset
    *   This relationship shows that a combination of a call option and a risk-free bond (PV(X)) is equivalent to a combination of a put option and the underlying stock. It can be rearranged to show various synthetic positions.

## V. Risks Associated with Derivatives
- **Market Risk:** The risk of loss due to adverse movements in the price of the underlying asset.
- **Counterparty Risk (Credit Risk):** The risk that the other party to an OTC derivative contract will default on its obligations. Mitigated by clearinghouses for ETDs.
- **Liquidity Risk:** The risk that a derivative cannot be bought or sold quickly without a significant price concession. More common for complex or customized OTC derivatives.
- **Operational Risk:** Risk of loss due to errors or failures in internal processes, people, or systems.
- **Legal Risk:** Risk that a contract is not legally enforceable.
- **Leverage Risk:** While leverage can amplify gains, it can also amplify losses, potentially leading to losses exceeding the initial investment (especially for short option positions or futures).

## Conclusion
Derivatives are powerful and versatile financial instruments. A solid understanding of their basic types, characteristics, and applications is essential for investment professionals. While they offer significant benefits for risk management and speculation, their complexity and inherent leverage also mean they carry substantial risks that must be carefully managed. CFA Level 1 provides the foundational knowledge for further study in this area.
