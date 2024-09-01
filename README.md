# Nuxt3 Template

Look at the [Nuxt3 documentation](https://nuxt.com/docs/getting-started/introduction) to more.

## 🌟Skills

[![Nuxt3](https://img.shields.io/badge/Nuxt3-^3.12.2-BrightGreen?style=for-the-badge&logo=Nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-latest-blue?style=for-the-badge&logo=TypeScript)](https://nuxt.com/)
[![unocss](https://img.shields.io/badge/unocss-^0.61.0-red?style=for-the-badge&logo=unocss)](https://unocss.dev/)
[![@nuxtjs/i18n](https://img.shields.io/badge/@nuxtjs/i18n-^8.3.1-BrightGreen?style=for-the-badge&logo=Nuxt.js)](https://nuxt.com/modules/i18n)
[![sass](https://img.shields.io/badge/sass-^1.77.6-pink?style=for-the-badge&logo=sass)](https://sass-lang.com/documentation/)

[![stylelint](https://img.shields.io/badge/stylelint-^16.6.1-blueviolet?style=for-the-badge&logo=stylelint)](https://stylelint.io/)
[![eslint](https://img.shields.io/badge/eslint-^9.6.0-blue?style=for-the-badge&logo=eslint)](https://eslint.org/docs/latest/)
[![commitlint](https://img.shields.io/badge/commitlint-^19.3.0-BrightGreen?style=for-the-badge&logo=commitlint)](https://commitlint.js.org/)
[![prettier](https://img.shields.io/badge/prettier-^3.3.2-yellow?style=for-the-badge&logo=prettier)](https://prettier.io/)
[![husky](https://img.shields.io/badge/husky-v9.0.1-BrightGreen?style=for-the-badge&logo=husky)](https://typicode.github.io/husky/)
[![volta](https://img.shields.io/badge/volta-v1.1.1-orange?style=for-the-badge&logo=volta)](https://docs.volta.sh/guide/getting-started)

## 💡note
### eslint v9 
采用新的配置风格
https://eslint.org/docs/latest/use/configure/configuration-files

ESLint v9 support：https://github.com/eslint/eslint/issues/18391

升级：https://eslint.org/docs/latest/use/migrate-to-9.0.0
集成：https://eslint.org/docs/latest/use/integrations


### Stylelint v16 升级
https://stylelint.io/migration-guide/to-16
https://stylelint.nodejs.cn/migration-guide/to-15/

### Stylelint v16 & Prettier
从 Stylelint v15 开始，Stylelint 弃用了所有冲突的风格规则 ，并在 Stylelint v16 中删除了这些规则
https://github.com/prettier/stylelint-prettier

### Prettier & Stylelint & Eslint
https://prettier.io/docs/en/integrating-with-linters.html#docsNav
https://github.com/prettier/stylelint-prettier
https://github.com/prettier/stylelint-prettier

husky

https://github.com/typicode/husky/releases/tag/v9.0.1

lint-staged
https://www.npmjs.com/package/lint-staged#examples

在版本 10 之前，任务必须手动包含作为最后一步。此行为已集成到 lint-staged 本身中，以防止多个任务编辑相同文件的竞争条件。如果在任务配置中检测到 lint-staged，它将在控制台中显示警告。升级后请从您的配置中删除。git addgit addgit add

## ⚙️Install

```bash
pnpm install
```

## 🛠️Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```
## 📌Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

## 🚀Deployment
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
