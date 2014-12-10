module.exports = {
    options: {
        includePaths: ['bower_components/foundation/scss']
    },
    dist: {
        options: {
            outputStyle: 'compressed'
        },
        files: {
            'css/app.css': 'scss/app.scss'
        }
    },
    dev: {
        options: {
            sourceComments: 'map',
            outputStyle: 'extended',
            sourceMap: true
        },
        files: {
            'css/app.css': 'scss/app.scss',
            'css/dev.css': 'scss/dev.scss'
        }
    }
}