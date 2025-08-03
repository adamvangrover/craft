# AI Agent Prompt Library: Global Risk Control Ecosystem

## Overview

This library contains a collection of prompts, schemas, and code examples for a sophisticated, four-persona AI ecosystem designed to augment and transform a financial institution's Global Risk Control Department. This ecosystem is designed to move the risk function from a reactive, compliance-driven posture to a proactive, predictive, and value-generating source of institutional intelligence.

The architecture is modular and hierarchical, mirroring the operational flow of a highly effective human risk organization. It ensures that each stage of analysis builds upon a validated and enriched foundation, starting with data integrity and culminating in executive-level strategic synthesis.

## The Four Personas

The ecosystem consists of four distinct, collaborative AI personas:

1.  **[Sentinel](./Sentinel/README.md): The Data Integrity Analyst**
    *   **Function:** Acts as the foundational gatekeeper. Sentinel's core directive is to validate, clean, and flag anomalies in raw data at the point of ingestion, ensuring the quality and consistency of all data used for subsequent analysis.
    *   **Core Technology:** Anomaly Detection, Machine Learning Classification.

2.  **[Cassandra](./Cassandra/README.md): The Regulatory Intelligence Scanner**
    *   **Function:** Enriches the firm's internal data with crucial external context. Cassandra scans the regulatory horizon, ingesting and analyzing vast quantities of unstructured text from regulatory bodies and news sources to provide forward-looking intelligence.
    *   **Core Technology:** Natural Language Processing (NLP), Summarization.

3.  **[Argus](./Argus/README.md): The Portfolio Monitor**
    *   **Function:** Serves as the automated nerve center for day-to-day risk oversight. Argus synthesizes cleaned internal data to identify macro-level trends, concentrations, and breaches against the firm's established Risk Appetite Framework.
    *   **Core Technology:** Predictive Analytics, Time-Series Analysis.

4.  **[Odyssey](./Odyssey/README.md): The Strategic Synthesizer**
    *   **Function:** Acts as a meta-level orchestrator for the C-suite. Odyssey evaluates the second-order risks and strategic implications of major proposed initiatives (e.g., acquisitions, new market entries), synthesizing inputs from other agents to provide a holistic risk/reward assessment.
    *   **Core Technology:** Generative AI (LLMs), Logic/Rule Engines.

## How to Use This Library

Each persona directory contains a set of artifacts designed for maximum flexibility and adaptability:

*   **`README.md`**: A detailed explanation of the persona's role, capabilities, and intended use.
*   **`system_prompt.md`**: The core system prompt or set of instructions that defines the agent's behavior, inputs, and output format. This can be used in various LLM frameworks.
*   **`api_schema.json`**: A JSON Schema defining a contract for programmatic interaction, detailing the expected structure of inputs and outputs.
*   **`pseudo_code.txt`**: A language-agnostic outline of the agent's logical workflow.
*   **`code_snippets.py`**: Practical Python code examples demonstrating how to interact with the agent or process its output.

This modular structure allows developers and risk professionals to understand, implement, and extend the capabilities of the AI risk ecosystem in a controlled and scalable manner.
