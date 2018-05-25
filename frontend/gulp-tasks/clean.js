const { dest } = require('../package.json').paths;

const gulp = require('gulp');
const del = require('del');

// Delete all generated content.
gulp.task('clean', () => del.sync(dest.root));
