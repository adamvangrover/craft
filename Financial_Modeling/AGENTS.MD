# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style. Refer to the main `README.md` and other `AGENTS.MD` files for examples.
*   **Clarity and Conciseness:** Ensure all documentation, explanations, and comments are clear, concise, and easy to understand.
*   **Markdown Best Practices:** Follow standard Markdown syntax. Use formatting (headings, lists, bolding, etc.) to improve readability.
*   **Accuracy:** Verify the accuracy of all information, especially financial concepts, formulas, and modeling techniques.
*   **File Naming:** Use clear and consistent file names (e.g., `dcf_model_guide.md`, `Excel_Best_Practices.md`).
*   **Links:**
    *   Use relative links for internal navigation.
    *   Verify that all links are functional.
*   **Updating Navigation:** When adding new content or significantly modifying existing content, ensure that relevant `README.md` files and `index.html` (especially `Financial_Modeling/index.html`) are updated to reflect these changes for discoverability.
*   **Code (if applicable, e.g., for VBA snippets or formulas):**
    *   Comment code adequately.
    *   Ensure any described logic is sound.
*   **Review:** Before submitting changes, review your work for adherence to these guidelines and the specific task requirements.

## Directory-Specific Instructions: Financial Modeling

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/Financial_Modeling/` directory provides resources on best practices, structural guides, Excel tips, and techniques for building robust financial models. The focus is on models used for financial analysis, valuation, and credit assessment.

The main entry point and human-readable guide is `Financial_Modeling/README.md`.
The interactive HTML view is `Financial_Modeling/index.html`.

### 2. Hierarchy and Development Notes
This section is typically structured by modeling concepts or applications:
*   **`Best_Practices/`**: General principles for model building (e.g., formatting, structure, assumption management).
*   **`Templates/`**: Structural outlines or starter templates for common models (e.g., 3-statement model, LBO model).
    *   *Agent Note:* As an AI, text-based descriptions of model structures are preferred. If actual `.xlsx` templates are required, they would typically be provided by a human user or the AI would describe their structure in Markdown for a human to build.
*   **`Valuation_Applications/`**: How modeling is used in valuation (e.g., DCF, comparables analysis).
*   **`Forecasting_Techniques/`**: Methods for projecting financial line items.
*   **`Excel_Tips/`** (or similar): Specific Excel functions or techniques useful for modeling. *(Consider creating this if not present)*
*   **`Advanced_Topics/`**: For more complex modeling subjects like M&A, LBOs, or specialized industry models.

**Development Focus:**
*   Prioritize clarity and step-by-step instructions.
*   Emphasize best practices consistently.
*   Integrate with interactive notebooks where possible for hands-on learning.

### 3. Specific Content Guidelines for Financial Modeling
*   **Clarity and Detail:** Model structures and techniques should be explained with sufficient detail for a user to understand and replicate them.
*   **Best Practices Emphasis:** Consistently reinforce financial modeling best practices (e.g., separating inputs, outputs, and calculations; clear labeling; avoiding hardcoding in formulas; using consistent formatting).
*   **Assumptions:** Stress the importance of clearly documenting all assumptions, their rationale, and potential sensitivities.
*   **Error Checking & Model Integrity:** Include advice on how to check models for errors, ensure they balance (e.g., balance sheet), and build in checks and balances.
*   **Visuals (Descriptive):** Since AI cannot directly create complex visuals or embed Excel screenshots easily into Markdown, use Markdown tables, pseudo-code, or clear textual descriptions to illustrate model layouts and formula logic. If a Jupyter Notebook is created for an interactive model, that notebook can generate its own visuals.
*   **Integration with Interactive Notebooks:**
    *   This section is a prime candidate for linking to or housing interactive models built as Jupyter Notebooks in `Interactive_Notebooks/Financial_Modeling/`. For instance, a guide on DCF modeling here should link to any interactive DCF notebook. Guides here can explain the theory and structure, while notebooks provide the interactive practice.

### 4. Linking Strategy
*   Link key financial and modeling terms to the `Global_Financial_Glossary.md`.
*   Connect modeling concepts to their application in other areas, such as `/corporate-credit-risk-analyst-training/` (e.g., how modeling is used in underwriting), `/CFA/` (e.g., CFA curriculum on valuation), or specific `/primers/` if discussing industry-specific models.
*   Point to relevant `Interactive_Notebooks/` for hands-on examples.

### 5. Roadmap / Planned Additions (Illustrative from README)
*   More detailed model templates (e.g., LBO model, M&A model structure).
*   Guides on specific industry modeling nuances (e.g., banking, real estate, natural resources).
*   Section on Model Auditing and Testing.
*   Interactive model examples using Jupyter Notebooks (see `Interactive_Notebooks/AGENTS.MD`).

Refer to the root `AGENTS.MD` for general guidelines.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based models.
