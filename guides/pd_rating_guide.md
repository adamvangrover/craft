# A Guide to Probability of Default (PD) Rating Methodology

## Introduction

This guide explains the methodology used to assign a Probability of Default (PD) rating to a borrower. A PD rating is a forward-looking assessment that quantifies the likelihood that a borrower will be unable to meet its debt obligations over a specific timeframe, typically one year.

Assigning an accurate PD rating is the cornerstone of credit risk management. It is the primary input for calculating Expected Loss (EL = PD x LGD x EAD) and informs decisions on loan pricing, structuring, and credit approval. The methodology is a blend of rigorous quantitative analysis and insightful qualitative judgment.

---

## Part 1: The Quantitative Assessment

The quantitative assessment is the bedrock of the PD rating. It uses a company's financial data to produce a baseline rating. The analysis focuses on a set of core financial ratios that measure leverage, coverage, profitability, and liquidity.

A critical part of this analysis is the use of **Creditor-Adjusted Metrics**. An analyst must not take reported financials at face value. Instead, they must make adjustments to metrics like EBITDA and Net Debt to arrive at a conservative and realistic measure of financial health, stripping out any one-time or non-recurring items.

### Key Quantitative Metrics & Indicative Thresholds

The following table shows key ratios used in the assessment and provides a general indication of the levels associated with an **Investment Grade (IG)** profile versus a **Speculative Grade (SG)** profile.

| Ratio Category     | Ratio Name              | Formula                                  | Interpretation                                      | IG Profile | SG Profile |
| ------------------ | ----------------------- | ---------------------------------------- | --------------------------------------------------- | ---------- | ---------- |
| **Leverage**       | Net Debt / EBITDA       | Adjusted Net Debt / Adj. EBITDA          | Years of cash flow needed to repay debt.            | `< 4.0x`   | `> 4.0x`   |
|                    | FFO / Net Debt          | Funds from Ops / Adj. Net Debt           | Ability to service debt from core operations.       | `> 20%`    | `< 20%`    |
| **Coverage**       | EBITDA / Interest Exp.  | Adj. EBITDA / Cash Interest              | Times operating earnings can cover interest.        | `> 4.0x`   | `< 4.0x`   |
| **Profitability**  | EBITDA Margin           | Adj. EBITDA / Sales                      | Measures operating profitability.                   | `> 15%`    | `< 15%`    |
| **Liquidity**      | Current Ratio           | Current Assets / Current Liabilities     | Ability to meet short-term obligations.             | `> 1.5x`   | `< 1.5x`   |

*Note: These are general guidelines. Actual thresholds vary significantly by industry.*

---

## Part 2: The Qualitative Assessment

The qualitative assessment provides the essential context behind the numbers. A company with strong financial metrics may still be a poor credit risk if its business model is weak or it faces insurmountable industry headwinds. This assessment often determines the final rating.

### Key Qualitative Factors

*   **Management and Corporate Governance:** This is an assessment of the management team's experience, track record, and strategic credibility. A strong, proven management team is a significant positive. Weak corporate governance or an overly aggressive financial philosophy are major red flags.

*   **Competitive Positioning:** This evaluates the company's position within its industry. A market leader with a strong brand and high barriers to entry is a much lower risk than a small player in a highly competitive, fragmented market. Frameworks like **Porter's Five Forces** are used to assess the intensity of competition.

*   **Business Model Resilience:** This looks at the stability and diversification of the business.
    *   **Diversification:** Is the company reliant on a single product, customer, or geography? Concentration increases risk.
    *   **Cyclicality:** Is the business highly sensitive to economic downturns (e.g., automotive, construction)? Cyclical businesses are inherently riskier.
    *   **Operational Strength:** Does the company have a stable supply chain and a resilient operational footprint?

*   **Environmental, Social, and Governance (ESG) Factors:** ESG is an increasingly important part of credit analysis. A company's performance on environmental issues (e.g., climate risk), social factors (e.g., labor relations), and governance can have a material impact on its long-term financial health and reputation.

---

## Part 3: The Synthesis - Arriving at a Rating

The final PD rating is not the output of a simple formula. It is a judgment-based decision that synthesizes the findings from both the quantitative and qualitative assessments.

The typical process is as follows:
1.  **Establish a Quantitative Baseline:** The company's key financial ratios are mapped to a baseline rating using an established grid or scorecard. For example, a company with 5.0x Debt/EBITDA might map to a "BB" category on a quantitative basis.
2.  **Apply Qualitative Judgment:** The analyst then considers the qualitative factors to adjust this baseline rating.
    *   A company with an exceptionally strong competitive position and a best-in-class management team might be "notched up" one level (e.g., from BB to BB+).
    *   A company with a weak business profile, high customer concentration, or poor governance might be "notched down" (e.g., from BB to BB-).
3.  **Finalize and Justify:** The final rating is assigned, along with a written rationale that clearly explains how the quantitative and qualitative factors were weighed to arrive at the conclusion.

## Conclusion

The PD rating methodology is a disciplined framework designed to combine objective financial data with subjective, but critical, qualitative insights. By systematically evaluating a borrower's financial health, business resilience, and management quality, an analyst can arrive at a defensible, forward-looking assessment of credit risk.
