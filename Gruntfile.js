module.exports = function(grunt) {

    // Tasks load
    require('load-grunt-tasks')(grunt);

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

        // Reports folder clean
        clean: {
            fail: ['./galen-tests/reports/fail'],
            success: ['./galen-tests/reports/success']
        },

        // Shortcut bash commands
        shell: {
            options: {
                execOptions: {
                    cwd: './galen-tests/tests/'
                }
            },
            fail: {
                command: 'galen test test-example.test --htmlreport ../reports/fail/ -DpageName="page-fail"'
            },
            success: {
                command: 'galen test test-example.test --htmlreport ../reports/success/ -DpageName="page-success"'
            }
        }

    });

    // Tasks
    grunt.registerTask('default', ['connect:dev']);

    grunt.registerTask('server', ['connect:dev']);
    grunt.registerTask('galen-fail', ['clean:fail', 'shell:fail']);
    grunt.registerTask('galen-success', ['clean:success', 'shell:success']);

};