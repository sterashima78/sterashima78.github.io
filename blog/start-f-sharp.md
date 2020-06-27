---
title: "F#を始める"
date: 2020-06-27 11:00:00
description: "F#を始めるための手順をまとめた"
tags: ["F#", "VSCode"]
slug: start-f-sharp
image: https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png
---

## はじめに

関数型なプログラミングが最近好きなのだが、Haskell ちょっと普段使いには重すぎたような気がする。
なので、 `F#` を始めてみようと思ったので、環境構築をしていこうと思う。

## 前提

Windows10 のマシンで VSCode を動かしてプログラミングをする。
実行環境は Ubuntu 18.04 のサーバでリモート開発拡張機能を使う。

## .NET Core 3.1 のインストール

.NET Core で動くのでこれをインストールする。
私の知識がなかったのだが、 .NET と名前がつくものは Windows でしか動かないと思っていたのだが、 .NET Core についてはクロスプラットフォームをサポートしているとのこと。

正直いまだによく理解できていない。

[これに沿ってやる](https://docs.microsoft.com/ja-jp/dotnet/core/install/linux-ubuntu#1804-)

```bash
$ wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.$ deb -O packages-microsoft-prod.deb
$ sudo dpkg -i packages-microsoft-prod.deb
$ sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-3.1
```

これで入った。

```bash
$ dotnet --version
3.1.301
```

## 動かしてみる

[ここを参考にやる](https://fsharp.org/use/linux/)

```bash
$ echo 'printfn "Hello World from F#"' > hello.fsx
$ dotnet fsi hello.fsx

Welcome to .NET Core 3.1!
---------------------
SDK Version: 3.1.301

Telemetry
---------
The .NET Core tools collect usage data in order to help us improve your experience. The data is anonymous. It is collected by Microsoft and shared with the community. You can opt-out of telemetry by setting the DOTNET_CLI_TELEMETRY_OPTOUT environment variable to '1' or 'true' using your favorite shell.

Read more about .NET Core CLI Tools telemetry: https://aka.ms/dotnet-cli-telemetry

----------------
Explore documentation: https://aka.ms/dotnet-docs
Report issues and find source on GitHub: https://github.com/dotnet/core
Find out what's new: https://aka.ms/dotnet-whats-new
Learn about the installed HTTPS developer cert: https://aka.ms/aspnet-core-https
Use 'dotnet --help' to see available commands or visit: https://aka.ms/dotnet-cli-docs
Write your first app: https://aka.ms/first-net-core-app
--------------------------------------------------------------------------------------
Hello World from F#
```

動いた。

プロジェクトを作ってみる。

```bash
$ dotnet new console --language F#
$ dotnet run
Hello World from F#!
```

動いた。

## VSCode の設定

これ入れればいいらしい

- Ionide-fsharp

スクリプトで書くときは以下があるといいらしい。

- F# Language Server

多分 AtCoder で練習とかする時はスクリプトで書くから入れておく。

こんな感じになる。いい感じ。

![](https://user-images.githubusercontent.com/45279563/85912314-9e494b80-b866-11ea-8ede-802bd5b0f65e.PNG)

というかフォーマット関数が部分適用できるし、型チェックかかるのが面白い (ふつうなのか？)。
