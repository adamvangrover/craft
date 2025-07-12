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
*   Modules on ERM (Enterprise Risk Management), Strategic Risk, Reputational Risk, Climate/ESG Risk, Cybersecurity Risk.

### 6. Developer Notes & Future Considerations

**Developer Notes:**
*   **`Risk_Management/index.html` Hub Maintenance:** This HTML file is the main interactive viewer for the Risk Management section. It uses JavaScript arrays (`localFiles` for root Markdown files, `subDirectoryModules` for sub-sections like Credit Risk, Market Risk) to populate its content. When adding new foundational topic files or new risk subdirectories, these JavaScript arrays in `Risk_Management/index.html` **must** be updated.
*   **Subdirectory Structure:** Each risk type subdirectory (e.g., `Credit_Risk/`, `Market_Risk/`) should maintain its own `README.md` (overview) and `index.html` (simple viewer for its own content). Ensure these are kept consistent.
*   **File Naming Conventions:** Strictly adhere to the established naming conventions: `XX_TopicName.md` for root foundational topics, and `[RISKTYPEINITIALS]_XX_TopicName.md` (e.g., `CRM_01_...`, `MRM_01_...`) for files within specific risk type subdirectories. This helps maintain order and predictability.
*   **Placeholder Content:** Use `*(Future Addition)*` or similar markers in `README.md` files to clearly indicate planned but not-yet-developed content sections. This helps track progress and identify gaps.

**Roadmap / Future Considerations (Expanding on `README.md` and general needs):**
*   **Content Deepening:**
    *   Provide significantly more detailed content for `Liquidity_Risk/`, `Operational_Risk/`, and `Market_Risk/` sections, similar to the depth planned for `Credit_Risk/`.
    *   Develop advanced topics within each risk category (e.g., advanced credit portfolio models, sophisticated market risk hedging techniques, operational risk quantification).
*   **New Risk Modules:**
    *   Systematically develop the planned modules: Enterprise Risk Management (ERM), Strategic Risk, Reputational Risk, Climate Change/ESG Risk, Cybersecurity Risk. Each should become a new subdirectory with its own `README.md`, `index.html`, and content files.
    *   Consider adding modules on Model Risk Management and Third-Party Risk Management.
*   **Practical Tools & Examples:**
    *   Include more detailed examples of risk reports, dashboards, and key risk indicators (KRIs).
    *   Develop practical case studies on risk management failures (what went wrong, lessons learned) and successes across different financial crises or institutional settings.
*   **Interactive Learning:**
    *   Create Jupyter Notebooks in `Interactive_Notebooks/Risk_Management/` to demonstrate quantitative risk measures (e.g., VaR calculations, stress testing simulations, credit scoring models).
*   **Regulatory Context:**
    *   Integrate more context on relevant regulatory frameworks (e.g., Basel Accords, Solvency II, specific national regulations) as they apply to different risk types, ensuring explanations are simplified for a general audience.

Refer to the root `AGENTS.MD` for general guidelines, especially on Jupyter Notebooks and global navigation updates.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based illustrations.
When adding new risk subdirectories, ensure they are also added to the `subDirectoryModules` array in `Risk_Management/index.html`.
