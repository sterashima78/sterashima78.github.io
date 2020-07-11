---
title: "F#を始めたから ABC172 やった"
date: 2020-06-28 18:30:00
description: "F# で ABC172 やったけど A と Bしか解けなかった"
tags: ["f-sharp", "AtCoder"]
slug: f-sharp-atcoder-abc172-a-b
image: https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png
---

## はじめに

新しい言語の勉強するときは AtCoder で問題を解くのだけど、ちょうど練習しようと思ったときに ABC172 が開催されるタイミングだったので参加した。

ちなみに時間的にきつくてこれまでは過去問を説いているだけだったので、参加自体が初めてだった。

## A - Calc

整数 a が入力されます。値 a+a^2+a^3 を出力してください。

```
stdin.ReadLine()
|> int
|> fun a -> a + a * a + a * a * a
|> printfn "%d"
```

パイプライン演算子気持ちいいなと思った。

## B - Minor Change

文字列 S,T が与えられます。次の操作を繰り返して S を T に変更するとき、操作回数の最小値を求めてください。

操作：S の 1 文字を選んで別の文字に書き換える

```
cupofcoffee
cupofhottea
```

なら答えは 4 なので、違う文字を挙げればいい

```
let arr1 = stdin.ReadLine().ToCharArray()
let arr2 = stdin.ReadLine().ToCharArray()

Array.zip arr1 arr2
|> Array.map (fun (a, b) -> if a = b then 0 else 1)
|> Array.reduce (+)
|> printfn "%d"
```

if 式気持ちいいなと思った。あと中置関数をちゃんと関数として使えるのはいいなと思った。
Haskell でも同じだったけど。

## 感想

全然解けなかったけど、文法を理解したりする助けにはなったので、引き続き過去問を解いていきたい。

ちなみに Haskell ではビギナーセレクション解いてる途中で断念した。
