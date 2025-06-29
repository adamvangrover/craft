# Interactive Notebook Guide: Bond Mathematics

## 1. Purpose of This Guide and the Accompanying Notebook

This guide accompanies the (planned) `Bond_Math.ipynb` Jupyter Notebook. The primary purpose of the notebook and this guide is to provide an interactive, hands-on learning experience for understanding and applying core bond mathematics concepts.

Fixed income securities are a cornerstone of financial markets, and a solid grasp of how to value them and assess their risks is crucial for various finance professionals, including portfolio managers, risk analysts, and credit analysts. This interactive tool aims to demystify bond math by allowing users to experiment with calculations and visualize relationships.

> **Future Content:** Develop the `Bond_Math.ipynb` notebook to accompany this guide. This notebook will contain Python code cells for calculations and visualizations, along with explanatory Markdown cells.

## 2. Learning Objectives

Upon completing this guide and working through the associated Jupyter Notebook, you should be able to:

*   **Understand and identify key features of a bond.**
*   **Calculate the price of a fixed-coupon bond** given its features and a market discount rate, for various coupon payment frequencies (annual, semi-annual).
*   **Define and calculate common bond yield measures,** including:
    *   Yield-to-Maturity (YTM)
    *   Current Yield
*   **Explain the inverse relationship between bond prices and interest rates.**
*   **Understand and calculate key measures of interest rate risk:**
    *   Macaulay Duration
    *   Modified Duration
    *   (Conceptual) Dollar Duration / DV01
    *   (Conceptual) Convexity
*   **Interpret what duration and convexity imply about a bond's price sensitivity** to interest rate changes.
*   (Optional Extension) Understand how embedded options (e.g., call or put features) can affect bond pricing and yield.

## 3. Notebook Outline (Conceptual Sections)

The `Bond_Math.ipynb` notebook will likely be structured as follows:

### Section 1: Introduction to Bond Features & Cash Flows
*   Defining Par Value, Coupon Rate, Maturity Date, Coupon Frequency.
*   Visualizing a bond's timeline of cash flows.
*   **Interactive Element:** Input fields for bond parameters to generate a cash flow schedule.

### Section 2: Bond Pricing
*   The basic bond pricing formula (Present Value of future cash flows).
*   **Code Snippet (Conceptual):** Python function to calculate bond price.
    ```python
    # def calculate_bond_price(par_value, coupon_rate, years_to_maturity, market_yield, coupon_frequency=2):
    #     # ... implementation ...
    #     return price
    ```
*   Pricing bonds with annual vs. semi-annual coupon payments.
*   Demonstrating the price convergence to par as maturity approaches ("pull to par").
*   **Interactive Element:** Sliders to change `market_yield` and see the immediate impact on bond price. Input fields for all bond parameters.

### Section 3: Yield Measures
*   **Yield-to-Maturity (YTM):**
    *   Explanation: The IRR of the bond's cash flows.
    *   **Code Snippet (Conceptual):** Python function using numerical methods (e.g., `scipy.optimize.newton` or a bisection search) to solve for YTM given a price.
    *   Relationship between coupon rate, current yield, and YTM for premium, discount, and par bonds.
*   **Current Yield:**
    *   Formula: `Annual Coupon Payment / Current Market Price`.
    *   Limitations.
*   **Interactive Element:** Calculate YTM based on user-inputted bond price and features. Compare YTM with current yield.

### Section 4: Interest Rate Risk - Duration
*   **Concept of Interest Rate Risk:** Why bond prices change when interest rates change.
*   **Macaulay Duration:**
    *   Formula and interpretation (weighted average time to receive cash flows).
    *   **Code Snippet (Conceptual):** Python function to calculate Macaulay Duration.
*   **Modified Duration:**
    *   Formula: `Macaulay Duration / (1 + YTM/frequency)`.
    *   Interpretation: Percentage price change for a 1% (or 100 bps) change in yield.
    *   **Code Snippet (Conceptual):** Python function to calculate Modified Duration.
*   **Approximating Price Change using Modified Duration:**
    *   `%ΔPrice ≈ -Modified Duration * ΔYield`
*   **Dollar Duration (DV01 / PVBP):**
    *   `Dollar Duration = Modified Duration * Price * 0.0001` (for a 1 basis point change).
*   **Interactive Element:** Calculate and compare durations for different bonds. Use sliders for yield changes to see actual vs. duration-approximated price changes.

### Section 5: Interest Rate Risk - Convexity
*   **Limitations of Duration:** Why duration alone is insufficient for larger yield changes.
*   **Convexity:**
    *   Concept: Curvature of the price-yield relationship.
    *   Formula (can be complex, might simplify or use approximation).
    *   Interpretation: Positive convexity is beneficial.
    *   **Code Snippet (Conceptual):** Python function to calculate Convexity.
*   **Approximating Price Change using Duration and Convexity:**
    *   `%ΔPrice ≈ (-Modified Duration * ΔYield) + (0.5 * Convexity * (ΔYield)^2)`
*   **Interactive Element:** Visualize the price-yield curve. Compare price change approximations using duration alone vs. duration + convexity.

### (Optional) Section 6: Impact of Embedded Options
*   Brief introduction to callable and putable bonds.
*   How options affect a bond's price sensitivity to interest rates (e.g., negative convexity for callable bonds at low yields).
*   (Conceptual) Option Adjusted Spread (OAS).

## 4. Prerequisites

*   **Conceptual:** A basic understanding of Time Value of Money (present value, future value).
*   **Technical (for running the notebook locally):**
    *   A working Python environment (e.g., Anaconda distribution).
    *   Jupyter Notebook or JupyterLab installed.
    *   Common Python libraries: `NumPy`, `Pandas` (for data handling, if any), `SciPy` (for optimization/root-finding for YTM), `Matplotlib` or `Plotly` (for visualizations).
*   This guide can be understood without running the notebook, but the interactive learning experience will be missed.

## 5. How to Use This Guide & The Notebook

1.  **Read this Guide:** Familiarize yourself with the concepts and the planned structure of the notebook.
2.  **Download the Notebook:** Once available, download the `Bond_Math.ipynb` file from this directory.
    *   **[Download the Bond_Math.ipynb Notebook](./Bond_Math.ipynb)** *(Note: This file is planned and does not exist yet.)*
3.  **Run the Notebook:** Open the `.ipynb` file in a Jupyter environment.
4.  **Follow Along:** Execute the code cells sequentially. Read the explanatory Markdown cells in the notebook.
5.  **Experiment:** Change input parameters in the interactive widgets or code cells to see how bond prices, yields, and risk measures react. This is key to building intuition.
6.  **Refer Back to this Guide:** Use this document for more detailed explanations or a refresher on concepts as you work through the notebook.

## 6. Further Learning & Resources

*   CFA Program Curriculum - Fixed Income readings (Level 1 and Level 2).
*   Investopedia and other online financial education resources.
*   [Fixed Income Basics Deep Dive](../../CFA/Level_1/Topic_Deep_Dives/Fixed_Income_Basics.md) (for foundational concepts).

---
We hope this interactive notebook and guide will be a valuable tool in your journey to mastering bond mathematics!
