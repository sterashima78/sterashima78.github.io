---
title: 'Gridsome に Typescript を入れる'
date: 2020-06-13 17:00:00
description: 'Gridsomeプロジェクトに Typescriot を導入する'
tags: ['vue', 'gridsome', 'Typescript']
image: https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_200,w_320,y_0/v1596862948/blog/typescript
---

後々のことを考えて Gridsome プロジェクトに Typescript を導入しておこうと思った。

Plugin を検索すると以下の二つが出てきた

- https://gridsome.org/plugins/gridsome-plugin-typescript
- https://gridsome.org/plugins/gridsome-plugin-ts

どちらも ts-loader を適用するだけのように見えるが、今回はよく使われていそうで、 README がわかりやすかった前者を利用することにした。

### 依存パッケージのダウンロード

```bash
npm install -D typescript ts-loader gridsome-plugin-typescript
```

### 設定ファイルの修正

`gridsome.config.js` の `plugin` フィールドに以下を追加する

```js
{
  use: 'gridsome-plugin-typescript',
}
```

`tsconfig.json` を追加する

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "noImplicitReturns": true,
    "outDir": "./dist/",
    "sourceMap": true,
    "strict": true
  },
  "include": ["./src/**/*"]
}
```

### Vue コンポーネントの型情報追加

`vue-shims.d.ts` を作成して以下を記載

```
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
```
