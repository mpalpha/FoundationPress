module.exports = {
	options: {
	    separator: ';'
	},
	dist: {
	    src: [
	        './js/custom/*.js'
	    ],

	    dest: './js/app.js'
	},
	dev: {
	    src: [
	        'bower_components/foundation-hashgrid/foundation.hashgrid.js',
	    ],

	    dest: './js/dev.js'
	}
}