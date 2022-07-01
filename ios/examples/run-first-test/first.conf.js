exports.config = {
                    user: process.env.BROWSERSTACK_USERNAME || 'paulmalhotra_Ub2WQ9',
                    key: process.env.BROWSERSTACK_ACCESS_KEY || 'muLfADupJkRsaFoxMDyz',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio iOS Project",
    build: 'Webdriverio iOS',
    name: 'single_test',
    device: 'iPhone 11 Pro',
    os_version: "13",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://5151afe12965f13ba0a593c4ca02727a69f62efd',
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 40000
  }
};
