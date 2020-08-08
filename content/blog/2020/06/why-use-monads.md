---
title: "なんでモナドを使うのか"
date: 2020-06-15 21:00:00
description: "モナドとは何かの前になんでモナドでなにができるのかを考えるべき"
tags: ["monads"]
slug: why-use-monads
image: http://adit.io/imgs/functors/context.png
---

サムネイルは[ここ](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)から拝借した。

## 一通り書き終わった後のはじめに

やっぱり説明が難しく、書き終わってから、うまく説明できていないような気がした。。

## はじめに

モナドがなにかをちゃんと説明をするまでに時間がかかる。モナドは数学的な背景を有していて、説明の際には当然のようにそこで使われている言葉を利用するから、登場人物うまく理解できなかったりする。

コードの例がついていると思えばそれは Haskell で記述されたもので、慣れていないとどうもピンと来ない。

そんなこんなで説明が長いから、結局それは何に使えるの？という問いの答えを得られる前に離脱してしまうような気がしている。

何事もそうだと思うけど、何かを学ぶときの一番の原動力はそれによってどんな利益を得られるかというところだと思う。

だから、この文書では、モナドで何ができるのか、なぜ使うのかというあたりを記述できればいいなと思っている。

## 注意

- 厳密なモナドの説明をしない
- コード例を示さない

## 良いソフトウェアを書きたい

良いソフトウェアとは何かという問い自体が難しいものだと思うが、そのうちの要素をいくつか上げることはできる。

ここでは二つを上げる。当然流れでわかると思うが、モナドは以下の要素を満たしたソフトウェアを書く上で役に立つということになる。

### 責任が明確であること

責任が明確であるということは、変更が必要になった時の影響を局所化できる。
つまり、機能拡張がやりやすくや誤りがあった時の原因の特定が行い易くなる。

これは、良いソフトウェアの一要素としては十分だと思う。

### 動作が予想しやすいこと

同じ条件で何度か実行すると挙動が変わるソフトウェアよりも、同じ条件で実行すれば同じ結果が返ってくるようなソフトウェアのほうが、試験が容易であり、問題の再現もしやすくなる。

これも、良いソフトウェアのとしては十分だと思う。

ここでは、あえてあいまいな言葉で記述したが、より具体的な参照透過であるという言葉を使いたい。

参照透過である。ということはまさに上で述べた、同じ条件で実行すれば同じ結果が返ってくるということに合致する。

## なんでモナドを使うのか

モナドを利用することで、「興味のある値」と「現実的にソフトウェアで考慮しなければいけない事柄」を同時に扱うことができる。

### 「興味のある値」

ここでの「興味のある値」とは、例えば TODO リストを作っているのなら TODO のデータそのものだし、会計ソフトを作っているのなら、金額や税率のことだろう。

多くの場合ソフトウェアを作るということは、この「興味のある値」を適切なルールにのっとって変換したり計算したりするロジックを作ることになる。

(これはドメイン駆動の文脈からいくとまさにドメインを指すものだろう)

TODO リストの例なら、新しい TODO を作成したり、TODO を完了状態にしたり、完了済み TODO を削除したりする。

### 「現実的にソフトウェアで考慮しなければいけない事柄」

一方で、「現実的にソフトウェアで考慮しなければいけない事柄」とはなにか。

例えばエラーがある。現実的にソフトウェアを作るうえで不正な計算などが行われたときには、適切にフォールバックしたり、ユーザに知らせたりする必要がある。純粋に金額の演算や TODO リストのデータ変換をするというものとは、別の観点で必要な事柄になる。

例えば入出力がある。現実としてソフトウェアはユーザからの入力を受けて、「興味のある値」の演算を行い、得られた意味のある値を出力する必要がある。

その一方で、入出力とはテストなどをするうえで扱いが難しく、先に述べた参照透過が実現できない性質のものになる。

標準入力を受け付ける `getInput()` という関数をコールしてもそこから得られる値は、標準入力の値に依存するため、その時々で変わるからだ。

### 二種類の事柄を同時に扱う

モナドはよく「箱」や「文脈」という例で説明をされるが、この「箱」や「文脈」というのが、「現実的にソフトウェアで考慮しなければいけない事柄」にあたる。
そして、「箱の中身」や「文脈の中にあるもの」が「興味のある値」となる。

上述した二種類の事柄は、普通にソフトウェアを書いていれば、一連のコードの中で同時に考慮されて混在した状態で記述される。

モナドを利用することで、ソフトウェアを作るうえで考慮しなくてはならない、二種類の事柄を「モナド」と、「モナドの保持する値」として扱い、責任を分けながらソフトウェアを書くことができる。

つまり、「興味のある値」やそれに対する演算は「モナドの保持する値」に対して実施する。
その一方で発生する「現実的にソフトウェアで考慮しなければいけない事柄」はモナドが面倒を見てくれるように状態になる。

これによってソフトウェアは「責任が明確である」状態になるし、参照透過が実現できないような性質をモナドに任せることで「動作が予想しやすい」状態になると期待できる。

## どんなことができるのか

モナドというのは、抽象的なものであるルールを満たせばモナドといえる。
それを、それぞれの目的に合わせて使えるようにすることで特定の「現実的にソフトウェアで考慮しなければいけない事柄」に対応できるモナドとなる。

以降でいくつか説明するが、重要なのはそれぞれは別の事柄であるが、いずれもモナドという同じ枠組みの中で扱うことができるという点にある。

### エラーの処理

Either というモナドがある。

このモナドは、「例外の状態」と「興味のある値」を有することを想定して利用されている。
「興味のある値」に対して各種処理を適用していき、例外が発生したら、モナド側で、例外の状態として保持してくれる。

そしてアプリケーション的に例外の評価が必要なタイミング (Web アプリケーションならレスポンスを作る時など) に例外状態を参照し、適切なエラー用の処理を記述することができる。

このように、Either モナドを使うことで、興味のある演算とエラーのハンドリングの責任を分けやすくなる。

### null の処理

Maybe というモナドがある

このモナドは、「値の有無」と「興味のある値」を表現することができる。
「興味のある値」に対して各種処理を適用していき、 null 参照など、対象の値が存在しなくなったら、モナド側でその値は存在しないという状態を保持してくれる。

Either 同様、最終的に値を評価するタイミング (例えば DB に値を書き込むときなど) に値が存在するときだけ必要な処理を行うなどの記述ができる。

このように Maybe モナドも Either モナド同様、興味のある演算とエラーのハンドリングの責任を分けやすくなる。