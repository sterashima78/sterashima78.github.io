---
title: 'F#を始めたから SPA 作りたい 1'
date: 2020-06-28 19:30:00
description: 'F# と Bolero で SPA を作る。テンプレートプロジェクトを動かすまで。'
tags: ['f-sharp', 'SPA', 'Bolero']
image: https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_200,w_320/v1596859521/blog/fsharp
---

## はじめに

F# を WebAssembly にコンパイルすることで SPA 作れると聞いたので、プロジェクトセットアップするまでの手順をまとめる。

ということなので、今回は Bolero を使う。

Fable という トランスパイルもあるらしいのだが、ちょっとめんどくさそうな印象があったので触るとしてもあとにしようと思う。

作るアプリケーションはマインスイーパで f-sharp-minesweeper という名前の空っぽのディレクトリからスタートする。

## Bolero プロジェクトの作成

以下でテンプレートをダウンロードする。

```bash
$ dotnet new -i Bolero.Templates
```

以下で SPA のプロジェクトのテンプレートを作成する。
サーバーサイドは今回はいらないので false にしている。
ただ、 hotreload などはできないらしい。

```
$ dotnet new bolero-app -o . --server=false
```

## 実行

```
$ dotnet run -p src/f-sharp-minesweeper.Client
```

localshot の 5000 ポートで動く。

## 感想

とりあえず動くところまでは簡単だった。

あとは、不要な個所を消してアプリケーションを作っていけばいい。

elm と同じようなアーキテクチャとどこかで聞いているので、ドキュメントを見ながら作っていこうと思う。
