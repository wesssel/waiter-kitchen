var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

/* Compile Sass */
gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass({includePaths: ['app/vendor/foundation/scss']}))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('app/css'));
});

/* Browser sync */
gulp.task('browser-sync', function() {
	browserSync.init(['app/css/*.css', 'app/js/*.js', 'app/*.html'], {
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('default', ['sass', 'browser-sync'], function() {
	gulp.watch('scss/*.scss', ['sass']);
});