const gulp = require('gulp');
const sass = require('gulp-sass');
const moduleImporter = require('sass-module-importer');

gulp.task('sass', function () {
  return gulp.src(['./src/**/*.scss'])
    .pipe(sass({
      importer: moduleImporter()
    }).on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch:sass', function () {
  gulp.watch(['./src/**/*.scss'], ['sass']);
});

gulp.task('build:dev', ['sass']);

gulp.task('default', ['sass']);

