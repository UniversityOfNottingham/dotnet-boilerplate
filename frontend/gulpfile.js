// eslint-disable-next-line spaced-comment
/// <binding BeforeBuild='default' />

const gulp = require("gulp");

// import individual tasks
const clean = require("./gulp-tasks/clean");
const eslint = require("./gulp-tasks/eslint");

// define compound tasks

// export everything that should be public
module.exports = {
  clean,
  eslint
};

// define default task
// require('gulp').task('default', ['clean', 'uglify', 'uglify-css']);
