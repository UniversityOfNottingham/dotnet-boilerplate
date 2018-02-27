// eslint-disable-next-line spaced-comment
/// <binding BeforeBuild='default' />

// Require each of our gulp tasks
require('require-dir')('./gulp');

// Default task
require('gulp').task('default', ['clean', 'uglify', 'uglify-css']);
