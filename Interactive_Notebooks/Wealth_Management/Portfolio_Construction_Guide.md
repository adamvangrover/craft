# Portfolio Construction & Optimization Guide

> **Buy-Side Perspective:**
> "Asset Allocation explains over 90% of the variability in portfolio returns." For wealth managers, the ability to scientifically construct a portfolio that maximizes return for a client's specific risk tolerance is the core value proposition. This notebook moves beyond simple "60/40" heuristics to Modern Portfolio Theory (MPT) optimization.

## Overview
This interactive notebook guides you through the process of building an optimal investment portfolio using Python. You will learn how to:
1.  Ingest financial time-series data.
2.  Calculate key risk/return metrics (Volatility, Sharpe Ratio).
3.  Simulate thousands of potential portfolios (Monte Carlo Simulation).
4.  Plot the **Efficient Frontier** to identify the optimal asset mix.

## Learning Objectives
*   **Apply** Modern Portfolio Theory (MPT) concepts in a practical coding environment.
*   **Analyze** the diversification benefits of adding uncorrelated assets (e.g., Gold, Real Estate) to a stock/bond portfolio.
*   **Visualize** the risk-return trade-off.

## Key Sections
1.  **Data Generation:** Simulating price paths for Equities (SPY), Bonds (AGG), Gold (GLD), and Real Estate (VNQ).
2.  **Metrics Calculation:** Computing annualized returns and covariance matrices.
3.  **Optimization:** Finding the "Tangency Portfolio" (Max Sharpe Ratio).

## How to Use
1.  Download the [Portfolio_Construction_Optimization.ipynb](./Portfolio_Construction_Optimization.ipynb) file.
2.  Ensure you have `pandas`, `numpy`, and `matplotlib` installed in your Python environment.
3.  Run the cells to visualize the Efficient Frontier.

> **Pro Tip:**
> In the real world, "correlations go to 1" during a crisis. A historically optimized portfolio often fails during a black swan event. Use this MPT framework as a *starting point*, but overlay it with **Scenario Analysis** and stress testing.
