var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task("sass", function() {
    gulp.src(['src/sass/*.scss', 'src/sass/*.sass'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest('build/css'));
});
