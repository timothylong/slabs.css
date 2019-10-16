var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssimport = require('gulp-cssimport'),
    prefix = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// js paths
var jsLibs = 'src/assets/js/source/vendor/**/*.js',
    jsApp = 'src/assets/js/source/app.js',
    jsDest = 'src/assets/js';

// scss tasks
gulp.task('sass', function () {
    return gulp.src('./src/assets/css/source/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssimport())
        .pipe(prefix())
        .pipe(cleanCSS({level: 1}))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./app/assets/css'))
        .pipe(livereload())
});

// js tasks
gulp.task('scripts', function () {
    return gulp.src([jsLibs, jsApp])
        .pipe(concat('app.js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify('app.min.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(livereload());
});

// livereload init
livereload.listen();

// gulp watch
gulp.task('watch', function () {    
    gulp.watch('./src/assets/css/source/**/*.scss', ['sass']);
    gulp.watch('./src/assets/js/source/**/*.js', ['scripts']);
});

// default task
gulp.task('default', ['sass', 'scripts', 'watch']);
