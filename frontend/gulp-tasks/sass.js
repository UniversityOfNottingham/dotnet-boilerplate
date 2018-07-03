const { src, dest } = require("../package.json").paths;

const gulp = require("gulp");
const header = require("gulp-header");
const _sass = require("gulp-sass");

const fileHeader = require("./file-header");

module.exports = function sass() {
  return gulp
    .src(`${src.sass}/**/*.scss`)
    .pipe(_sass({ outputStyle: "expanded" }))
    .pipe(header(fileHeader))
    .pipe(gulp.dest(dest.root + dest.css));
};
