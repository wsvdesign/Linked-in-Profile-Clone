# LINKEDIN-GAMERCARD-PROFILE-FEATURE

## Product Requirements Document: Linkedin New Feature

**Feature name:**  
GamerCard Profile Feature

**Owner:**  
Natalie — Product / Frontend / Backend / Build Lead  
Marc P. — Discord Profile Build / Image Support / Research

**Date:** June 15, 2026

---

## 1\. PROBLEM

Career-minded gamers and game developers like Leo experience a credibility gap on professional platforms because their gaming identity — the skills, roles, achievements, games they have built, and community presence that define them — lives scattered across Discord, Steam, Twitch, YouTube, itch.io, GitHub, Xbox, PlayStation, and other gaming platforms.

A LinkedIn-style profile can show education, work history, and technical skills, but it does not fully show gaming credibility. For a game developer, the most important proof may be what they have built, what they play, how they collaborate, how they lead, and how their community responds to their work.

As a result, users like Leo have to send multiple links, explain their gaming identity manually, and hope a hiring manager, team captain, studio lead, or collaborator understands the full picture. The proof exists, but it is scattered. The opportunity is to create a GamerCard feature inside the LinkedIn-style clone that makes gaming identity professional, scannable, and credible.

---

## 1a. Background & Dependencies

Related prior work: Week 1 LinkedIn-style profile clone, which includes top navigation, profile card system, sidebar, action buttons, and fixed Messaging tab. GamerCard builds on this foundation.

Product dependency: GamerCard is a feature within the LinkedIn-style clone. It should feel like LinkedIn added a gaming-professional identity layer, not like a separate app.

Team dependency: Natalie is leading product direction, frontend, backend planning, PRD work, and the main GamerCard build. Marc P. is supporting the feature by building the Discord profile reference/component, assisting with Leo image support, and contributing research.

Design constraint: This feature should not copy Discord’s layout. Discord is useful as a source of gaming identity patterns, such as status, handle, favorite games, widgets, activity, community presence, and platform connections. However, the GamerCard page must remain inside the LinkedIn-style product system: top navigation, profile layout, content cards, action buttons, sidebar areas, tabs, and the fixed Messaging tab.

Technical constraint: The MVP is frontend-first. It can use static Leo data and mock content. No real API integrations, authentication, database, payments, forum infrastructure, game hosting, or LinkedIn submission API are required for this version.

Business dependency: The feature needs to make the free profile and premium upgrade path clear without requiring real payments, real verification, or a backend analytics system.

---

## 1b. Target User / Persona

Leo is a 24–25-year-old Mexican and Native American game developer from Albuquerque, New Mexico. He is a serious gamer, builder, and new professional trying to make gaming and game development part of his career identity.

Leo comes from a family with a strong creative and cultural background, including arts, crafts, pottery, basketry, jewelry, and handmade design. His family values making, skill, discipline, and cultural continuity. Leo respects that tradition, but he is trying to carry that creative inheritance into a newer space: gaming, game development, online communities, and digital identity.

For Leo, gaming is not casual. It is where he wants to prove himself. He wants his family, peers, collaborators, and future employers to understand that gaming can also be a serious creative and technical path. He needs a profile that shows his gaming identity as disciplined, skilled, collaborative, and credible.

Leo is new to LinkedIn, but he is already fluent in gaming platforms and gaming communities. His identity is spread across Steam, Discord, Twitch, YouTube, Xbox, PlayStation, TikTok, itch.io, GitHub, and other game-related spaces. He needs one professional profile layer that can organize those signals without making him look less serious to a hiring manager, team captain, peer, or collaborator.

---

## 1c. Target Use Cases

As Leo, a new game developer, I want one profile that shows both my professional credentials and gaming identity so that I can share one link with hiring managers, team captains, peers, and collaborators.

As Leo, I want to show the games I have built, including descriptions, links, project roles, and proof, so that a studio lead or hiring manager can see my shipped work without needing separate GitHub, itch.io, or portfolio links.

As Leo, I want to show my games played, roles, achievements, stats, clips, Discord/contact details, and team availability so that people can understand how I play and where I fit.

As a team captain, I want to scan a GamerCard quickly so that I can decide whether a player fits my squad without chasing them across Discord, Steam, Twitch, and YouTube.

As a hiring manager or studio lead, I want gaming-related skills and shipped projects presented in a professional format so that I can connect a candidate’s game development work to their career direction, collaboration style, and technical ability.

As a peer or classmate, I want to understand someone’s gaming identity and see what they have built without leaving their profile page or opening multiple platforms.

---

## 1d. Current User Journey

Leo updates or shares his LinkedIn-style profile.  
→ Problem: His professional profile does not show the gaming signals that matter: games, roles, rank, clips, Discord presence, achievements, games built, or team availability.

A team captain messages Leo and asks what he plays and where they can see his clips.  
→ Problem: Leo has to send separate links to Steam, YouTube, Discord, Twitch, and individual game profiles.

