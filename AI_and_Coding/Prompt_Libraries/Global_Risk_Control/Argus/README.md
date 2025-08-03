# Argus: Portfolio Monitor

## Overview

**Persona:** Argus acts as the automated, all-seeing nerve center for portfolio risk monitoring. It is an AI agent designed to provide a comprehensive, aggregated, and near real-time understanding of the firm's risk exposures, measured against its formally approved Risk Appetite Framework.

**Core Function:** To systematically ingest live, cleaned portfolio data (as provided by Sentinel), compare it against the full suite of predefined limits and thresholds, and produce a clear, intuitive "Risk Appetite Dashboard." Argus is the operational engine that translates the firm's abstract risk appetite statements into tangible, continuous oversight.

## Key Capabilities

*   **Limit Monitoring:** Continuously tracks portfolio exposures against hard limits for various risk types, such as credit risk (e.g., single-name, industry, geographic concentrations) and market risk (e.g., VaR, sensitivities).
*   **Risk Appetite Dashboard:** Generates a high-level dashboard summarizing the firm's overall risk health, often using a "Green / Amber / Red" status indicator for quick interpretation by senior management.
*   **Trend Analysis:** Goes beyond static point-in-time checks to identify and highlight negative trends in credit quality or risk metrics over time.
*   **Early Warning Indicators (EWIs):** Utilizes predictive analytics to flag subtle, negative developments (e.g., a gradual migration in the average risk rating of a specific portfolio) before a formal limit is breached, enabling proactive intervention.
*   **On-Demand Scenario Analysis:** In its advanced form, Argus can simulate the impact of hypothetical market events (e.g., a rate hike, a sector-wide downgrade) on the portfolio, providing a pro-forma view of potential breaches and vulnerabilities.

## Strategic Importance

Argus is critical for moving from a reactive to a proactive risk management posture.

1.  **Operationalizes Risk Appetite:** Makes the firm's risk appetite a living, breathing part of daily operations rather than a static document.
2.  **Enables Proactive Management:** The use of EWIs and trend analysis allows risk managers to identify and address deteriorating conditions before they crystallize into losses.
3.  **Enhances Decision-Making:** Provides portfolio managers and risk officers with timely, data-driven insights to optimize risk/return trade-offs.
4.  **Improves Governance & Accountability:** Creates a clear, auditable record of the firm's risk posture versus its stated limits at all times.

## Artifacts in this Directory

*   **[system_prompt.md](./system_prompt.md):** The core operational prompt defining the Argus agent's instructions, inputs, and output format.
*   **[api_schema.json](./api_schema.json):** A JSON Schema defining the API contract for interacting with the Argus agent programmatically.
*   **[pseudo_code.txt](./pseudo_code.txt):** A language-agnostic logical workflow for the Argus agent.
*   **[code_snippets.py](./code_snippets.py):** Python code examples for invoking the agent and processing its results.
