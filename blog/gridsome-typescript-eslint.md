---
title: Gridsome に ESLint を入れる
date: 2020-06-20 12:00:00
description: "Gridsomeプロジェクトに ESLint を導入する"
tags: ["vue", "gridsome", "Typescript", "ESLint"]
slug: gridsome-typescript-eslint
image: https://user-images.githubusercontent.com/45279563/85189623-93813a80-b2eb-11ea-9b57-d6a6b66d3e5b.png
---

## はじめに

Gridsome プロジェクトに ESLint を入れたい。

すでに Typescript を導入しているので、それにも対応するように設定する。

## 依存パッケージのインストール

```bash
$ npm i -D eslint
```

## ESLint の設定

後で細かく変えるとして、とりあえず適当にルールを設定しておく。

```
$ npx eslint --init
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · vue
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now with npm? · No / Yes
```

動かしてみる

```
$ npx eslint src --ext "ts,vue,js"

  1:1   error    Use the latest vue-eslint-parser. See also https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error
```

[エラーが出るので確認する](https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error)

`vue-eslint-parser` が必要。

```
$ npm i -D vue-eslint-parser
```

`.eslintrc.js` にパーサー設定追加

```
parser: "vue-eslint-parser",
```

もう一回動かしてみる

```
$ npx eslint src --ext "ts,vue,js"

  8:16  warning  Missing return type on function          @typescript-eslint/explicit-module-boundary-types
  8:25  warning  Argument 'Vue' should be typed           @typescript-eslint/explicit-module-boundary-types
  8:30  warning  Object pattern argument should be typed  @typescript-eslint/explicit-module-boundary-types

✖ 3 problems (0 errors, 3 warnings)
```

ちゃんと動いた

## prettier を入れる

prettier でフォーマットするようにしたいので、入れる。

```
$ npm i -D eslint-config-prettier eslint-plugin-prettier prettier
```

`.eslintrc` の `extends` の最後に `prettier` を追加する。
あと、 `plugins` にも追加

## npm タスクに追加

```
 "lint" : "eslint src --ext 'ts,vue,js'"
```

これで以下で動くようになる。

```bash
npm run lint
```
