# Understanding Option Greeks

> **Buy-Side Perspective:**
> While fundamental analysts focus on cash flows, understanding derivatives is crucial for risk management. "Greeks" quantify how an option's value changes with market variables. For a credit analyst, implied volatility (extracted via these models) is a real-time gauge of the market's perception of a borrower's risk.

## The Core Greeks

The "Greeks" are partial derivatives of the option pricing model (like Black-Scholes) with respect to different parameters.

### 1. Delta ($\Delta$)
*   **Definition:** The rate of change of the option price with respect to the price of the underlying asset.
*   **Interpretation:** It represents the "hedge ratio." If a call option has a delta of 0.50, it will move roughly $0.50 for every $1.00 move in the stock.
*   **Range:**
    *   Call: 0 to 1
    *   Put: -1 to 0
*   **Credit Insight:** In structural credit models (like Merton), equity is viewed as a call option on the firm's assets. The Delta of equity measures how sensitive the stock price is to changes in the firm's total asset value.

### 2. Gamma ($\Gamma$)
*   **Definition:** The rate of change of Delta with respect to the underlying price. (The second derivative).
*   **Interpretation:** Measures the "curvature" or convexity of the option's value. High Gamma means Delta changes rapidly, making hedging more difficult (requires frequent rebalancing).
*   **Risk:** Short Gamma positions (selling options) can lead to explosive losses if the market moves significantly.

### 3. Theta ($\Theta$)
*   **Definition:** The rate of change of the option price with respect to *time* (Time Decay).
*   **Interpretation:** Options are wasting assets. Theta is usually negative for long positions. An option loses value as it approaches expiration, accelerating in the final days.

### 4. Vega ($\nu$)
*   **Definition:** The sensitivity of the option price to changes in *implied volatility*.
*   **Interpretation:** If Vega is 0.10, the option price will increase by $0.10 for every 1% increase in volatility.
*   **Significance:** Vega is highest for at-the-money (ATM) options with longer maturities.

---

## Interactive Visualization

Use the **[Option Pricer Tool](../../tools/option_pricer.html)** to see these Greeks in action. Adjust the volatility and time-to-expiry to observe how they impact the option's premium and risk profile.

## Summary Table

| Greek | Measures Sensitivity To... | Long Call Sign | Long Put Sign |
| :--- | :--- | :--- | :--- |
| **Delta** | Underlying Price | Positive (+) | Negative (-) |
| **Gamma** | Underlying Price (Curvature) | Positive (+) | Positive (+) |
| **Theta** | Time Decay | Negative (-) | Negative (-) |
| **Vega** | Volatility | Positive (+) | Positive (+) |
| **Rho** | Interest Rates | Positive (+) | Negative (-) |

## Glossary

*   **Implied Volatility (IV):** The market's forecast of a likely movement in the security's price.
*   **Moneyness:** The relationship between the strike price and the current trading price (ITM, ATM, OTM).
