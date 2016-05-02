var
  path = require('path');

module.exports = function (karma) {

  karma.set({

    basePath: './',

    files: [
      'js/**/*.spec.js'
    ],

    exclude: [
      'js/**/_*.js',
      'js/**/_*.spec.js'
    ],

    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-browserify',
      'karma-coverage',
      'karma-babel-preprocessor'
    ],

    preprocessors: {
      'js/**/*.js': ['babel'],
      'js/**/*.spec.js': ['babel']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.[js|spec]$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    reporters: ['dots', 'coverage'],

    //logLevel: 'LOG_DEBUG',

    coverageReporter: {
      type : 'text-summary', //'text', 'text-summary'
      subdir: function(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      },
      dir : './public/coverage'
    },

    colors: true,
    port: 9099,
    runnerPort: 9100,
    urlRoot: '/',
    browsers: [
      'PhantomJS'
    ]
  });
};
