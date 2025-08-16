# Equity Investments: A Deep Dive into Valuation Models (Level I)

## 1. Overview of Equity Valuation

Equity valuation is the process of determining the intrinsic or theoretical value of a company's stock. The goal for an analyst is to determine whether a stock is **undervalued**, **fairly valued**, or **overvalued** relative to its current market price. This forms the basis for buy, sell, or hold recommendations.

There are two primary categories of valuation models that we will explore:

*   **Absolute Valuation Models:** These models attempt to determine an asset's intrinsic value based on its own characteristics, primarily its capacity to generate future cash flows. The most common type is the **Discounted Cash Flow (DCF)** model.
*   **Relative Valuation Models:** These models value an asset by comparing it to the values of similar assets, as determined by the market. This is often done using **price multiples**.

This guide will focus on the foundational models covered in the CFA Level I curriculum. For a hands-on, practical application of these concepts, be sure to explore our [Interactive Equity Valuation Notebook](../../../Interactive_Notebooks/Financial_Modeling/EquityValuationNotebook.ipynb).

---

## 2. Absolute Valuation: Discounted Cash Flow (DCF) Models

DCF models are built on the principle that the value of an investment today is the present value of all the cash flows it is expected to generate in the future.

`Value = Σ [Cash Flow_t / (1 + k)^t]`

Where:
*   `Cash Flow_t` = Cash flow in period `t`
*   `k` = The discount rate (required rate of return)
*   `t` = The time period

### 2.1. Dividend Discount Model (DDM)

The DDM is the simplest DCF model. It values a company's equity based on the present value of its expected future dividends.

**Best for:**
*   Mature, stable companies with a long history of paying dividends.
*   Companies where dividends are a good representation of the cash available to shareholders.

#### The Gordon Growth Model (Constant Growth DDM)

This is the most common form of the DDM and assumes that dividends will grow at a constant rate (`g`) forever.

**Formula:**
`V0 = D1 / (k - g)`

Where:
*   `V0` = Value of the stock today
*   `D1` = Expected dividend in the next period (Year 1). This is calculated as `D0 * (1 + g)`.
*   `k` = Required rate of return on equity (often estimated using CAPM).
*   `g` = The constant, perpetual growth rate of dividends.

**Assumptions and Limitations:**
*   The model assumes a single, constant growth rate, which is unrealistic for most companies.
*   It is highly sensitive to the inputs `k` and `g`. A small change can lead to a large change in valuation.
*   The model is not applicable if `g >= k`, as it would result in a negative or infinite value.
*   It cannot be used for companies that do not pay dividends.

### 2.2. Free Cash Flow to Equity (FCFE) Model

The FCFE model values a company's equity based on the present value of the cash flows available to equity holders after all expenses, reinvestment needs, and debt obligations are met.

**FCFE Formula:**
`FCFE = Net Income + Depreciation & Amortization - Capital Expenditures - Change in Net Working Capital + Net Borrowing`

**Valuation Formula:**
`Equity Value = Σ [FCFE_t / (1 + k)^t]`

**Best for:**
*   Companies that do not pay dividends or have an unstable dividend policy.
*   Companies where FCFE is a better proxy for shareholder wealth than dividends.
*   Controlling shareholders who can influence dividend policy.

**Limitations:**
*   Calculating FCFE requires detailed financial statement forecasts, which can be complex and subjective.
*   Like the DDM, it is sensitive to assumptions about growth and the discount rate.

---

## 3. Relative Valuation: Price Multiples

Relative valuation is a simpler approach that compares a company's valuation multiple to a benchmark. The key is to find truly comparable companies or a relevant industry average.

### 3.1. Price-to-Earnings (P/E) Ratio

The P/E ratio is the most widely used multiple. It shows how much investors are willing to pay for each dollar of a company's earnings.

**Formula:**
`P/E = Market Price per Share / Earnings per Share (EPS)`

**Application:**
*   A high P/E ratio can indicate that a stock is overvalued or that investors expect high future growth.
*   A low P/E ratio can indicate that a stock is undervalued or that the company is facing challenges.
*   It's crucial to compare a company's P/E to its historical average and to the P/E of its peers.

**Limitations:**
*   Earnings can be negative, making the P/E ratio meaningless.
*   Management can manipulate earnings through accounting choices.
*   It doesn't account for differences in capital structure or risk.

### 3.2. Price-to-Book (P/B) Ratio

The P/B ratio compares a company's market value to its book value. Book value is the net asset value of a company (Total Assets - Total Liabilities).

**Formula:**
`P/B = Market Price per Share / Book Value per Share`

**Application:**
*   Often used for valuing companies in mature industries or those with significant tangible assets (e.g., banks, insurance companies, industrial firms).
*   Book value is generally more stable than earnings, making P/B useful when earnings are volatile.

**Limitations:**
*   Book value can be a poor proxy for the true economic value of assets, especially for service or technology firms with few tangible assets.
*   Accounting conventions can distort book value.

### 3.3. Price-to-Sales (P/S) Ratio

The P/S ratio compares a company's market value to its total revenue.

**Formula:**
`P/S = Market Price per Share / Sales per Share`

**Application:**
*   Useful for valuing companies that are not yet profitable (e.g., startups, cyclical companies at a trough).
*   Sales are less susceptible to accounting manipulation than earnings or book value.

**Limitations:**
*   The model does not account for differences in profitability or cost structure. A company can have high sales but be highly unprofitable.
*   It doesn't reflect differences in operating efficiency between companies.

## 4. Choosing the Right Model

No single valuation model is perfect. The choice of model depends on several factors:

*   **Company Characteristics:** Is it a mature, dividend-paying company (DDM)? Is it a high-growth tech firm with no earnings (P/S)? Is it a bank (P/B)?
*   **Data Availability:** Do you have the inputs needed to run a DCF model, or are you limited to what's available for multiples?
*   **Analyst's Perspective:** Are you a long-term investor focused on intrinsic value (DCF) or a trader looking for short-term mispricing (multiples)?

A best practice is to use a combination of models to arrive at a valuation range, rather than a single point estimate. This provides a more robust and defensible conclusion.
