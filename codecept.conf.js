exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://kids.yahoo.co.jp/',
      show: true,
    }
  },
  plugins: {
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
    },
  },
  translation: './ja-SR.js',
  bootstrap: null,
  mocha: {},
  name: 'onegai'
}
