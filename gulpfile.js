var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


var jsLibs = [
	'bower/angular/angular.min.js'
]

gulp.task('js-libs', function(){
	gulp.src(jsLibs)
		.pipe(concat('bundle-libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));

})
