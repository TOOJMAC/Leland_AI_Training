---
name: session-wrapup
description: Close out a work session — commit and push changes on a branch, open a PR, and update the matching project card on portfolio.html from "Coming soon" to filled-in. Use when TJ says he's done for the session, wants to wrap up, ship, or save his work, or asks to "close this out."
compatibility: Requires a git repo with a GitHub remote, gh CLI, and a portfolio.html with a project cards array (id/title/desc/... pattern).
---

# Session Wrapup

TJ never commits directly to main — every session's work lands on a branch and goes through a PR (see his global CLAUDE.md rule). This skill automates that ceremony plus the portfolio update that historically followed it as a separate manual step.

## Step 1 — Check state

Run `git status` and `git branch --show-current`. If already on a feature branch with a clear name for this session's work, use it. If on `main` or an unrelated branch, create a new branch from `main` — ask TJ for a name if the session's topic isn't obvious from context (e.g. `L1-Session5`, `simplicity-<feature>`).

## Step 2 — Commit

Stage the files that are actually part of this session's work. Don't blanket `git add -A` — check `git status` output and use judgment (skip stray temp files, credentials, anything that looks like someone else's in-progress work). Write a commit message describing what changed and why, not a changelog of file names.

## Step 3 — Push and open a PR

Push the branch, then `gh pr create` with a title summarizing the change and a body covering what changed, why, and anything a reviewer (TJ) should double check. If a PR already exists for this branch, push new commits to it instead of opening a duplicate.

## Step 4 — Update the portfolio card

Look at `portfolio.html`'s project data array for a card whose `id`/`title` matches this session's work and whose `desc` is still `'Coming soon.'`. If one exists, ask TJ for a one- or two-sentence description of what was built (or infer it from the session's commits if it's unambiguous) and fill in the card — match the format and tone of the existing filled-in cards (see the `Spreadsheet Analysis` / `Data Analysis Presentation` cards as reference). Don't invent a card that doesn't exist, and don't touch cards that belong to other sessions.

Commit the portfolio update as part of the same PR from Step 3, not a separate one — it's part of the same session's deliverable.

## Step 5 — Report

Give TJ the PR URL and a one-line summary of what got committed, pushed, and updated. If anything was ambiguous (which branch, which card, what to write for the description), say what you assumed.
