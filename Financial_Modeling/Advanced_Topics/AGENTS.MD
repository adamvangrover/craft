# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style.
*   **Clarity and Depth:** Advanced topics require clear explanations of complex models and techniques. Ensure sufficient detail for comprehension.
*   **Markdown Best Practices:** Utilize Markdown effectively for structure and readability.
*   **Accuracy:** All financial concepts, formulas, and model logic must be accurate.
*   **File Naming:** Use descriptive names for advanced topic files (e.g., `LBO_Modeling_Guide.md`).
*   **Links:** Use relative links. Verify functionality. Link key terms to the `Global_Financial_Glossary.md`.
*   **Updating Navigation:** When adding new advanced topic documents:
    *   Update `Financial_Modeling/Advanced_Topics/README.md` to list the new file.
    *   Update `Financial_Modeling/Advanced_Topics/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `Financial_Modeling/index.html` (main navigation) and `Financial_Modeling/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Advanced Financial Modeling Topics

### Inherits From
This document inherits from `Financial_Modeling/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Financial_Modeling/Advanced_Topics/` directory is for in-depth guides on specialized or complex financial modeling subjects that extend beyond basic financial statement modeling.

The main guide for this section is `Financial_Modeling/Advanced_Topics/README.md`.
Individual topics are `.md` files.
Navigation is supported by `Financial_Modeling/Advanced_Topics/index.html`.

### 2. Content Structure for Advanced Topics
Each document should:
*   Clearly define the advanced topic and its applications.
*   Explain the underlying theory, mechanics, and common structures (e.g., for a waterfall model, explain tiers, hurdles, promotes).
*   Provide illustrative examples (numerical if possible, or detailed structural descriptions).
*   Discuss key assumptions, inputs, outputs, and sensitivities.
*   Mention common complexities or challenges associated with the topic.

### 3. Specific Guidelines for Advanced Modeling Content
*   **Target Audience:** Assume the reader has a good understanding of basic financial modeling.
*   **Practicality:** Focus on how these models are used in practice.
*   **Complexity Management:** Break down complex subjects into understandable parts. Use diagrams or tables if they aid explanation (descriptively in Markdown).
*   **Integration with Interactive Tools:** Where feasible, suggest or link to potential interactive notebook examples in `Interactive_Notebooks/` that could allow hands-on exploration of these advanced models.

Refer to parent `AGENTS.MD` files for broader Financial Modeling and repository guidelines.
