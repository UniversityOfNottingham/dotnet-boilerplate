const gulp = require('gulp');
const { src, dest } = require('../package.json').paths;

// Copy any fonts we want
gulp.task('fonts', () =>
  gulp.src(`${src.fonts}/*`)
    .pipe(gulp.dest(dest.root + dest.fonts)));