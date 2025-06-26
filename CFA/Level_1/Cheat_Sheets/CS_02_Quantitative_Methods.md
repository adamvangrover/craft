# CFA Level 1 Cheat Sheet: Quantitative Methods

## Key Concepts:

### Time Value of Money
- **Present Value (PV) and Future Value (FV):**
  - PV = FV / (1 + r)^n
  - FV = PV * (1 + r)^n
- **Annuities:** Series of equal cash flows.
  - Ordinary Annuity vs. Annuity Due.
- **Perpetuities:** Annuities that last forever. PV = PMT / r
- **Net Present Value (NPV):** Sum of PVs of future cash flows minus initial investment.
- **Internal Rate of Return (IRR):** Discount rate at which NPV = 0.

### Organizing, Visualizing, and Describing Data
- **Frequency Distributions:** Tabular display of data summarized into a smaller number of intervals.
- **Measures of Central Tendency:** Mean, Median, Mode.
- **Measures of Dispersion:** Range, Variance, Standard Deviation, Coefficient of Variation.
- **Skewness and Kurtosis:** Describe the shape of a distribution.

### Probability Concepts
- **Basic Definitions:** Random variable, event, outcome.
- **Properties of Probability:** 0 <= P(E) <= 1. Sum of probabilities of mutually exclusive and exhaustive events is 1.
- **Conditional Probability:** P(A|B) = P(AB) / P(B)
- **Bayes' Theorem:** Used to update probabilities based on new information.
- **Expected Value and Variance of a Random Variable.**

### Common Probability Distributions
- **Discrete Distributions:**
  - Binomial Distribution
  - Uniform Distribution
- **Continuous Distributions:**
  - Normal Distribution (Properties, Z-scores)
  - Lognormal Distribution
  - Student's t-Distribution
  - Chi-Square Distribution
  - F-Distribution
- **Monte Carlo Simulation:** Uses random sampling to simulate outcomes.

### Sampling and Estimation
- **Sampling Methods:** Simple random, stratified, cluster, convenience.
- **Central Limit Theorem:** Sample mean distribution approaches normal for large sample sizes.
- **Point Estimates and Confidence Intervals:**
  - Confidence interval = Point estimate ± (Reliability factor × Standard error)
- **Properties of Estimators:** Unbiased, efficient, consistent.

### Hypothesis Testing
- **Null Hypothesis (H0) and Alternative Hypothesis (Ha).**
- **One-tailed vs. Two-tailed tests.**
- **Type I Error (alpha):** Rejecting a true H0.
- **Type II Error (beta):** Failing to reject a false H0.
- **Power of a test (1 - beta).**
- **Test Statistic:** Calculated from sample data.
- **Critical Value / P-value approach.**
- **Tests concerning mean, variance, correlation.**

### Technical Analysis (Brief Overview)
- Trends, support/resistance, chart patterns (e.g., head and shoulders, triangles).
- Moving averages, oscillators (e.g., RSI, MACD).

## Formulas to Memorize:

- **PV of a single sum:** PV = FV / (1 + r)^n
- **FV of a single sum:** FV = PV * (1 + r)^n
- **PV of a perpetuity:** PV = PMT / r
- **NPV:** Σ [CFt / (1 + r)^t] - Initial Investment
- **Population Variance (σ²):** Σ (Xi - μ)² / N
- **Population Standard Deviation (σ):** sqrt(σ²)
- **Sample Variance (s²):** Σ (Xi - x̄)² / (n - 1)
- **Sample Standard Deviation (s):** sqrt(s²)
- **Coefficient of Variation (CV):** s / x̄ or σ / μ
- **Z-score:** (X - μ) / σ
- **Confidence Interval (mean, known variance):** x̄ ± z_(α/2) * (σ / sqrt(n))
- **Confidence Interval (mean, unknown variance):** x̄ ± t_(α/2) * (s / sqrt(n))
- **Test statistic for mean (t-test):** (x̄ - μ0) / (s / sqrt(n))

## Common Pitfalls & Tips:
- **Calculator Settings:** Ensure P/Y or C/Y is set correctly for TVM calculations (usually 1 for CFA exams unless specified).
- **Annuity Due vs. Ordinary:** Remember to switch calculator to BGN mode for annuity due.
- **Interpreting P-values:** Small p-value means reject H0. Large p-value means fail to reject H0.
- **Choosing the Right Test:** Understand when to use z-test vs. t-test. (z-test for known population variance or large samples, t-test for unknown variance and small samples).
- **Normal Distribution:** Know the percentages: ~68% within ±1σ, ~95% within ±2σ, ~99% within ±3σ.

*Disclaimer: This cheat sheet is for quick reference. Always refer to official CFA Program curriculum for complete understanding.*
