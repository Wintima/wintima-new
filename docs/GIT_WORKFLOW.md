# Git workflow

This document describes how we branch, review, and release the Wintima Foundation website.

## Branching model

```
main (production)
  └── dev (development / staging)
        ├── feature/homepage-revamp
        ├── feature/about-page
        ├── fix/broken-link
        └── chore/update-deps
```

| Branch | Purpose | Vercel |
|--------|---------|--------|
| `main` | Production | Production deployment |
| `dev` | Integration / staging | Preview deployment |
| Topic branches | Day-to-day work | Preview per branch |

## Branch naming

| Prefix | Use |
|--------|-----|
| `feature/*` | New features or pages |
| `fix/*` | Bug fixes |
| `chore/*` | Dependencies, CI, cleanup |
| `docs/*` | Documentation only |
| `refactor/*` | Refactors without behavior change |

## Flow

1. Create a topic branch from **`dev`**.
2. Open a pull request **into `dev`** (not `main`).
3. Wait for CI and at least **one approval**.
4. Merge to `dev` (squash or merge commit per team preference).
5. For production: open a PR **`dev` → `main`** only when ready to release.
6. After merge, the head branch is deleted automatically (repo setting).

Direct pushes to `main` and `dev` are blocked once branch protection is enabled.

## Local quality gates

| Hook / command | What it does |
|----------------|--------------|
| Husky `pre-commit` | `lint-staged` (ESLint + Prettier on staged files) |
| Husky `pre-push` | `npm run typecheck` |
| Husky `commit-msg` | Conventional commit format via commitlint |
| `npm run validate` | Lint, format check, typecheck, unit tests |
| `npm run ci:check` | `validate` + build + security audit (high+) |
| `npm run test:e2e` | Playwright E2E (Chromium locally; full matrix optional) |

### Commit message format

Enforced by commitlint (`type(scope): description`):

- `feat:` — new feature
- `fix:` — bug fix
- `chore:` — maintenance
- `docs:` — documentation
- `style:` — formatting
- `refactor:` — code restructuring
- `test:` — tests
- `ci:` — CI/CD

Example: `chore(ci): add PR templates and branch protection docs`

## Required CI checks (GitHub)

When configuring branch protection, require these status checks (names must match exactly):

1. `CI / Lint & Format`
2. `CI / Type Check`
3. `CI / Unit Tests`
4. `CI / Security`
5. `CI / Dependency Review` (pull requests only)
6. `CI / Build`
7. `CI / E2E Tests`

On **`main` only**, also require:

8. `CI / Release Target Policy` — fails if a PR targets `main` with a head branch other than `dev`.

The nightly workflow is **not** a merge gate.

## GitHub admin setup

Repository admins must configure protection in GitHub (not in git). Complete these steps **after** the workflow/templates PR is merged into `dev`.

### Prerequisites

1. **Labels** (Issues → Labels): create `bug` and `enhancement` if missing.
2. **Team** (optional): Org → Teams → `maintainers` as `@Wintima/maintainers` for [CODEOWNERS](../.github/CODEOWNERS). Skip “require code owner review” if the team does not exist.
3. Merge the repo PR that adds templates, commitlint, and the release-target CI job.

### Repository merge settings

**Settings → General → Pull Requests:**

| Setting | Value |
|---------|--------|
| Allow squash merging | On |
| Allow merge commits | On |
| Allow rebase merging | Off |
| Automatically delete head branches | On |

Keep the **default branch** as `main`. Open feature PRs with **base = `dev`**.

### Branch rulesets (recommended)

**Settings → Rules → Rulesets → New branch ruleset**

If rulesets are unavailable, use **Branches → Add branch protection rule** with the same options.

#### Protect `main`

- Target: branch `main`
- Require pull request: 1 approval, dismiss stale approvals
- Require status checks + **up to date**: all eight checks listed above (including Release Target Policy)
- Block force pushes; restrict deletions
- Restrict who can push/merge: **maintainers** only
- Do not allow bypassing (including administrators)
- If available: limit PR sources into `main` to **`dev` only**

#### Protect `dev`

- Target: branch `dev`
- Require pull request: 1 approval, dismiss stale approvals
- Require status checks + **up to date**: the **seven** standard CI checks (exclude Release Target Policy)
- Block force pushes; restrict deletions

### Vercel

In the Vercel project linked to this repo:

1. **Settings → Git → Production Branch:** `main`
2. Confirm preview deployments for other branches (including `dev`).

### Verification checklist

| Test | Expected |
|------|----------|
| Direct push to `main` | Rejected |
| Direct push to `dev` | Rejected |
| PR to `dev`, failing CI | Cannot merge |
| PR to `dev`, green CI, no review | Cannot merge |
| PR to `dev`, green CI, 1 approval | Can merge |
| PR `feature/x` → `main` | Blocked (ruleset + Release Target Policy) |
| PR `dev` → `main`, green CI, 1 approval | Can merge |
| After merge | Head branch deleted |

## Templates

- Pull requests: [.github/pull_request_template.md](../.github/pull_request_template.md)
- Bugs: [.github/ISSUE_TEMPLATE/bug_report.md](../.github/ISSUE_TEMPLATE/bug_report.md)
- Features: [.github/ISSUE_TEMPLATE/feature_request.md](../.github/ISSUE_TEMPLATE/feature_request.md)