A hiring manager opens Leo’s profile and sees a clean professional layout: education, work history, and skills.  
→ Problem: The profile looks complete, but it does not show the games Leo has built, the communities he participates in, the roles he plays, or the proof of his gaming and development work.

A studio lead wants to know what Leo has shipped. Leo sends a GitHub link and an older portfolio site.  
→ Problem: His work is real, but the presentation is disconnected from his professional identity.

Leo wants his gaming identity to sit beside his professional identity.  
→ Problem: Traditional professional profiles do not make space for player roles, rank, game stats, team availability, clips, community credibility, or games built.

---

## 2\. PROPOSED SOLUTION

Add a GamerCard profile feature inside the LinkedIn-style clone that gives Leo a dedicated gaming-professional profile page using the existing LinkedIn layout system.

The feature keeps the familiar LinkedIn-style structure: top navigation, profile cards, sidebar areas, action buttons, tabs, and fixed Messaging tab. The content changes to support gaming identity and game development credibility.

How it works: Leo views a profile page that feels familiar because it follows common professional profile patterns: a header, card sections, tabs, badges, and clear action areas. Instead of forcing users to learn a new structure, the page keeps the layout recognizable while changing the content to fit gaming identity.

The GamerCard page includes a gamer/professional profile header, Gaming Snapshot card, Games Played section, Games Built section, Roles & Skills section, Achievements section, Discord/contact card, Team Availability section, Clips or Proof section, and free vs. premium locked cards.

---

## 2a. Value Proposition

Career-minded game developers like Leo, who struggle to connect gaming identity with professional identity, use GamerCard Profile to turn scattered game, Discord, clip, achievement, community, and portfolio signals into one clean shareable profile.

Unlike sending separate platform links or trying to force gaming details into a standard professional profile, GamerCard organizes those signals in a format that team captains, peers, studio leads, and hiring managers can scan quickly.

GamerCard gives gaming identity a professional container: LinkedIn structure, gaming soul, one card, one link, one identity.

---

## 2b. Goals & Out-of-Scope

### Goals

Help Leo present both professional and gaming identity in one page without making the user learn a new interface.

Make the profile easy to scan so a team captain, peer, studio lead, or hiring manager can understand Leo’s games, roles, achievements, games built, and availability quickly.

Show a clear free tier and premium upgrade path through locked identity, visibility, community, and customization features.

Keep the feature realistic for the build window by shipping the core profile first and pushing larger integrations to future work.

Preserve the existing LinkedIn-style clone structure, including the navigation bar and fixed Messaging tab.

### Out-of-Scope

Real Discord, Steam, Twitch, YouTube, Xbox, PlayStation, TikTok, GitHub, itch.io, or LinkedIn API integrations are deferred.

Real authentication, payment processing, subscription management, analytics, and skill verification are not included in this version.

Real forum infrastructure, live community moderation, game hosting, and actual LinkedIn games submission API are deferred.

Recruiter search, matchmaking, team chat, video uploads, and full account authentication are deferred because they would make the first build too large.

The MVP will not copy Discord’s layout.

---

## 2c. Measurable Outcomes

| Metric | How it’s measured | Baseline | Target |
| :---- | :---- | :---- | :---- |
| Product comprehension | Demo tester explains what GamerCard is after viewing the profile | No single GamerCard feature exists in the clone | 4 out of 5 testers can explain it in one sentence within 30 seconds |
| Profile scan clarity | Tester identifies Leo’s main games, roles, achievements, games built, and availability | Signals are scattered across separate platforms | 4 out of 5 testers can find the key signals without instructions |
| Portfolio clarity | Tester can name at least one game Leo has built after viewing the page | No Games Built section exists | 4 out of 5 testers identify shipped work without instructions |
| Upgrade clarity | Tester names locked premium benefits after viewing the page | No premium feature path exists in the clone | 4 out of 5 testers can identify at least 3 premium benefits |
| Demo stability | Page loads, tabs work, layout holds, and buttons display correctly | Prior pages required visual debugging | Demo runs without broken layout, clipped cards, or duplicate messaging elements |

---

## 3\. REQUIREMENTS

## User Journey 1: Leo views a complete GamerCard profile

Context: This journey matters because the profile is the core product. The experience has to feel familiar enough to understand immediately, but specific enough that it does not feel like a regular professional profile with a gamer label pasted on top.

### Sub-journey: Understanding the profile at a glance

- \[P0\] Leo can view a GamerCard profile header with gamer name, real/professional name, avatar, headline, location, and short summary.  
- \[P0\] Leo can see the profile organized into clear sections instead of one crowded page.  
- \[P0\] Leo can identify the profile as both gaming and professional within the first screen.  
- \[P0\] Leo can see the same LinkedIn-style navigation bar as the existing clone.  
- \[P0\] Leo can see the fixed Messaging tab in the same bottom-right position as the existing clone.  
- \[P1\] Leo can see visual badges or tags that make the profile feel credible and easy to scan.  
- \[P2\] Leo can see a small visual polish element such as a hover state, subtle motion, or theme accent if time allows.

