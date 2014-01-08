/* jshint node:true */

// Include project requirements.
var gulp = require( 'gulp' ),
	jshint = require( 'gulp-jshint' ),
	uglify = require( 'gulp-uglify' ),
	sass = require( 'gulp-sass' ),
	imagemin = require( 'gulp-imagemin' );

// Sets assets folders.
var dirs = {
	js: '../assets/js',
	css: '../assets/css',
	sass: '../assets/sass',
	images: '../assets/images',
	fonts: '../assets/fonts'
};

gulp.task( 'scripts', function () {
	// Hint all JavaScript.
	gulp.src( dirs.js + '/client/*.js' )
		.pipe( jshint() )
		.pipe( jshint.reporter( 'default' ) );

	// Minify and copy all JavaScript.
	gulp.src( dirs.js + '/client/*.js' )
		.pipe( uglify() )
		.pipe( gulp.dest( dirs.js + '/build' ) );
});

gulp.task( 'sass', function () {
	// Compile all SCSS files.
	gulp.src( dirs.sass + '/*.scss' )
		.pipe( sass({
			outputStyle: 'compressed'
		}) )
		.pipe( gulp.dest( dirs.css ) );
});

gulp.task( 'optimize', function () {
	// Optimize all images.
	gulp.src( dirs.images + '/*.{png,jpg,gif}' )
		.pipe( imagemin({
			optimizationLevel: 7,
			progressive: true
		}) )
		.pipe( gulp.dest( dirs.images ) );
});

gulp.task( 'watch', function () {
	// Watch JavaScript changes.
	gulp.watch( dirs.js + '/client/*.js', function () {
		gulp.run( 'scripts' );
	});

	// Watch SCSS changes.
	gulp.watch( dirs.sass + '/*.scss', function () {
		gulp.run( 'sass' );
	});
});

gulp.task( 'default', function () {
	// Compile all assets.
	gulp.run( 'scripts', 'sass' );
});
