# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style.
*   **Clarity and Depth:** Level 2 Deep Dives require thorough explanations of complex topics, including valuation models and analytical frameworks.
*   **Markdown Best Practices:** Utilize Markdown effectively for structure (headings, subheadings, lists, tables, code blocks for formulas and examples).
*   **Accuracy:** All financial concepts, formulas, examples, and curriculum references must be accurate and align with the CFA Institute Level 2 curriculum.
*   **File Naming:** Use descriptive names, preferably prefixed with `L2_DD_` (e.g., `L2_DD_Topic_SubTopic.md`).
*   **Links:** Use relative links. Verify functionality. Link key terms to the `Global_Financial_Glossary.md`.
*   **Updating Navigation:** When adding new deep dive documents:
    *   Update `CFA/Level_2/Topic_Deep_Dives/README.md` to list the new file.
    *   Update `CFA/Level_2/Topic_Deep_Dives/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `CFA/index.html` (Materials Library section) and `CFA/Level_2/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: CFA Level 2 Topic Deep Dives

### Inherits From
This document inherits from `CFA/Level_2/AGENTS.MD`, `CFA/AGENTS.MD`, and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/CFA/Level_2/Topic_Deep_Dives/` directory contains detailed explorations of specific, often complex, topics within the CFA Level 2 curriculum.

The main guide is `CFA/Level_2/Topic_Deep_Dives/README.md`.
Individual deep dives are `.md` files.
Navigation is supported by `CFA/Level_2/Topic_Deep_Dives/index.html`.

### 2. Content Structure for Deep Dives
Refer to the "Recommended Structure for a Level 2 Topic Deep Dive" section in `CFA/Level_2/Topic_Deep_Dives/README.md`. This includes:
*   Topic Introduction & Curriculum Linkage (LOS)
*   Core Concepts & Theoretical Underpinnings
*   Model Mechanics / Analytical Steps
*   Detailed Worked Examples / Mini-Cases
*   Interpretation of Results
*   Common Challenges & Exam Strategies
*   Credit Analyst's Takeaway
*   (Optional) Practice Questions, Summary, Developer/Student/Teacher Notes within individual files.

### 3. Specific Guidelines for Level 2 Deep Dive Content
*   **Depth and Rigor:** Content should be comprehensive and detailed, suitable for Level 2's increased complexity.
*   **Valuation Focus:** Many Level 2 topics involve valuation; ensure models are explained thoroughly, including assumptions, inputs, and interpretation.
*   **Application Emphasis:** Show *how* concepts are applied, ideally through examples that mimic vignette scenarios.
*   **Credit Analyst's Perspective:** Actively integrate how these advanced topics inform credit risk analysis.

Refer to parent `AGENTS.MD` files for broader CFA and repository guidelines.
