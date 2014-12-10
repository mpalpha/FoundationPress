module.exports = function(grunt) {
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: {
            sass: 'node-sass',
            bower_concat: 'grunt-bower-concat'
        }
    });

    grunt.registerTask('build', ['sass:dev', 'copy', 'bower_concat', 'concat']);
    grunt.registerTask('publish', ['sass:dist', 'copy', 'bower_concat', 'concat:dist']);
    grunt.registerTask('default', ['build','watch']);
}
