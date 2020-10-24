---
title: 実践Firestore読んだ
date: 2020-10-24 22:30:00
description: '「実践Firestore」を読んだ読書メモ'
tags: ['読書メモ']
image: https://res.cloudinary.com/sterashima78/image/upload/c_fit,w_200/v1603545525/blog/firestore-book.jpg
---

「実践 Firestore」を読んだ読書メモ

<a href="https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5Firestore-%E6%8A%80%E8%A1%93%E3%81%AE%E6%B3%89%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%EF%BC%88NextPublishing%EF%BC%89-%E7%A6%8F%E7%94%B0-%E9%9B%84%E8%B2%B4-ebook/dp/B0851BGDQG/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=yarishin-22&linkId=66b99648f7ffa82f60471722b9a3f019&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0851BGDQG&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=yarishin-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=yarishin-22&language=ja_JP&l=li3&o=9&a=B0851BGDQG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## 感想など

RDB のスキーマ設計は適切に正規化をすれば大体おかしいことにはならないと思っているけど、NoSQL はその辺が難しいと思っていた。

特に FireStore はクライアントから直接接続を行うため、値のバリデーションと、アクセスコントロールを設定で行わないといけない。

アクセスコントロールは基本的に穴を空けていくものなので、適切にスキーマ設計をすることで必要以上に穴を空けなくてすむようになる。

さらに FireStore は従量課金だ。不要なアクセスを減らすようなスキーマ設計やクエリを記述する必要がある。

そのあたりを踏まえたスキーマ設計やセキュリティルールの設定方法について記述されている。

セキュリティ観点では、そもそもコレクションを分けてしまうという戦略が一番よいらしい。
例えば、ユーザの情報でもニックネームなどの公開可能情報以外にメールアドレスなど本人以外にアクセスさせたくない情報がある。

そのような場合は、`/private-user/<uid>` と `/public-user/<uid>` にスキーマを分けて同じ uid を ドキュメントの ID とする。

加えて、ユーザと 1:n 関係を持つ情報がある場合 (ログイン履歴とか) ユーザのサブコレクションにするわけだが、これも、公開するかしないかで、どちらかのサブコレクションにするのがよい。

トップレベルに新しいコレクションを作成してドキュメントのフィールドに参照を持たせるという戦略もあるようだが、コレクショングループクエリ が書けるようになってからこれを行うメリットはあまりなくなったらしい。

セキュリティルールではドキュメントのバリデーションも行い、不正な値が入らないようにする。セキュリティルールはシュミレータで試験ができるらしいので、テストを書きながら管理するのがよさそう。

複雑なセキュリティルールは管理が難しいので、そのような処理は Function にして、 イベントにフックして、Adomin Client で操作するのが良いらしい。
ただ、この方法はリアルタイム性を損なうことになるので、要件に応じた対応が必要らしい。

この辺を踏まえて、今作ってるアプリのストアを再設計して実装していこうと思う。

久しぶりに新しい概念に触れて面白かった。
