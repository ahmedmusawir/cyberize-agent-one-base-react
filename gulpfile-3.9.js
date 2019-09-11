/**
 *
 * Gulp Modules
 *
 */
var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var scss = require( 'gulp-sass' );
var cssPrefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );
var browserify = require( 'browserify' );
var babelify = require( 'babelify' );
var source = require( 'vinyl-source-stream' );
var buffer = require( 'vinyl-buffer' );
var uglify = require( 'gulp-uglify' );

/**
 *
 * Gulp SCSS Variables
 *
 */
var adminStyleSRC = '/assets/src/scss/main.scss';
var styleWatch = '/assets/src/scss/**/*.scss';
var styleDIST = './assets/dist/css/';

/**
 *
 * Gulp SCSS to CSS
 *
 */
gulp.task( 'styles', function(){

	gulp.src( adminStyleSRC )
		.pipe( sourcemaps.init() )
		.pipe( scss({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( cssPrefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( styleDIST ) );

});

/**
 *
 * Gulp JS Variables
 *
 */
// var adminStyleSRC = './assets/src/scss/main.scss';
// var styleWatch = './assets/src/scss/**/*.scss';
var jsSRC = 'script.js';
var jsReactSRC = 'script-react.js';
var jsFolder = 'assets/src/js/';
var jsWatch = 'assets/src/js/**/*.js';
var jsDIST = './assets/dist/js/';

var jsFILES = [ jsSRC, jsReactSRC ];

/**
 *
 * JS Minification & Compilation
 *
 */

// gulp.task('js', function() {

// 	gulp.src( jsSRC )
// 		.pipe( gulp.dest( jsDIST ));
// });

gulp.task( 'js', function(){

	jsFILES.map( function( singleJSFile ){

		return browserify({
			entries: [ jsFolder + singleJSFile ]
		})
		.transform( babelify, { presets: ['env'] } )
		.bundle()
		.pipe( source( singleJSFile ) )
		.pipe( rename( { extname: '.min.js' } ) )
		.pipe( buffer() )
		.pipe( sourcemaps.init({ loadMaps: true }) )
		.pipe( uglify() )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( jsDIST ) )

	});
});

/**
 *
 * Gulp Default Task
 *
 */
gulp.task('default', ['styles', 'js']);


/**
 *
 * Gulp Watch Task
 *
 */
gulp.task('watch', ['default'], function() {

	gulp.watch( styleWatch, ['styles'] );
	gulp.watch( jsWatch, ['js'] );

});











