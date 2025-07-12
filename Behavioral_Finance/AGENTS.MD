# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style. Refer to the main `README.md` and other `AGENTS.MD` files for examples.
*   **Clarity and Conciseness:** Ensure all documentation, explanations, and comments are clear, concise, and easy to understand.
*   **Markdown Best Practices:** Follow standard Markdown syntax. Use formatting (headings, lists, bolding, etc.) to improve readability.
*   **Accuracy:** Verify the accuracy of all information, especially financial concepts, formulas, and examples.
*   **File Naming:** Use clear and consistent file names (e.g., `snake_case_for_files.md`, `PascalCaseForFolders/`).
*   **Links:**
    *   Use relative links for internal navigation.
    *   Verify that all links are functional.
*   **Updating Navigation:** When adding new content or significantly modifying existing content, ensure that relevant `README.md` files and `index.html` (if applicable) are updated to reflect these changes for discoverability.
*   **Code (if applicable):**
    *   Comment code adequately.
    *   Follow any language-specific style guides if established for this project.
    *   Ensure code is functional and tested.
*   **Review:** Before submitting changes, review your work for adherence to these guidelines and the specific task requirements.

## Directory-Specific Instructions: Behavioral Finance

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/Behavioral_Finance/` directory explores how psychological influences, cognitive biases, and emotional factors affect financial decision-making by individuals and institutions, and how these can impact financial markets.

The main entry point is `Behavioral_Finance/README.md`.

### 2. Content Structure and Types
Content is typically organized into:
*   `Key_Concepts.md`: Explaining core behavioral finance theories, biases (e.g., anchoring, herding, loss aversion, confirmation bias), and heuristics.
*   `Case_Studies.md`: Illustrating behavioral concepts through historical market events or hypothetical decision-making scenarios.
*   `Applications_in_Analysis.md` (Recommended): Discussing how understanding behavioral finance can improve investment analysis, credit assessment, and risk management.
*   Potentially, files on specific investor psychology types or market anomalies.

### 3. Specific Guidelines for Behavioral Finance Content
*   **Clear Definitions of Biases:** Each cognitive or emotional bias should be clearly defined with relatable examples.
*   **Distinction between Cognitive and Emotional Biases:** Where appropriate, categorize biases to help understand their origins and potential for mitigation.
*   **Real-World Relevance:** Connect concepts to actual market behavior or common investor mistakes. Case studies are very effective here.
*   **Implications for Analysts/Investors:** Focus on how awareness of these biases can lead to better decision-making and risk management.
*   **Avoid Overly Academic Tone:** While based on academic research, the explanations should be accessible to finance practitioners.

### 4. Linking
*   Link all key behavioral terms (anchoring, loss aversion, etc.) to the `Global_Financial_Glossary.md`.
*   Connect behavioral concepts to practical risk management in `/Risk_Management/`.
*   Link to decision-making processes discussed in `/Professional_Development/` (e.g., critical thinking).
*   Case studies could reference market events also discussed in `Market_Analysis_Quick_Start/` or CFA materials.

### 5. Roadmap / Planned Additions (Illustrative)
*   More case studies covering different market cycles or asset classes.
*   A section on debiasing techniques for analysts.
*   Exploration of neurofinance concepts (if appropriate and simplified).
*   Interactive quizzes or scenarios (potentially via Jupyter Notebooks in `Interactive_Notebooks/Behavioral_Finance/`) to test understanding of biases.
*   Content on how behavioral finance concepts are, or can be, integrated into quantitative investment strategies or risk models.

### 6. Developer Notes & Future Considerations

**Developer Notes:**
*   **`Behavioral_Finance/index.html` Maintenance:** This HTML file serves as the interactive hub for the Behavioral Finance section. It likely uses a JavaScript array (e.g., `localFiles` or similar) to list and link to the main Markdown files (`Key_Concepts.md`, `Case_Studies.md`, etc.). When adding new top-level `.md` files to this section, this `index.html` **must** be updated.
*   **`Applications_in_Analysis.md`:** This recommended file is crucial for connecting theory to practice. Ensure it provides concrete examples of how understanding biases can alter investment or credit analysis processes and outcomes.
*   **Relatability:** Use relatable, everyday examples to explain biases before applying them to financial contexts. This can make the concepts more intuitive.
*   **Academic Foundations:** While the tone should be accessible, ensure the descriptions of biases and theories are consistent with established academic research in behavioral finance (e.g., work by Kahneman, Tversky, Thaler, Shiller).

**Roadmap / Future Considerations:**
*   **Content Expansion:**
    *   Develop more `Case_Studies.md` covering different market cycles, asset classes, or types of financial decisions (e.g., corporate investment decisions, retail investor behavior).
    *   Create a dedicated section or file on "Debiasing Techniques" for analysts and investors, offering practical strategies to mitigate common biases.
    *   Explore concepts from "neurofinance" if they can be presented accessibly and have practical implications for financial professionals.
    *   Discuss the role of behavioral finance in financial planning and wealth management.
*   **Interactive Elements:**
    *   Develop Jupyter Notebooks in `Interactive_Notebooks/Behavioral_Finance/` (a new subdirectory might be needed) for:
        *   Simple experiments or quizzes demonstrating biases.
        *   Simulations of market behavior influenced by heuristics.
*   **Cross-Disciplinary Links:**
    *   Strengthen links to `Professional_Development/` topics like critical thinking and ethical decision-making, as behavioral biases often play a role.
    *   Connect to `Risk_Management/` by discussing how unrecognized biases can lead to failures in risk perception and management.

Refer to the root `AGENTS.MD` for general guidelines, especially on Jupyter Notebooks and the `Global_Financial_Glossary.md`.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based illustrations or interactive exercises for this section.
Ensure the `Behavioral_Finance/README.md` is kept in sync with the content structure and `index.html`.
