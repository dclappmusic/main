const manifestJSON = require('./public/manifest.json')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '/',
  // pwa: {
  //   themeColor: manifestJSON.theme_color,
  //   name: manifestJSON.short_name,
  //   msTileColor: manifestJSON.background_color,
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     swSrc: 'public/service-worker.js'
  //   }
  // }
}
