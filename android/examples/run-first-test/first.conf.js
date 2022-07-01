exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'paulmalhotra_Ub2WQ9',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'muLfADupJkRsaFoxMDyz',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://4d58bb5a5a7934a43977d1ad22859a4553b68af3',
    'browserstack.networkLogs': 'true',
    //'browserstack.local': true,
    'browserstack.debug': true
   // "browserstack.geoLocation": "GB"
  }],

//capabilities : [{
//"os_version": "9.0",
//"device": "Google Pixel 3",
//"app": "bs://4d58bb5a5a7934a43977d1ad22859a4553b68af3",
//"project": "login screen ",
//"browserstack.user" : "paulmalhotra_Ub2WQ9",
//"browserstack.key" : "muLfADupJkRsaFoxMDyz"
//}],



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
    timeout: 100000
  }
};
