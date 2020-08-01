---
title: 'このサイトを Nuxt に移行した'
date: 2020-08-01 16:45:00
description: 'Gridsome で作っていたサイトを Nuxt に移行しました'
tags: ['vue', 'nuxt', 'Typescript']
image: https://user-images.githubusercontent.com/45279563/89096905-2e098900-d415-11ea-9237-8ef38a377d0a.png
---

## はじめに

このサイトは Gridsome で作ってたけど [Nuxt content プラグイン](https://content.nuxtjs.org/ja/) を使ってみたかったので Nuxt へ移行させた。

## 作業

`nuxt-create-app` で新しくプロジェクトを作って、コンポーネントとコンテンツを移動させて、
page と template に記述してた graphql でリソースをフェッチしている個所を
`asyncData` + `$content` の記述に変更して終了。

あたりまえだけどそれほど難しいものじゃなかった。

## 感想

content プラグインは予想以上にいい感じ。

gridsome も良かったのだけど、静的ファイルの扱いが楽になったのと、full static の generate ができるのでこのまま nuxt でいくのだと思う。

gridsome では見つからなかった module なども豊富にあると思うので積極的に使っていきたい。

あと、今は作り始めでさっさとやるために Vuetify を使っているけど、そんなに豊富な機能を使うようなサイトではないので、必要なパーツだけ作って依存から外したい。
結構リソースの大きい部分を占めているので。

そんな感じでパフォーマンスの面の改善を検討していけたらよいな。
