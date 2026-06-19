# ARCHITECTURE.md

# LinkedIn Profile Clone Architecture

## Purpose

This file defines the architecture for the LinkedIn Profile Clone.

The project is a front-end React/Vite clone. It is not a backend application, not a real LinkedIn integration, and not an authenticated product.

The purpose of the architecture is to explain:

- How the app is structured
- Where the data lives
- Which areas are clickable
- What click behavior should do
- What should remain static
- What should not be added during the clone phase

---

## Architecture Summary

This clone uses a simple static front-end architecture:

```text
React Components
      ↓
Static Profile Data
      ↓
CSS Layout + Styling
      ↓
Vite Development Server
```

There is no backend in the clone phase.

Clickable behavior is handled through front-end React state, anchor links, placeholder links, or safe demo interactions.

Clickable does not automatically mean backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Styling | CSS |
| Icons | lucide-react |
| Data | Static JavaScript object |
| Backend | None during clone phase |
| Auth | None during clone phase |
| Database | None during clone phase |

---

## Recommended File Structure

```text
Linked-in-Profile-Clone/
├── README.md
├── AGENTS.md
├── SECURITY.md
├── DEBUGGING.md
├── EXECUTION.md
├── HISTORY.md
├── ARCHITECTURE.md
├── LinkedIn_Profile_Page_Clone_PRD_by_MPNW_Phase_1.md
├── GamerCard_Profile_Feature_PRD_Phase_2.md
└── Frontend/
   ├── index.html
   ├── package.json
   ├── vite.config.js
   └── src/
      ├── main.jsx
      ├── App.jsx
      ├── styles.css
      ├── data/
      │   └── profileData.js
      ├── pages/
      └── components/
         └── VerificationModal.jsx
```

---

## Main Application Flow

```text
Frontend/index.html
   ↓
Frontend/src/main.jsx
   ↓
Frontend/src/App.jsx
   ↓
Frontend/src/data/profileData.js + Frontend/src/styles.css
   ↓
Rendered LinkedIn-style profile clone
```

---

## Required Import Paths

`App.jsx` expects:

```js
import { profile } from './data/profileData.js';
```

Therefore the data file must be located at:

```text
Frontend/src/data/profileData.js
```

`main.jsx` expects:

```js
import './styles.css';
```

Therefore the stylesheet must be located at:

```text
Frontend/src/styles.css
```

---

## Current Implementation Reality

Current state in this repository:

- Most UI sections are currently implemented as internal React functions inside `Frontend/src/App.jsx`.
- The shared components folder currently contains `Frontend/src/components/VerificationModal.jsx` and `Frontend/src/components/VerificationModal.css`.
- `Frontend/src/pages/` is used for page-level surfaces such as My Network.

Planned direction:

- Additional component extraction into `Frontend/src/components/` may be done over time, but this is optional and should not trigger redesign drift.

---

# Component Architecture

Note:

- The component names below describe the UI architecture and behavior boundaries.
- In the current codebase, many of these are internal functions in `Frontend/src/App.jsx` rather than separate files.

## App

The root component.

Renders:

- Navbar
- StickyMiniProfile
- Main profile layout
- Sidebar
- MessagingBubble

## Navbar

Clickable areas:

- Brand mark
- Search input
- Home
- My Network
- Jobs
- Messaging
- Notifications
- Me
- For Business
- Premium link

Clone behavior:

- Use safe placeholder links or front-end demo click behavior.
- Do not connect to LinkedIn.
- Do not require login.

## StickyMiniProfile

Clickable areas:

- More
- Message
- Follow

Clone behavior:

- Message may open or focus MessagingBubble.
- Follow may toggle demo follow state.
- More may open a small local demo menu.

## ProfileTopCard

Clickable areas:

- Verification prompt close button
- Verify now button
- Contact info link
- Followers
- Connections
- Follow
- Message
- More

Clone behavior:

- Close button dismisses verification prompt.
- Contact info may jump to local `#contact` or open a demo modal.
- Follow may toggle demo state.
- Message may open MessagingBubble.
- More may open a local demo menu.

## AboutCard

Clickable areas:

- `more` button

Clone behavior:

- Expand or collapse longer text.

## ActivityCard

Clickable areas:

- Posts tab
- Comments tab
- Follow button
- Post more button
- Link preview card
- Like
- Comment
- Repost
- Send
- Show all posts

Clone behavior:

- Posts/Comments tabs use front-end state.
- Like may toggle demo state.
- Other actions may remain safe placeholders.

