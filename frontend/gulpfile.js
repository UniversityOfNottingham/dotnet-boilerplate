// eslint-disable-next-line spaced-comment
/// <binding BeforeBuild='default' />

const gulp = require("gulp");

// import individual tasks
const clean = require("./gulp-tasks/clean");
const eslint = require("./gulp-tasks/eslint");
const js = require("./gulp-tasks/js");
const uglify = require("./gulp-tasks/uglify");
const sasslint = require("./gulp-tasks/sass-lint");
const sass = require("./gulp-tasks/sass");
const uglifyCss = require("./gulp-tasks/uglify-css");

// define compound tasks
function buildJs(done) {
  return gulp.series(eslint, js, uglify)(done);
}

function buildSass(done) {
  return gulp.series(sasslint, sass, uglifyCss)(done);
}

// export everything that should be public
module.exports = {
  clean,
  eslint,
  js,
  buildJs,
  uglify,
  sasslint,
  sass,
  uglifyCss,
  buildSass
};

// define default task
gulp.task("default", gulp.series(clean, gulp.parallel(buildJs, buildSass)));
