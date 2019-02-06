'use strict';

module.exports = function() {
  const jsLibs = $.path.src.jsLibs;
  const js = $.path.src.js;

  $.gulp.task('json', function() {
    return $.gulp.src($.path.src.json)
      .pipe($.gulp.dest($.path.dist.js))
  });

  $.gulp.task('jsLibs:dev', function() {
    return $.gulp.src(jsLibs)
      .pipe($.gp.concat('vendor.min.js'))
      .pipe($.gulp.dest($.path.dist.jsLibs))
  });

  $.gulp.task('jsLibs:build', function() {
    return $.gulp.src(jsLibs)
      .pipe($.gp.concat('vendor.min.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.path.dist.jsLibs))
  })

  $.gulp.task('js:dev', function() {
    return $.gulp.src(js)
      .pipe($.gp.sourcemaps.init())
      .on('error', $.gp.notify.onError(error => {
        return {
          title: 'JS',
          message: error.message
        }
      }))
      // .pipe($.gp.babel({
      //   presets: ['@babel/env']
      // }))
      .pipe($.gp.concat('main.min.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.dist.js));
  });

  $.gulp.task('js:build', function() {
    return $.gulp.src(js)
      .on('error', $.gp.notify.onError(error => {
        return {
          title: 'JS',
          message: error.message
        }
      }))
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gp.concat('main.min.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.path.dist.js));
  });
};