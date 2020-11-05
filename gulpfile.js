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
    sass        = require('gulp-sass'),
    sassLint    = require('gulp-sass-lint'),
    header      = require('gulp-header'),
    rename      = require('gulp-rename'),
    clean       = require('gulp-clean'),
    fs          = require('fs');

const path = {
    root: "./",
    build: "./*.css",
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
        ' * Licensed Under The MIT License: http://opensource.org/licenses/MIT',
        ' * Copyright (c) <%= new Date().getFullYear() %> <%= author %>',
        ' *',
        ' * Facebook: @warengonzagaofficial',
        ' * Twitter: @warengonzaga',
        ' * Github: @warengonzaga',
        ' * Website: warengonzaga.com',
        ' */\n\n',
    ].join('\n'),
};

// setup sass compiler
sass.compiler = require('node-sass');

// link css
function lintCSS() {
    return src(path.source+'/*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
}

// compile css
function compile() {
    return src(path.source+'/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(path.root));
}

// minify css
function minify() {
    return src(path.build)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(dest(path.root));
}

// add copyright label
function copyright() {
    return src(path.build)
        .pipe(header(data.banner, pkg))
        .pipe(dest(path.root));
}

// clean builds
function cleanBuild() {
    return src([path.build, path.demo+'/assets/css/*.css'], {read: false})
        .pipe(clean());
}

// develop builds
function devBuild() {
    return watch(path.source+'/*.scss', series(
        lintCSS, compile, minify, copyright, demo
        ));
}

// demo
function demo() {
    return src('./fork-corner.min.css')
        .pipe(dest(path.demo+'/assets/css/'))
}

// gulp process
exports.default = series(lintCSS, compile, minify, copyright, demo);
exports.dev = devBuild;
exports.clean = cleanBuild;
