/* jshint node:true */
var gulp = require( 'gulp' ),
	jshint = require( 'gulp-jshint' ),
	uglify = require( 'gulp-uglify' ),
	sass = require( 'gulp-sass' ),
	imagemin = require('gulp-imagemin');

gulp.task( 'scripts', function () {
	// Hint all JavaScript.
	gulp.src( '../assets/js/client/*.js' )
		.pipe( jshint() )
		.pipe( jshint.reporter( 'default' ) );

	// Minify and copy all JavaScript.
	gulp.src( '../assets/js/client/*.js' )
		.pipe( uglify() )
		.pipe( gulp.dest( '../assets/js/build' ) );
});

gulp.task( 'sass', function () {
	// Compile all SCSS files.
	gulp.src( '../assets/sass/*.scss' )
		.pipe( sass({
			outputStyle: 'compressed'
		}) )
		.pipe( gulp.dest( '../assets/css' ) );
});

gulp.task( 'optimize', function () {
	// Optimize all images.
	gulp.src( '../assets/images/*.{png,jpg,gif}' )
		.pipe( imagemin({
			optimizationLevel: 7,
			progressive: true
		}) )
		.pipe( gulp.dest( '../assets/images/' ) );
});

gulp.task( 'watch', function () {
	// Watch JavaScript changes.
	gulp.watch( '../assets/js/client/*.js', function () {
		gulp.run( 'scripts' );
	});

	// Watch SCSS changes.
	gulp.watch( '../assets/sass/*.scss', function () {
		gulp.run( 'sass' );
	});
});

gulp.task( 'default', function () {
	// Compile all assets.
	gulp.run( 'scripts', 'sass' );
});
