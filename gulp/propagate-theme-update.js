////////////////////////////////////////////////////
// Propagate updates to working projects
////////////////////////////////////////////////////

const { watch } = require('gulp');
const { src, dest } = require('gulp');


function run(cb) {
  console.log('[ propagate-theme-update : run() ]');
  src('../themes/**/*.*')
    .pipe(dest('/Users/simonwidjaja/Desktop/Data/Repos/simonwidjaja/trendspurt.com/themes/'))
    .pipe(dest('/Users/simonwidjaja/Desktop/Data/Repos/simonwidjaja/modernwebacademy.de/themes/'))
    ;
  cb();
}

exports.default = (cb) => {
  console.log('[ propagate-theme-update ]');

  watch(['../themes/**/*.*'], function(cb) {
    run(cb)
  });

  run(cb);

  cb()
}