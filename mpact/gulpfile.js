var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    imageop = require('gulp-image-optimization');

// clean task to clean build folder before building an entire app
gulp.task('clean', function (cb) {
    del('sass/**/*', cb);
});

// compile sass to css
gulp.task('styles', function () {
    var sassOptions = {
        errLogToConsole: true,
        outputStyle: 'expanded'
    };

    var autoprefixerOptions = {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    };

    gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('maps/'))
        .pipe(gulp.dest('css/'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/'));
});

// optimize images
gulp.task('images', function () {
    gulp.src(['img/**/*.png','img/**/*.jpg','img/**/*.gif','img/**/*.jpeg'])
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build'));
});

// watch task
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
});

// default build task to clean build directory, then create the correct folder
// structure with minified files, optimized images and inline critical css.
gulp.task('default', ['clean'], function () {
    gulp.start('styles', 'images');
});
