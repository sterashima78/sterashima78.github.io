---
title: ビット全探索の問題
date: 2020-10-11 16:00:00
description: F# でbit全探索
tags: ['f-sharp', 'AtCoder']
image: https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_200,w_320,y_0/v1596859521/blog/fsharp.png
---

以下の問題を解いていた。

https://atcoder.jp/contests/abc167/tasks/abc167_c

ともかくいくつかある要素があって、それらについて、利用する・利用しないの全通りを探索したい。

これの表現には 2 の n 乗の値で表現することで作業をやりやすくする。

例えば、3 つの要素 (A, B, C とする) が存在してそれらのうち利用する・利用しないを選択することを以下のように表現する。

A と選択して、B と C は選択しない -> 0 0 1 -> 0 + 0 + 1 -> 1

A と C を選択して、B は選択しない -> 1 0 1 -> 2^2 + 0 + 1 -> 5

以下のような関数でビット列化と配列からの要素選択をする

```fsharp
let createBitSeq n =
    { 1 .. pown 2 n - 1 }
    |> Seq.map (fun x -> System.Convert.ToString(x, 2))

let selectByBit (arr: 'a []) (str: string) =
    str.ToCharArray()
    |> Array.rev
    |> Array.mapi (fun index v -> if v = '1' then Some(arr.[index]) else None)
    |> Array.choose id
```

以下のように使う

```fsharp
let a = [|1 .. 3|]
let b = [|1 .. 4|]

let demo arr =
  arr
  |> Array.length
  |> createBitSeq
  |> Seq.map (selectByBit arr)

a |> demo |> Seq.toList |> printfn "%A"
b |> demo |> Seq.toList |> printfn "%A"
```

以下のように出力される

```fsharp
[[|1|]; [|2|]; [|1; 2|]; [|3|]; [|1; 3|]; [|2; 3|]; [|1; 2; 3|]]
[[|1|]; [|2|]; [|1; 2|]; [|3|]; [|1; 3|]; [|2; 3|]; [|1; 2; 3|]; [|4|]; [|1; 4|];
 [|2; 4|]; [|1; 2; 4|]; [|3; 4|]; [|1; 3; 4|]; [|2; 3; 4|]; [|1; 2; 3; 4|]]
```

こういう関数が蓄積されていくのは楽しい
