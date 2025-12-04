# Task Discussion: Unify Documentation

**Participants:** PM, Architect, Context Engineer

## Dialogue

**PM**: "The current rules are repetitive. Tech stack is listed in 3 places. That's a maintenance nightmare."

**Arch**: "Agreed. We should have a `project_config.md` or `tech_stack.md` that is referenced by all roles. The roles should just say 'Read `tech_stack.md`'."

**Context**: "This saves tokens! We don't need to feed the full tech stack in every system prompt. Only when needed."

## Outcome
**Refined Task**: *Centralize project configuration (Tech Stack, Conventions) into a single source of truth (e.g., `config/project-standards.md`) and have Role Prompts reference it.*
