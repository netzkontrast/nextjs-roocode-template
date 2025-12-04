# Final Task List

Based on the analysis and multi-persona refinement, here is the final set of actionable tasks to extract the best ideas from this repository and adapt them for a high-efficiency "Jules" workflow.

## 1. Create a "Role Registry"
**Goal:** Decouple "Modes" from specific plugin configurations and make them portable "Role Cards".
- **Action:** Create a directory `agent/roles/`.
- **Files:**
    - `agent/roles/product_manager.md`: Focus on requirements, user stories, and acceptance criteria.
    - `agent/roles/architect.md`: Focus on system design, directory structure, and data flow.
    - `agent/roles/developer.md`: Focus on implementation, testing, and clean code.
    - `agent/roles/qa_auditor.md` (formerly PMO): Focus on verifying "Definition of Done".
- **Benefit:** Allows Jules to "put on a hat" by reading a specific file, making the workflow agent-agnostic.

## 2. Centralize Project Configuration
**Goal:** Remove duplication and ambiguity in rules.
- **Action:** Create a `agent/config/` directory.
- **Files:**
    - `agent/config/tech_stack.md`: Defined versions of Next.js, Tailwind, etc.
    - `agent/config/coding_standards.md`: Naming conventions, specific patterns (e.g., "Zustand slices").
- **Integration:** All Role Cards will reference these files (e.g., "Refer to `agent/config/coding_standards.md` for naming rules").

## 3. Establish the "Memory Bank" Protocol
**Goal:** Externalize project context to persist state across sessions and reduce token usage.
- **Action:** Create a standard structure `docs/memory/`.
- **Files:**
    - `docs/memory/active_context.md`: Current focus, recent decisions, immediate next steps.
    - `docs/memory/project_status.md`: High-level roadmap and progress.
    - `docs/memory/decisions_log.md`: Record of architectural decisions (ADR).
- **Rule:** The agent must read `active_context.md` at the start of a session and update it at the end.

## 4. Implement the "Reflection & Confidence" Protocol
**Goal:** Institutionalize self-correction without "rituals" like "YARRR!".
- **Action:** Add a "Meta-Instruction" to the base prompt or `agents.md`:
    - *Before Action:* "State your plan and Confidence Score (0-10)."
    - *After Action:* "Verify the result. Update Confidence Score."
- **Benefit:** Catches hallucinations and errors early.

## 5. Standardize "Colocation" with Scaffolding
**Goal:** Enforce the "Colocation Pattern" (Code + Test + Types in one folder) automatically.
- **Action:** Create a script `scripts/scaffold-feature.ts`.
- **Function:** Generates the folder structure ensuring `page.tsx`, `layout.tsx`, `component.tsx`, and `component.spec.ts` are created together.
- **Benefit:** Removes the burden of remembering the structure from the agent.

## 6. Automate Governance (Replace PMO Mode)
**Goal:** Verify rules programmatically.
- **Action:** Configure `lefthook` or a custom script `scripts/audit_project.ts`.
- **Checks:**
    - "Does every component file have a corresponding `.spec.ts`?"
    - "Are there any 'TODO' comments older than 1 week?"
    - "Do strict naming conventions apply?"

---

# Greenfield Approach: Re-imagining for the Future

If we were to build this system from scratch today, knowing what we know, we would aim for a **"Self-Correcting, State-Aware Agent Ecosystem"**.

### Core Philosophy
Instead of a rigid linear flow (PM -> Arch -> Code), we treat the process as a **Feedback Loop**.

### The Setup
1.  **The "Brain" (Memory Bank)**: The file system is the only source of truth. The chat history is ephemeral.
2.  **The "Nervous System" (CI/CD & Scripts)**: We don't ask the agent "Did you check the tests?". We run the tests automatically. We don't ask "Is the name correct?". The linter fails if it isn't.
3.  **The Agent**: Jules acts as the **Operator**.
    - He reads the *Memory Bank*.
    - He executes a *Role* (e.g., "I am coding now").
    - He runs *Tools* (Scaffold, Test, Audit).
    - He updates the *Memory Bank*.

### Optimization
- **Lean Context**: We split the rules. When coding, Jules doesn't need to know how to write a PRD. He only loads `roles/developer.md`.
- **Fast Fail**: We use strong typing and strict linting (ESLint, Zod) to catch errors before the agent even "thinks" about them.
- **Human-in-the-Loop**: The PM role isn't just a generator; it's a *questioner*. It asks the user for clarification before assuming requirements.

### Result
A repository that is not just a codebase, but a **workplace** where the agent has a desk (Memory Bank), a handbook (Roles), and power tools (Scripts).
