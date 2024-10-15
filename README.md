<div align="center">
 <h1>Shopify App Template for Node + Typescript + React</h1>
  <p>This is a template for building a <a href='https://shopify.dev/docs/apps/getting-started'>Shopify App</a> using Node, React, TanStack Query, Typescript, Knex, and Objective. It contains the basics for building a Shopify app.</p>
  <div>
    <img src="https://img.shields.io/badge/-shopify-white?style=for-the-badge&logoColor=white&logo=shopify&color=7AB55C" alt="shopify" />
    <img src="https://img.shields.io/badge/knex%20js-white?style=for-the-badge&logoColor=white&logo=knex.js&color=D26B38" alt="knex-js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178c6" alt="typescript" />
    <img src="https://img.shields.io/badge/-PRETTIER-black?style=for-the-badge&logoColor=white&logo=prettier&color=f8bc45" alt="prettier" />
    <br/>
    <img src="https://img.shields.io/badge/-VITE-black?style=for-the-badge&logoColor=white&logo=vite&color=747bff" alt="vite" />
    <img src="https://img.shields.io/badge/-REACT_JS-black?style=for-the-badge&logoColor=white&logo=react&color=58c4dc" alt="react.js" />
    <img src="https://img.shields.io/badge/-REACT_ROUTER_DOM-black?style=for-the-badge&logoColor=white&logo=reactrouter&color=f44250" alt="react-router-dom" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
<br/>

**Build Shopify app with this boilerplate. Join us!**

<hr/>
</div>

## <a name="table">📋 Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 📋 [Files (Code Download links)](#files)

## <a name="introduction">🤖 Introduction</a>

<p>This boilerplate is crafted for building robust Shopify apps using a modern tech stack that includes Node.js, React, TanStack Query, TypeScript, Knex, and Objective. It’s designed to streamline the development process, enabling developers to efficiently create feature-rich applications tailored for the Shopify ecosystem.

This boilerplate is designed to empower developers to showcase their skills while creating impactful Shopify apps in a real-time environment.

If you need assistance or encounter any issues, feel free to reach out via email.</p>

<a href="mailto:muneebmughal342@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-Contact-black?style=for-the-badge&logoColor=white&logo=gmail&color=f67373" alt="mail" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

This template combines a number of third party open-source tools:

