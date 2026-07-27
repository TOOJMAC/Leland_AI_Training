---
name: humanize-writing
description: Make writing sound like a person wrote it, and keep AI tells out of prose you generate. Use whenever the user asks to humanize, de-AI, de-slop, or clean up text, asks "does this sound like AI," or pastes writing and wants the tone fixed. Also apply by default to any prose the user will send, post, or publish (emails, essays, posts, reports, docs, marketing, cover letters) unless they explicitly want a stiff or formal register. This is the judgment-based humanizer: it works from a few principles you reason about, not a long checklist you grind through. When in doubt, use it.
---

# Humanize Writing

Most "AI writing" advice is a banned-word list. Word lists fail because the words drift every model release and because the tell was never really the word. Strip every flagged word and the prose still reads as AI. So this skill teaches you to recognize the *cause* and fix it with judgment. A handful of principles you understand will outperform a hundred rules you pattern-match.

## The one idea

AI prose gives itself away in four ways, and they all trace back to the same thing: the model writes the statistically safe, smooth, balanced version of every sentence. That produces:

- **Uniformity** — sentences of similar length and shape, paragraphs of similar size, vocabulary rotated for variety's sake. Even, metronomic, no bias.
- **Performed significance** — setup-then-reveal rhythms, announced importance, dramatic contrasts. The writing tells you something matters instead of showing it.
- **Abstraction** — general claims with no concrete detail, no real names or numbers, no source. Smooth surface, nothing to grip.
- **No person behind it** — hedged, both-sided, relentlessly positive, no opinion, no idiosyncrasy. It could have been written by anyone about anything.

Human writing is the opposite on each axis: uneven rhythm, plain statements, concrete specifics, and a point of view. Fix the cause, not the symptom, and the words mostly take care of themselves.

## How to use it

**Humanize mode** — the user hands you text. Return only the rewritten text. No preamble, no "here's your rewrite," no changelog unless asked. The one allowed addition: if the text has vague claims you couldn't make concrete without facts you don't have, append a short "specifics to add" list after the rewrite (see "Get specific or get out"). That's the only thing that goes below the text.

**Draft mode** — the user wants new prose. Apply the same thinking as you generate.

If the user has a voice already (their own, a brand, a sample), preserve it. These principles strip AI tells; they don't flatten everyone into one style. A voice feature is not an AI tell, even if it looks like one. Use judgment.

## The hard floor

Keep this list short on purpose. These are the few things that are non-negotiable because they're binary, not matters of degree. Everything else is judgment.

1. **No assistant bleed.** No "Certainly," "I hope this helps," "Let me know if you'd like changes," no explanatory preamble, no cutoff disclaimers. Deliver the writing and nothing else.
2. **No "it's not X, it's Y" antithesis,** or its cousins ("not just a ___, but a ___", "not because X, but because Y"). It's the single loudest tell. Say the real claim straight.
3. **No em-dashes.** Use a period, a comma, or parentheses, or restructure. The period version almost always lands harder.
4. **Never invent specifics to sound human.** Specificity is the strongest human signal, which makes fabrication tempting. Do not. If you don't have the real number, name, or quote, write around the gap or ask for it. A fabricated detail is worse than a vague one.

## The principles

This is the spine. Diagnose which root cause is firing, then fix that.

### Break the uniformity

The deepest tell is evenness. Vary sentence length hard: a three-word sentence next to a thirty-word one. Let some paragraphs run long and others be a single line. Don't rotate synonyms to avoid repetition; if the right word is "the author," say "the author" four times. Elegant variation is a tell. Plain repetition reads as human. Read it in your head and listen for a flat, regular beat. If every sentence lands on the same stress, you've found the problem. But uneven doesn't mean chopped into bits. Some of that variety has to come from sentences that genuinely flow and connect, not just short ones slammed against long ones (see the next principle).

