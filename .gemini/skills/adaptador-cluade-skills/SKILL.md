---
name: Adaptador de Skills
description: Use when importing or integrating external skills from Cloud, OpenCode, or other sources into the local .gemini/skills directory to ensure full compatibility with the Gemini CLI format.
---

# Skill Adapter

## Overview
This skill provides a standardized workflow for adapting external skill documents and structures into the specific format required by the Gemini CLI. It ensures consistency, visibility, and proper functionality of imported skills.

## When to Use
- When downloading skills from cloud repositories.
- When importing open-source skills from platforms like OpenCode.
- When existing skills do not follow the `.gemini/skills/<skill-name>/SKILL.md` structure.
- When skill metadata (frontmatter) is missing or formatted incorrectly for Gemini CLI.

## Core Pattern: The Adaptation Workflow

1.  **Normalization**: Rename the main instruction file to `SKILL.md` (all caps).
2.  **Relocation**: Move the skill folder to `.gemini/skills/<kebab-case-name>/`.
3.  **Frontmatter Alignment**: Ensure YAML frontmatter contains exactly `name` and `description`.
4.  **Structure Enforcement**: Create missing subdirectories (`scripts/`, `references/`, `assets/`).
5.  **Language Verification**: Ensure instructions are clear and follow the project's language conventions (Spanish for file names, English for internal instructions if requested).

## Quick Reference: Gemini CLI Standards

| Requirement | Standard |
|-------------|----------|
| **Location** | `.gemini/skills/<name>/` |
| **Main File** | `SKILL.md` (Required) |
| **Frontmatter** | `name` and `description` (YAML) |
| **Naming** | `kebab-case` for directories |
| **Folders** | `scripts/`, `references/`, `assets/` |

## Common Mistakes
- **Incorrect Path**: Placing `SKILL.md` in the root instead of its specific folder.
- **Malformed Frontmatter**: Adding extra fields in the YAML header that are not supported.
- **Lower-case File**: Naming the file `skill.md` instead of `SKILL.md`.

## Rationalization Table

| Excuse | Reality |
|--------|---------|
| "It works as it is" | Inconsistent structure makes skills harder to find and manage by the agent. |
| "I'll fix the format later" | Immediate formatting prevents discovery errors and context bloating. |
| "The source format is better" | Gemini CLI requires a specific contract to load skills reliably. |

## Red Flags - STOP and Adapt
- Skill lacks a `SKILL.md` file.
- Skill is stored in a compressed format (.zip, .skill).
- Skill directory name contains spaces or special characters.
