'use strict';

module.exports = function() {
	$.gulp.task('img:dev', function() {
		return $.gulp.src($.path.src.img)
			.pipe($.gulp.dest($.path.dist.img));
	});

	$.gulp.task('img:build', function() {
		return $.gulp.src($.path.src.img)
			.pipe($.gp.tinypng('Khtg0LFopHsAylpE90x608UBwba7qt3Q'))
			.pipe($.gulp.dest($.path.dist.img));
	});

	$.gulp.task('img:sprite', function() {
		const spriteData = $.gulp.src($.path.src.sprite).pipe($.gp.spritesmith({
			imgName: 'sprite.png',
			imgPath: '../img/sprite.png',
			// padding: 30,
			cssName: '_sprite.scss'
		}));
		return spriteData.img.pipe($.gulp.dest('src/img/')),
			spriteData.css.pipe($.gulp.dest('src/scss/'));
	});

	$.gulp.task('img:clean', function() {
		return $.gp.del([$.path.dist.img]);
	});

	$.gulp.task('svg', function() {
		return $.gulp
			.src($.path.src.svg)
			.pipe(
				$.gp.imagemin([
					$.gp.imagemin.svgo({
						plugins: [{ removeViewBox: true }, { cleanupIDs: false }, { removeXMLProcInst: true }]
					})
				])
			)
			.pipe($.gulp.dest($.path.dist.svg));
	});
};