# Prompt Engineering: Foundations and Toolkit

Mastering prompt engineering—the practice of crafting clear, structured instructions for GenAI—is the single most important skill for credit analysts looking to unlock the technology's full potential. The quality of the AI's output is directly proportional to the quality of the input it receives.

## Foundational Principles of Effective Prompting

1.  **Clarity and Specificity**: This is the golden rule. Vague instructions lead to generic responses. Be unambiguous about the desired action, format, tone, and output.
    *   **Weak Prompt**: "Analyze the financials."
    *   **Strong Prompt**: "Analyze the Q3 2024 income statement for Company XYZ and identify the top three drivers of variance in gross margin compared to Q2 2024. Present the output as a bulleted list."

2.  **Providing Context**: Ground the AI by assigning it a role, defining the target audience, and explaining the purpose of the task. This helps the model adopt the correct perspective.
    *   **Example**: Start a prompt with "Act as a senior credit analyst preparing a summary for a loan committee..."

3.  **Structuring the Prompt**: Use clear separators (e.g., `###`) to distinguish instructions from data. Clearly define the desired output format (e.g., table, JSON, bullet points).

4.  **Iterative Refinement**: Prompt engineering is an experimental process. Start with a simple prompt, review the output, and then iteratively refine it by adding more context, simplifying language, or being more specific.

## A Practical Prompting Toolkit for Credit Analysis

Here are templates that adapt these principles for common credit analysis tasks.

### Template 1: Financial Report Summarization
**Weak Prompt**: Summarize the attached Q3 earnings report.

**Strong Prompt**:
```
Act as a senior credit analyst. Your audience is the bank's credit committee.
Generate a board-level executive summary of the attached Q3 2024 financial performance report for [Company Name].

Focus specifically on the following key areas:
1.  Revenue growth compared to Q3 2023.
2.  Variance in gross margin from the previous quarter (Q2 2024).
3.  Key trends in operating expenses.
4.  Management's outlook for the upcoming quarter as stated in the report.

The output should be in concise bullet points and must not exceed 300 words.

### ATTACHED REPORT ###
[Paste text of report here]
```

### Template 2: Variance Analysis
**Weak Prompt**: Explain the variance.

**Strong Prompt**:
```
You are a financial analyst performing a variance analysis.
Using the provided data, identify and explain the top three largest variances between our Q1 2024 forecast and the Q1 2024 actuals for [Company Name].

Instructions:
1.  Group the variances by department (Sales, Marketing, R&D).
2.  For each variance, calculate the dollar amount and percentage difference.
3.  Provide a brief explanation of the likely operational drivers for each variance.

Present the final output as a markdown table with columns: "Department", "Variance ($)", "Variance (%)", and "Likely Operational Drivers".

### FORECAST DATA ###
[Paste forecast data]

### ACTUALS DATA ###
[Paste actuals data]
```

### Template 3: Scenario Planning & Stress Testing
**Weak Prompt**: What if interest rates go up?

**Strong Prompt**:
```
Act as a credit risk modeler.
Using the provided current financial data for [Company Name], simulate a stress test scenario for the next fiscal year.

Scenario Assumptions:
-   A 200 basis point increase in the benchmark interest rate, affecting all variable-rate debt.
-   A 5% decrease in projected sales revenue due to macroeconomic slowdown.
-   A 7% increase in input costs (COGS).

Calculate and report the estimated impact of this scenario on the following key financial metrics:
-   EBITDA
-   Net Income
-   Debt Service Coverage Ratio (DSCR)

### CURRENT FINANCIAL DATA ###
[Paste relevant financial data, including debt schedule and P&L]
```

### Template 4: Covenants Analysis
**Weak Prompt**: Find the covenants in this loan agreement.

**Strong Prompt**:
```
You are a legal analyst specializing in credit agreements.
Review the attached loan agreement for [Company Name].

Task:
1.  Extract all financial covenants from the document.
2.  For each covenant, identify the exact definition as provided in the agreement.
3.  Specify the required performance level or ratio (e.g., "DSCR must remain above 1.25x").
4.  List any reporting requirements associated with these covenants.

Present the output in a structured table with the following columns: "Covenant Name", "Definition", "Required Level", and "Reporting Frequency".

### LOAN AGREEMENT ###
[Paste text of loan agreement]
```
