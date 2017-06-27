var gulp = require('gulp'),
    exec = require('child_process').exec;


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('build', function(cb) {
	exec('npm run build-debug', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('app/src/**/*.tsx', ['build']);
});
