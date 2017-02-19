var csshint = require('gulp-csslint')
var jshint = require('gulp-jshint')
var gulp = require('gulp')

gulp.task('js', () => {
    return gulp.src('homework/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('css', () => {
    return gulp.src('homework/css/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter())
});

gulp.task('check', ()=>{
  gulp.watch('homework/js/*.js', ['js']);
  gulp.watch('homework/css/*.css', ['css']);
});
gulp.task('default', [ 'js', 'css' ]);
