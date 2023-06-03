# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Getting started

To get started with this project, clone the repository, and install the dependencies using npm:

```
git clone https://github.com/your-username/user-access-webapp.git
cd user-access-webapp
npm install
```

Once the dependencies are installed, start the development server:

```
npm run dev
```

The app will be running at [http://localhost:5173](http://localhost:5173)

Then, from another terminal, start the backend server:

```
cd server
./pocketbase serve
```

This binary will work for Linux, for other OS, see [Pocketbase docs](https://pocketbase.io/docs/)

## Features

- User registration
- User authentication
- Protected routes

## Technologies used

- Vite
- Vue 3 (Composition API)
- Typescript
- Tailwind CSS
- Vuetify
- Pinia (State management)
- Axios
- Vue Router
- Pocketbase
