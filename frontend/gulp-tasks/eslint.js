const { src } = require('../package.json').paths;

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const notifier = require('node-notifier');


// Check the content of each .js file against the rules defined in .eslintrc.
gulp.task('eslint', () =>
  gulp.src(`${src.js}/**/*.js`)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .on('error', () => {
    notifier.notify({
      title: 'Gulp',
      message: 'JS linting failed'
    });
  }));
