<?php

if (!function_exists('FoundationPress_scripts')) :
  function FoundationPress_scripts() {

    // deregister the jquery version bundled with wordpress
    wp_deregister_script( 'jquery' );

    // register scripts
    wp_register_script( 'modernizr', get_template_directory_uri() . '/js/modernizr.min.js', array(), '1.0.0', false );
    wp_register_script( 'jquery', get_template_directory_uri() . '/js/jquery.min.js', array('modernizr'), '1.0.0', false );
    wp_register_script( 'vendor', get_template_directory_uri() . '/js/vendor.js', array('jquery'), '1.0.0', true );
    wp_register_script( 'app', get_template_directory_uri() . '/js/app.js', array('vendor'), '1.0.0', true );

    // enqueue scripts
    wp_enqueue_script('modernizr');
    wp_enqueue_script('jquery');
    wp_enqueue_script('vendor');
    wp_enqueue_script('app');

  }

  add_action( 'wp_enqueue_scripts', 'FoundationPress_scripts' );
endif;

?>