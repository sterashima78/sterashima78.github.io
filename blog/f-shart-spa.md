---
title: "F#を始めたから SPA 作りたい 1"
date: 2020-06-28 19:30:00
description: "F# と Bolero で SPA を作る。テンプレートプロジェクトを動かすまで。"
tags: ["F#", "SPA", "Bolero"]
slug: f-sharp-SPA
image: https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png
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
