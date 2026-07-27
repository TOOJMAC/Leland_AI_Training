---
name: email-manager
description: Triage the inbox and draft replies in TJ's voice. Use when TJ asks to check email, triage the inbox, catch up on email, or run the email manager. Pulls unread mail from the last 24 hours, filters out noise, and drafts replies for anything that needs a response — never sends, always leaves drafts for review.
compatibility: Requires Gmail MCP tools (search_threads, get_thread, get_message, create_draft, list_labels)
---

# Email Manager

Triage TJ's inbox and draft replies in his voice. This skill never sends mail — every reply lands as a Gmail draft for TJ to review and send himself.

## Before drafting anything

Read the `humanize-writing` skill, specifically the **Email Voice Guide** section at the bottom of its SKILL.md. All drafts must pass that guide's voice calibration tests (direct ask up top or at the end, no throat-clearing opener, short sentences, minimal greeting, no ceremony sign-off) as well as the hard floor in the main humanize-writing skill (no assistant bleed, no antithesis, no em-dashes, no invented specifics).

## Step 1 — Pull the mail

Search Gmail for unread messages from the last 24 hours, inbox only:

```
query: is:unread newer_than:1d in:inbox
```

For each thread returned, fetch full content (`get_thread`, `FULL_CONTENT`) so you have the actual body, not just the snippet — triage decisions need the real content, not a guess from a subject line.

## Step 2 — Filter out noise

Skip these entirely — no draft, don't even list them in the numbered output:

- Newsletters / marketing / subscribed digests
- Automated notifications (calendar auto-accepts, CI/build alerts, receipts, shipping confirmations)
- CCs where TJ isn't expected to act (he's copied for visibility only, thread doesn't need his input)
- Social/app notifications (LinkedIn, Slack digest emails, "someone mentioned you" alerts)

If it's genuinely ambiguous whether something is noise or a real thread, don't silently drop it — put it in the numbered "everything else" list rather than skipping it, and say why you weren't sure.

## Step 3 — Decide what needs a reply

Reply to:
- Direct questions
- Decisions needed from TJ
- Relationship emails (personal, not transactional)
- Time-sensitive items

**Meeting requests:** draft an acceptance by default ("Works for me, see you then" register — see Email Voice Guide). Only flag instead of drafting if the message itself states a conflict or the time is ambiguous.

**Cold outreach** (sales pitches, recruiters, unsolicited vendor pitches): draft a brief, polite decline. Keep it short — one or two sentences, no explanation owed.

**VIP senders:** TJ hasn't given a fixed list yet. Use judgment — frequent 1:1 correspondents, people who address him personally, anyone who reads as boss/family/close collaborator from context — and flag your reasoning when you treat someone as a VIP so TJ can correct it. If a future run gives you a fixed VIP list, use that instead of inferring.

## Step 4 — Decide, don't just ask

If you can make a reasonable call, make it and draft the reply — then note what you assumed inline with the draft (e.g. "Assumed you want the Draper location based on your last email to them"). Only flag as "needs input" when you're genuinely missing information you can't infer (a number, a date, a decision that's actually TJ's to make, not yours).

## Step 5 — Draft, never send

For every email that needs a reply, call `create_draft` with `replyToMessageId` set to the original message ID. Draft in TJ's voice per the Email Voice Guide — match the register to the email type (technical, transactional, follow-up, feedback, casual, vulnerable-personal). Never call anything that sends mail. Drafts stay in the Drafts folder for TJ to review and send himself.

## Step 6 — Report back

Structure the summary as:

1. **Urgent, first.** Urgent = VIP sender (TJ's current definition — who's from matters more than what it says). List these first regardless of numbering below.
2. **Everything else, numbered.** Every other thread that isn't noise, in one numbered list.

For each item show: sender, subject, one-line gist, what you did (drafted a reply / flagged for input / listed as ambiguous), and any assumption you made. For flagged items, say exactly what's missing.

Close with a short list of anything you're missing that would make future runs sharper (e.g. "no VIP list yet — I'm inferring from context").
