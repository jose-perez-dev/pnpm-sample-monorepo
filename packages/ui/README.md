# @bet-tracker/ui

**UI components library for Bet Tracker.**  
Reusable, atomic-design-based components for use across Bet Tracker applications.

## Requirements

- Node [active LTS][noderelease] version

## 📦 Installation

This package is part of the `bet-tracker` monorepo and is **consumed via workspace imports**.

```bash
pnpm add @bet-tracker/ui
```

> Note: You must be in the bet-tracker monorepo for this to resolve correctly.

## Quick Start

```sh
$ pnpm storybook
```

- Go to `http://localhost:6006/` to see the storybook

* Interact with the list of base components

## ⚙️ Usage

Example import in your Next.js app:

```tsx
import { Button } from '@bet-tracker/ui/button/Button';
```

## 📦 Folder Structure

```text
bet-tracker/
├── apps/
│   └── web/         # Frontend app (Next.js)
├── packages/
│   ├── config/      # Shared lint and TS configuration
│   └── ui/          # Shared UI components (optional)
├── turbo.json       # Turborepo pipeline config
├── tsconfig.json    # TypeScript base config
├── package.json     # Root workspace config
```

## Available commands

In the project directory, you can run:

```bash
pnpm storybook        # Run Storybook
pnpm lint             # Run linting (code + styles)
pnpm test             # Run tests
pnpm build-storybook  # Build Storybook for deployment
```

### Linter

- `pnpm lint` to run style and code linter
- `pnpm lint:code`, `pnpm lint:css` to run linter just for code or styles,
  you can add `--fix` there to automatically fixes e.g `pnpm lint:code --fix`

### Test

- `pnpm test` or `pnpm test:watch` to run test on changed files

[noderelease]: https://github.com/nodejs/Release#release-schedule

