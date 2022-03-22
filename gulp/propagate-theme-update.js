////////////////////////////////////////////////////
// Propagate updates to working projects
////////////////////////////////////////////////////

const { watch } = require('gulp');
const { src, dest } = require('gulp');

function copy() {
  return src('input/*.js')
    .pipe(dest('output/'));
}

exports.default = (cb) => {
  console.log('[ propagate-theme-update ]');

  watch(['../themes/**/*.*'], function(cb) {
    src('../themes/**/*.*')
      .pipe(dest('/Users/simonwidjaja/Desktop/Data/Repos/simonwidjaja/trendspurt.com/themes/'))
    cb();
  });

  cb()
}