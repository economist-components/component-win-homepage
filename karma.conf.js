module.exports = (config) => {
  const browsers = {
    SauceChromeLatest: {
      base: 'SauceLabs',
      browserName: 'Chrome',
    },
    SauceFirefoxLatest: {
      base: 'SauceLabs',
      browserName: 'Firefox',
    },
    SauceSafariLatest: {
      base: 'SauceLabs',
      browserName: 'Safari',
    },
    SauceInternetExplorerLatest: {
      base: 'SauceLabs',
      browserName: 'Internet Explorer',
    },
    SauceEdgeLatest: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
    },
    SauceIphoneLatest: {
      base: 'SauceLabs',
      browserName: 'iPad',
    },
    SauceAndroidLatest: {
      base: 'SauceLabs',
      browserName: 'Android',
    },
  };
  const isSaucelabs = process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY;
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
      'chai',
    ],
    files: [
      require.resolve('chai-spies/chai-spies'),
      require.resolve('chai-things/lib/chai-things'),
      'testbundle.js',
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: [
      'progress',
      'saucelabs',
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    customLaunchers: browsers,
    browserDisconnectTimeout: 1000 * 60 * 2,
    browserNoActivityTimeout: 1000 * 60 * 2,
    phantomjsLauncher: {
      exitOnResourceError: true,
    },
    sauceLabs: {
      testName: require('./package').name,
      startConnect: true,
      build: (() => {
        if (process.env.GO_PIPELINE_NAME && process.env.GO_PIPELINE_LABEL) {
          return `${process.env.GO_PIPELINE_NAME}-${process.env.GO_PIPELINE_LABEL}`;
        } else if (process.env.CI_BUILD_NUMBER) {
          return `ci-build-${process.env.CI_BUILD_NUMBER}`;
        }
        return `localbuild-${new Date().toJSON()}`;
      })(),
    },
    browsers: isSaucelabs ? Object.keys(browsers) : [ 'PhantomJS2' ],
    singleRun: true,
  });
};
