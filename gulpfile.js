var gulp = require('gulp'),
    compass = require('gulp-compass'),
    sync = require('browser-sync')
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    tinypng = require('gulp-tinypng'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');

      gulp.task('connect', function() {
          connect.server({root: '', livereload: true});
      });

      gulp.task('styles', function() {
          gulp.src(['src/sass/*.scss']).pipe(compass({config_file: 'config.rb', sass: 'src/sass'})).pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')).pipe(rename({suffix: '.min'})).pipe(minifycss()).pipe(gulp.dest('build/css')).pipe(connect.reload());
      });

      gulp.task('scripts', function() {
          return gulp.src('src/js/*.js').pipe(concat('main.js')).pipe(rename({suffix: '.min'})).pipe(uglify()).pipe(gulp.dest('build/js')).pipe(connect.reload());
      });

      gulp.task('watch', function() {
          gulp.watch('src/sass/*.scss', ['styles']);
          gulp.watch('src/js/*.js', ['scripts']);
      });

      gulp.task('default', ['styles', 'scripts', 'watch', 'connect']);