### Sub-journey: Scanning gaming identity

- \[P0\] Leo can see main games, roles, rank or skill level, achievements, and team availability.  
- \[P0\] Leo can see a Discord/contact card with handle, status, main game, voice availability, and tags or roles.  
- \[P0\] Leo can see achievements and badges displayed as separate scan-friendly items.  
- \[P1\] Leo can see clip cards or placeholder clip links that suggest where gameplay proof would live.  
- \[P2\] Leo can copy or view a mock shareable profile link if time allows.

### Sub-journey: Viewing games Leo has built

- \[P0\] Leo can see a dedicated Games Built section separate from Games Played.  
- \[P0\] Each game card shows title, description, Leo’s role, platform, and a link to play or view.  
- \[P0\] Leo can see the development status of each game, such as shipped, in progress, or prototype.  
- \[P1\] Leo can see a thumbnail or cover image for each game built.  
- \[P1\] Leo can see the tech stack or tools used for each project.  
- \[P2\] Leo can see a play count, view count, or download count as a social proof signal.

---

## User Journey 2: Leo uses simple tabs to move through the profile

Context: This journey matters because the page needs interaction without making the MVP too large. Tabs keep the profile familiar, reduce clutter, and give the demo a clear user flow.

### Sub-journey: Navigating the profile

- \[P0\] Leo can switch between Overview, Games, Builds, and Achievements tabs.  
- \[P0\] Leo can return to Overview without losing the page layout or breaking the profile state.  
- \[P0\] Leo can tell which tab is currently selected.  
- \[P0\] Leo can see that the tabs look like part of the LinkedIn-style profile system, not a gaming dashboard.  
- \[P1\] Leo can see the Discord/contact card stay visible or easy to reach while browsing sections.  
- \[P2\] Leo can see a Clips tab only if the core tabs are complete and stable.

---

## User Journey 3: Leo understands free vs. premium

Context: This journey matters because the business model needs to be visible in the MVP. The goal is not real payment; the goal is that users understand what is free now and what becomes valuable later.

### Sub-journey: Seeing the free profile

- \[P0\] Leo can see that the basic profile is free and includes identity, games, roles, achievements, Discord/contact details, games built, and availability.  
- \[P0\] Leo can use the basic profile without being blocked by premium messaging.  
- \[P1\] Leo can see a short explanation of what the free profile includes.

### Sub-journey: Discovering premium value

- \[P0\] Leo can see locked premium cards for custom themes, boosted visibility, verified skill badge, team recruitment badge, community forum, embedded game uploads, and advanced stats.  
- \[P0\] Leo can understand that premium adds visibility, credibility, community, and customization rather than changing the core profile.  
- \[P1\] Leo can click a demo Upgrade or View Premium button to reveal a preview state, without real payment processing.  
- \[P2\] Leo can see advanced stats or analytics as a future premium item if time allows.

---

## 4\. APPENDIX

### Design Decisions

Decision: Use a familiar professional profile structure instead of inventing a new navigation system.  
Rationale: Leo is new to LinkedIn, but he understands the profile-card format, so recognition reduces friction.

Decision: Use gaming platforms as content sources, not layout models.  
Rationale: Discord, Twitch, Steam, YouTube, itch.io, and GitHub contain useful identity signals, but their interfaces serve different purposes. GamerCard translates those signals into a professional format rather than importing their interfaces.

Decision: Use polished cards, badges, spacing, and clear hierarchy as part of the feature, not decoration.  
Rationale: A profile asking people to trust skill signals has to look credible; messy visuals make the data feel less reliable.

Decision: Separate Games Played from Games Built.  
Rationale: These are different signals. Games Played shows identity, culture fit, and player style. Games Built shows technical skill, creativity, and shipping discipline.

Decision: Ship one static profile page with tabs and premium locks first.  
Rationale: This proves the concept without overbuilding.

Alternative considered: Build live Discord, Steam, Twitch, YouTube, GitHub, or itch.io integrations.  
Rejected because integrations are too risky for the timeline and do not need to exist for the first demo.

Alternative considered: Build a full recruiter, team search, or matchmaking system.  
Rejected because the profile itself must work before discovery tools matter.

### Open Questions

Should the first MVP use only mock Leo data, or should it include a small editable form? Owner: Natalie, needed before development starts.

Should the Discord profile reference/component remain separate, or be represented as a LinkedIn-style Discord/contact card inside GamerCard? Owner: Natalie / Marc, needed before implementation.

Should the premium preview be a simple visual unlock or a separate page? Owner: Natalie, needed before implementation.

What exact games and achievements should Leo show in the final demo? Owner: Natalie, needed before content lock.

Should the Games Built section use real projects, fictional mock data, or inspired demo data? Owner: Natalie, needed before content lock.

### Other links

UX Mocks: To be added  
Meeting Notes: To be added  
Related PRDs: Original GamerCard PRD and Leo User Journey  
Other Resources: Research on gaming identity, Discord/Steam/Twitch profile behavior, and freemium model validation  
