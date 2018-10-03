const { src, dest } = require("../package.json").paths;

const gulp = require("gulp");
const header = require("gulp-header");
const autoprefixer = require('gulp-autoprefixer');
const _sass = require("gulp-sass");

const fileHeader = require("./file-header");

module.exports = function sass() {
  return gulp
    .src(`${src.sass}/**/*.scss`)
    .pipe(_sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(header(fileHeader))
    .pipe(gulp.dest(dest.root + dest.css));
};
