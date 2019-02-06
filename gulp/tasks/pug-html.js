'use strict';

module.exports = function() {
	$.gulp.task('pug', function() {
		return $.gulp.src($.path.src.pug)
			.pipe($.gp.pug({ pretty: true }))
			.on('error', $.gp.notify.onError(function(error) {
				return {
					title: 'Pug',
					message: error.message
				}
			}))
			.pipe($.gulp.dest($.path.dist.root));
	});

	$.gulp.task('html', function() {
		return $.gulp.src($.path.src.html)
			.on('error', $.gp.notify.onError(function(error) {
				return {
					title: 'HTML',
					message: error.message
				}
			}))
			.pipe($.gulp.dest($.path.dist.root));
	});
};