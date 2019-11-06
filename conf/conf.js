// conf.js

//to take screenshots
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
  // directConnect: true, //comment to run on selenium server
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub', //comment to run directly and uncomment -directConnect: true 
  specs: ['../tests/pomtest.js'],
  
  // Capabilities to be passed to the Webdriver Instance.
  capabilities: {
    browserName: 'firefox',
  }, 

  // // to run multiple browsers
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }],

  // //to take screenshots, Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  //screenshot reporter
  plugins: [{
    package: '/home/shanmukh/node_modules/protractor-screenshoter-plugin/index.js',
    screenshotPath: './REPORTS/e2e',
    screenshotOnExpect: 'failure+success',
    screenshotOnSpec: 'none',
    withLogs: true,
    writeReportFreq: 'asap',
    imageToAscii: 'none',
    clearFoldersBeforeTest: true
  }],

  onPrepare: function() {
      // returning the promise makes protractor wait for the reporter config before executing tests
      return global.browser.getProcessedConfig().then(function(config) {
          //it is ok to be empty
      });
  },

  jasmineNodeOpts:  {
    defaultTimeoutInterval: 30000,
  }
  
}