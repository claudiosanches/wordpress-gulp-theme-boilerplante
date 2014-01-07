<?php

/**
 * Load site scripts.
 *
 * @since  1.0.0
 *
 * @return void
 */
function wpgulp_enqueue_scripts() {
	// Loads Odin main stylesheet.
	wp_enqueue_style( 'wpgulp-style', get_stylesheet_uri(), array(), null, 'all' );

	// jQuery.
	wp_enqueue_script( 'jquery' );

	// Theme scripts.
	wp_enqueue_script( 'wpgulp-main-min', get_template_directory_uri() . '/assets/js/build/main.js', array(), null, true );
}

add_action( 'wp_enqueue_scripts', 'wpgulp_enqueue_scripts', 1 );

/**
 * Custom stylesheet URI.
 *
 * @since  1.0.0
 *
 * @param  string $uri Default URI.
 * @param  string $dir Stylesheet directory URI.
 *
 * @return string      New URI.
 */
function wpgulp_stylesheet_uri( $uri, $dir ) {
	return $dir . '/assets/css/style.css';
}

add_filter( 'stylesheet_uri', 'wpgulp_stylesheet_uri', 10, 2 );
