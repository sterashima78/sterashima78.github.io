const fs = require('fs')
const path = require('path')
const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')
const mkdirp = require('mkdirp')
const doLighthouse = async (url, config = null) => {
  const options = {
    output: 'html',
  }
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless'],
    enableExtensions: false,
  })
  options.port = chrome.port
  try {
    const result = await lighthouse(url, options, config)
    await chrome.kill()
    return result
  } catch (error) {
    throw new Error(error)
  }
}

;(async () => {
  for (const [name, url] of [
    ['home', ''],
    ['blog', 'blog/'],
    ['about', 'about/'],
  ]) {
    const result = await doLighthouse(`http://localhost:3000/${url}`, {
      extends: 'lighthouse:default',
    })

    const { report } = result
    mkdirp.sync(path.join(__dirname, '..', 'reports'))
    fs.writeFile(
      path.join(__dirname, '..', 'reports', `${name}.html`),
      report,
      {
        charset: 'UTF-8',
      },
      (error) => {
        if (error) {
          throw new Error(error)
        }
      }
    )
  }
})()
