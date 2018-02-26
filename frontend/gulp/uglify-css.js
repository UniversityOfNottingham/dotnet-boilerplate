const { dest } = require('../package.json').paths;

const gulp = require('gulp');
const rename = require('gulp-rename');
const header = require('gulp-header');
const uglifycss = require('gulp-uglifycss');

const fileHeader = require('./file-header');

// Minify CSS.
// Runs SASS task first
gulp.task('uglify-css', ['sass'], () =>
  gulp.src(`${dest.root + dest.css}/**/*.css`)
    .pipe(uglifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(fileHeader))
    .pipe(gulp.dest(dest.root + dest.css)));
