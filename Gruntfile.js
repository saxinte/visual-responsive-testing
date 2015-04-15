module.exports = function(grunt) {

    grunt.initConfig({

        // HTTP Server
        connect: {
            dev: {
                options: {
                    port: 1337,
                    base: './app/',
                    keepalive: true
                }
            }
        },

        // Report folder clean
        clean: {
            reports: ['galen-tests/reports']
        }

    });

    // Tasks load
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Tasks
    grunt.registerTask('default', ['connect:dev']);
    grunt.registerTask('cleanup', ['clean']);

};