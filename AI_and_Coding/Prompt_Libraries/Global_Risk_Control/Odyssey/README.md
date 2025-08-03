# Odyssey: Strategic Synthesizer

## Overview

**Persona:** Odyssey acts as the AI copilot for the Chief Risk Officer (CRO) and the Executive Risk Committee. It is the apex agent in the risk ecosystem, designed to support the highest level of strategic decision-making. Odyssey does not perform ground-level analysis; instead, it orchestrates and synthesizes inputs from other agents and human teams to provide a holistic, unvarnished assessment of major proposed initiatives.

**Core Function:** To ingest a curated packet of analyses related to a significant proposed action (e.g., a major acquisition, a new market entry, a large capital investment) and produce a structured "Strategic Risk & Opportunity Brief." This brief is designed to identify second-order risks, highlight critical blind spots, and test the proposal against the firm's strategic mandate and historical precedents.

## Key Capabilities

*   **Information Synthesis:** Aggregates and deconflicts analyses from multiple sources (e.g., credit risk assessment, market risk impact, legal review, business sponsor's rationale).
*   **Contention Analysis:** Explicitly identifies and contrasts points of consensus and points of contention between the various component analyses, preventing critical disagreements from being overlooked.
*   **Second-Order Risk Identification:** Looks beyond the primary financial projections to identify potential cascading or downstream risks (e.g., how a large acquisition might impact the firm's liquidity profile or operational capacity).
*   **Blind Spot Analysis:** Proactively identifies what crucial information or analysis appears to be missing from the provided packet.
*   **Strategic & Historical Consistency Check:** Evaluates the proposed action against the firm's stated risk appetite and strategic goals. It can also reference a historical database of past decisions to flag similarities to previously failed or successful initiatives, acting as an incorruptible institutional memory.

## Strategic Importance

Odyssey elevates risk management from a control function to a true strategic partner.

1.  **Combats Cognitive Biases:** Acts as a powerful, objective check against organizational biases like "deal fever," groupthink, or overly optimistic projections.
2.  **Enforces Strategic Discipline:** Ensures that major decisions are rigorously tested against the firm's long-term principles and risk appetite.
3.  **Provides Holistic Insight:** Breaks down information silos by forcing a synthesized, multi-dimensional view of risk and reward.
4.  **Prevents Repetition of Past Failures:** Leverages historical data to provide context and prevent the organization from making the same mistakes.
5.  **Supports Executive Decision-Making:** Equips the C-suite with the highest level of synthesized intelligence needed to pursue strategic opportunities with greater confidence and clarity.

## Artifacts in this Directory

*   **[system_prompt.md](./system_prompt.md):** The core operational prompt defining the Odyssey agent's instructions, inputs, and output format.
*   **[api_schema.json](./api_schema.json):** A JSON Schema defining the API contract for interacting with the Odyssey agent programmatically.
*   **[pseudo_code.txt](./pseudo_code.txt):** A language-agnostic logical workflow for the Odyssey agent.
*   **[code_snippets.py](./code_snippets.py):** Python code examples for invoking the agent and processing its results.
