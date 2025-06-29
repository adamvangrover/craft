# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and formatting.
*   **Clarity and Detail:** Risk management concepts require clear and often detailed explanations.
*   **Markdown Best Practices:** Use Markdown effectively for structure and readability.
*   **Accuracy:** Ensure all definitions, frameworks, and methodologies are accurate and reflect sound risk management principles.
*   **File Naming:** Follow conventions like `01_Introduction_to_Risk_Management.md` for foundational topics and `[RISKTYPEINITIALS]_XX_TopicName.md` (e.g., `CRM_01_...`) for specific risk type files.
*   **Links:** Use relative links. Verify functionality. Link key terms to `Global_Financial_Glossary.md`.
*   **Updating Navigation:** When adding new content:
    *   Update the main `Risk_Management/README.md` if new foundational topics or major risk subdirectories are added.
    *   Update the `Risk_Management/index.html` (its `localFiles` and `subDirectoryModules` arrays).
    *   Ensure READMEs and index.html files within subdirectories (`Credit_Risk/`, `Market_Risk/`, etc.) are updated.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Risk Management

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/Risk_Management/` directory provides a comprehensive understanding of risk management principles, frameworks, and practices, with an emphasis on financial services and relevance to credit risk analysis.

The main human-readable guide is `Risk_Management/README.md`.
The interactive HTML view for this section is `Risk_Management/index.html`, which acts as a hub.

### 2. Hierarchy and Development Notes
*   **Structure:**
    *   **Foundational Concepts (Root of `/Risk_Management/`):** Files like `01_Introduction_to_Risk_Management.md`, `02_Risk_Identification_and_Assessment_Frameworks.md`, etc.
    *   **Specific Risk Subdirectories:** Each major risk type has its own subdirectory (e.g., `Credit_Risk/`, `Market_Risk/`, `Operational_Risk/`, `Liquidity_Risk/`).
        *   Each subdirectory **MUST** have its own `README.md` (overview) and `index.html` (simple viewer or sub-hub).
        *   Content within these is further broken down by topic (e.g., `Credit_Risk/CRM_01_Fundamentals_of_Credit_Risk.md`).
*   **Content Style:** Should be detailed, well-structured, and include definitions, processes, tools, and examples where applicable.
*   **Development Focus:** Many sub-sections and files are placeholders or introductory. Fleshing these out with detailed content is a priority. Maintain consistency in structure and depth across different risk type modules.

### 3. Specific Content Guidelines
*   **Comprehensive Coverage:** Aim for thoroughness in explaining concepts. Risk management is a detailed field.
*   **Frameworks and Processes:** Clearly outline established risk management frameworks (e.g., COSO, relevant Basel Accords concepts simplified, Five Cs of Credit) and processes (e.g., risk management cycle: identify, assess, measure, manage, monitor, report).
*   **Practical Relevance:** Connect theoretical concepts to practical application in financial institutions and for analysts.
*   **Credit Risk Focus (Implicit):** While covering various risk types, always consider drawing connections back to how these other risks can impact credit risk analysis or a borrower's creditworthiness.
*   **Consistency in Naming:** Adhere to the established naming convention for files (e.g., `CRM_01_...`, `MRM_01_...`).
*   **Placeholder for Future Content:** Use `*(Future Addition)*` or similar markers in READMEs to indicate planned but not-yet-developed content.

### 4. Linking Strategy
*   Define and link key risk management terms to the `Global_Financial_Glossary.md`.
*   Extensively cross-link between different risk topics within this section (e.g., operational risk events can lead to credit or market risk).
*   Link to relevant CRAFT modules in `/corporate-credit-risk-analyst-training/`.
*   Link to `Toolkits_and_Checklists/` if specific tools (e.g., risk assessment checklists) are developed there.
*   Consider if any risk concepts (e.g., VaR calculation, scenario analysis) could be illustrated with an `Interactive_Notebooks/Risk_Management/` notebook and link accordingly.

### 5. Roadmap / Planned Additions (from `README.md`)
*   Detailed content for `Liquidity_Risk/`.
*   Advanced topics in credit risk (e.g., portfolio credit risk models, counterparty credit risk).
*   More detailed examples of risk reports and dashboards.
*   Case studies on risk management failures and successes.
*   Development of interactive notebooks for quantitative risk measures.
*   Modules on ERM, Strategic Risk, Reputational Risk, Climate/ESG Risk, Cybersecurity Risk.

Refer to the root `AGENTS.MD` for general guidelines.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based illustrations.