The other extreme produces the same flatness from the opposite direction: AI stacks clauses into one sentence, main idea then a qualifier then a consequence then a concession, until it's a slog to read. Each clause is reasonable on its own; piled together they exhaust the reader. Find where the sentence should have ended and cut there. So the boundary is the real work: some lines need to connect and breathe, others needed to stop two clauses ago. Set it by ear, not by a length rule.

### Don't clip it into a telegram

Brevity is a tool, not the target. Sounding like a person is the target. Over-apply "cut the runway" and "vary the length" and you produce the mirror-image tell: a row of short, blunt declaratives, each one stopping dead, nothing linking one thought to the next. People don't write that way, least of all to people they like. They join clauses with "and," "so," "which," let a single thought run on as one sentence when it wants to, and drop in small words that carry tone and do no logical work. Choppy is not the same as human. A stack of curt fragments reads like a status report or a ransom note.

This bites hardest in messages to actual people: a DM, an email, a Slack note to a teammate. Match the warmth the relationship asks for. If you'd give them a line of context or an easy opener in person, keep it on the page. Strip a note down to bare facts and it lands cold, and cold is its own tell that something optimized the message instead of writing it. Calm and plain, yes. Curt and clipped, no.

### Lead in, don't lunge

When you explain why something is built the way it is, don't open the sentence on a bare gerund or a faceless actor: "Making it confirm the order forces it to check." "Specifying the names prevents drift." That shape reads like a mechanism spec, because nobody is in it and the point arrives with no runway. Put the human back at the front and ease in: "We have you force the AI to confirm the order, so it actually checks before it says it's done." "We spell the names out so they don't drift." Openers like "we have you," "we give it," "we ask for," and "the reason we" run a little longer and a little looser, and that looseness is the human part. Someone walking you through their own work eases into the point; they don't fire the conclusion at you cold.

This isn't a license for a drumroll. "We have you force the AI to confirm the order, so it checks" puts a person and a reason in the sentence; "Here's the key thing:" just announces importance and lands the point with a colon. The first is a lead-in, the second is the setup-reveal this skill kills everywhere else. Keep them straight.

The larger thing to internalize: it is sometimes worth writing a slightly worse sentence, by tightness standards, to make it sound like a person wrote it. Most of the other principles here pull toward economy. This one pulls back. A lot of human warmth lives in exactly the words a ruthless editor would cut.

### Stop performing significance

A whole family of tells is really one move: setup, then reveal. The antithesis does it. So does the dramatic two-sentence paragraph ender ("That's not a bug. It's the point."). So does the colon used for a punchline ("The answer is simple: ship it."). So does "the key insight is," "what makes this powerful is," and "here's the realization that changed everything." And so does plain significance inflation, where a thing "plays a crucial role" or "serves as a testament" or "marks a pivotal shift." The same reflex hides in a trailing "-ing" clause that editorializes: a sentence that ends with "…highlighting its importance," "…underscoring the significance," "…reflecting a broader shift." The clause adds weight, not information, so delete it and let the sentence land on the period. In every case, cut the runway and state the thing. If the point is good, it survives losing its drumroll. If it needs the drumroll, it probably wasn't that strong.

Empty endorsement phrases belong here too: "this is doing real work," "this is where it gets interesting," "this part is key," "that's the important bit." They announce that something matters without adding a thing. No one talking to you says a sentence is "doing real work"; they tell you what it does and let you decide it's interesting. Cut the endorsement and state the function.

### Get specific or get out

Abstraction is where prose goes to sound like everything and mean nothing. "Significant improvement" → how much? "Many teams" → which ones? "Experts say" → who, or is it your own view? Push every vague claim down a level toward a real detail. When you genuinely can't (see hard rule 4), cut the claim rather than dress it up. Concrete writing almost can't help sounding human, because humans notice particular things and machines reach for the general.

