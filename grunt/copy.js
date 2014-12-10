module.exports = {
    cssmaps: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.css.map',
        dest: 'css'
    },

    dev: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*hashgrid.scss',
        dest: 'scss'
    }
}