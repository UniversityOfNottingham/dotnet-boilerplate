const { js: src } = require("../package.json").paths.src;

const gulp = require("gulp");
const _eslint = require("gulp-eslint");

module.exports = function eslint() {
  return gulp
    .src(`${src}/**/*.js`)
    .pipe(_eslint())
    .pipe(_eslint.format())
    .pipe(_eslint.failAfterError());
};
