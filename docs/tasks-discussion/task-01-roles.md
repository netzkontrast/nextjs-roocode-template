# Task Discussion: Abstract the "Mode" System

**Participants:** PM, Architect, Tool Enthusiast

## Dialogue

**PM**: "We need to keep the distinct roles because they work. But we don't want to be tied to `.clinerules`. How do we make this work for Jules?"

**Prompt**: "We can create a library of 'System Prompts' or 'Role Cards'. When Jules needs to be a PM, he loads the PM card. When he needs to code, he loads the Coder card."

**Tool**: "We could have a tool called `switch_role(role_name)` that loads the specific instructions into the context."

**Arch**: "This is better than one giant file. It keeps the context clean. Let's call this task 'Create Role Registry'."

## Outcome
**Refined Task**: *Create a `roles/` directory containing optimized system prompts for PM, Architect, and Developer. Implement a mechanism (manual or tool-based) for Jules to `load_role`.*
