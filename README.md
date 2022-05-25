# Sancho Seed Vue3 Vite

English | [中文](README_zh_CN.md)

## Overview

Sancho Seed Vue3 Vite is base on Vue3 and Vite, and aims to provide an out-of-the-box light weight frontend scalfold without any UI libraries. With Sancho Seed Vue3 Vite, you can easily initiate your web project. All you need to do is to choose UI library or just do all the rest jobs by yourself. 

If you want to use webpack, you can also see [Sancho Seed Vue3 Webpack](https://github.com/enbrau/sancho-seed-vue3-webpack) as well. Both [Sancho Seed Vue3 Webpack](https://github.com/enbrau/sancho-seed-vue3-webpack) and [Sancho Seed Vue3 Vite](https://github.com/enbrau/sancho-seed-vue3-vite) have the same engineering structure and engineering characteristic design.

## Features

- Common Function and Libraries Ready

  Vue Router, Vuex, I18n, Axios, Mock Server are installed and configured. Libraries like dayjs or lodash are loaded as Vue3 global properties.

- Multiple Development and Packaging Modes Ready

- Throw-In  

  You can add `route`, `store`, `i18n`, `hooks` and `mock` files in certain folder and the scalfold will automatically load them. 

- Project Hooks  

  We provide several hooks for different kinds of life circles, such as `What to do before Vue initialized` or `What to do before and after axios request`. 

- Utiltity Functions

## Install and Run

```
# Install
npm install

# Run for development with mock server
npm run dev

# Run for development with proxy server
npm run dev:online

# Build for Production
npm build
```

## Links

[Vite](https://vitejs.dev/)  [Vuex](https://next.vuex.vuejs.org/)
