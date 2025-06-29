# Interactive Time Value of Money (TVM) Solver - Overview and Guide

## 1. Introduction

Welcome to the Interactive Time Value of Money (TVM) Solver Notebook! This document serves as a guide to the accompanying Jupyter Notebook: `InteractiveTVMSolverNotebook.ipynb`.

This notebook provides a hands-on tool to understand and calculate the core components of Time Value of Money: Present Value (PV), Future Value (FV), Interest Rate (I/Y), Number of Periods (N), and Annuity Payments (PMT). It also includes an example of loan amortization and visualizes the growth of investments.

**Purpose:** To solidify understanding of TVM principles and their practical application through interactive calculation and visualization.

**Target Audience:** CFA Level 1 candidates, finance students, and anyone needing a refresher or practical tool for TVM calculations.

**[➡️ Download the full Jupyter Notebook here: InteractiveTVMSolverNotebook.ipynb](./InteractiveTVMSolverNotebook.ipynb)**
*(To experience the full interactivity, please download the `.ipynb` file and run it in a Jupyter Notebook environment.)*

## 2. Learning Objectives

Upon completing this notebook, you should be able to:

*   Define and explain the five key components of Time Value of Money.
*   Understand the formulas for calculating PV and FV of single sums and annuities.
*   Interactively solve for any one of the five TVM variables when the others are known.
*   Generate and interpret a loan amortization schedule.
*   Visualize the impact of interest rates and time periods on the future value of an investment.
*   Utilize Python's `numpy_financial` library for TVM calculations.

## 3. Notebook Structure and Key Sections

The `InteractiveTVMSolverNotebook.ipynb` is structured into the following main parts:

### Section 1: Introduction to Time Value of Money
*   **Content:**
    *   Markdown cells explaining the fundamental concept of TVM: a dollar today is worth more than a dollar tomorrow.
    *   Basic formulas for:
        *   Future Value of a single sum: `FV = PV * (1 + I/Y)^N`
        *   Present Value of a single sum: `PV = FV / (1 + I/Y)^N`
        *   Brief mention of ordinary annuities and annuities due.

### Section 2: Setup
*   **Content:**
    *   Python code cell to import necessary libraries:
        ```python
        import numpy_financial as npf
        import pandas as pd
        from ipywidgets import interact, fixed, FloatText, IntText, Dropdown, Button, VBox, HBox, Output
        import matplotlib.pyplot as plt
        import seaborn as sns
        ```

### Section 3: Interactive TVM Solver
*   **Content:**
    *   Markdown explaining how to use the solver.
    *   **Interactivity (`ipywidgets`):**
        *   `FloatText` or `IntText` widgets for user input of:
            *   Present Value (PV)
            *   Future Value (FV)
            *   Interest Rate per Period (I/Y, entered as a percentage, e.g., 5 for 5%)
            *   Number of Periods (N)
            *   Payment (PMT) - for annuities.
        *   `Dropdown` widget to select which variable to solve for (PV, FV, Rate, Nper, PMT).
        *   `Button` widget to trigger the calculation.
        *   `Output` widget to display the result and any messages.
    *   Python functions that use `numpy_financial` methods based on the selected variable to compute:
        *   `npf.pv(rate, nper, pmt, fv)`
        *   `npf.fv(rate, nper, pmt, pv)`
        *   `npf.rate(nper, pmt, pv, fv)`
        *   `npf.nper(rate, pmt, pv, fv)`
        *   `npf.pmt(rate, nper, pv, fv)`
    *   **Output:** The calculated value for the chosen variable is displayed.

### Section 4: Loan Amortization Schedule Example
*   **Content:**
    *   Markdown explaining the concept of loan amortization.
    *   **Interactivity (`ipywidgets`):**
        *   `FloatText` for Loan Amount (PV).
        *   `FloatText` for Annual Interest Rate (%).
        *   `IntText` for Loan Term in Years.
        *   `Dropdown` for Payment Frequency (e.g., Monthly, Quarterly, Annually).
    *   Python code to:
        1.  Calculate the periodic interest rate and total number of periods.
        2.  Calculate the periodic payment (PMT) using `npf.pmt()`.
        3.  Generate an amortization schedule (Period, Beginning Balance, Payment, Interest Paid, Principal Paid, Ending Balance) using a loop and store it in a `pandas` DataFrame.
    *   **Output:** Display the calculated periodic payment and the amortization table.

### Section 5: Future Value Visualization
*   **Content:**
    *   Markdown explaining the visualization.
    *   **Interactivity (`ipywidgets`):**
        *   `FloatSlider` for Present Value (PV).
        *   `FloatSlider` for Annual Interest Rate (I/Y, %).
        *   `IntSlider` for Number of Years (N).
        *   `Dropdown` for Compounding Frequency (e.g., Annually, Semi-Annually, Quarterly, Monthly).
    *   Python code to:
        1.  Calculate the periodic rate and total number of compounding periods.
        2.  Calculate the Future Value at the end of each period.
    *   **Output:** `matplotlib` line chart showing the growth of the investment (FV) over the specified number of years.

### Section 6: Conclusion
*   **Content:**
    *   Markdown cells summarizing the key TVM concepts covered.
    *   Links to relevant sections in the CFA curriculum (e.g., Quantitative Methods) or other parts of the learning hub.

## 4. How to Use This Notebook Interactively

1.  **Download:** Get `InteractiveTVMSolverNotebook.ipynb` using the link above.
2.  **Environment:** Open the notebook in a compatible Jupyter environment.
3.  **Install Libraries:** Ensure `numpy-financial`, `pandas`, `ipywidgets`, and `matplotlib` are installed.
    ```bash
    pip install numpy-financial pandas ipywidgets matplotlib seaborn
    ```
4.  **Run Cells:** Execute the notebook cells in order.
5.  **Interact:**
    *   In the TVM Solver section, input the known variables, select the variable you wish to solve for, and click "Calculate."
    *   In the Loan Amortization section, input loan details to generate the schedule.
    *   In the FV Visualization section, adjust the sliders to see how different inputs affect investment growth.
6.  **Study the Code:** Examine the Python code to understand how the TVM functions from `numpy_financial` are used and how the visualizations are created.

## 5. Further Learning

This notebook provides a practical tool for TVM. For a deeper theoretical understanding, consult:
*   `CFA/Level_1/Topic_Deep_Dives/Quant_Time_Value_of_Money.md`
*   The official CFA Program curriculum for Quantitative Methods.
*   The `Global_Financial_Glossary.md` for definitions of terms like PV, FV, Annuity, etc.

Happy calculating!
---
*This README.md provides a guide for the `InteractiveTVMSolverNotebook.ipynb`. The actual notebook would contain the Python code and Markdown explanations as described above.*
