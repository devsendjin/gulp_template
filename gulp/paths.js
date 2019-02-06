'use strict';

const json = './src/js/**/*.json';
const html = './src/index.html';

module.exports = {
	src: {
		// pug: './src/templates/index.pug',
		pug: './src/templates/pages/**/*.pug',
		html: html,
		js: [
			'./src/js/main.js'
		],
		jsLibs: [
			'src/libs/jquery/dist/jquery.min.js'
		],
		style: './src/scss/style.scss',
		img: './src/img/**/*.*',
		svg: './src/img/svg/**/*.*',
		sprite: './src/img/icons/*.png',
		fonts: './src/fonts/**/*.*',
		json: json
	},
	dist: {
		root: './dist',
		js: './dist/js',
		jsLibs: './dist/js',
		style: './dist/css',
		img: './dist/img',
		svg: './dist/img/svg',
		fonts: './dist/fonts'
	},
	watch: {
		pug: './src/templates/**/*.pug',
		html: html,
		js: './src/js/**/*.js',
		style: './src/scss/**/*.(scss|sass)',
		img: './src/img/**/*.*',
		fonts: './src/fonts/**/*.*',
		json: json
	}
}