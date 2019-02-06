'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      server: {
        baseDir: $.path.dist.root
      },
      notify: false,
      open: true
      // Attempt to use the URL "http://mysite.localtunnel.me"
      // tunnel: "mysite"
    });
    $.browserSync.watch($.path.dist.root, $.browserSync.reload);
  });
};
