# Task Extraction & Refinement Scratchpad

## Initial Task List (Draft)

Based on the Critique and Overview, here are the raw tasks to extract and condense the best ideas for a new "Jules-optimized" project.

1.  **Abstract the "Mode" System**: Create a generic way to switch contexts/personas without relying on specific plugin config files (`.clinerules`).
2.  **Unify Documentation**: Merge the split rule files (`.clinerules-*`) into a single source of truth or a better-organized library of prompts.
3.  **Implement Externalized Context**: Create a standardized way to maintain `memory-bank/` or `docs/` as the "brain" of the project, independent of the chat history.
4.  **Refine the "Confidence" & "Self-Check" Rituals**: Adapt the "YARRR!" and "Confidence Score" into a more natural but rigorous self-reflection step for Jules.
5.  **Standardize the Colocation Architecture**: Extract the folder structure guidelines into a reusable template or CLI generator.
6.  **Automate "PMO" Checks**: Instead of a "PMO Mode", create a script or a set of pre-commit hooks that verify rule compliance programmatically where possible.
7.  **Resolve Test Location Conflict**: Decide on one testing strategy (Colocation vs. `src/spec`) and enforce it.
8.  **Create a "Kickoff" Prompt**: A master prompt that initializes Jules with the project context and roles.

---

## Persona Discussion

**Participants:**
- **PM (Project Manager)**: Experienced, pragmatic, focuses on efficiency and results.
- **Arch (Software Architect)**: Focuses on structure, scalability, and technical correctness.
- **Prompt (Prompt Engineer)**: Focuses on how to effectively instruct the LLM.
- **Context (Context Engineer)**: Focuses on managing the limited context window and memory.
- **Tool (Agent Toolkit Enthusiast)**: Loves automation and tools.

### Task 1: Abstract the "Mode" System

**PM**: "We need to keep the distinct roles because they work. But we don't want to be tied to `.clinerules`. How do we make this work for Jules?"

**Prompt**: "We can create a library of 'System Prompts' or 'Role Cards'. When Jules needs to be a PM, he loads the PM card. When he needs to code, he loads the Coder card."

**Tool**: "We could have a tool called `switch_role(role_name)` that loads the specific instructions into the context."

**Arch**: "This is better than one giant file. It keeps the context clean. Let's call this task 'Create Role Registry'."

**Refined Task 1**: *Create a `roles/` directory containing optimized system prompts for PM, Architect, and Developer. Implement a mechanism (manual or tool-based) for Jules to `load_role`.*

### Task 2: Unify Documentation

**PM**: "The current rules are repetitive. Tech stack is listed in 3 places. That's a maintenance nightmare."

**Arch**: "Agreed. We should have a `project_config.md` or `tech_stack.md` that is referenced by all roles. The roles should just say 'Read `tech_stack.md`'."

**Context**: "This saves tokens! We don't need to feed the full tech stack in every system prompt. Only when needed."

**Refined Task 2**: *Centralize project configuration (Tech Stack, Conventions) into a single source of truth (e.g., `config/project-standards.md`) and have Role Prompts reference it.*

### Task 3: Implement Externalized Context

**PM**: "The `requirements.md` and `architecture.md` are great. We need to keep that."

**Arch**: "Let's formalize the 'Memory Bank' concept. Active Context, Arch Decisions, Todo List should be files that Jules *must* read at the start of a session."

**Refined Task 3**: *Establish a 'Memory Bank' structure (`docs/memory/`) with mandatory files: `active_context.md`, `project_status.md`, `decisions.md`.*

### Task 4: Refine "Confidence" & Self-Check

**PM**: "The 'YARRR!' thing is... quaint. But is it professional? And do we need it?"

**Prompt**: "It's a 'cognitive anchor'. It forces the model to acknowledge the instruction. But for Jules, who is smarter, maybe we just need a 'Pre-computation Reflection'."

**PM**: "I want certainty. I like the confidence score. Keep that."

**Refined Task 4**: *Implement a 'Reflection Protocol' in the base system prompt. Before executing complex tasks, Jules must output a brief plan and a confidence score.*

### Task 5: Standardize Colocation Architecture

**Arch**: "Colocation is the way. The conflict with `src/spec` in the translation was a bug in the original repo's rules. We fix it now. Tests go next to code."

**PM**: "Make it a template. A 'Feature Scaffold' script?"

**Tool**: "Yes! A script `create-feature.ts` that generates the folder, the component, the test, and the types file."

**Refined Task 5**: *Create a Feature Scaffolding Script (or strict guidelines) that enforces the Colocation Pattern (Component + Test + Hook + Types in one folder).*

### Task 6: Automate PMO Checks

**PM**: "I don't trust an AI to check itself fully. 'PMO Mode' is weak."

**Tool**: "We can use `lefthook` or a custom linter to check for things like: 'Does every component have a `.spec.ts` file?' 'Are there comments?'"

**Arch**: "Static analysis is better than AI vibes. Let's offload rule checking to code."

**Refined Task 6**: *Replace 'PMO Mode' with automated governance scripts/linters where possible (e.g., check for test existence, file naming conventions).*

### Task 7: Greenfield Re-imagination

**PM**: "Okay, if we start fresh, what do we do differently?"

**Arch**: "We assume the agent is a *partner*, not a junior dev. We give them high-level goals. We use a 'Plan -> Execute -> Verify' loop."

**Context**: "We keep the context small. We don't load the whole repo. We use `grep` and `read_file` intelligently."

**PM**: "So, the new project is a 'Self-Managing Agent Environment'. It has the memory bank, the role cards, and the tools."

---

## Final Plan for "Jules-Optimized" Workflow

1.  **Role Registry**: `roles/pm.md`, `roles/arch.md`, `roles/dev.md`.
2.  **Central Config**: `config/tech-stack.md`, `config/conventions.md`.
3.  **Memory Bank**: `memory/status.md`, `memory/context.md`.
4.  **Reflection Protocol**: Integrated into the "Base Agent" instructions.
5.  **Automated Governance**: Scripts to verify structure.
