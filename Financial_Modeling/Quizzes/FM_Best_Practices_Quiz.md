# Quiz: Financial Modeling Best Practices

Test your knowledge of financial modeling best practices. Choose the best answer for each question.

**Instructions:**
*   This quiz is designed to be viewed with `quiz_viewer.html`.
*   The `quiz_viewer.html` will parse questions and options formatted as below.
*   Each question should start with `**Question X:**`.
*   Options should be list items: `- A) Option A`
*   The correct answer and explanation will be in a separate `_Answers.md` file.

---

**Question 1:** What is the primary reason for clearly separating inputs, calculations, and outputs in a financial model?
- A) To make the model look more organized.
- B) To reduce the file size of the model.
- C) To improve model accuracy, transparency, and ease of auditing/updating.
- D) To enable the use of more complex Excel formulas.

**Question 2:** Which of the following is a common color-coding convention for hard-coded inputs in a financial model?
- A) Red font
- B) Blue font
- C) Green font
- D) Black font

**Question 3:** Why is it generally advised to avoid hard-coding numbers directly into formulas within the calculation section?
- A) It makes formulas shorter and easier to read.
- B) It improves calculation speed.
- C) It makes the model less flexible, harder to update for sensitivities, and more prone to errors if assumptions change.
- D) It is a requirement for using Excel's auditing tools.

**Question 4:** What is the significance of a "Balance Check" in a financial model?
- A) It ensures that the total number of assets equals the total number of liabilities.
- B) It verifies that Revenue - COGS = Gross Profit.
- C) It confirms that Total Assets = Total Liabilities + Total Equity, a fundamental accounting equation.
- D) It checks if the cash flow from operations is positive.

**Question 5:** When modeling financial statements, how does Net Income typically link between the core statements?
- A) Net Income from the Balance Sheet links to the Income Statement.
- B) Net Income from the Income Statement links to Retained Earnings on the Balance Sheet and is the starting point for the Cash Flow from Operations (indirect method).
- C) Net Income is primarily a Cash Flow Statement item that links to the Income Statement.
- D) Net Income does not directly link between statements; it's independently calculated.

**Question 6:** What is the best practice for handling a complex calculation within a model?
- A) Condense it into a single, very long formula to save space.
- B) Perform the calculation in multiple locations to double-check the result.
- C) Break it down into simpler, intermediate steps if it improves clarity and auditability.
- D) Use VBA to perform the calculation outside of worksheet formulas.

**Question 7:** Which of the following is NOT a key benefit of using supporting schedules (e.g., for Debt, PP&E)?
- A) They keep the main financial statements cleaner and less cluttered.
- B) They allow for more detailed modeling of complex items.
- C) They automatically guarantee the balance sheet will balance.
- D) They make it easier to audit and understand the drivers of these specific balance sheet or income statement items.

**Question 8:** What does the term "Plausibility and Justification" refer to in the context of model assumptions?
- A) Ensuring all assumptions are sourced from audited financial statements.
- B) Making sure assumptions are easy to change within the input sheet.
- C) Confirming that assumptions are well-reasoned, defensible, and not overly optimistic or pessimistic without strong rationale.
- D) Using the same assumptions as competitor models.

**Question 9:** In the context of model review, what is "Sensitivity Analysis" primarily used for?
- A) To ensure all formulas are mathematically correct.
- B) To test how model outputs (e.g., valuation, IRR) change when key input assumptions are varied.
- C) To check if the model's presentation is clear and concise.
- D) To find and fix circular references.

**Question 10:** Which of these is a common pitfall to avoid in financial modeling?
- A) Using consistent formatting for numbers.
- B) Documenting the model's purpose and assumptions.
- C) Hard-coding input values directly into formulas in the calculation engine.
- D) Building error checks like a balance sheet check.

---
End of Quiz. Check your answers in the `FM_Best_Practices_Quiz_Answers.md` file.
