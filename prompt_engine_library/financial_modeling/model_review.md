# Prompt Library: Financial Model Review

This library provides prompts for conducting a thorough review of a financial model. The prompts are based on the "Financial Model Review Checklist".

---

## 1. Model Structure & Formatting

**Objective:** To ensure the model is well-organized, clear, and easy to understand.

### Prompts:

- "Assess the overall structure and clarity of the financial model. Is there a clear separation of inputs, calculations, and outputs? Are the sheets logically named and organized?"
- "Review the formatting and readability of the model. Is the formatting consistent? Are units clearly stated? Are the formulas easy to read and understand?"
- "Check for hardcoded numbers in formulas. Are all assumptions and drivers located in input cells?"

---

## 2. Inputs & Assumptions

**Objective:** To verify the reasonableness and accuracy of the model's inputs and assumptions.

### Prompts:

- "Evaluate the key assumptions of the model (e.g., growth rates, margins, discount rates). Are they well-documented, reasonable, and supported by evidence?"
- "Check the accuracy of the historical data used in the model. Does it match the audited financial statements?"
- "Assess the model's flexibility for scenario and sensitivity analysis. Can key assumptions be easily changed to test different scenarios?"

---

## 3. Calculations & Logic

**Objective:** To ensure the model's calculations are correct and its logic is sound.

### Prompts:

- "Verify the integrity of the financial statements. Does the balance sheet balance? Does the cash flow statement correctly reconcile cash balances? Are the statements properly linked?"
- "Spot-check key formulas for correctness and trace the precedents and dependents of critical calculations."
- "Check for circular references. If they are intentional, are they properly controlled?"
- "Ensure that totals and subtotals are correctly calculated and that there is consistency across the model."

---

## 4. Outputs & Presentation

**Objective:** To ensure the model's outputs are clearly presented and effectively communicate the key results.

### Prompts:

- "Evaluate the clarity and presentation of the model's key outputs (e.g., valuation, credit metrics, forecast financials). Is there a summary dashboard?"
- "Review the charts and tables used in the model. Are they clear, well-labeled, and do they update correctly?"
- "Assess the presentation of the scenario and sensitivity analysis results. Are they easy to compare and interpret?"

---

## 5. Error Checks & Robustness

**Objective:** To test the model's robustness and ensure it has adequate error checks.

### Prompts:

- "Check for built-in error checks in the model (e.g., balance sheet check, cash flow check). Are they clearly visible?"
- "Stress-test the model by using extreme (but plausible) inputs. Does the model behave as expected?"
- "Assess the model's protection and version control. Are input cells unlocked and calculation cells locked? Is there a log of changes?"
