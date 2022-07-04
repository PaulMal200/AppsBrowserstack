const path = require('path');
//const { config } = require('./conf');

// ====================
// Runner Configuration
// ====================
//
port = 4723;

//
// ============
// Specs
// ============
specs = [
  './examples/run-local-test/specs/local_test.js'
];

//
// ============
// Capabilities
// ============
capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "./app/android/3.29.4(5957).apk"),
    "appium:autoGrantPermissions": true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
//config.services['appium'];

//exports.config = config;