- [Express](https://expressjs.com/) builds the backend.
- [Knex](https://expressjs.com/) SQL query builder.
- [Objective js](https://expressjs.com/) For application structure.
- [Vite](https://vitejs.dev/) builds the [React](https://reactjs.org/) frontend.
- [React Router](https://reactrouter.com/) is used for routing. We wrap this with file-based routing.
- [TanStack Query](https://tanstack.com/) queries the Admin API.
- [`i18next`](https://www.i18next.com/) and related libraries are used to internationalize the frontend.
  - [`react-i18next`](https://react.i18next.com/) is used for React-specific i18n functionality.
  - [`i18next-resources-to-backend`](https://github.com/i18next/i18next-resources-to-backend) is used to dynamically load app translations.
  - [`@formatjs/intl-localematcher`](https://formatjs.io/docs/polyfills/intl-localematcher/) is used to match the user locale with supported app locales.
  - [`@formatjs/intl-locale`](https://formatjs.io/docs/polyfills/intl-locale) is used as a polyfill for [`Intl.Locale`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) if necessary.
  - [`@formatjs/intl-pluralrules`](https://formatjs.io/docs/polyfills/intl-pluralrules) is used as a polyfill for [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) if necessary.

The following Shopify tools complement these third-party tools to ease app development:

- [Shopify API library](https://github.com/Shopify/shopify-node-api) adds OAuth to the Express backend. This lets users install the app and grant scope permissions.
- [App Bridge React](https://shopify.dev/docs/apps/tools/app-bridge/getting-started/using-react) adds authentication to API requests in the frontend and renders components outside of the App’s iFrame.
- [Polaris React](https://polaris.shopify.com/) is a powerful design system and component library that helps developers build high quality, consistent experiences for Shopify merchants.
- [Custom hooks](https://github.com/Shopify/shopify-frontend-template-react/tree/main/hooks) make authenticated requests to the Admin API.
- [File-based routing](https://github.com/Shopify/shopify-frontend-template-react/blob/main/Routes.jsx) makes creating new pages easier.
- [`@shopify/i18next-shopify`](https://github.com/Shopify/i18next-shopify) is a plugin for [`i18next`](https://www.i18next.com/) that allows translation files to follow the same JSON schema used by Shopify [app extensions](https://shopify.dev/docs/apps/checkout/best-practices/localizing-ui-extensions#how-it-works) and [themes](https://shopify.dev/docs/themes/architecture/locales/storefront-locale-files#usage).

## <a name="features">🔋 Features</a>

## Backend

- **Node.js**: Leverage the power of server-side JavaScript to handle backend processes seamlessly.

- **TypeScript**: Enhance code quality and maintainability with static typing, catching errors during development.

- **Knex**: Utilize a powerful SQL query builder for flexible database interactions, making data management straightforward.

- **Objective**: Structure your application around best practices, ensuring a clean and scalable architecture.

## Frontend

- **Theme**: Custom theme with contexts to manage and switch between light and dark modes.

- **TanStack Query**: Simplify data fetching and state management, allowing for efficient and intuitive API interactions.

- **Routing**

  - **File-based Routing**: Handles file-based routing.
  - **Dynamic Routes**: Supports dynamic routing.
  - **Layouts**: Manages multiple layouts.
  - **404 Pages**: Configures custom 404 pages.

- **Storage**: Includes an instance for managing local storage.

- **Marquee**: Integrated marquee slider for scrolling text or images.

- **Code Architecture**: Emphasizes modularity and reusability of code.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**: Make sure you have the following installed on your machine

- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)

- [Git](https://git-scm.com/)

- [Node.js](https://nodejs.org/en) or [nvm](https://github.com/nvm-sh/nvm)

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) or [npm](https://www.npmjs.com/) (Node Package Manager)

**Initalize the project using Shopify cli command**

```bash

yarn create @shopify/app --template=node

```

## **Installation for frontend**

Remove the old frontend and create the new react project:

```bash

cd web && rm -rd frontend && yarn create vite frontend --template react-ts cd frontend

```

Install the require dependencies:

```bash

yarn add @formatjs/intl-locale @formatjs/intl-localematcher @formatjs/intl-pluralrules @shopify/app-bridge @shopify/app-bridge-react @shopify/i18next-shopify @shopify/polaris @tanstack/react-query @tanstack/react-query-devtools i18next i18next-resources-to-backend lucide-react react-i18next react-router-dom

```

Install the require dev dependencies:

```bash

yarn add @eslint/js @shopify/stylelint-polaris @tailwindcss/typography @tanstack/eslint-plugin-query @trivago/prettier-plugin-sort-imports @types/eslint__js @types/node @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals history jsdom postcss prettier-plugin-tailwindcss stylelint tailwind-merge tailwindcss tailwindcss-animate typescript typescript-eslint vi-fetch tailwind-merge --dev

```

Initialize tailwindcss files using npx:

```bash
npx tailwindcss init -p --ts
```

## **Installation for backend**

Navigate to the web folder:

```bash

cd ../

```

Remove sqlite

```bash

yarn remove @shopify/shopify-app-session-storage-sqlite

```

Install the require dependencies:

```bash

yarn add @shopify/shopify-app-session-storage-mysql cors dotenv envalid joi knex mysql2 objection reflect-metadata serve-static swagger-jsdoc swagger-ui-express winston winston-daily-rotate-file

```

Install the require dev dependencies:

```bash

yarn add @trivago/prettier-plugin-sort-imports @types/compression @types/cors @types/express @types/node @types/nodemon @types/serve-static @types/swagger-jsdoc @types/swagger-ui-express @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier nodemon prettier pretty-quick swagger-autogen ts-node tsc-alias tsconfig-paths typescript --dev

```

**Navigate to the root folder**

```bash

cd ../

```

## <a name="snippets">🕸️ Snippets</a>

## Root Files

<details>
<summary><code>Update .gitignore file</code></summary>

<br/>

```json

# Environment Configuration
.env
.env.*

# dependencies
node_modules
.pnp
.pnp.js
dist

# Test coverage directory
coverage

# Ignore Apple macOS Desktop Services Store
.DS_Store

# debug
logs
*.log
yarn.lock
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
lerna-debug.log*

# ngrok tunnel file
config/tunnel.pid

# build output
dist
build

# extensions build output
extensions/*/build

# Node library SQLite database
web/database.sqlite

# configs toml
fly.toml

# shopify.app.toml
shopify.app.develop.toml

# Json
package-lock.json
!.vscode/extensions.json

# Ignore shopify files created during app dev
.shopify/*
.shopify.lock

```

</details>

<details>
<summary><code>Add import alices into the package.json file</code></summary>

<br/>

```json

"scripts": {
    "shopify": "shopify",
    "dev": "shopify app dev",
    "info": "shopify app info",
    "build": "shopify app build",
    "deploy": "shopify app deploy",
    "generate": "shopify app generate",
    "extension": "shopify app generate extension",
    "prettify": "cd web && npx prettier --write ./ && [ -d frontend ] && cd frontend && npx prettier --write ./",
    "docs:generate": "cd web && node --no-warnings --loader ts-node/esm ./server/configs/swagger.ts",
    "db:seed": "cd web && node --no-warnings --loader ts-node/esm node_modules/knex/bin/cli.js seed:run --knexfile=knexfile.ts --verbose",
    "migration:run": "cd web && node --no-warnings --loader ts-node/esm node_modules/knex/bin/cli.js migrate:latest --knexfile=knexfile.ts --verbose",
    "migration:fresh": "cd web && node --no-warnings --loader ts-node/esm node_modules/knex/bin/cli.js migrate:rollback --knexfile=knexfile.ts --verbose",
    "migration:refresh": "cd web && node --no-warnings --loader ts-node/esm node_modules/knex/bin/cli.js migrate:rollback --knexfile=knexfile.ts --verbose && node --no-warnings --loader ts-node/esm node_modules/knex/bin/cli.js migrate:latest --knexfile=knexfile.ts --verbose",
    "make:seeder": "cd web && node --no-warnings --loader ts-node/esm node_modules/knex/bin/cli.js seed:make --knexfile=knexfile.ts -x ts --env development",
    "make:migration": "cd web && node --no-warnings --loader ts-node/esm node_modules/knex/bin/cli.js migrate:make --knexfile=knexfile.ts -x ts --env development"
  },

```

</details>

## Web dir

**Navigate to the web folder**

```bash

cd web

```

Intigrate Typescript

```bash

npx -p typescript tsc --init

```

Intigrate Knex

```bash

yarn add knex -g

```

Remove these files

```bash

rm -rf indec.js product-create.js shopify.js gdpr.js privacy.js

```

<details>
<summary><code>Update .tsconfig.json file</code></summary>

<br/>

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "esnext.asynciterable"],
    "typeRoots": ["node_modules/@types"],
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "module": "ESNext",
    "pretty": true,
    "sourceMap": true,
    "declaration": true,
    "outDir": "./dist",
    "allowJs": true,
    "noEmit": false,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "importHelpers": true,
    "rootDir": "./",
    "baseUrl": "./server",
    "paths": {
      "#server/*": ["*"],
      "#shopify/*": ["shopify/*"],
      "#configs/*": ["configs/*"],
      "#utils/*": ["utils/*"],
      "#routes/*": ["routes/*"],
      "#schema/*": ["schema/*"],
      "#database/*": ["database/*"],
      "#services/*": ["services/*"],
      "#enum/*": ["enum/*"],
      "#models/*": ["models/*"],
      "#exceptions/*": ["exceptions/*"],
      "#interfaces/*": ["interfaces/*"],
      "#controllers/*": ["controllers/*"],
      "#mutations/*": ["mutations/*"],
      "#middlewares/*": ["middlewares/*"],
      "#docs/*": ["docs/*"]
    }
  },
  "types": ["node"],
  "include": [
    "server/**/*.ts",
    "server/**/*.json",
    "*.json",
    "server/**.json",
    "*.yml",
    "server/**.yml",
    "*.yaml",
    "server/**.yaml",
    ".env"
  ],
  "exclude": ["node_modules", "dist"]
}
```

</details>

<details>
<summary><code>Add import alices into the package.json file</code></summary>

<br/>

```json

"imports": {
        "#server/*": "./server/*.js",
        "#shopify/*": "./server/shopify/*.js",
        "#utils/*": "./server/utils/*.js",
        "#configs/*": "./server/configs/*.js",
        "#docs/*": "./server/docs/*",
        "#routes/*": "./server/routes/*.js",
        "#schema/*": "./server/schema/*.js",
        "#database/*": "./server/database/*.js",
        "#enum/*": "./server/enum/*.js",
        "#services/*": "./server/services/*.js",
        "#models/*": "./server/models/*.js",
        "#exceptions/*": "./server/exceptions/*.js",
        "#interfaces/*": "./server/interfaces/*.js",
        "#controllers/*": "./server/controllers/*.js",
        "#middlewares/*": "./server/middlewares/*.js",
        "#mutations/*": "./server/mutations/*.js"
    },

```

</details>

## <a name="files">📋 Necessary files</a>

- Backend code need to be placed in the `web/` directory [Click here](https://drive.google.com/file/d/1xADuTezXj_WEnuyy637ZHvntvN_V6292/view?usp=sharing)

- Frontend code needs to be placed in the `web/frontend/` directory [Click here](https://drive.google.com/file/d/1cnZVm2Cwlzbi_4PLfGHpbT7i1iHvCAgr/view?usp=sharing)

**Running the Project**

```bash

yarn dev

```
