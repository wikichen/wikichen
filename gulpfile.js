// include gulp
var gulp = require('gulp');
var pkg  = require('./package.json');

// include gulp-specific plugins
var plugins = require("gulp-load-plugins")();

// include external plugins not loaded by gulp-load-plugins
var runseq = require('run-sequence');

// global build variables
var buildDst  = './_site';
var assetsSrc = './assets',
    assetsDst = buildDst + '/assets';

var ignoredFolders = ['!./node_modules/**/*', '!./_drafts'];

// run a LiveReload server
gulp.task('connect', function() {
  plugins.connect.server({
    root: [ buildDst ],
    port: 4000,
    livereload: true
  });
});

// build jekyll site
gulp.task('jekyll', function() {
  return gulp.src('')
    .pipe(plugins.exec("jekyll build"))
    .pipe(plugins.exec.reporter());
});

// reloads when an HTML file is changed and runs jekyll task
gulp.task('html', ['jekyll'], function() {
  return gulp.src(['./**/*.html'].concat(ignoredFolders))
    .pipe(plugins.connect.reload());
});

// reloads when a Markdown file is changed and runs jekyll task
gulp.task('markdown', ['jekyll'], function() {
  return gulp.src(['./**/*.md'].concat(ignoredFolders))
    .pipe(plugins.connect.reload());
});

// lint task
gulp.task('lint', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(plugins.cached('linting'))
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
});

// concatenate & minify js
gulp.task('scripts', function() {
  var src = './assets/js/*.js',
      dst = assetsDst + '/js';

  return gulp.src(src)
    .pipe(plugins.changed(src))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(dst))
    .pipe(plugins.size())
    .pipe(plugins.connect.reload());
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './uploads/**/*',
      imgDst = imgSrc;

  return gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// minifiy new or changed HTML pages
gulp.task('htmlmin', function() {
  var htmlSrc = './_site/**/*.html',
      htmlDst = htmlSrc;

  return gulp.src(htmlSrc)
    .pipe(plugins.changed(htmlDst))
    .pipe(plugins.minifyHtml())
    .pipe(gulp.dest(htmlDst));
});

// compile SASS files
gulp.task('sass', function() {
  var src = assetsSrc + '/scss/**/*.scss',
      dst = assetsSrc + '/css';

  return gulp.src(src)
    .pipe(plugins.changed(src))
    .pipe(plugins.sass({
        errLogToConsole: true,
        noCache: true,
        quiet: true
      }))
    .pipe(plugins.autoprefixer('last 2 versions'))
    .pipe(gulp.dest(dst))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(dst));
});

// LiveReload for CSS
gulp.task('css', function(){
  var src = assetsSrc + '/css/**/*.css';

  return gulp.src(src)
    .pipe(plugins.changed(assetsSrc + '/css/**/*'))
    .pipe(gulp.dest(assetsDst + '/css/'))
    .pipe(plugins.size())
    .pipe(plugins.connect.reload());
});

// watch files for changes, exclude node_modules
gulp.task('watch', function() {
  gulp.watch(['./**/*.html'].concat(ignoredFolders), ['html']);
  gulp.watch(['./**/*.md'].concat(ignoredFolders), ['markdown']);
  gulp.watch(assetsSrc + '/scss/**/*.scss', ['sass']);
  gulp.watch(assetsSrc + '/css/**/*.css', ['css']);
  gulp.watch(assetsSrc + '/js/**/.js', ['scripts']);
});

gulp.task('clean', function() {
  return gulp.src('./_site/**/*', { read: false })
    .pipe(plugins.clean());
});

gulp.task('deploy', ['jekyll'], function() {
  return gulp.src('')
    .pipe(plugins.exec("s3_website push"))
    .pipe(plugins.exec.reporter());
});

// default task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('default', function() {
  runseq('clean',
         ['jekyll', 'sass'],
         ['css', 'scripts'],
         function() {
           return gulp.start('connect', 'watch');
  });
});
