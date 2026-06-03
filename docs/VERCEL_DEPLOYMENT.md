# Vercel deployment setup

Repo-side configuration is in `vercel.json`, `.env.example`, and `app/layout.tsx`. Complete the dashboard steps below after merging the deploy PR into `dev`.

## Dashboard checklist (no CLI)

### Git integration

1. [Vercel Dashboard](https://vercel.com) → **wintima-new** project
2. **Settings → Git**
   - Repository: `Wintima/wintima-new`
   - **Production Branch:** `main`
   - Preview deployments: enabled for non-production branches (`dev`, PR branches)

### Build settings

**Settings → General → Build & Development Settings:**

| Setting | Value |
|---------|--------|
| Framework | Next.js |
| Build Command | `npm run build` |
| Install Command | `npm ci` |
| Node.js Version | 22.x |

### Environment variables

**Settings → Environment Variables:**

| Variable | Production | Preview | Development |
|----------|------------|---------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://wintima.org` | *(unset)* | *(unset)* |
| `NEXT_PUBLIC_GA_ID` | `G-2256Y8WHBZ` | *(unset)* | *(unset)* |

Preview deployments must not set `NEXT_PUBLIC_GA_ID` so analytics stay production-only.

### Notifications

- Enable deploy success/failure notifications
- Confirm Vercel deployment checks and preview URL comments on GitHub PRs

### Analytics (after production deploy)

- Enable **Web Analytics** and **Speed Insights** in the project (requires `@vercel/analytics` and `@vercel/speed-insights` in the repo)

### Optional: preview protection

**Settings → Deployment Protection** — password or Vercel Authentication for **Preview** only; keep Production public.

## Post-deployment verification

| Check | How |
|-------|-----|
| Production loads | Vercel production URL |
| `dev` / PR previews | Unique preview URLs per branch/PR |
| Security headers | `curl -I https://<production-host>` — look for `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` |
| Redirects | `/programmes` → `/projects`; `/donate` → `/get-involved#donate` |
| GA on production only | View source on preview — no `googletagmanager` when `NEXT_PUBLIC_GA_ID` is unset |
| Lighthouse | Run on production home (target 90+) |

Custom domain DNS is configured separately when ready.