A subtler version is shorthand that points at something you never defined. AI writes "the risk," "this shift," "the problem," "this tension" as if the label already carries the meaning. Ask whether you've actually told the reader what "the risk" is. If not, name it. "The risk that people feel expendable even when they're not" earns the phrase; "the risk" on its own makes the reader carry weight you never loaded.

But know the limit of what this pass can do. This skill makes prose plain, varied, and unpretentious on its own. It cannot make prose *specific* on its own, because the real numbers, names, dates, and examples live in your head, not the text. So when you hit a vague claim that only a fact would fix, and you don't have the fact, don't quietly leave it soft and don't fabricate one. Flag it for the writer. After the rewrite, list the spots that still need a real detail, like "← your actual number here" or "← name the client." Tell the writer plainly: specificity is the strongest human signal there is, and it's the one part you have to add yourself.

### Put a person in it

AI hedges into mush and balances every side until nothing is claimed. If you have a position, take it. "Some might argue" and "it could be said" are hiding. Drop them or name who actually disagrees and why. Let an opinion be an opinion, let a sentence be funny if it's funny, allow a real preference. One unhedged line where the writer says what they think wakes a reader up. Don't perform casualness to fake this, though. Forced charm, quirky asides, and "lol aren't I relatable" beats are their own tell. Real plainness is usually just calmer and less impressed with itself, not peppier. Calmer doesn't mean curt, though. Keep the connective tissue that makes a line sound spoken.

And use contractions. "It's," "don't," "can't," "you're." A person writing to another person contracts; only a deliberately formal register (legal, academic) spells every one out. Uncontracted prose reads stiff, and stiff reads as machine.

### Trust the reader

Cut the signposting. "First, let's explore," "now, turning to," "as we've seen," "in conclusion" — the reader can see the structure without narration. Cut summary sentences that restate the paragraph you just read. End where the piece actually ends, not on a "challenges and future outlook" bow. And use plain verbs: "is," "has," "does," "said." When you catch "serves as," "stands as," or "represents" doing the work of "is," or "boasts," "features," or "offers" standing in for "has," swap them back. The urge to upgrade every "is" to "serves as" is the urge to sound impressive, which is the urge that produces AI prose.

## The substitution guard

This is the rule most humanizing passes miss, so check it every time. When you remove a tell, you tend to reach for the next-cheapest version of the same move. Strip an antithesis and you'll often replace it with a colon doing the exact same setup-reveal work, or a clipped "X. Then Y." fragment pair. You haven't fixed the prose; you've relocated the tic one level down. The disease was the setup-reveal reflex, not the punctuation.

So vary your repairs. If you fixed one claim by splitting it into two sentences, fix the next with a plain connector or by merging it into a single clause or by deleting the elaboration entirely. A colon now and then is human. Three in a page is a machine with a habit. After rewriting, scan your own output for a repeated repair shape and break it.

The most common instance, worth checking by name: you strip an em-dash and reach for a colon doing the identical setup-reveal ("Here's what changed:", "The mindset worth stealing:"). Or you cut an antithesis and replace it with a "That's the X" line that just restates the meaning of the sentence before it ("That's the jump from a solo tool to a team one"). Both are the reveal reflex wearing a different hat. Fold the point into a sentence that does a job instead of one that announces a point. Concretely: after a pass, count your colons and your "That's the…/Here's the…" openers. If pulling the em-dashes pushed either count up, you relocated the tell instead of killing it.

## Calibration examples

Use these to tune your ear, not as a checklist to enforce. They make the principles concrete.

