'use strict';

var
  gulp = require('gulp'),
  karmaServer = require('karma').Server,
  util = require('gulp-util');

module.exports = function (name, config) {

  gulp.task(name, function (cb) {

    var
      singleRun = config.watch !== true,
      options = {
        configFile: config.karmaConfFile || 'karma.conf.js',
        singleRun: singleRun
      },
      callback = function (exitStatus) {
        if (exitStatus) {
          util.log(util.colors.red('There are failing unit tests'));
        }
        else {
          cb()
        }
      };

    new karmaServer(options, callback).start();

    if (singleRun) return;

    cb();

  });
};
