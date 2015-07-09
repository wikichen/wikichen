'use strict';

// dependencies
var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var sass = require('gulp-sass');

// include external plugins not loaded by gulp-load-plugins
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var childProc   = require('child_process');
var del         = require('del');

// global build variables
var buildDst  = '_site';
var assetsSrc = '_assets';
var assetsDst = buildDst + '/assets';
var sassPath  = assetsSrc + '/scss';

var paths = {
  content: [
    'index.html',
    '_layouts/*.html',
    '_includes/*.html',
    '_data/*',
    '_posts/*',
    '_books/*',
    'serving/*',
    'capturing/*',
    'reading/*',
    'writing/*',
    'meta/*',
    'css/*'
  ]
};

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// for reference see:
// https://github.com/iamcarrico/gulp-poole/blob/master/index.js
// https://github.com/dstroot/my_blog/blob/master/gulpfile.js
// https://github.com/shakyShane/jekyll-gulp-sass-browser-sync/blob/master/gulpfile.js

// -----------------------------------------------------------------------------
// Clean task
// -----------------------------------------------------------------------------
gulp.task('clean', function(cb) {
  del(['_site/**'], function (err, deletedFiles) {
    console.log('Files deleted:', deletedFiles.join(', '));
  });
});

// -----------------------------------------------------------------------------
// SASS task
// -----------------------------------------------------------------------------
gulp.task('sass', function() {

  // this is using gulp-ruby-sass
  /* return sass(assetsSrc + '/scss/main.scss')
    .on('error', function(err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(assetsDst + '/css'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(assetsSrc + '/css')); */

  // this uses gulp-sass
  return gulp.src(assetsSrc + '/scss/main.scss')
    .pipe(sass({ errLogToConsole: true,
                 onError: browserSync.notify }))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'],
                         cascade: false
    }))
    .pipe(gulp.dest(buildDst + '/css'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('css'));
});

// -----------------------------------------------------------------------------
// Watch task
// -----------------------------------------------------------------------------
gulp.task('watch', function() {
  gulp.watch(assetsSrc + '/scss/**/*.scss', ['sass']);
  gulp.watch(paths.content, ['jekyll-rebuild']);
});

// -----------------------------------------------------------------------------
// BrowserSync task
// -----------------------------------------------------------------------------
gulp.task('browserSync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: "_site"
    }
  });
});

// -----------------------------------------------------------------------------
// Jekyll tasks
// -----------------------------------------------------------------------------
gulp.task('jekyll-build', function(done) {
  browserSync.notify(messages.jekyllBuild);
  return childProc.spawn('jekyll', ['build'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('jekyll', ['jekyll-build']);

gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

// -----------------------------------------------------------------------------
// Build task
// -----------------------------------------------------------------------------
//gulp.task('build', function(cb) {
//  return runSequence(['sass'],
//    'jekyll-build',
//    cb
//  );
//});

// -----------------------------------------------------------------------------
// Deploy task
// -----------------------------------------------------------------------------
gulp.task('deploy', function(cb) {
  return runSequence(['sass'],
    'jekyll-build',
    's3',
    cb
  );
});

// -----------------------------------------------------------------------------
// Publishing task
// -----------------------------------------------------------------------------
gulp.task('s3', function(cb) {
  return childProc.exec('s3_website push', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err); // finished task
  });

  //return childProc.spawn('s3_website', ['push'], { stdio: 'inherit' })
  //  .on('close', done);
});

// -----------------------------------------------------------------------------
// Default task
// - Running just 'gulp' will compile the sass, run jekyll build,
//   launch BrowserSync, and watch files.
// -----------------------------------------------------------------------------
gulp.task('default', ['browserSync', 'watch']);
