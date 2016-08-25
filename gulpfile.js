var gulp = require('gulp');
var gls = require('gulp-live-server');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var minifyify = require('minifyify');
var babelify = require('babelify');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

var path = {
	main_css : ['app/client/stylesheets/main.scss'],
	css : ['app/client/stylesheets/**/*.scss'],
	main_js : ['app/client/app.js'],
	js : ['app/client/**/*.jsx'],
};

gulp.task('js' , function() {
	var bundler = browserify(path.main_js).transform('babelify', {presets : ['es2015','react']});
	bundler.bundle().on('error' , function(err) {
		console.log('[browserify error]' , err.message);
	}).pipe(source('bundle.js')).pipe(gulp.dest('app/static/js'));
});

gulp.task('build',['js'],function() {
	gulp.watch(path.js , ['js']);
	var server = gls('app/server/app.js' , {stdio : 'inherit'});
	server.start();

});

gulp.task('default' , ['js']);
