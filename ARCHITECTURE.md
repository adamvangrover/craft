# Active Learning Ecosystem Architecture

## Vision
To transform static financial content into a dynamic, "Active Learning" ecosystem where users not only read but simulate, decide, and reflect. This repository combines the rigor of institutional credit analysis with modern EdTech principles.

## Core Components

### 1. Navigation & Structure (`js/nav_data.js`)
The central nervous system of the repository. It defines the sidebar and hierarchical structure.
*   **Categories:** Logic groupings (e.g., "Credit Analysis", "Wealth Management").
*   **Hubs:** HTML entry points for major verticals (`index.html`).
*   **Viewers:**
    *   `global_markdown_viewer.html`: Renders Markdown with styling and Mermaid.js support.
    *   `quiz_viewer.html`: Interactive JSON-based quizzes.

### 2. Content Pillars

#### A. Foundational Knowledge (Primers & Modules)
*   Located in `modules/` and `Primers/`.
*   **Style:** Professional, concise, "Buy-Side Perspective".
*   **Tech:** Markdown rendered via Marked.js.

#### B. Active Learning (Simulations & Notebooks)
*   **Simulations:** "Choose Your Own Adventure" style Markdown files using `<details>` tags for immediate feedback loops (e.g., `Interactive_Notebooks/Simulations/`).
*   **Notebooks:** Jupyter Notebooks for quantitative tasks (e.g., Python for Financial Modeling).

#### C. Deep Dives
*   Advanced, specific topics located in subdirectories (e.g., `Sustainable_Finance/Deep_Dives/`).
*   **Structure:** Theory -> Buy-Side Application -> Interactive Scenario.

### 3. Design System
*   **CSS:** Tailwind CSS (via CDN) for utility-first styling.
*   **Typography:** Inter (UI) and Merriweather (Prose).
*   **Theme:** Slate & Indigo (Professional, Trusted).

## Contribution Workflow
1.  **Plan:** Identify the learning objective (Bloom's Taxonomy).
2.  **Draft:** Create Markdown content with "Active" elements (scenarios, quizzes).
3.  **Link:** Add to `js/nav_data.js`.
4.  **Verify:** Check rendering in `global_markdown_viewer.html`.

## Future Roadmap
*   **Gamification:** Badges for completing "Learning Paths".
*   **AI Integration:** Local LLM integration for "Socratic Tutor" mode.
*   **Dynamic Dashboards:** User progress tracking via `localStorage`.
