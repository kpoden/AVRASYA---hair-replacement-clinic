'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    del = require('del'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    stripComments = require('gulp-strip-css-comments'),
    beutify = require('gulp-cssbeautify'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    cleancss = require('gulp-clean-css'),
    csso = require('gulp-csso'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


var path = {

    build: {
        html: 'build/',
        styles: 'build/styles/',
        img: 'build/img/',
        scripts: 'build/scripts/',
        fonts: 'build/fonts/'
    },

    src: {
        html: 'src/*.html',
        styles: 'src/styles/*.sass',
        imgmin: 'src/img/min/**/*.*',
        imgmax: 'src/img/max/**/*.*',
        scripts: 'src/scripts/**/*.js',
        fonts: 'src/fonts/**/*.*'
    },

    watch: {
        html: 'src/*.html',
        styles: 'src/styles/**/*.*',
        img: 'src/img/',
        scripts: 'src/scripts',
        fonts: 'src/fonts/'
    },

    clean: './build'
};

gulp.task('clean', function(){
    return del('build');
});

gulp.task('html:build', function(){
    return gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('styles:build', function(){
    return gulp.src(path.src.styles)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(stripComments())
        .pipe(beutify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.styles))
        .pipe(csso({
            sourceMap: true
        }))
        .pipe(rename("main.min.css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.styles));
});

gulp.task('scripts:build', function(){
    return gulp.src(path.src.scripts)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(path.build.scripts))
        .pipe(uglify())
        .pipe(stripComments())
        .pipe(rename("app.min.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.scripts));
});

gulp.task('img:build', function(){
    return gulp.src(path.src.imgmax)
        .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts:build', function(){
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', gulp.series(
        'clean', gulp.series(['html:build', 'styles:build', 'scripts:build', 'img:build', 'fonts:build'])
    )
);

gulp.task('watch', function(){
    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.styles, gulp.series('styles:build'));
    gulp.watch(path.watch.scripts, gulp.series('scripts:build'));
    gulp.watch(path.watch.img, gulp.series('img:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: "./build",
        port: 4000,
        notify: false
    });

    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});



gulp.task('default', gulp.series(
    'clean', 'build', gulp.parallel('watch', 'serve')
));







