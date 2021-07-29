var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('buildStyles', function buildStyles() {
  return gulp.src('app/scss/style.scss')
    .pipe(browserSync.reload({stream: true}))
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(rename({suffix: ".min",}))
    .pipe(gulp.dest('app/css'));
    
});
gulp.task('html', function(){
    return gulp.src('app/*.html')
});
gulp.task('js', function(){
    return gulp.src('app/js/*.js')
});
gulp.task('watch', function(){
    gulp.watch('app/scss/style.scss', gulp.parallel('buildStyles'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});
gulp.task('default', gulp.parallel('buildStyles', 'browser-sync', 'watch', 'js', 'html'));
