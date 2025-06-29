# Agent Instructions - /primers/html/ Directory

This directory contains static HTML versions of the industry primers. The source content resides in Markdown (`.md`) files in the parent `primers/` directory.

## General Guidelines for AI Agents:

*   **Purpose:** These HTML files are pre-rendered versions of the Markdown primers.
*   **Source of Truth:** The `.md` files in the parent `primers/` directory are the source of truth for content.
*   **Generation:** These HTML files are typically *generated* from the `.md` files. Agents should generally not edit these HTML files directly for content changes. Content changes should be made to the source `.md` file, and then the HTML should be regenerated.
*   **Synchronization:** If an agent updates a primer's `.md` file, it should flag or note that the corresponding `.html` file in this directory needs to be regenerated.
*   **Styling:** These HTML files should link to appropriate shared CSS (e.g., `../../styles.css` or a global stylesheet from `../../../assets/css/`) for consistent appearance.
*   **Adding New Primers:**
    1.  A new `.md` file is created in `primers/`.
    2.  A corresponding `.html` file needs to be generated/created in this `primers/html/` directory.
    3.  The main `primers/index.html` needs to be updated to link to both the new `.md` (for dynamic loading) and the new static `.html` in this folder.

## Workflow for AI Agents (if capable of HTML generation):

1.  If a primer's `.md` file (e.g., `primers/example_industry.md`) is updated or created:
2.  Use a reliable internal tool or command (if available, e.g., via `run_in_bash_session` with `pandoc`) to convert the Markdown to a clean HTML file (e.g., `primers/html/example_industry.html`).
3.  Ensure the generated HTML links to the correct shared CSS for styling.
4.  Update the main `primers/index.html` to correctly link to this new/updated HTML file in the "View Enhanced HTML" link for the relevant primer card.

## Workflow for AI Agents (if NOT capable of direct HTML generation):

1.  If a primer's `.md` file is updated or created:
2.  Clearly state in your commit message or summary that the corresponding static HTML file in `primers/html/` needs to be manually regenerated/updated from the Markdown source.
3.  If adding a new primer, note that a new static HTML file needs to be created in this directory and linked from `primers/index.html`.

Refer to `primers/AGENTS.MD` (parent directory) and the root `AGENTS.MD` for broader guidelines.
