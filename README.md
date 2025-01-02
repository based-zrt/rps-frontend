# <img src="https://rps.sunstorm.rocks/favicon.png" height="25" />  rps-frontend [![ci badge](https://github.com/based-zrt/rps-frontend/actions/workflows/build.yml/badge.svg)](https://github.com/based-zrt/rps-frontend/actions/workflows/build.yml)

Overenginnered rock paper scissors site.

## Tech rundown
 - Scripting: <img src="https://www.typescriptlang.org/favicon-32x32.png" height="15" /> [TypeScript](https://typescriptlang.org/)
 - Component library: <img src="https://svelte.dev/favicon.png" height="17" /> [Svelte](https://svelte.dev/)
 - Meta framework: <img src="https://svelte.dev/favicon.png" height="17" /> [SvelteKit](https://kit.svelte.dev/)
 - CSS: <img src="https://tailwindcss.com/favicons/favicon-32x32.png" height="17" /> [Tailwind](https://tailwindcss.com/)
 - CSS components: [shadcn](https://www.shadcn-svelte.com/)
 - Deployment, hosting: <img src="https://pages.cloudflare.com/favicon.ico" height="15" /> [Cloudflare Pages](https://pages.cloudflare.com/)
 - Testing: <img src="https://playwright.dev/img/playwright-logo.svg" height="15" /> [Playwright](https://playwright.dev/)
 - CI: [Github Actions](https://github.com/features/actions)

## Developing

This project is built with [pnpm](https://pnpm.io/).  
We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit formatting, please review it briefly before committing.

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

# License

```

    rps-frontend - Rock Paper Scissors
    Copyright (C) 2025  SunStorm

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
```
