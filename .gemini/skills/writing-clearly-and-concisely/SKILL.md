---
name: writing-clearly-and-concisely
description: Use when writing prose humans will read—documentation, commit messages, error messages, explanations, reports, or UI text.
---

# Writing Clearly and Concisely

## Overview

Write with clarity and force. This skill covers what to do (Strunk) and what not to do (AI patterns).

## When to Use This Skill

Use this skill whenever you write prose for humans:
- Documentation, README files, technical explanations
- Commit messages, pull request descriptions
- Error messages, UI copy, help text, comments
- Editing to improve clarity

## Quick Reference: Strunk's Core Fixes

| Problem | Fix | Example |
|---------|-----|---------|
| Wordy / Indirect | **Omit needless words** | "the question as to whether" → "whether" |
| Passive Voice | **Use active voice** | "It was done by us" → "We did it" |
| Vague / Abstract | **Use concrete language** | "A period of unfavorable weather" → "It rained" |
| Negative Form | **Put statements in positive form** | "He did not think" → "He doubted" |
| Weak Emphasis | **Place emphatic words at end** | "Clarity is essential in writing" → "Writing must be clear" |

## Core Pattern: The Strunk-AI Filter

1. **Draft:** Write your initial content for accuracy.
2. **Cut:** Remove words that don't add meaning (pivotal, crucial, very, really).
3. **Active:** Ensure the subject is doing the action.
4. **Specific:** Replace "high-quality" or "efficient" with what it *actually* does.
5. **Human:** Read it aloud. If it sounds like a LinkedIn post or a marketing brochure, rewrite it.

## Common Mistakes

| Mistake | Why it fails | Fix |
|---------|--------------|-----|
| **AI Puffery** | Words like "pivotal", "seamless", "tapestry" signal generic, non-human output. | Use specific, boring words that accurately describe the function. |
| **Empty -ing** | "ensuring reliability", "showcasing features" are filler. | Use direct verbs: "This ensures reliability" or just "It works reliably." |
| **Hedge words** | "I think", "It appears that", "Basically" weaken your authority. | Delete them. State the fact directly. |
| **Succession of loose sentences** | Too many "and" or "but" connections make the reading tiring. | Break them into short, punchy sentences. |

## Red Flags - STOP and Rewrite

- You used the word "leverage", "delve", or "comprehensive".
- You have more than 2 adjectives before a noun (e.g., "groundbreaking, innovative, seamless solution").
- Your sentence starts with "This platform enables users to..."
- You feel the urge to add an emoji to "soften" the technical tone.

## Rationalization Table

| Excuse | Reality |
|--------|---------|
| "It sounds more professional/polished." | It sounds like a template. Clarity is more professional than puffery. |
| "I need to emphasize how good it is." | Facts emphasize quality. Adjectives hide a lack of facts. |
| "The user expects this tone in a README." | Users want to know what it does, not how "cutting-edge" it is. |
| "It's just a quick summary." | Wordy summaries take longer to read and hide the main point. |

## Reference Files (Stored in `references/`)

| Section | File | ~Tokens |
|---------|------|---------|
| Grammar, punctuation, comma rules | `references/02-elementary-rules-of-usage.md` | 2,500 |
| Paragraph structure, active voice, concision | `references/03-elementary-principles-of-composition.md` | 4,500 |
| Headings, quotations, formatting | `references/04-a-few-matters-of-form.md` | 1,000 |
| Word choice, common errors | `references/05-words-and-expressions-commonly-misused.md` | 4,000 |
| Detecting AI patterns | `references/signs-of-ai-writing.md` | 1,500 |

## Bottom Line

Writing for humans? Apply the Strunk rules and kill the AI puffery. If you're unsure, load `references/03-elementary-principles-of-composition.md`.