const gulp = require('gulp');
const { src } = require('../package.json').paths;

// Default and watch
gulp.task('watch', ['default'], () => {
  gulp.watch(`${src.js}/**/*.js`, ['js']);
  gulp.watch(`${src.sass}/**/*.scss`, ['sass']);
});
