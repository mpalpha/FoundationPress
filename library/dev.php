<?php
function dev_scripts_styles() {
	global $wp_styles;

	wp_register_script('livereload', 'http://localhost:35729/livereload.js?snipver=1', null, false, true);
	wp_enqueue_script('livereload');

	wp_enqueue_script( 'hashgrid', get_template_directory_uri() . '/js/dev.js',  array('jquery'), false, true );
	wp_enqueue_style( 'hashgrid', get_template_directory_uri() . '/css/dev.css' );


}
function init_hashgrid() {
	if( wp_script_is( 'jquery', 'done' ) ) {
	  	$endScript = '</' . 'script>';
		echo <<<FOOT
<script type="text/javascript">
	$(function(){
		setTimeout(function(){
			$(document).hashgrid();
		},100);
	});
$endScript

FOOT;
	}
}
add_action( 'wp_footer', 'init_hashgrid' );
add_action( 'wp_enqueue_scripts', 'dev_scripts_styles', 0 );
?>