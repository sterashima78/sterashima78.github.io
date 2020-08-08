---
title: 'F# で解く エイジングプログラミングコンテスト 2020'
date: 2020-07-12 10:45:00
description: 'F# で エイジングプログラミングコンテスト 2020 やったけど A と B と C しか解けなかった'
tags: ['f-sharp', 'AtCoder']
slug: f-sharp-atcoder-aising-2020-a-b-c
image: https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_200,w_320/v1596859521/blog/fsharp
---

## はじめに

エイジングプログラミングコンテスト 2020 に参加した。今回も解き方はわかったけど時間内に計算が終わらなかった。計算量を減らす方法はすぐわかったのだけど F# でのうまい表現がわからなくて A と B しか解けなかった。

後で落ち着いて調べたり考えたら書き方分かった。

## A

[問題はこちら](https://atcoder.jp/contests/aising2020/tasks/aising2020_a)

```fsharp
let [| l; r; d |] = stdin.ReadLine().Split(" ") |> Array.map int
[l..r]
|> List.filter (fun x -> x % d = 0)
|> List.length
|> printfn "%d"
```

数分でかけた。こういうのが安定して書けるようになったの自体はいい。

## B

[問題はこちら](https://atcoder.jp/contests/aising2020/tasks/aising2020_b)

```fsharp
stdin.ReadLine()
stdin.ReadLine().Split(" ")
|> Array.map int
|> Array.indexed
|> Array.filter (fun (index, num)-> index % 2 = 0 && num % 2 = 1)
|> Array.length
|> printfn "%d"
```

これも数分で。パフォーマンスをそこまで気にしなくてもいい奴はパイプラインでスッと書けるから楽。

## C

[問題はこちら](https://atcoder.jp/contests/aising2020/tasks/aising2020_c)

```fsharp
let calc (x, y, z) = x * x + y * y + z * z + x * y + y * z + z * x

let count (x, y, z) =
  if x = y && x = z then
    1
  else if x <> y && y <> z && z <> x then
    6
  else
    3

let n = stdin.ReadLine() |> int

seq {
    for x in 1 .. n do
      if calc (x, 1, 1) <= n then
        for y in 1 .. x do
          if calc (x, y, 1) <= n then
            for z in 1 .. y do
              if calc (x, y, z) <= n then yield (calc (x, y, z), count (x, y, z))
}
|> Seq.append (seq {for k in 1 .. n -> (k, 0)})
|> Seq.groupBy (fun (calc, _) -> calc)
|> Seq.sortBy (fun (i, _)-> i)
|> Seq.map (fun (_, items) -> Seq.fold (fun sum (_, num) -> sum + num) 0 items)
|> Seq.iter (printfn "%d")

```

全探索。

シーケンス生成の時に if でフィルタリングができることを知らなくて、必要以上のパターンの演算をしていて時間内に終わらなかった。

あとは、問題で定義されている演算を初めはインラインで書いていたのでかなりノイジーだった。

関数型なのだから、意味のある演算が出てきたら個別に定義してそれを使うようにしたほうがわかりやすいと改めて感じた。

## 感想

AtCoder Problem で問題をコンスタントに解き始めたのもあるのか、普通のものは普通に書けるようになった。

ただ、パフォーマンス的な言語仕様はまだわかってないところがあるので、認識を深めながら進めたい。特に、Array, List とか Seq とか。

ランダムアクセス可能とか、先頭からアクセスするとか、遅延評価するとかであってるのかな。
