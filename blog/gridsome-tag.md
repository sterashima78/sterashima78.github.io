---
title: Gridsome に Tag 機能を入れる
date: 2020-06-14 11:00:00
description: "Gridsomeに Tag 機能を入れた"
tags: ["vue", "gridsome"]
slug: gridsome-tag
image: https://user-images.githubusercontent.com/45279563/84583282-dea1d600-ae31-11ea-88bd-05a9e4d2828b.png
---

### はじめに

Gridsome のブログに tag という属性はつけていたが、特定タグがついている記事一覧を見ることなどはできていなかったのでできるようにした。

以下の手順で行う

1. プラグインの設定変更
1. 新しい Template の作成

### プラグインの設定変更

`@gridsome/source-filesystem` のオプション、で新しい GraphQL の型を定義する。

```js
{
  use: "@gridsome/source-filesystem",
  options: {
    path: "blog/**/*.md",
    typeName: "BlogPost",
    refs: {
      tags: {
        typeName: "Tag",
        create: true,
      },
    },
  },
}
```

`tags` フィールドの値に対して `Tag` という型を定義できる。また、 `create` 属性を `true` にすることで、型に対応するページを作ることができる。

また、 `template` のパス設定も追加する。

```js
templates: {
  Tag: "/blog/tags/:id",
},
```

### Template の作成

前節で `Tag` に対応するページを作れるようになったので、 `templates/Tag.vue` にテンプレートを作る。

ポイントになるのは GraphQL なので、そこだけ記載する。

```graphql
query tag($id: ID) {
  tag: tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on BlogPost {
            id
            title
            date(format: "YYYY年MM月DD日 HH:mm:ss")
            description
            tags {
              title
            }
            path
            image
          }
        }
      }
    }
  }
}
```

パスパラメータで ID が入ってくるのでそれを引数にして、対応するタグを検索し、それと関連する BlogPost 型のデータをとってくるようにしている。

### 感想

型自体は GraphQL Playground で確認できるので、少ない設定と、 GraphQL への理解があれば、簡単にできる感じ。

まだ、 GraphQL への理解が浅いので、そのあたりを勉強していきたい。
