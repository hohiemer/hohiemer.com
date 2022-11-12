const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

async function styles() {
  gulp
    .src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./site/css'));
}

async function scripts() {
  gulp
    .src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./site/js'));
}

gulp.task('styles', styles);

gulp.task('scripts', scripts);

const watcher = () => {
  gulp.watch('./src/css/*.css', { ignoreInitial: true }, styles);
  gulp.watch('./src/js/*.js', { ignoreInitial: true }, scripts);
};

exports.default = gulp.parallel(styles, scripts);

exports.watch = watcher;
