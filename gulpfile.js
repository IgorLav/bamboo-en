'use strict';

var gulp = require('gulp'),
    scss = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber');



function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('styles', function () {
    return gulp.src('./src/sass/main.scss')
        .pipe(plumber({ errorHandler: handleError }))
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/css'));
});


gulp.task('watch', ['styles'], function () {
    gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', ['styles'], function () {

});