module.exports = {
    grunt: {
        files: ['Gruntfile.js'],
        tasks: ['default']
    },
    sass: {
        files: 'scss/**/*.{scss,sass}',
        tasks: ['sass:dev', 'copy']
    },
    assets: {
        options: {
            livereload: 35729
        },
        files: [
            'css/*.css',
            '!css/*.css.map',
            'assets/img/**/*.{jpg,gif,svg,jpeg,png}',
            'js/**/*.js',
            '**/*.php'
        ]
    }
}
