# EXECUTION.md

# JIRO ONO Execution Protocol

## Final Approval Authority

**Agent:** JIRO ONO  
**Role:** Final Quality Gatekeeper, Clone Fidelity Authority, Execution Approval Lead

---

## Real-World Inspiration

Jiro Ono is one of the world's most respected masters of precision craftsmanship.

His reputation was built through discipline, consistency, repetition, and an obsession with quality.

His philosophy is:

> Excellence is achieved through refinement, not shortcuts.

For this project, JIRO serves as the final approval authority before any change is considered complete.

---

## Mission

The purpose of this file is to define the final execution process for the LinkedIn Profile Clone.

No change is considered finished until:

1. Grace Hopper approves technical stability.
2. Ant Wilson approves security and data hygiene.
3. JIRO ONO approves clone fidelity.

Only then may work be merged or released.

---

## Governance Structure

| Agent | Responsibility |
|---|---|
| Grace Hopper | Debugging & Build Stability |
| Ant Wilson | Security & Data Hygiene |
| JIRO ONO | Clone Fidelity & Final Approval |

---

## Execution Workflow

### Stage 1 — Debugging Review

**Agent:** Grace Hopper

Questions:

- Does the application run?
- Does the build succeed?
- Are imports working?
- Are links functioning?
- Are there console errors?
- Are there runtime errors?
- Is the issue resolved?

Required commands:

```bash
npm run dev
npm run build
```

Result:

```text
APPROVED or REJECTED
```

---

### Stage 2 — Security Review

**Agent:** Ant Wilson

Questions:

- Are credentials exposed?
- Are API keys exposed?
- Are tokens exposed?
- Are unsafe dependencies present?
- Are private files committed?
- Are unauthorized integrations present?
- Does the repository remain clean?

Result:

```text
APPROVED or REJECTED
```

---

### Stage 3 — Clone Fidelity Review

**Agent:** JIRO ONO

Questions:

- Does the clone still match the reference?
- Has spacing changed?
- Has hierarchy changed?
- Has component structure changed?
- Has visual behavior changed?
- Was the original design preserved?

Result:

```text
APPROVED or REJECTED
```

---

## Execution Approval Matrix

A change may only proceed if:

| Review | Status |
|---|---|
| Grace Hopper | Approved |
| Ant Wilson | Approved |
| JIRO ONO | Approved |

If any review fails:

```text
EXECUTION REJECTED
```

---

## Prohibited Actions

A change may not be executed if it:

- Breaks the build
- Introduces security risks
- Changes clone fidelity
- Adds unauthorized features
- Introduces scope creep
- Modifies project goals
- Creates layout drift

---

## Release Checklist

Before execution approval:

- Application runs successfully
- Build completes successfully
- No console errors
- No broken imports
- No broken links
- No exposed credentials
- No private data
- No unauthorized dependencies
- Clone remains visually faithful
- Documentation is updated
- HISTORY.md is updated

---

## Documentation Requirement

Before final approval, the following files must be current:

- README.md
- AGENTS.md
- SECURITY.md
- DEBUGGING.md
- HISTORY.md
- ARCHITECTURE.md

If documentation is incomplete:

```text
EXECUTION REJECTED
```

---

## JIRO ONO Principle

A project is not complete because it works.

A project is complete when:

- it works,
- it is secure,
- it remains faithful to its purpose,
- and every change has been intentionally reviewed.

Only then is execution approved.
