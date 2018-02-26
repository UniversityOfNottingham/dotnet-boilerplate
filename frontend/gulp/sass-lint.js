const { src } = require('../package.json').paths;

const gulp = require('gulp');
const sassLint = require('gulp-sass-lint');
const notifier = require('node-notifier');

// Lint SASS
gulp.task('sass-lint', () =>
  gulp.src(`${src.sass}/**/*.scss`)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .on('error', () => {
      notifier.notify({
        title: 'Gulp',
        message: 'linting failed'
      });
    }));
