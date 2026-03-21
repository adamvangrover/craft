# Symphony Service Specification (Financial Learning Hub Customization)

Status: Draft v1 (repo-customized)

Purpose: Define a service that orchestrates coding agents to get project work done for the Financial Learning Hub.

## 1. Problem Statement

Symphony is a long-running automation service that continuously reads work from an issue tracker
(Linear in this specification version), creates an isolated workspace for each issue, and runs a
coding agent session for that issue inside the workspace.

For the Financial Learning Hub, Symphony automates content creation, link checking, interactive hub updates,
and knowledge base generation. It solves four operational problems:

- It turns content creation and verification (e.g., running `verification/verify_kb_artifacts.py`) into a repeatable daemon workflow.
- It isolates agent execution in per-issue workspaces (clones of this repository) to ensure stable builds and tests.
- It keeps the workflow policy in-repo (`WORKFLOW.md` alongside `AGENTS.MD`) so teams version the agent prompt and runtime settings with the content.
- It provides observability to operate and debug concurrent agent runs across different learning pillars (e.g., `Sustainable_Finance`, `Wealth_Management`).

Important boundary:
- Symphony is a scheduler/runner.
- Ticket writes (state transitions, PR links) are performed by the coding agent using tools available.
- A successful run may end at a workflow-defined handoff state (for example, `Human Review` for a new Primer).

## 2. Goals and Non-Goals

### 2.1 Goals
- Poll the issue tracker and dispatch content work with bounded concurrency.
- Create deterministic per-issue workspaces (cloning the repo) and preserve them across runs.
- Stop active runs when issue state changes make them ineligible.
- Recover from transient failures with exponential backoff.
- Load runtime behavior from `WORKFLOW.md` and respect `AGENTS.MD` guidelines.
- Support restart recovery without requiring a persistent database.

### 2.2 Non-Goals
- Rich web UI or multi-tenant control plane.
- General-purpose distributed job scheduler.
- Built-in business logic for how to edit HTML or Jupyter Notebooks (that logic lives in the workflow prompt, `AGENTS.MD`, and agent tooling).

## 3. System Overview

### 3.1 Main Components
1. `Workflow Loader`: Reads `WORKFLOW.md` and parses YAML front matter and prompt body.
2. `Config Layer`: Exposes typed getters for workflow config values.
3. `Issue Tracker Client`: Fetches candidate issues (e.g., "Add WACC Calculator module").
4. `Orchestrator`: Owns the poll tick and decides which issues to dispatch.
5. `Workspace Manager`: Maps issue identifiers to workspace paths (e.g., cloning the Financial Learning Hub repo).
6. `Agent Runner`: Creates workspace, builds prompt, and launches the coding agent app-server client.
7. `Observability Layer`: Emits structured runtime logs.

## 4. Core Domain Model

### 4.1 Entities

#### 4.1.1 Issue
Normalized issue record used by orchestration.
- `id` (string)
- `identifier` (string, e.g., `CRAFT-123`)
- `title` (string, e.g., `Add Credit Scoring Model`)
- `state` (string)
- `branch_name` (string or null)
- `labels` (list of strings)

#### 4.1.2 Workflow Definition
Parsed `WORKFLOW.md` payload with configuration and the prompt template.

#### 4.1.4 Workspace
Filesystem workspace assigned to one issue identifier.
- `path`: Example: `/tmp/symphony_workspaces/CRAFT-123`

## 5. Workflow Specification (Repository Contract)

### 5.1 File Discovery
Default: `WORKFLOW.md` in the current process working directory (the root of the Financial Learning Hub).

### 5.3 Front Matter Schema (v0.1 Implementation Status)
Currently, this repo relies on `AGENTS.MD` and manual/interactive agent runs. A target v0.1 Symphony integration would define a `WORKFLOW.md` like this:

```yaml
---
tracker:
  kind: linear
  project_slug: craft-content
  active_states: [Todo, In Progress]
  terminal_states: [Done, Canceled]
polling:
  interval_ms: 30000
workspace:
  root: /tmp/finance_hub_workspaces
hooks:
  after_create: |
    git clone https://github.com/your-org/financial-learning-hub.git .
    pip install -r requirements.txt
  before_run: |
    git fetch origin
    git checkout -B $ISSUE_BRANCH
  after_run: |
    python comprehensive_knowledge_base/build_kb.py
    python verification/verify_kb_artifacts.py
agent:
  max_concurrent_agents: 5
codex:
  command: codex app-server
---
```

## 6. Configuration Specification
- Dynamic Reload Semantics: The software watches `WORKFLOW.md` for changes and re-applies them without restart.

## 7. Orchestration State Machine
- Transitions: Unclaimed -> Claimed -> Running -> Released.
- Turn logic: Agents may run multiple turns per issue (e.g., one turn to write `js/nav_data.js`, another to write `home.html`).

## 8. Polling, Scheduling, and Reconciliation
- Tick sequence: Reconcile running issues, run dispatch preflight, fetch candidates, sort by priority, dispatch eligible issues.

## 9. Workspace Management and Safety
- For the Financial Learning Hub, the workspace is an isolated clone of the repo.
- Hooks (`after_create`, `after_run`) are critical for ensuring `build_kb.py` and `verification/*.py` scripts are run to validate content changes.

## 10. Agent Runner Protocol
- The agent runner executes the codex app-server within the workspace.
- The prompt instructs the agent to follow `AGENTS.MD`, use `nav_data.js`, and write relative links.

## 11. Issue Tracker Integration Contract
- Uses Linear GraphQL to fetch active content creation tasks.

## 12. Prompt Construction
- Prompts are built using Liquid templates, injecting the `issue` context (e.g., `You are tasked with {{issue.title}}`).

## 13. Logging and Observability
- Emits structured logs including `issue_identifier` and `session_id`.

## 14. Failure Model and Recovery Strategy
- Converts worker failures to retries with exponential backoff.
- Stops runs if tracker state changes to terminal or non-active.

## 15. Security and Operational Safety
- Workspace isolation prevents agents from modifying the host or other issues' code.
- `AGENTS.MD` acts as a soft boundary for content guidelines, while Symphony enforces the hard execution boundaries.
