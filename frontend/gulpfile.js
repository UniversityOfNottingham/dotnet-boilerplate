// eslint-disable-next-line spaced-comment
/// <binding BeforeBuild='default' />

const gulp = require("gulp");

// import individual tasks
const clean = require("./gulp-tasks/clean");
const eslint = require("./gulp-tasks/eslint");
const js = require("./gulp-tasks/js");
const sasslint = require("./gulp-tasks/sass-lint");

// define compound tasks
function buildJs(done) {
  return gulp.series(eslint, js)(done);
}

// export everything that should be public
module.exports = {
  clean,
  eslint,
  js,
  buildJs,
  sasslint
};

// define default task
// require('gulp').task('default', ['clean', 'uglify', 'uglify-css']);