## ExperienceCard

Clickable areas:

- Show all button
- Optional company rows

Clone behavior:

- Show all may expand additional static entries.

## EducationCard

Clickable areas:

- Optional school rows

Clone behavior:

- Static unless safe local interaction is needed.

## SkillsCard

Clickable areas:

- Show all skills

Clone behavior:

- Show all skills may expand additional static skills.

## Sidebar

Clickable areas:

- Promoted card
- Explore jobs
- Suggested profile follow/connect buttons
- Suggested page follow buttons
- Show all

Clone behavior:

- Explore jobs may use a safe placeholder.
- Follow/connect buttons may toggle demo state.

## MessagingBubble

Clickable areas:

- More button
- Expand/collapse button
- Message bubble area

Clone behavior:

- Expand/collapse may toggle front-end state.
- No real messaging.
- No backend.

---

# Click Behavior Architecture

This clone should use four safe click types:

## 1. Local Anchor Links

Use for simple page jumps.

Example:

```jsx
<a href="#contact">Contact info</a>
```

## 2. React State Toggles

Use for:

- Follow/unfollow demo state
- Show/hide verification prompt
- Expand/collapse About
- Activity tabs
- Messaging bubble open/closed

## 3. Safe Placeholder Buttons

Use for buttons that are visible in the clone but not functional in the project.

## 4. Demo Menus or Modals

Use only if needed.

Examples:

- More menu
- Contact info modal
- Messaging panel

Do not add heavy behavior unless the clone requires it.

---

# Backend Decision

## No Backend During Clone Phase

This clone does not need a backend.

Do not add:

- Supabase
- Authentication
- Database
- Real messaging
- Real job search
- Real notifications
- Real user profiles
- Real API calls

unless the PRD scope changes.

---

# Data Architecture

## Static Data First

All profile data should live in:

```text
src/data/profileData.js
```

The data file may include:

```js
export const profile = {
  name: '',
  headline: '',
  location: '',
  followers: '',
  connections: '',
  about: '',
  experience: [],
  educationItems: [],
  skills: [],
  activityPosts: [],
  sidebarProfiles: [],
  pagesYouMightLike: []
};
```

---

# Security Architecture

Ant Wilson owns this layer.

Do not include:

- API keys
- Tokens
- Passwords
- Private user data
- Real LinkedIn account data
- Scraped data
- `.env` files
- Unauthorized scripts

---

# Debugging Architecture

Grace Hopper owns debugging and build stability.

Debugging should focus on:

- Broken imports
- Incorrect file paths
- Runtime errors
- Vite build errors
- React console warnings
- Broken buttons
- Broken links
- Responsive issues

Grace may fix bugs.

Grace may not redesign.

---

# Clone Fidelity Architecture

JIRO ONO owns clone fidelity.

JIRO reviews:

- Layout
- Spacing
- Hierarchy
- Card structure
- Component consistency
- Visual proportions
- Final execution approval

No clickable behavior may damage clone fidelity.

---

# Execution Rule

Before a change is complete:

1. Grace Hopper confirms the app runs and the bug is fixed.
2. Ant Wilson confirms no security or data issue was introduced.
3. JIRO ONO confirms the clone still preserves the reference structure.

If any layer fails, the change is not ready.

---

# Architecture Decision Record

## Decision 1: Use React/Vite

Reason:

- Lightweight setup
- Good for component-based UI
- Easy local development
- Suitable for a static clone

## Decision 2: Use Static Data

Reason:

- No backend required
- Easier to control clone content
- Prevents unnecessary complexity
- Keeps the project within clone scope

## Decision 3: Make Clicks Front-End Only

Reason:

- Clickable behavior can be simulated
- No need for real user accounts
- No need for real LinkedIn connection
- Safer for educational use

## Decision 4: No Supabase During Clone Phase

Reason:

- This is not GamerCard.
- This is not a full product.
- This is a strict LinkedIn profile clone.
- Backend would add unnecessary scope.

## Decision 5: JIRO Final Approval

Reason:

- The purpose of the project is clone fidelity.
- All execution must preserve the reference profile layout.

---

# Next Architecture Tasks

- Confirm file structure in VS Code.
- Rename stylesheet to `styles.css` if needed.
- Move `profileData.js` to `src/data/profileData.js`.
- Identify all visible buttons.
- Decide which buttons need real demo behavior.
- Decide which buttons should remain placeholders.
- Add safe click handlers.
- Run `npm run dev`.
- Run `npm run build`.
- Update HISTORY.md.
