---
title: Gridsome に Typescript を入れる
date: 2020-06-14 17:00:00
description: "Gridsomeプロジェクトに Typescriot を導入する"
tags: ['vue', 'gridsome', 'Typescript']
slug: gridsome-typescript
image: https://user-images.githubusercontent.com/45279563/84564522-4eb24c80-ad9d-11ea-95e1-10c32711c54c.png
---

後々のことを考えて Gridsome プロジェクトに Typescript を導入しておこうと思った。

Pluginを検索すると以下の二つが出てきた

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
        "outDir": "./built/",
        "sourceMap": true,
        "strict": true
    },
    "include": [
        "./src/**/*"
    ]
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