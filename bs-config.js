// bs-config.js
const browserSync = require('browser-sync').create();
const nodemon = require('nodemon');

nodemon({
  script: 'app.js',
  watch: ['src', 'app.js']
});

nodemon.on('start', function () {
  if (!browserSync.active) {
    browserSync.init({
      proxy: 'http://localhost:3000',
      files: ['src/**/*.*', 'public/**/*.*'],
      browser: 'firefox',
      port: 4000,
    });
  }
}).on('restart', function () {
  setTimeout(function () {
    browserSync.reload();
  }, 1000);
});