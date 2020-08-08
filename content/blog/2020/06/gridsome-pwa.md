---
title: 'Gridsome で PWA 対応する'
date: 2020-06-20 20:30:00
description: 'Gridsome で PWA の対応をする手順'
tags: ['PWA', 'gridsome']
image: https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_200,w_320,y_0/v1596862537/blog/pwa
---

### はじめに

PWA の対応をする。

ブログだとキャッシュくらいしか効果がないかもしれないけど、ブログ更新時にプッシュ通知するとかしながら PWA 自体を使えるようにしていきたいので、とりあえず導入しておく

### プラグインの追加

[プラグイン](https://gridsome.org/plugins/gridsome-plugin-pwa)を使う

```
$ npm i gridsome-plugin-pwa
```

### プラグインの設定

いつも通り、 `gridsome.config.js` にプラグインの設定を書く。

```
    {
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'css,png,jpg,jpeg,svg,gif,woff2,woff,ttf',

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: 'manifest.json',
        title: 'sterashima78',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: 'favicon.png',
        shortName: 'sterashima78\'s website',              // Optional
        description: 'sterashima78\'s website',// Optional
        lang: 'ja',                      // Optional
        dir: 'auto',                        // Optional
        maskableIcon: true,                 // Optional

        // Standard Meta Tags
        svgFavicon: 'favicon.png',          // Optional. Requires favicon.ico fallback

        // Microsoft Windows Meta Tags
        msTileColor: '#666600',             // Optional

        // Apple MacOS Meta Tags
        appleMaskIcon: 'favicon.png',       // Optional
        appleMaskIconColor: '#666600',      // Optional
      }
    }
```

これで自動的に `manifest.json` と `service-worker.js` が生成される。

自分で `service-worker.js` を書いたりし始めたら、`disableServiceWorker` を `true` にして、自動生成を無効にする
