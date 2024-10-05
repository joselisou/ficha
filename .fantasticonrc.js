'use strict'

const codepoints = require('./build/font/icons.json')

module.exports = {
  inputDir: './icons',
  outputDir: './build/font',
  fontTypes: ['woff2', 'woff'],
  assetTypes: ['scss', 'json'],
  name: 'joselisouza-icons',
  codepoints,
  prefix: 'ji',
  selector: '.ji',
  fontsUrl: '../fonts/joselisouza-icons',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  // Use our custom Handlebars templates
  templates: {
    scss: './build/font/scss.hbs'
  },
  pathOptions: {
    json: './build/font/icons.json',
    scss: './scss/_icons.scss',
    woff: './fonts/joselisouza-icons/joselisouza-icons.woff',
    woff2: './fonts/joselisouza-icons/joselisouza-icons.woff2'
  }
}