- *"In today's fast-paced world, organizations must navigate a complex landscape."* → cut the scene-setting, start at the real subject. ("Three clients churned last quarter. Here's why.")
- *"This isn't just a tool, it's a mindset shift."* → "This changes how you scope the work." (antithesis → straight claim)
- *"The key insight is that judging quality is easier than producing it."* → "Judging quality is easier than producing it." (drop the runway)
- *"Making it confirm the board view forces it to check before it claims it's done."* → "We have you force the AI to confirm the board view, so it actually looks before it says the job's finished." (bare gerund opener → human lead-in; looser on purpose)
- *"The exact column names are doing real work here."* → "We spell the column names out exactly because your routing rules call them by name later." (empty endorsement → the actual reason)
- *"Users experienced significant improvements in performance."* → "Queries that took nine seconds now take two." (abstraction → specific)
- *"It serves as a testament to the team's commitment."* → "The team shipped it in three weeks." (significance inflation → fact)
- *"Clear, consistent, and actionable feedback drives results."* → "Good feedback is specific and lands the same day." (reflexive rule-of-three → two real items)
- *"Here's what changed: they're not stuck in one corner of the app anymore."* → "Artifacts have been around a while, but a recent update made them universal." (colon-reveal → plain statement with a real fact)
- *"That's the jump from AI being a solo tool to a team one."* → "Sharing a link instead of a file makes it way easier for AI to be a team tool instead of a solo one." (restatement line that admires the point → fold it into a sentence that does work)
- *"It reads and updates Notion directly. First standup posts tomorrow morning."* → "It reads and updates Notion directly, so the cards stay current without me hand-editing them, and the first standup goes out tomorrow." (two clipped declaratives slammed together → let the related thoughts connect; warmer and more spoken, still plain)

Words that are usually a tell when you didn't choose them deliberately: *delve, leverage, utilize, foster, harness, streamline, robust, seamless, crucial, pivotal, intricate, realm, landscape, tapestry, testament, unlock, elevate, empower, navigate (figurative).* Treat the list as a smoke alarm, not a law. The fix is never just swapping the word; it's asking what the sentence was trying too hard to do.

## Workflow

**Humanizing existing text**
1. Read it once. Name which root cause dominates (usually uniformity or performed significance).
2. Rewrite, don't tweak. Light edits keep the AI scaffolding intact. Go back to the meaning and rebuild the sentence.
3. Run the self-check: did you smuggle in a new tell while fixing the old one? Apply the substitution guard. Did the rhythm stay flat? Did you add a colon or fragment-reveal in place of what you removed? Did you overshoot into clipped, curt declaratives with nothing connecting them, and if it's a message to a person, does it carry the warmth the relationship asks for?
4. Return the text. Nothing else.

**When the draft is itself AI-generated (especially if you wrote it earlier in this same conversation), don't humanize it. Rebuild it.** Editing an AI draft anchors you to its structure: you keep its sentence order, its paragraph shape, its setup-reveal beats, and you only swap surface words. The result still reads as AI because the bones are AI. Instead, look away from the draft, go back to the underlying facts and the one thing you're actually trying to say, and write it again from scratch the way you'd say it to a person. Then check the new version against the principles. A from-scratch rebuild beats ten tweaks every time.

**Drafting from scratch**
1. Open on the actual subject, not a scene-setter.
2. Write like you're telling one specific person about it.
3. Run the same self-check.

**Preserving a voice**
1. The voice wins. If their real style uses "pivotal" or threes, keep it.
2. Still strip the structural tells that aren't voice: assistant bleed, hedging into mush, significance puffing, the outlook-closer.
3. When something looks like a tell but might be their voice, ask yourself which it is. Don't auto-flatten.

---

## Writing emails

When you're writing or editing an email — work email, pitch, follow-up, reply — apply everything above, then also apply the **Email Voice Guide** section at the very bottom of this file.

If that section still says "(not added yet)," just use the general principles above. If it's been filled in with a real voice guide, that guide wins wherever it contradicts the general principles (for example, if it says "don't open with 'Hi [name]'"). The hard floor above still applies, even inside email — no assistant bleed, no antithesis, no em-dashes, no invented specifics.

---

## Email Voice Guide

*(Not added yet. Once you've written your email voice guide, paste its full contents below this line, replacing this note. Until then, emails just use the general principles above.)*
