const { dest, src } = require("../package.json").paths;

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");
const rename = require("gulp-rename");
const header = require("gulp-header");

const fileHeader = require("./file-header");

module.exports = function js() {
  return browserify({
    entries: `${src.js}/main.js`,
    debug: true
  })
    .transform("babelify")
    .bundle()
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(header(fileHeader))
    .pipe(rename(`bundle.js`))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest.root + dest.js));
};
