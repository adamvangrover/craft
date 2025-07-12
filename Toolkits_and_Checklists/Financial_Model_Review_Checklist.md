# Toolkit: Financial Model Review Checklist

## Introduction

This checklist provides a structured approach to reviewing financial models for accuracy, robustness, and clarity. A thorough model review is crucial before relying on its outputs for decision-making (e.g., investment, credit assessment, strategic planning). This checklist is intended as a guide and may need to be adapted based on the model's complexity and purpose.

## How to Use This Checklist

Go through each section and item. Mark items as:
*   `[x]` - Satisfactory / Complete / N/A
*   `[ ]` - Unsatisfactory / Needs Improvement / Further Investigation Required
Add comments for any items marked as unsatisfactory.

---

## I. Model Structure & Formatting

*   **Overall Clarity & Organization:**
    *   `[ ]` Is the model's purpose clearly stated?
    *   `[ ]` Is there a clear table of contents or navigation guide for larger models?
    *   `[ ]` Are sheets clearly and consistently named?
    *   `[ ]` Is there a logical flow between sheets (e.g., inputs -> calculations -> outputs)?
*   **Inputs, Calculations, Outputs Separation:**
    *   `[ ]` Are input cells clearly distinguished (e.g., color-coded, specific sheet)?
    *   `[ ]` Are calculations separated from inputs and outputs?
    *   `[ ]` Are outputs clearly presented and easy to find?
*   **Formatting & Readability:**
    *   `[ ]` Is formatting consistent (fonts, number formats, colors)?
    *   `[ ]` Are units clearly stated (e.g., $, millions, %, etc.)?
    *   `[ ]` Is there adequate spacing and clear labeling for rows and columns?
    *   `[ ]` Are formulas reasonably simple and broken down if complex? Avoid mega-formulas where possible.
*   **No Hardcoding in Formulas:**
    *   `[ ]` Are all assumptions and drivers in input cells, not embedded directly in formulas? (Exception: genuinely fixed constants like days in year if not an input).

**Comments - Structure & Formatting:**
```
(Add comments here)
```

---

## II. Inputs & Assumptions

*   **Source & Documentation:**
    *   `[ ]` Are sources for all historical data and key assumptions clearly documented?
    *   `[ ]` Are assumptions clearly labeled and easy to understand?
*   **Reasonableness & Support:**
    *   `[ ]` Are key assumptions (growth rates, margins, discount rates, etc.) reasonable and supportable (e.g., by historical trends, industry research, management guidance)?
    *   `[ ]` Has the basis for each key assumption been challenged or reviewed?
*   **Sensitivity & Scenario Analysis:**
    *   `[ ]` Are key assumptions designed to be easily sensitized?
    *   `[ ]` Is there functionality for scenario analysis (base, upside, downside)? Are scenarios clearly defined?
*   **Historical Data Accuracy:**
    *   `[ ]` If historical data is used, has it been checked against audited financial statements or reliable sources?
    *   `[ ]` Are historical calculations consistent with reported figures?

**Comments - Inputs & Assumptions:**
```
(Add comments here)
```

---

## III. Calculations & Logic

*   **Formula Correctness & Integrity:**
    *   `[ ]` Spot-check key formulas for logical correctness.
    *   `[ ]` Trace precedents and dependents for critical calculations.
    *   `[ ]` Are time periods handled consistently (e.g., start/end of period, annualization/de-annualization)?
    *   `[ ]` Are signs correct (e.g., costs negative, revenues positive)?
*   **Linking & Dependencies:**
    *   `[ ]` Are links between sheets correct and not broken?
    *   `[ ]` Are there any unintended external links to other files?
*   **Circular References:**
    *   `[ ]` Are there any unintended circular references?
    *   `[ ]` If intentional circularities exist (e.g., interest on debt calculation), are they properly controlled with iterative calculations enabled and understood? Is there a circuit breaker or manual override?
*   **Financial Statement Integrity:**
    *   `[ ]` **Balance Sheet Balances? (Assets = Liabilities + Equity)** This is critical.
    *   `[ ]` Does the Cash Flow Statement correctly reconcile opening and closing cash balances?
    *   `[ ]` Do changes in Balance Sheet items correctly flow through the Cash Flow Statement (e.g., working capital changes, capex, debt drawdowns/repayments)?
    *   `[ ]` Is Net Income from the Income Statement correctly linked to Retained Earnings on the Balance Sheet and the start of the Cash Flow Statement?
*   **Consistency Checks:**
    *   `[ ]` Are calculations consistent across different parts of the model?
    *   `[ ]` Are totals and subtotals correctly calculated? (e.g., does sum of individual expense lines equal total OpEx?)

**Comments - Calculations & Logic:**
```
(Add comments here)
```

---

## IV. Outputs & Presentation

*   **Key Outputs Clarity:**
    *   `[ ]` Are the primary outputs of the model (e.g., valuation, credit metrics, forecast financials) clearly displayed and easy to interpret?
    *   `[ ]` Is there a summary sheet or dashboard for key results?
*   **Charts & Tables:**
    *   `[ ]` Are charts and tables clear, correctly labeled, and effectively visualizing the intended information?
    *   `[ ]` Do they update correctly when inputs change?
*   **Scenario & Sensitivity Display:**
    *   `[ ]` If scenarios/sensitivities are run, are the results clearly presented and comparable?
*   **Professionalism:**
    *   `[ ]` Is the overall presentation professional and suitable for its intended audience?

**Comments - Outputs & Presentation:**
```
(Add comments here)
```

---

## V. Error Checks & Robustness

*   **Built-in Error Checks:**
    *   `[ ]` Does the model include explicit error checks (e.g., balance sheet check, cash flow check, flags for negative equity/revenue)?
    *   `[ ]` Are these error checks clearly visible?
*   **Stress Testing:**
    *   `[ ]` Has the model been stress-tested with extreme (but plausible) inputs to see if it behaves as expected or breaks?
*   **Protection & Version Control:**
    *   `[ ]` Are input cells unlocked and calculation/output cells locked (if model is to be shared)?
    *   `[ ]` Is there any version control or log of changes if the model is complex and iterative? (More of a process point)

**Comments - Error Checks & Robustness:**
```
(Add comments here)
```

---
*Back to [Toolkits & Checklists Overview](./README.md)*
*Back to [Main Hub](../../home.html)*
