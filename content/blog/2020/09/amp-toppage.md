---
title: TOPページだけAMPにした
date: 2020-09-05 14:00:00
description: TOPページをAMPにするためにしたこと書く
tags: ['Nuxt', 'AMP']
image: https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_200,w_320,y_0/v1599282221/blog/amp_styfii.png
---

このサイトは Nuxt で作っているので amp-module (https://github.com/nuxt-community/amp-module) を使った。

導入はドキュメントに書いてある通り設定を行えばいい。
あとは、各ページを AMP に対応するように書き換えていけばいい。

AMP に沿っているかどうかは、 URL に `#development=1` をつけて chrome で開発者ツールを開けば確認できる。

たとえば、 nuxt を dev で立ち上げると、purgecss で CSS が削除されずに tailwindcss がすべて出力されているため、 CSS のサイズ上限に引っかかっていることが表示されたりする。


![](https://res.cloudinary.com/sterashima78/image/upload/v1599282672/blog/amp-error_mtxvp1.png)


こういうエラーに対してひとつづつ対応していけばよい。

で、対応を終えてデプロイをした。AMPには、AMPページであるログが出力される。

![](https://res.cloudinary.com/sterashima78/image/upload/v1599282236/blog/amp-log_fvx5ag.png)


引き続き、ほかのページも対応していこうと思うが、追加しようと思っている機能が制限に引っかかると面倒なので、 `amp-script` などを使用して実装できるようにしていきたい。