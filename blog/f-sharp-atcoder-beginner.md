---
title: "F# で AtCoder Beginners Selection 解いた"
date: 2020-07-05 20:15:00
description: "F# で AtCoder Beginners Selection 解いたので回答例を載せる"
tags: ["f-sharp", "AtCoder"]
slug: f-sharp-atcoder-beginner
image: https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png
---

## はじめに

F# の練習のために [AtCoder の Beginners Selection](https://atcoder.jp/contests/abs) を一通り解いたので解答例を載せていく。

具体的に解いてみるとパターマッチングとパイプライン演算子の書き心地の良さをより実感した。

## 問題と解答例

### PracticeA

[問題はこちら](https://atcoder.jp/contests/abs/tasks/practice_1)

```
Array.append [| stdin.ReadLine() |] (stdin.ReadLine().Split(' '))
|> Array.map int
|> Array.reduce (+)
|> printfn "%d %s" <| stdin.ReadLine()
```

提出確認用の問題だけど、もう F# の書き心地の良さがわかった。

`printfn "%d %s"` に対して型チェックが効くことや、パイプラインの向きを変えても機能するのが面白かった。

### ABC086A

[問題はこちら](https://atcoder.jp/contests/abs/tasks/abc086_a)

```
stdin.ReadLine().Split(" ")
|> Array.map int
|> Array.reduce (*)
|> (%)
<| 2
|> fun i -> if i = 1 then "Odd" else "Even"
|> printfn "%s"
```

やっぱり if は 式がいいなと思った。

### ABC081A

[問題はこちら](https://atcoder.jp/contests/abs/tasks/abc081_a)

```
stdin.ReadLine().ToCharArray()
|> Array.map (string >> int)
|> Array.reduce (+)
|> printfn "%d"
```

最初は以下のように書いていて、

```
|> Array.map string
|> Array.map int
```

関数合成したものと同じだとコンパイラに教えてもらった頭いいなと思った。

ちなみに文字ごとに分解するこの方法は今思うと別の方法のほうがよさそうだった。

### ABC081B

ここから B 問題

[問題はこちら](https://atcoder.jp/contests/abs/tasks/abc081_b)

```
stdin.ReadLine()

let isEvenAll arr =
    arr
    |> Array.filter (fun x -> x % 2 = 0)
    |> Array.length
    |> fun x -> x = Array.length arr

let rec solve tuple =
    match tuple with
    | (arr, count) when isEvenAll arr -> solve (arr |> Array.map (fun x -> x / 2), count + 1)
    | (_, count) -> count

stdin.ReadLine().Split(" ")
|> Array.map int
|> fun a -> (a, 0)
|> solve
|> printfn "%d"
```

パターンマッチを使いたくて書いたけどこれは普通に if 式で書くべきだった気がした。

言語仕様を把握できていなくていろいろ試行錯誤してる感がある。

`isEvenAll` も単に odd number を探せばいいだけなのにサイコーに頭悪い感が出てる。

### ABC087B

[問題はこちら](https://atcoder.jp/contests/abs/tasks/abc087_b)

```
let c500 = stdin.ReadLine() |> int
let c100 = stdin.ReadLine() |> int
let c50 = stdin.ReadLine() |> int
let ans = stdin.ReadLine() |> int

[| for coin500 in 0 .. c500 do
    for coin100 in 0 .. c100 do
        for coin50 in 0 .. c50 -> (coin500, coin100, coin50) |]
|> Array.filter (fun (a, b, c) -> (500 * a + 100 * b + 50 * c) = ans)
|> Array.length
|> printfn "%d"
```

全探索。

リスト生成は Haskell 程じゃないけどリスト内包表記が使いやすい。

### ABC083B

[問題はこちら](https://atcoder.jp/contests/abs/tasks/abc083_b)

```
let [| n; a; b |] =
    stdin.ReadLine().Split(" ") |> Array.map int

let rec sumOfEachNum num sum =
    match num with
    | 0 -> sum
    | num -> sumOfEachNum (num / 10) (sum + num % 10)

let isSumOfEachNumInnerRange under upper num =
  let sum = sumOfEachNum num 0
  under <= sum && sum <= upper

[ 1 .. n ] |> List.filter (isSumOfEachNumInnerRange a b)
  |> List.reduce (+)
  |> printfn "%d"
```

`sumOfEachNum` は「各桁の総和を取る」だけど、あーやっぱ再起で書くと考えやすいわと改めて感じた。

最初は、文字列変換 -> 分解 -> キャスト -> 総和 を取ろうとしたし、多分そのほうが性能的にはいいんだろうけど、単位当たりの処理で設計するほうが誤りが少ないと思うので、この考え方は意識したい。

### ABC088B

[問題はこちら](https://atcoder.jp/contests/abs/tasks/abc088_b)

```
stdin.ReadLine()
let rec toDiff tList fList =
  match fList with
  | a::b::x -> toDiff ((a - b)::tList) x
  | [a] -> a::tList
  | [] -> tList

stdin.ReadLine().Split(" ")
  |> Array.toList
  |> List.map int
  |> List.sortBy (fun x -> -1 * x)
  |> toDiff []
  |> List.reduce (+)
  |> printfn "%d"
```

再起・パターンマッチは強い。

### ABC085B

[問題はこちら](https://atcoder.jp/contests/abs/tasks/abc085_b)

```
let rec uniq tList fList =
  match fList with
    | x::y::z -> if x = y then uniq tList (y::z) else uniq (x::tList) (y::z)
    | x::z -> uniq (x::tList) z
    | [] -> tList

let numOfPlate = stdin.ReadLine() |> int

[1 .. numOfPlate]
  |> List.map (fun _ -> stdin.ReadLine() |> int )
  |> List.sort
  |> uniq []
  |> List.length
  |> printfn "%d"
```

問題をどう解くべきかのほうが問題で、どう書いたら実現できるかのあたりは慣れてきた。

### ABC085C

C 問題。

[問題はこちら](https://atcoder.jp/contests/abs/tasks/abc085_c)

```
let [| n; sum |] = stdin.ReadLine().Split(" ") |> Array.map int

seq {
  for x in 0 .. n do
    for y in 0 .. (n - x) -> (x, y, n - x - y)
}
|> Seq.filter (fun (x, y, z) -> (x * 10000 + y * 5000 + z * 1000) = sum)
|> Seq.tryFind (fun _ -> true)
|> fun x ->
  match x with
  | Some y -> y
  | None -> (-1, -1, -1)
|> fun (x, y ,z) -> printfn "%d %d %d" x y z
```

このへんから脳死全探索だと時間切れになることもあるので、seq を使ってみた。
これはは遅延評価されるとのこと。

Option が返ってくる `head` がわからずに `Seq.tryFind (fun _ -> true)` という頭悪いことしてる。

今気が付いたけど。パターンマッチすればいいのか。

### ABC049C

[問題はこちら](https://atcoder.jp/contests/abs/tasks/arc065_a)

```
let rec solve str =
  match str with
  | "d"::"r"::"e"::"a"::"m"::"e"::"r"::x -> if solve x = "YES" then "YES" else solve ("e"::"r"::x)
  | "d"::"r"::"e"::"a"::"m"::x -> solve x
  | "e"::"r"::"a"::"s"::"e"::"r"::x -> if solve x = "YES" then "YES" else solve ("r"::x)
  | "e"::"r"::"a"::"s"::"e"::x -> solve x
  | [] -> "YES"
  | _ -> "NO"

stdin.ReadLine() |> Seq.toList |> List.map string |> solve |> printfn "%s"
```

Haskell って String が char のリストだったはずだから、もっとスッとかけた気がするけど、何とか頑張った感じ。

もうちょっとスマートに書けないものか。

問題自体はパターンをちゃんと網羅できればそれで OK な感じ。

この辺が書いてて明確だから助かる。

### ABC086C

[問題はこちら](https://atcoder.jp/contests/abs/tasks/arc089_a)

```
let isMovable (t1, x1, y1) (t2, x2, y2) =
  let t = t2 - t1
  let dist = abs (x1 - x2) + abs (y1 - y2)
  dist <= t && ((t % 2) = (dist % 2))

let rec solve l =
  match l with
  | p1::[p2] -> if isMovable p1 p2 then "Yes" else "No"
  | p1::p2::x -> if isMovable p1 p2 then solve (p2::x) else "No"
  | [p] -> if isMovable (0, 0, 0) p then "Yes" else "No"
  | _ -> "??"

let numOfLine = stdin.ReadLine() |> int
[
  for _ in 1 .. numOfLine ->
    stdin.ReadLine().Split(" ")
    |> Array.map int
    |> (fun [| t; x; y|] -> (t, x, y))
] |> solve |> printfn "%s"
```

`isMovable` がもうちょっとすっきりしないものかと思った。

Haskell ならローカル変数宣言できて、もうちょっとすっきりかけた気がするなとか思ったけど、結局同じことやってるからいいか。ってなった。

## 感想

とりあえずしばらくはコンテストに参加し続けて、A,B,C くらいはコンスタントに解けるようにしていきたい。
