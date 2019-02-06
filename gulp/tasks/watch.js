'use strict';

module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch($.path.watch.style, $.gulp.series('styles:dev'));
		$.gulp.watch($.path.watch.html, $.gulp.series('html'));
		$.gulp.watch($.path.watch.pug, $.gulp.series('pug'));
		// $.gulp.watch($.path.watch.js, $.gulp.series('js:dev', 'jsLibs:dev'));
		$.gulp.watch($.path.watch.js, $.gulp.series('js:dev'));
		$.gulp.watch($.path.src.json, $.gulp.series('json'));
		$.gulp.watch($.path.watch.fonts, $.gulp.series('fonts'));
		$.gulp.watch($.path.watch.img, $.gulp.series('img:clean', 'img:dev', 'svg'));
	});
};