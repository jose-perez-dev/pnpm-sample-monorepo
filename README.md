# 🧪 PNPM Sample Monorepo Example

This is a **sample monorepo setup** using [PNPM Workspaces](https://pnpm.io/workspaces), [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html), and [Turborepo](https://turbo.build/repo).  
It provides a solid starting point for scalable frontend applications.

> 💡 This repo is not a complete app — it's meant as a clean starting template.


## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/jose-perez-dev/pnpm-sample-monorepo.git
cd pnpm-sample-monorepo
```

2. Install dependencies from the root:

```bash
pnpm install
```

3. Run the web app:

```bash
pnpm dev:web
```

- `pnpm install`
- `pnpm build:web`
- `pnpm dev --filter=web` Start the development server
- `pnpm build:start` - to see the client running in dev-mode (non-minified; with source-maps)

## 📦 Monorepo Structure

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

## 🛠️ Tooling Overview

### Toolchain

* 🧩 **pnpm**: Using [pnpm workspaces](https://pnpm.io/workspaces) to manage multiple packages.
* 🧪 **TypeScript**: Strict mode enabled in all packages. Shared base configuration.
* 🚀 **Turborepo**: For smart caching and parallel build/lint/test pipelines.
* ✨ **Next.js**: Modern and extensible frontend application.
* 🎨 **Stylelint + ESLint + Prettier**: Shared rules to maintain clean and consistent code.

## 🔍 Linting & Type Checking

The following commands are available from the root to simplify usage:

```bash
pnpm lint:web         # Lint code and CSS/SCSS styles in the web app
pnpm typecheck:web    # TypeScript type checking for the web app
```

Internally, the `lint:web` command runs:

* `next lint` for JavaScript/TypeScript code
* `stylelint` for CSS/SCSS
* `tsc --noEmit` for TypeScript

## 🧪 Testing

*(To be added in the future when test setup is integrated)*

## 🧰 Useful Scripts

```bash
pnpm dev:web           # Start the web app
pnpm build             # Build all packages and apps
pnpm lint              # Global lint
pnpm typecheck         # Global TypeScript type checking
```

## 🤝 Contributions

This is a sample repository, but if you'd like to suggest improvements, PRs are welcome!
