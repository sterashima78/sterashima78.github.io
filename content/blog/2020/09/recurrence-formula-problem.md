---
title: 漸化式の問題の解き方
date: 2020-09-06 19:00:00
description: F# で漸化式の問題をどう解くか
tags: ['f-sharp', 'AtCoder']
image: https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_200,w_320,y_0/v1596859521/blog/fsharp.png
---

以下の問題を解いていた。

> トリボナッチ数列というものがあります。この数列は 3 つ前までの数字を足したものです。
> この数列の第 n 項、an を 10007 で割った余りを求めてください。

https://atcoder.jp/contests/abc006/tasks/abc006_2

もともと再帰関数で解こうとしていたけど、スタックオーバーフローになってしまった。

なので、末尾呼び出し最適化をしてスタックオーバーフローにはならないようにしたのだけど、今度はスピードが要求に合わなくなかった。

なのでメモ化をしたがそれでもだめだった。

もっと素朴に解いてもよかったのだけど、F#らしい解き方をしたいなと思って過去の回答を見ていたら、シーケンスを使っているものがあった。

非常にシンプルに記述できていたのでこれで解くことにした。

```fsharp
let readInt () = stdin.ReadLine() |> int

()
|> readInt
|> fun n ->
    seq {
        yield 0
        yield 0
        yield 1
        yield! Seq.unfold (fun state ->
                   let (a, b, c) = state
                   let n = (a + b + c) % 10007
                   Some(n, (b, c, n))) (0, 0, 1)
    }
    |> Seq.skip (n - 1)
    |> Seq.head
|> printfn "%d"
```

シーケンスで漸化式を定義して、必要な部分を参照するというのは非常に汎用性が高い解き方だと思うので以降も漸化式の問題には積極的に使っていきたい。