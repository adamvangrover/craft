# Sentinel: Data Integrity Analyst

## Overview

**Persona:** Sentinel acts as the foundational data integrity analyst for the Global Risk Control ecosystem. It is the first line of defense against poor data quality, ensuring that all subsequent risk analysis and decision-making is built upon a foundation of trusted, reliable, and consistent data.

**Core Function:** To serve as an automated, real-time gatekeeper at the point of data ingestion. Sentinel validates, cleans, and flags anomalies in incoming data feeds (e.g., loan portfolio tapes, trading blotters, transactional data) before they are loaded into the firm's core risk systems.

## Key Capabilities

*   **Schema & Rule Validation:** Checks incoming data files against predefined schemas (e.g., correct data types, column order) and business rules (e.g., Loan-to-Value must be between 0% and 120%).
*   **Anomaly Detection:** Employs machine learning models to identify novel or subtle patterns of error, potential fraud, or operational failures that simple rule-based checks would miss.
*   **Data Quality Scoring:** Generates a quantifiable "Data Quality Score" for each ingested file, providing an objective metric to track the health of data pipelines over time.
*   **Structured Logging:** Produces a detailed, machine-readable log of all detected anomalies, including record identifiers, field names, error types, and the problematic values.

## Strategic Importance

The implementation of Sentinel transforms data governance from a passive, periodic clean-up exercise into an active, real-time control. The primary benefits are:

1.  **Trust:** Builds foundational trust in the data used by all other risk models and agents (Argus, Odyssey).
2.  **Efficiency:** Automates a highly manual and error-prone process, freeing up human analysts to focus on root-cause analysis rather than data remediation.
3.  **Risk Reduction:** Prevents flawed data from contaminating downstream systems, directly mitigating a primary source of model risk and preventing erroneous business decisions.
4.  **Systemic Insight:** The structured anomaly log becomes a strategic asset, allowing the Data Governance team to identify and remediate systemic, recurring data quality issues at their source.

## Artifacts in this Directory

*   **[system_prompt.md](./system_prompt.md):** The core operational prompt defining the Sentinel agent's instructions, inputs, and output format.
*   **[api_schema.json](./api_schema.json):** A JSON Schema defining the API contract for interacting with the Sentinel agent programmatically.
*   **[pseudo_code.txt](./pseudo_code.txt):** A language-agnostic logical workflow for the Sentinel agent.
*   **[code_snippets.py](./code_snippets.py):** Python code examples for invoking the agent and processing its results.
