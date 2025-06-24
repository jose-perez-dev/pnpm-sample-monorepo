# 🧪 PNPM Sample Monorepo Example

This is a **sample monorepo setup** using [PNPM Workspaces](https://pnpm.io/workspaces), [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html), and [Turborepo](https://turbo.build/repo).  
It provides a solid starting point for scalable frontend applications.

Bet tracker consists of several sub-packages

* [ui][ui] - Base React components for the Bet Tracker web app
* [eslint config][eslint] - Eslint base utilitie package used across the monorepo
* [stylelint config][stylelint] - Base Stylelint configuration used across the monorepo
* [tailwind config][tailwind] - Base Tailwind CSS configuration used across the monorepo
* [web][web] - Next.js based application for desktop/mobile web clients

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

- `pnpm dev --filter=web` Start the development server
- `pnpm build:start` - to see the client running in dev-mode (non-minified; with source-maps)

## 📦 Monorepo Structure

```text
bet-tracker/
├── apps/
│   └── web/         # Frontend app (Next.js)
├── packages/
│   ├── config/      # Shared lint and stylelint and tailwind configuration
│   └── ui/          # Shared UI component library (React)
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

This monorepo uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components and utilities.

### Test setup

Jest is configured at the root of the monorepo (`jest.config.js`) with project references to each package/app.

Each project can extend a shared base config from `configs/jest/jest.config.base.js`.

There are two special setup files:

* `jest.setup.ts`: Initializes testing environment, e.g. adds `@testing-library/jest-dom`.
* `jest.env.js`: Loads environment variables from `.env.example` for consistent test behavior.

### Running tests

From the root:

```bash
pnpm test:web
```

To run in watch mode:

```bash
pnpm --filter=web test -- --watch
```

⚙️ If you add more tests in different apps or packages, make sure to add the corresponding test command in each package’s package.json scripts section so you can run tests individually or from the root.

To run tests for all packages:

```bash
pnpm test
```

> ✅ Uses `--coverage` to measure coverage thresholds defined in config.

## 🧰 Useful Scripts

```bash
pnpm dev:web           # Start the web app
pnpm build             # Build all packages and apps
pnpm lint              # Global lint
pnpm typecheck         # Global TypeScript type checking
pnpm test              # Global test
```

## 🧹 Cleaning Tests and Testing Dependencies

If you want a lighter version of the app without any testing setup or dependencies, you can run the following command to remove all test files and testing-related dependencies:

```bash
pnpm clean:tests
```

This command will:

- Delete all test files (e.g., *.spec.ts, *.test.ts).
- Remove all __mocks__ folders and their contents.
- Remove testing dependencies from package.json in the root and all affected packages/apps.
- Delete Jest configuration files (jest.config.js, jest.setup.ts, etc.).

> 💡 Use this command if you prefer to deploy or work without the overhead of testing tools.

## 🤝 Contributions

This is a sample repository, but if you'd like to suggest improvements, PRs are welcome!


[ui]: https://github.com/jose-perez-dev/bet-tracker/tree/main/packages/ui
[eslint]: https://github.com/jose-perez-dev/bet-tracker/tree/main/packages/config/eslint-config
[stylelint]: https://github.com/jose-perez-dev/bet-tracker/tree/main/packages/config/stylelint-config
[tailwind]: https://github.com/jose-perez-dev/bet-tracker/tree/main/packages/config/tailwind-config
[web]: https://github.com/jose-perez-dev/bet-tracker/tree/main/apps/web