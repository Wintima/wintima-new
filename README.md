<p align="center">
  <img src="public/images/logo.png" alt="Wintima Foundation" width="120" />
</p>

<h1 align="center">Wintima Foundation</h1>

<p align="center">
  Official website for the Wintima Foundation — education-focused nonprofit work in Ghana.
</p>

<p align="center">
  <a href="https://wintima.org"><img src="https://img.shields.io/badge/site-wintima.org-8B1A1A?style=for-the-badge" alt="Website" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Playwright-E2E-2EAD33?logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/Vitest-unit-6E9F18?logo=vitest&logoColor=white" alt="Vitest" />
  <img src="https://img.shields.io/badge/Vercel-deploy-000000?logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

**Internal repository** — maintained by the Wintima organization. This project is not open for public contributions.

## Branches & deployment

| Branch | Role | Deployment |
|--------|------|------------|
| `main` | Production | Vercel production |
| `dev` | Integration | Vercel preview |
| `feature/*`, `fix/*`, … | Work in progress | Vercel preview per PR |

See [docs/GIT_WORKFLOW.md](docs/GIT_WORKFLOW.md) and [docs/VERCEL_DEPLOYMENT.md](docs/VERCEL_DEPLOYMENT.md).

## Quality gates

Pull requests to `main` and `dev` must pass **GitHub Actions CI** and review before merge.

| Check | What it covers |
|-------|----------------|
| Lint & Format | ESLint, Prettier |
| Type Check | `tsc --noEmit` |
| Unit Tests | Vitest |
| Security | `npm audit` (high severity+) |
| Dependency Review | PR dependency changes |
| Build | `next build` |
| E2E Tests | Playwright (Chromium; production build artifact) |
| Release Target Policy | PRs to `main` must come from `dev` only |

A **nightly** workflow runs the full Playwright matrix when there are recent commits.

Local hooks (Husky): lint-staged on commit, typecheck on push, conventional commits via commitlint.

## Development

**Requirements:** Node.js 22.x (see `.nvmrc`)

```bash
npm ci
cp .env.example .env.local   # optional; see variable comments
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Common commands

| Command | Purpose |
|---------|---------|
| `npm run validate` | Lint, format check, typecheck, unit tests |
| `npm run ci:check` | Full CI minus E2E |
| `npm run test:e2e` | Playwright E2E (Chromium) |
| `npm run build` | Production build |

## License & access

Private organizational codebase. For questions about this repository, contact the Wintima Foundation maintainers.
