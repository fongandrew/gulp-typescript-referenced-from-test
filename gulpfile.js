var gulp = require('gulp');
var ts = require('gulp-typescript');

var project = ts.createProject({
  noExternalResolve: true,
  sortOutput: true
});

gulp.task("default", function() {
  return gulp.src('*.ts')
    .pipe(ts(project, {referencedFrom: ['test-1.ts']}))
    .pipe(gulp.dest("pub"));
});

