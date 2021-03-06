const autoPrefixBrowserList = [
	'last 2 version',
	'safari 5',
	'ie 8',
	'ie 9',
	'opera 12.1',
	'ios 6',
	'android 4'
];

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const minifyCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const shell = require('gulp-shell');
const plumber = require('gulp-plumber');

gulp.task('browserSync', () => {
	browserSync({
		server: {
			baseDir: './dist/'
		},
		notify: false
	});
});

gulp.task('images', () => {
	return gulp
		.src(['src/images/**/*', '!src/images/README'])
		.pipe(plumber())
		.pipe(gulp.dest('dist/images/'));
});

gulp.task('images-deploy', tmp => {
	return gulp
		.src(['src/images/**/*'])
		.pipe(plumber())
		.pipe(
			imagemin({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true
			})
		)
		.pipe(gulp.dest('dist/images/'));
});

gulp.task('styles', () => {
	return gulp
		.src('./src/styles/main.scss')
		.pipe(
			plumber({
				errorHandler: err => {
					console.log(err);
					this.emit('end');
				}
			})
		)
		.pipe(sourceMaps.init())
		.pipe(
			sass({
				errLogToConsole: true,
				includePaths: ['./src/styles/']
			})
		)
		.pipe(
			autoprefixer({
				browsers: autoPrefixBrowserList,
				cascade: true
			})
		)
		.on('error', console.error)
		.pipe(concat('app.css'))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./dist/styles/'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('styles-deploy', () => {
	return gulp
		.src('./src/styles/main.scss')
		.pipe(plumber())
		.pipe(
			sass({
				includePaths: ['./src/styles/']
			})
		)
		.pipe(
			autoprefixer({
				cascade: true
			})
		)
		.pipe(concat('app.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/styles'));
});

gulp.task('html', () => {
	return gulp
		.src('./src/*.html')
		.pipe(plumber())
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest('./dist'))
		.on('error', console.error);
});

gulp.task('html-deploy', (done) => {
	gulp.src('./src/*')
		.pipe(plumber())
		.pipe(gulp.dest('./dist'));

	gulp.src('./src/fonts/**/*')
		.pipe(plumber())
		.pipe(gulp.dest('./dist/fonts'));

	done();
});

gulp.task('clean', shell.task(['rm -rf ./dist']));

gulp.task(
	'scaffold',
	shell.task([
		'mkdir ./dist',
		'mkdir ./dist/fonts',
		'mkdir ./dist/images',
		'mkdir ./dist/styles'
	])
);

gulp.task(
	'default',
	gulp.series(
		'clean',
		'scaffold',
		gulp.parallel('browserSync', 'html', 'styles', 'images')
	),
	() => {
		gulp.watch('src/styles/**', gulp.series('styles'));
		gulp.watch('src/images/**', gulp.series('images'));
		gulp.watch('src/*.html', gulp.series('html'));
	}
);

gulp.task(
	'deploy',
	gulp.series(
		[
			'clean',
			'scaffold',
			'styles-deploy',
			'images-deploy',
			'html-deploy'
		],
		done => {
			done();
		}
	)
);
