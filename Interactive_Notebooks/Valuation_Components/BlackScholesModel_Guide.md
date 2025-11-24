# Interactive Black-Scholes Option Pricing Model

> **Buy-Side Perspective:**
> Valuation of options is critical not just for derivatives traders but for credit analysts assessing convertible bonds, warrants attached to debt, or the implied volatility of a firm's equity as a signal of distress (Merton Model).

## Overview
This interactive notebook provides a hands-on way to understand the Black-Scholes-Merton option pricing model. By adjusting inputs like the spot price, strike price, volatility, and time to expiry, you can see in real-time how the option's value and its risk sensitivities ("Greeks") change.

## Key Features
*   **Interactive Sliders:** Modify input variables dynamically.
*   **Real-Time Pricing:** See the call or put price update instantly.
*   **The Greeks:**
    *   **Delta:** Sensitivity to spot price.
    *   **Gamma:** Sensitivity to Delta (convexity).
    *   **Theta:** Time decay.
    *   **Vega:** Sensitivity to volatility.

## How to Use
1.  Download the [BlackScholesModel.ipynb](./BlackScholesModel.ipynb) file.
2.  Open it in Jupyter Notebook or JupyterLab.
3.  Run all cells.
4.  Use the sliders in the interactive section to explore the model.

## Learning Objectives
*   Understand the non-linear relationship between volatility and option price.
*   Observe time decay (Theta) as an option approaches expiration.
*   Visualize how Deep-in-the-Money options act like the underlying stock (Delta ≈ 1).
