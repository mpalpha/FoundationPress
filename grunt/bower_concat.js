module.exports = {
  all: {
    dest: 'js/vendor.js',
    bowerOptions: {
      relative: false
    },
    include: [
      'fastclick',
      'foundation',
      'greensock',
      'animate-scroll'
    ],
    mainFiles: {
      'foundation': [
        'js/foundation/foundation.js',
        'js/foundation/foundation.abide.js',
        'js/foundation/foundation.accordion.js',
        'js/foundation/foundation.alert.js',
        'js/foundation/foundation.clearing.js',
        'js/foundation/foundation.dropdown.js',
        'js/foundation/foundation.equalizer.js',
        'js/foundation/foundation.interchange.js',
        'js/foundation/foundation.joyride.js',
        'js/foundation/foundation.magellan.js',
        'js/foundation/foundation.offcanvas.js',
        'js/foundation/foundation.orbit.js',
        'js/foundation/foundation.reveal.js',
        'js/foundation/foundation.slider.js',
        'js/foundation/foundation.tab.js',
        'js/foundation/foundation.tooltip.js',
        'js/foundation/foundation.topbar.js'
      ],
      'greensock': [
        'src/uncompressed/TweenMax.js',
        'src/uncompressed/easing/EasePack.js',
        'src/uncompressed/plugins/CSSPlugin.js'
      ]
    },
    dependencies: {
      'animate-scroll': 'greensock'
    }
  },
  jquery: {
    dest: 'js/jquery.min.js',
    bowerOptions: {
      relative: false
    },
    include: [
      'jquery',
    ]
  },
  modernizr: {
    dest: 'js/modernizr.min.js',
    bowerOptions: {
      relative: false
    },
    include: [
      'modernizr',
    ]
  }
}