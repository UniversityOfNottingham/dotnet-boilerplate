const { src, dest } = require('../package.json').paths;

const gulp = require('gulp');
const header = require('gulp-header');
const sass = require('gulp-sass');
const notifier = require('node-notifier');

const fileHeader = require('./file-header');

// Compile SASS
// Runs Lint task first
gulp.task('sass', ['sass-lint'], () =>
  gulp.src(`${src.sass}/**/*.scss`)
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', function (err) {
      sass.logError.call(this, err);
      notifier.notify({
        title: 'Gulp',
        message: 'SASS error'
      });
    })
    .pipe(header(fileHeader))
    .pipe(gulp.dest(dest.root + dest.css)));
