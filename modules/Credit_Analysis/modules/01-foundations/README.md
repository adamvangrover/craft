# Module 1: Foundations - Accounting, Financial Statements, and Basic Modeling

Welcome to Module 1 of the Corporate Credit Risk Analyst Foundations Training (CRAFT) program. This foundational module is designed to equip you with the essential building blocks for understanding and analyzing corporate credit risk. We will delve into the language of business—accounting—and introduce the core techniques for financial analysis and modeling.

**When viewing this module through the [CRAFT Program Hub](../../index.html), use the sidebar navigation to access detailed lessons, learning materials, and quizzes for each topic.**

## Key Learning Areas in This Module:

This module is broadly divided into two core areas:

### 1. Accounting and Financial Statement Analysis
Understanding how companies record their financial activities and report their financial health is paramount for any credit analyst. This section covers:
*   **Core Accounting Principles:** We explore fundamental concepts like GAAP vs. IFRS, the principle of conservatism (prudence), the accrual method, and why these standards are critical for transparency and comparability.
*   **Deconstructing the Three Financial Statements:** A detailed look at the Balance Sheet (what a company owns and owes at a point in time), the Income Statement (its performance over a period), and the Statement of Cash Flows (the actual movement of cash).
*   **The Interconnectivity of Financial Statements:** Crucially, we examine how these three statements are linked. Understanding this interconnectedness is vital for building financial models and identifying red flags (e.g., divergence between net income and cash flow from operations).
*   **Deep Dive into Revenue Recognition (ASC 606) and Expense Analysis:** Understanding how revenue is booked and how expenses are categorized provides insight into a company's operational efficiency and earnings quality.
*   **The Importance of Footnotes (Notes to the Financial Statements):** Learning to read and interpret footnotes to uncover significant accounting policies, debt details, commitments, contingencies, and other hidden risks.

**Key Lessons & Materials:**
*   `01-accounting-and-financial-statement-analysis.md`: Core concepts and explanations.
*   `01-accounting-learning-materials.md`: Glossary of key terms and links to further resources.

### 2. Financial Analysis and Modeling Techniques
Once you understand the financial statements, the next step is to analyze them effectively and build predictive models. This section introduces:
*   **Building the 3-Statement Financial Model:** Best practices for constructing an integrated model that links the Income Statement, Balance Sheet, and Cash Flow Statement. This includes structure, layout, color-coding, and the importance of supporting schedules (debt, PP&E, working capital).
*   **Forecasting with Purpose:** Principles for developing well-reasoned assumptions to project a company's future financial performance. This covers the typical order of operations: forecasting the Income Statement, then the Balance Sheet, then the Cash Flow Statement, and finally "plugging" to balance the model.
*   **The Analyst's Core Toolkit - Key Credit Ratios:** An introduction to the essential financial ratios used by credit analysts to assess a company's leverage, coverage, liquidity, and profitability. Understanding these ratios is fundamental to quantifying credit risk.
*   **Beyond the Base Case - Advanced Analysis:** An overview of sensitivity analysis, scenario analysis, and stress testing, which are techniques used to evaluate a company's resilience under various conditions.

**Key Lessons & Materials:**
*   `02-financial-analysis-and-modeling.md`: Core concepts and explanations.
*   `02-modeling-learning-materials.md`: Glossary of key terms and links to further resources.

## Quizzes for This Module:
Test your understanding of these foundational concepts by attempting the quizzes available in the `quizzes/` subdirectory (accessible via the sidebar when using the module viewer). These include:
*   `Quiz_M01_Accounting_Financial_Statement_Analysis.md` (a consolidated quiz)
*   Individual quizzes: `accounting-quiz.md` and `modeling-quiz.md` (along with their answer keys).
*   **New Interactive Quiz:** [Test Your Knowledge with the Interactive Accounting Quiz!](../../../quiz_viewer.html?quizfile=corporate-credit-risk-analyst-training/modules/01-foundations/quizzes/temp_accounting_quiz_for_parser.md&answerfile=corporate-credit-risk-analyst-training/modules/01-foundations/quizzes/accounting-quiz-answers.md) (Opens in a new interactive viewer).

---
This module provides the critical groundwork for all subsequent modules in the CRAFT program. A strong grasp of accounting, financial statement analysis, and basic modeling techniques will enable you to perform more robust and insightful credit risk assessments.

<!-- Machine-readable indexing comment -->
<!-- Index: CRAFT Module 01; Topics: Accounting Principles, Financial Statement Analysis, 3-Statement Model, Financial Ratios, Forecasting Basics -->

## Student & Teacher Notes

**For Students:**
*   **Master the Linkages:** Pay very close attention to how the three financial statements connect. This is fundamental.
*   **Practice Ratios:** Don't just memorize ratio formulas; understand what each ratio tells you about a company's performance and risk.
*   **Focus on Cash Flow:** Understand why Cash Flow from Operations can differ from Net Income and why it's often considered a more reliable indicator of financial health for credit purposes.
*   **Build a Simple Model:** Try to build a basic 3-statement model for a hypothetical company as you go through this module.

**For Teachers:**
*   **Use Real Company Examples:** Illustrate accounting concepts and financial statement analysis using the public filings of real companies.
*   **Emphasize "Why":** Explain the "why" behind accounting rules and modeling conventions, not just the "what."
*   **Hands-on Modeling Session:** If possible, include a hands-on session where students start building a 3-statement model.
*   **Connect to Credit Decisions:** Continuously link the concepts back to how they inform credit risk assessment.

## Developer Notes & Areas for Impact

*   **Interactive Examples:** Consider creating small, interactive Jupyter Notebooks (linked from here, hosted in `Interactive_Notebooks/`) to demonstrate:
    *   How changes in one statement affect others in a simplified linked model.
    *   Calculation of key ratios with sample data.
    *   Basic sensitivity analysis on a simple forecast.
*   **Visual Aids:** More diagrams illustrating statement linkages or model structures could be beneficial.
*   **Quiz Expansion:** Ensure quizzes thoroughly cover all key learning objectives. The interactive quiz viewer is a good step; ensure content for it is robust.
*   **Consistency with Global Glossary:** Ensure all key terms introduced here are also in the `Global_Financial_Glossary.md` and linked appropriately.

## Possible Avenues for Exploration and Further Development

*   **Deeper Dive into Specific Accounting Standards:** (e.g., Leases, Pensions, Business Combinations) - though some of this is covered in Module 12 (Advanced FSA).
*   **More Advanced Forecasting Techniques:** Beyond the basics introduced here (could link to `/Financial_Modeling/Forecasting_Techniques/`).
*   **Quality of Earnings Analysis Introduction:** A brief intro here, with a deeper dive in Module 12.
*   **Introduction to Financial Statement Footnote Analysis:** More structured guidance on what to look for in key footnotes.
