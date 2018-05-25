const { src } = require("../package.json").paths;

const gulp = require("gulp");
const sassLint = require("gulp-sass-lint");

// Lint SASS
module.exports = function sasslint() {
  return gulp
    .src(`${src.sass}/**/*.scss`)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};
