/*!
 * Fork Corner | Gulpfile
 * By Waren Gonzaga
 */

// modules
const {
    series,
    src,
    dest,
    watch }     = require('gulp'),
    sass        = require('gulp-sass')(require('sass')),
    sassLint    = require('gulp-sass-lint'),
    uglify      = require('gulp-uglify-es').default,
    eslint      = require('gulp-eslint'),
    { pipeline } = require('stream'),
    header      = require('gulp-header'),
    rename      = require('gulp-rename'),
    clean       = require('gulp-clean'),
    fs          = require('fs');

const path = {
    dist: "./dist",
    buildCSS: "./dist/*.css",
    buildJS: "./dist/*.js",
    source: "./source",
    demo: "./demo"
};

// open source label
const pkg = JSON.parse(fs.readFileSync('package.json'));
const data = {
    banner: [
        '/*!',
        ' * Fork Corner - <%= homepage %>',
        ' * <%= description %>',
        ' * Version: <%= version %>',
        ' * Github: <%= github %>',
        ' * Licensed under The MIT License: http://opensource.org/licenses/MIT',
        ' * Copyright (c) <%= new Date().getFullYear() %> <%= author %>',
        ' *',
        ' * Facebook: @warengonzagaofficial',
        ' * Twitter: @warengonzaga',
        ' * Github: @warengonzaga',
        ' * Website: warengonzaga.com',
        ' */\n\n',
    ].join('\n'),
};

// sass (Dart Sass) is now used by default in gulp-sass v6+
// No need to set sass.compiler anymore

// lint css
function lintCSS() {
    return src(path.source+'/*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
}

// lin js
function lintJS() {
    return src(path.source+'/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(dest(path.dist));
}

// compile css
function compile() {
    return src(path.source+'/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(path.dist));
}

// minify css
function minifyCSS() {
    return src(path.buildCSS)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(dest(path.dist));
}

// minify js
function minifyJS(cb) {
    return pipeline(
        src(path.buildJS),
        rename({
            suffix: '.min'
        }),
        uglify(),
        dest(path.dist),
        cb);
}

// add copyright label
function copyright() {
    return src([path.dist+'/*.css',path.dist+'/*.js'])
        .pipe(header(data.banner, pkg))
        .pipe(dest(path.dist));
}

// clean builds
function cleanBuild() {
    return src([
        path.dist, path.demo+'/assets/css/*.css',
        path.demo+'/assets/js/*.js'
    ], {
        read: false,
        allowEmpty: true
    }).pipe(clean());
}

// develop builds
function devBuild() {
    return watch([path.source+'/*.scss',path.source+'/*.js'], series(
        cleanBuild, lintCSS, lintJS, compile, minifyCSS, minifyJS, copyright, demoCSS, demoJS
    ));
}

// demoCSS
function demoCSS() {
    return src(path.dist+'/*.min.css')
        .pipe(dest(path.demo+'/assets/css/'));
}

// demoJS
function demoJS() {
    return src(path.dist+'/*.js')
        .pipe(dest(path.demo+'/assets/js/'));
}

// gulp process
exports.default = series(cleanBuild, lintCSS, lintJS, compile, minifyCSS, minifyJS, copyright, demoCSS, demoJS);
exports.dev = devBuild;
exports.clean = cleanBuild;
