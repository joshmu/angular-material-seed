'use strict';

// modules
var gulp = require('gulp'),
    bs = require('browser-sync'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

var path = {
    html: {
        main: 'app/index.html',
        partials: ['app/**/*.html', '!app/index.html'],
        all: ['./app/**/*.html', '!app/bower_components/**/*']
    },
    scss: {
        main: 'app/style.scss',
        all: ['app/**/*.scss', '!app/bower_components/**/*'],
        dist: 'app/dist/css/**/*.css'
    },
    js: {
        main: 'app/app.js',
        all: ['app/**/*.js', '!app/dist/**/*', '!app/bower_components/**/*'],
        dist: 'app/dist/js/**/*.js'
    }
};

// fired when just typing gulp
gulp.task('default', ['scripts', 'styles', 'bs', 'watch']);

// watchers
gulp.task('watch', function() {
    // scripts
    gulp.watch([path.js.all], ['scripts']);
    // styles
    gulp.watch([path.scss.all], ['styles']);
});

// broswer-sync goodness
gulp.task('bs', function() {
    var paths = [
        path.html.all,
        path.scss.dist,
        path.js.dist
    ];

    bs.init(paths, {
        server: {
            baseDir: './app/'
        }
    });
});

gulp.task('scripts', function() {
    gulp.src(path.js.all)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('app/dist/js'));
});

// Styles task
gulp.task('styles', function() {
    // gulp.src('app/styles/*.scss')
    gulp.src(path.scss.main)
        // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
        .pipe(sass({
            onError: function(e) {
                console.log(e);
            }
        }))
        // single css file
        // .pipe(concat('bundle.css'))
        .pipe(rename('bundle.css'))
        // Optionally add autoprefixer
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
        // These last two should look familiar now :)
        .pipe(gulp.dest('app/dist/css'));
});
