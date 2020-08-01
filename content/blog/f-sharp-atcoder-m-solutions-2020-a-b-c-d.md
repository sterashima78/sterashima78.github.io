---
title: 'F# で解く M-SOLUTIONS プロコンオープン 2020'
date: 2020-07-26 10:45:00
description: 'F# で M-SOLUTIONS プロコンオープン 2020 やったけど A - D しか解けなかった'
tags: ['f-sharp', 'AtCoder']
slug: f-sharp-atcoder-m-solutions-2020-a-b-c-d
image: https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png
---

## はじめに

M-SOLUTIONS プロコンオープン 2020 に参加した。今回は A, B, C は比較的スムーズに解けた。D も実装はおおよそ問題なかったのだけど、桁あふれに気が付かなかった。

終了後に気が付いて、int にしていた型を int64 にしたら通った。脳死で大きめの型にしておいたほうがいいと分かった。

## A

[問題はこちら](https://atcoder.jp/contests/m-solutions2020/tasks/m_solutions2020_a)

```fsharp
let solve i =
  if i <= 599 then
    8
  else if i <= 799 then
    7
  else if i <= 999 then
    6
  else if i <= 1199 then
    5
  else if i <= 1399 then
    4
  else if i <= 1599 then
    3
  else if i <= 1799 then
    2
  else
    1

stdin.ReadLine()
|> int
|> solve
|> printfn "%d"
```

単純な分岐。

## B

[問題はこちら](https://atcoder.jp/contests/m-solutions2020/tasks/m_solutions2020_b)

```
let rec solve red green blue rest =
    match rest with
    | 0 -> if red < green && green < blue then "Yes" else "No"
    | rest ->
        if red >= green then solve red (green * 2) blue (rest - 1)
        else if green >= blue then solve red green (blue * 2) (rest - 1)
        else "Yes"

let [| red; green; blue |] =
    stdin.ReadLine().Split(" ") |> Array.map int

stdin.ReadLine()
|> int
|> solve red green blue
|> printfn "%s"
```

`>=` とか `>` とかで勘違いして何回か失敗したくらい。

## C

[問題はこちら](https://atcoder.jp/contests/m-solutions2020/tasks/m_solutions2020_c)

```
let rec solve pairs ans (arr: int []) =
    match pairs with
    | [] -> ans
    | (a, b) :: pairs -> if arr.[a] < arr.[b] then solve pairs ("Yes" :: ans) arr else solve pairs ("No" :: ans) arr

let [| n; k |] =
    stdin.ReadLine().Split(" ") |> Array.map int

let pair =
    [ for x in [ k .. (n - 1) ] do
        (x - k, x) ]


stdin.ReadLine().Split(" ")
|> Array.map int
|> solve pair []
|> List.rev
|> String.concat "\n"
|> printfn "%s"
```

問題通りの手順を踏むと桁あふれすることは明らかだったので、別の方法が思いついてよかった。

index で参照するのが気持ち悪くてなんかいい方法がないかなと思ってたけど、後から考えると、スライスして zip すればよかった。

## D

[問題はこちら](https://atcoder.jp/contests/m-solutions2020/tasks/m_solutions2020_d)

```
let rec gain money fList =
    match fList with
    | [] -> money
    | [ _ ] -> money
    | (a :: b :: fList) ->
        if a < b then
            let num = money / a
            let newMoney = money + (b - a) * num
            gain newMoney (b :: fList)
        else
            gain money (b :: fList)


stdin.ReadLine()

stdin.ReadLine().Split(" ")
|> Array.map int64
|> Array.toList
|> gain (int64 1000)
|> printfn "%d"
```

はじめは底値の時に買って、天井で売るを繰り返せばいいと思った。が、実は翌日のほうが高かったら買って売れば良かったらしい。ので後からその方針に切り替えた。

int64 にしている個所を int にしていて大きな数値の時に通らなかったようなのでこれを回答できなかったのはかなり痛かった。

## 感想

やっと C まで解けた。問題の内容次第では D 以降も解けるので DP などの書き方をしっかり身に着けて解ける問題を増やしていきたい。
