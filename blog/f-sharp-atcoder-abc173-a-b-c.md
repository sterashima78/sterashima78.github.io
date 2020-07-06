---
title: "F# で解く ABC173"
date: 2020-07-06 21:45:00
description: "F# で ABC173 やったけど A と B と C しか解けなかった"
tags: ["F#", "AtCoder"]
slug: f-sharp-atcoder-abc173-a-b-c
image: https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png
---

## はじめに

ABC173 に参加した。どうやって書くといいかで結構悩んで結局 A と B しか解けなかった。

でも、そのあと少し落ち着いて考えたら C も解けた。座安園

## A

[問題はこちら](https://atcoder.jp/contests/abc173/tasks/abc173_a)

```
stdin.ReadLine()
|> int
|> fun x -> x % 1000
|> fun x -> if x = 0 then 0 else 1000 - x
|> printfn "%d"
```

まぁこの辺はさすがにこなれてきた。

## B

[問題はこちら](https://atcoder.jp/contests/abc173/tasks/abc173_b)

```
let rec solve (ac, wa, tle, re) list =
  match list with
  | "AC"::xx -> solve (ac + 1, wa, tle, re) xx
  | "WA"::xx -> solve (ac, wa + 1, tle, re) xx
  | "TLE"::xx -> solve (ac, wa, tle + 1, re) xx
  | "RE"::xx  -> solve (ac, wa, tle, re + 1) xx
  | _::xx -> solve (ac, wa, tle, re) xx
  | [] -> (ac, wa, tle, re)

let numOfAns = stdin.ReadLine() |> int
[for _ in 1 .. numOfAns -> stdin.ReadLine()]
  |> solve (0, 0, 0, 0)
  |> fun (ac, wa, tle, re) ->
    printfn "AC x %d\nWA x %d\nTLE x %d\nRE x %d" ac wa tle re
```

パターンマッチでのゴリ押しは強い

## C

[問題はこちら](https://atcoder.jp/contests/abc173/tasks/abc173_c)

```
let [| h; w; k |] = stdin.ReadLine().Split(" ") |> Array.map int

let f =
    [| 0 .. (h - 1) |]
    |> Array.map (fun row ->
      stdin.ReadLine().ToCharArray()
      |> Array.indexed
      |> Array.map (fun (col, cell) -> (row, col, string cell)))
    |> Array.reduce Array.append


let rec toMaskIndex num indexes mask =
  let d = pown 2 num
  let next = num - 1
  match num with
    | -1 -> indexes
    | num -> if mask >= d then toMaskIndex next (num::indexes) (mask - d) else toMaskIndex next indexes mask

let isUse rows cols (r, c, _) =
  let hasRow = List.exists (fun elem -> elem = r) rows
  let hasCol = List.exists (fun elem -> elem = c) cols
  hasRow && hasCol

let isBlack (_, _, cell) = cell = "#"

let countBlack field (row, col) =
  let rows = toMaskIndex h [] row
  let cols = toMaskIndex w [] col
  field
  |> Array.filter (isUse rows cols)
  |> Array.filter isBlack
  |> Array.length

[
  for k in 0 .. ((pown 2 h) - 1) do
    for j in 0 .. ((pown 2 w) - 1) -> (k, j)
]
|> List.map (countBlack f)
|> List.filter (fun x -> x = k)
|> List.length
|> printfn "%d"
```

C 問題は全探索がちゃんとできれば解けるんだなという感じ。

コンテスト中、全探索すればいいことはよくわかったんだけど、各要素をどうやって表現するのがいいのか迷ってるうちに終わってしまった。

ここでは以下を何かで表現する必要があった。

- 色が塗られたマス
- マスクする行列番号

これが表現できれば、前者に対して後者の全通りを適用すればよいので。

最初はマスを律儀に二次元リストにしようとしてしまったけど、こういう時はタプルのリストがよいと終わってから気が付いた。

マスクする行列番号は、最初タプルかインデックスのリストで表現しようとしたけど生成に困った。

その後、使うか使わないかだけが表現できればいいから、ビット列で表せばいいと気が付いた。

多分ある程度一般的に使えると思うのでこの辺はすぐに使えるようにしたい。

## 感想

慣れてきた感が出てきた。とりあえず思ったものが書けるようになりつつ、そのうえできれいに書けるようにしていきたい。

A,B,C は対象を表現できさえすれば全探索でいけるので、ここをしっかりと解けるようにして、D 以上を復習しつつ定石を覚えていきたい。
