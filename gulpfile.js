const { src, dest, watch, series, lastRun } = require('gulp');
const browserSync = require('browser-sync').create();

function watchTask() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('index.html').on('change', browserSync.reload);
    watch('async.js').on('change', browserSync.reload);
    watch('sandbox.js').on('change', browserSync.reload);
};

exports.w = watchTask;