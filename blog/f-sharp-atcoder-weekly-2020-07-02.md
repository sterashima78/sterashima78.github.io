---
title: "今週 F# で解いた AtCoder Problems 7月2週目"
date: 2020-07-11 16:00
description: "今週 F# で解いた AtCoder Problems を振り返る"
tags: ["f-sharp", "AtCoder"]
slug: f-sharp-atcoder-weekly-2020-07-02
image: https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png
---

今週 F# で解いた AtCoder Problems 7 月 2 週目を振り返る

## はじめに

AtCoder Problems を始めた。今週は Training で Easy を 11 問解いたので振り返る。

## 問題

### B. Power Socket

[問題](https://atcoder.jp/contests/abc139/tasks/abc139_b)

```
let [| A; B |] = stdin.ReadLine().Split(" ") |> Array.map int

let rec solve rest num =
  if rest <= 0 then
    num
  else
    solve (rest - A + 1) (num + 1)

(if B = 1 then 0 else solve (B - A) 1) |> printfn "%d"
```

特殊なケースの考慮を忘れなかければ OK

### C. Rally

[問題](https://atcoder.jp/contests/abc156/tasks/abc156_c)

```
stdin.ReadLine()
let nums = stdin.ReadLine().Split(" ") |> Array.map double
let point =
  nums
  |> Array.reduce (+)
  |> fun x -> x / (Array.length nums |> double)
  |> System.Math.Round

nums
|> Array.map (fun x -> (x - point) * (x - point))
|> Array.reduce (+)
|> int
|> printfn "%d"
stdin.ReadLine()
let nums = stdin.ReadLine().Split(" ") |> Array.map double
let point =
  nums
  |> Array.reduce (+)
  |> fun x -> x / (Array.length nums |> double)
  |> System.Math.Round

nums
|> Array.map (fun x -> (x - point) * (x - point))
|> Array.reduce (+)
|> int
|> printfn "%d"
stdin.ReadLine()
let nums = stdin.ReadLine().Split(" ") |> Array.map double
let point =
  nums
  |> Array.reduce (+)
  |> fun x -> x / (Array.length nums |> double)
  |> System.Math.Round

nums
|> Array.map (fun x -> (x - point) * (x - point))
|> Array.reduce (+)
|> int
|> printfn "%d"
stdin.ReadLine()
let nums = stdin.ReadLine().Split(" ") |> Array.map double
let point =
  nums
  |> Array.reduce (+)
  |> fun x -> x / (Array.length nums |> double)
  |> System.Math.Round

nums
|> Array.map (fun x -> (x - point) * (x - point))
|> Array.reduce (+)
|> int
|> printfn "%d"
```

point の計算をメモして `(x - point)` を算出する関数を定義しておけば、パイプラインが一本になるのできれいに行ったんだろうなと思った。

### B. Qualification simulator

[問題](https://atcoder.jp/contests/code-festival-2016-qualb/tasks/codefestival_2016_qualB_b)

let rec solve tList all b fList =
match fList with
| 'a'::l -> if all > 0 then solve ("Yes"::tList) (all - 1) b l else solve ("No"::tList) all b l
| 'b'::l -> if all > 0 && b > 0 then solve ("Yes"::tList) (all - 1) (b - 1) l else solve ("No"::tList) all (b - 1) l
| _::l -> solve ("No"::tList) all b l
| [] -> tList
let [| _; a; b |] = stdin.ReadLine().Split(" ") |> Array.map int

stdin.ReadLine().ToCharArray()
|> Array.toList
|> solve [] (a + b) b
|> List.rev
|> List.map (printfn "%s")

```
let rec solve tList all b fList =
  match fList with
  | 'a'::l -> if all > 0 then solve ("Yes"::tList) (all - 1) b l else solve ("No"::tList) all b l
  | 'b'::l -> if all > 0 && b > 0 then solve ("Yes"::tList) (all - 1) (b - 1) l else solve ("No"::tList) all (b - 1) l
  | _::l -> solve ("No"::tList) all b l
  | [] -> tList
let [| _; a; b |] = stdin.ReadLine().Split(" ") |> Array.map int

stdin.ReadLine().ToCharArray()
|> Array.toList
|> solve [] (a + b) b
|> List.rev
|> List.map (printfn "%s")
```

パターンマッチが強い

### B. Tax Rate

[問題](https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_b)

```
let after = stdin.ReadLine() |> int

after
|> float
|> fun x -> x / 1.08
|> int
|> fun x ->
  match x with
  | x when int (float x * 1.08) = after -> string x
  | x when int (float (x + 1) * 1.08) = after -> string (x + 1)
  | _ -> ":("
|> printfn "%s"
```

これもそうだけど変換前の値を使いたい場合はタプルにして一緒に持っていくのが一本のパイプラインになってみやすそうだからいいんだろうな。

トップレベルで宣言した変数を関数内で使うのは結局参照透過ではなくなってしまうから。

### B. Can you solve this?

[問題](https://atcoder.jp/contests/abc121/tasks/abc121_b)

```
let [| n; m; c; |] = stdin.ReadLine().Split(" ") |> Array.map int
let B = stdin.ReadLine().Split(" ") |> Array.map int |> Array.toList
[1 .. n]
|> List.map (
  fun _ ->
    stdin.ReadLine().Split(" ")
    |> Array.map int
    |> Array.toList
    |> List.zip B
    |> List.map (fun (a,b) -> a*b)
    |> List.reduce (+)
  )
|> List.filter (fun x -> x + c > 0)
|> List.length
|> printfn "%d"
```

ネストが発生してもパイプラインなら見やすい。
ただ、これは別関数にするべきなんだろうな。普通のソフトウェア作るときは。

### B. Bishop

[問題](https://atcoder.jp/contests/panasonic2020/tasks/panasonic2020_b)

```
let [| h; w |] = stdin.ReadLine().Split(" ") |> Array.map int64

let ans =
  if h = int64 1 || w = int64 1 then
    int64 1
  else
    (w * h + int64 1) / int64 2
ans |> printfn "%d"
let [| h; w |] = stdin.ReadLine().Split(" ") |> Array.map int64

let ans =
  if h = int64 1 || w = int64 1 then
    int64 1
  else
    (w * h + int64 1) / int64 2
ans |> printfn "%d"
```

オーバーフローと特殊なケースの考慮が必要だった。

### B. Bingo

[問題](https://atcoder.jp/contests/abc157/tasks/abc157_b)

```
let rec mark marked list nums =
  match list with
  | [] -> marked
  | (r, c, n)::list -> if List.exists (fun x -> n = x) nums then mark ((r, c)::marked) list nums else mark marked list nums

let jedge list =
  let hasRowLine l num = l |> List.filter (fun (r, _) -> r = num) |> List.length |> (fun x -> x >= 3)
  let hasColLine l num = l |> List.filter (fun (_, c) -> c = num) |> List.length |> (fun x -> x >= 3)
  if hasRowLine list 1 then
    "Yes"
  else if hasRowLine list 2 then
    "Yes"
  else if hasRowLine list 3 then
    "Yes"
  else if hasColLine list 1 then
    "Yes"
  else if hasColLine list 2 then
    "Yes"
  else if hasColLine list 3 then
    "Yes"
  else if list |> List.filter (fun (r,c) -> r = c) |> List.length |> (fun x -> x = 3) then
    "Yes"
  else if list |> List.filter (fun (r,c) -> (r = 1 && c = 3) || (r = 3 && c = 1) || (r = 2 && c = 2)) |> List.length |> (fun x -> x = 3) then
    "Yes"
  else
    "No"

let l1 = stdin.ReadLine().Split(" ") |> Array.map int |> Array.indexed |> Array.map (fun (i, num) -> (1, i + 1, num)) |> Array.toList
let l2 = stdin.ReadLine().Split(" ") |> Array.map int |> Array.indexed |> Array.map (fun (i, num) -> (2, i + 1, num)) |> Array.toList
let l3 = stdin.ReadLine().Split(" ") |> Array.map int |> Array.indexed |> Array.map (fun (i, num) -> (3, i + 1, num)) |> Array.toList


let l = List.append l1 l2 |> List.append l3
let n = stdin.ReadLine() |> int

[1 .. n]
|> List.map (fun _ -> stdin.ReadLine() |> int)
|> mark [] l
|> jedge
|> printfn "%s"
```

投げやりなコードになってしまったけど、きれいなデータ構造を作れれば違ったのだろうか。
要素へのアクセスは二次元のリストがやりやすいんだろうけど、やっぱりタプルのリストで持つほうが正しい気がする。
集約関数的なものを使っていなかったけど、そういうのを使えばもっとわかりやすく集計ができたと思った。

### B. 1 21

[問題](https://atcoder.jp/contests/abc086/tasks/abc086_b)

```
let rec solve num target =
  if num * num > target then
    "No"
  else if num * num = target then
    "Yes"
  else
    solve (num + 1) target
stdin.ReadLine().Split(" ") |> String.concat "" |> int |> solve 1 |> printfn "%s"
let rec solve num target =
  if num * num > target then
    "No"
  else if num * num = target then
    "Yes"
  else
    solve (num + 1) target
stdin.ReadLine().Split(" ") |> String.concat "" |> int |> solve 1 |> printfn "%s"
```

これは割といい感じにかけた。

### B. Collecting Balls (Easy Version)

[問題](https://atcoder.jp/contests/abc074/tasks/abc074_b)

```
stdin.ReadLine()
let K = stdin.ReadLine() |> int

stdin.ReadLine().Split(" ")
|> Array.map int
|> Array.map (fun x -> if x > abs (x - K) then abs (x - K) * 2 else x * 2)
|> Array.reduce (+)
|> printfn "%d"
```

これもどちらかというといい感じにかけた気がするけど、K の扱いが気になる。

### B. Card Game for Two

[問題](https://atcoder.jp/contests/abc088/tasks/abc088_b)

```
let rec solve (a, b) list =
  match list with
  | [] -> a - b
  | a1::b1::list -> solve (a + a1, b + b1) list
  | a1::list -> solve (a + a1, b) list

stdin.ReadLine()
stdin.ReadLine().Split(" ")
|> Array.map int
|> Array.toList
|> List.sortBy (fun x -> -x)
|> solve (0, 0)
|> printfn "%d"
```

これも比較的うまく書いたと思う。

他の言語だったらチャンクとかでデータを分けてからやるけどパターンマッチのおかげでこういう感じに書きやすい。

### B. Break Number

[問題](https://atcoder.jp/contests/abc068/tasks/abc068_b)

```
let rec solve num upper =
  if num * 2 <= upper then
    solve (num * 2) upper
  else
    num
stdin.ReadLine() |> int |> solve 1 |> printfn "%d"
let rec solve num upper =
  if num * 2 <= upper then
    solve (num * 2) upper
  else
    num
stdin.ReadLine() |> int |> solve 1 |> printfn "%d"
```

再帰のおかげでわかりやすい。
