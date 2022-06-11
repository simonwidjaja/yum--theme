////////////////////////////////////////////////////
// Propagate updates to working projects
////////////////////////////////////////////////////

const { watch } = require('gulp');
const { src, dest } = require('gulp');


function run(cb) {
  console.log('[ propagate-theme-public-update : run() ]');
  src('../public/themes/**/*.*')
    .pipe(dest('/Users/simonwidjaja/Desktop/Data/Repos/simonwidjaja/trendspurt.com/public/themes/'));
  cb();
}

exports.default = (cb) => {
  console.log('[ propagate-theme-public-update ]');

  watch(['../public/themes/**/*.*'], function(cb) {
    run(cb)
  });

  run(cb);

  cb()
}