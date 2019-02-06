'use strict';

module.exports = function() {
  $.gulp.task('styles:dev', function() {
    return $.gulp.src($.path.src.style)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({outputStyle: 'expanded'}))
      .on('error', $.gp.notify.onError(error => {
        return {
          title: 'Style',
          message: error.message
        }
      }))
      .pipe($.gp.autoprefixer({
        browsers: [
          'last 1 version'
        ]
      }))
      .pipe($.gp.cleanCss({level: {1: {keepSpecialComments: false}}}))
      // .pipe($.gp.cleanCss())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.dist.style));
  });

  $.gulp.task('styles:build', function() {
    return $.gulp.src($.path.src.style)
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError(error => {
        return {
          title: 'Style',
          message: error.message
        }
      }))
      .pipe($.gp.autoprefixer({
        browsers: [
          'last 2 version'
        ]
      }))
      .pipe($.gp.csscomb())
      .pipe($.gp.cleanCss({ level: { 1: { specialComments: 0 } } }))
      .pipe($.gulp.dest($.path.dist.style));
  });
};