'use strict';

var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	gutil = require('gulp-util');

gulp.task('multiples', function() {
	return gulp.src(['../test/*.js'], {read: false})
		.pipe(mocha({reporter: 'list'}))
		.on('error', gutil.log);
});

gulp.task('watch-multiples', function() {
	gulp.run('multiples');
	gulp.watch(['../test/*.js'], ['multiples'])
});

gulp.task('default', ['watch-multiples']);