'use strict';

global.$ = {
  path: require('./gulp/paths.js'),
  tasks: require('./gulp/tasks.js'),
  gulp: require('gulp'),
  del: require('del'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create()
};

$.tasks.forEach(function(taskPath) {
  require(taskPath)();
});
  
/*
dev tasks:
  'clean', 'styles:dev', 'pug', 'jsLibs:dev', 'js:dev', 'img:dev', 'svg', 'img:sprite',  'fonts', 'json', 'html'
  
build tasks:
  'clean', 'styles:build','pug', 'jsLibs:build', 'js:build',  'img:sprite',  'img:build', 'svg', 'fonts', 'json', 'html'
*/

$.gulp.task('dev', $.gulp.series(
  'clean',
  $.gulp.parallel('styles:dev', 'js:dev', 'fonts', 'html')));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel('styles:build', 'js:build', 'img:sprite', 'img:build', 'fonts', 'html')));

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));