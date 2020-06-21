// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// eslint-disable-next-line
module.exports = {
  siteName: "sterashima78",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [["@gridsome/remark-prismjs", { transformInlineCode: false }]],
    },
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "BlogPost",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
      templates: {
        BlogPost: "/blog/:year/:month/:day/:title"
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-96186429-4",
      },
    },
    {
      use: "gridsome-plugin-typescript",
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'css,png,jpg,jpeg,svg,gif,woff2,woff,ttf',

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        // manifestPath: 'manifest.json',
        title: 'sterashima78',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: 'src/assets/favicon.png',
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
  ],
  templates: {
    Tag: "/blog/tags/:id",
  },
};
