#!/usr/bin/env sh

cat <<'HELP'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Commit rejected — message must follow Conventional Commits:

    <type>(optional scope): <short description>

  Allowed types:
    feat     New feature or user-facing improvement
    fix      Bug fix
    docs     Documentation only
    test     Adding or updating tests
    chore    Tooling, deps, config (no production code change)
    refactor Code change that is not a feat or fix
    ci       CI/CD workflow changes
    style    Formatting, whitespace (no logic change)

  Rules:
    • Use lowercase type
    • Keep the subject concise (≤ 72 characters)
    • Do not end the subject with a period
    • Use imperative mood: "add" not "added" or "adds"

  Examples you can copy:
    feat: revamp header and footer with Wintima navigation
    fix: resolve favicon conflict between app and public paths
    test: update footer e2e assertions for new quick links
    chore: move icon assets to public directory
    docs: add Vercel deployment notes for preview branches

  With scope (optional):
    feat(header): add skip link and mobile menu a11y labels
    fix(e2e): scope footer quick link test to footer navigation

  More: https://www.conventionalcommits.org/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HELP
