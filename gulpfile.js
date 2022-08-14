const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('scss', () => {
    return gulp.src('scss/**')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
})