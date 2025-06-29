# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style.
*   **Clarity and Detail:** Forecasting techniques should be explained clearly, with enough detail for practical application. Distinguish between different methods and their appropriate uses.
*   **Markdown Best Practices:** Utilize Markdown effectively for structuring explanations, lists of pros/cons, and examples.
*   **Accuracy:** Ensure all described techniques and their implications are financially sound.
*   **File Naming:** Use descriptive names (e.g., `Revenue_Forecasting_Approaches.md`, `Expense_Forecasting_Methods.md`).
*   **Links:** Use relative links. Verify functionality. Link key terms to `Global_Financial_Glossary.md`.
*   **Updating Navigation:** When adding new forecasting guides:
    *   Update `Financial_Modeling/Forecasting_Techniques/README.md` to list the new file.
    *   Update `Financial_Modeling/Forecasting_Techniques/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `Financial_Modeling/index.html` (main navigation) and `Financial_Modeling/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Financial Modeling Forecasting Techniques

### Inherits From
This document inherits from `Financial_Modeling/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Financial_Modeling/Forecasting_Techniques/` directory contains guides on various methods used to forecast financial statement line items.

The main guide for this subdirectory is `Financial_Modeling/Forecasting_Techniques/README.md`.
Individual technique guides are `.md` files (e.g., `Revenue_Forecasting_Approaches.md`).
Navigation is supported by `Financial_Modeling/Forecasting_Techniques/index.html`.

### 2. Content Structure for Forecasting Guides
Each document should typically include:
*   **Introduction to the Forecast Area:** (e.g., revenue, COGS, OpEx, working capital).
*   **Common Forecasting Approaches:** (e.g., top-down, bottom-up for revenue; % of sales for COGS/OpEx; days outstanding for working capital).
    *   For each approach: explanation, pros, cons, when to use.
*   **Specific Techniques:** (e.g., historical growth rates, regression, driver-based).
*   **Best Practices for this Specific Forecast Area.**
*   **Considerations for Credit Analysts** or other relevant user groups.
*   **Illustrative Examples** (can be simple numerical examples or descriptive).

### 3. Specific Guidelines for Content
*   **Practical Application:** Focus on how these techniques are actually used.
*   **Assumptions:** Emphasize the importance of identifying and justifying the assumptions behind each forecast.
*   **Data Requirements:** Briefly mention the data needed for different techniques.
*   **Strengths and Weaknesses:** Provide a balanced view of each method.

Refer to parent `AGENTS.MD` files for broader Financial Modeling and repository guidelines.
