const { dest } = require('../package.json').paths;

const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const header = require('gulp-header');

const fileHeader = require('./file-header');

// uglify <3
gulp.task('uglify', ['js'], () =>
  gulp.src([`${dest.root + dest.js}/**/*.js`, `!${dest.root + dest.js}/**/*.min.js`])
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(fileHeader))
    .pipe(gulp.dest(dest.root + dest.js)));
