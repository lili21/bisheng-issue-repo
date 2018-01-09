var path = require('path')

module.exports = {
  source: {
    articles: './articles',
    components: './components'
  },
  output: './_site',
  theme: 'bisheng-theme-ui',
  // htmlTemplate: 'bisheng-theme-ui/lib/static/index.html',
  webpackConfig(config) {
    config.resolve.alias = {
      'components': path.join(process.cwd(), 'components/index.js')
    }
    return config
  },
  port: 8283
}
