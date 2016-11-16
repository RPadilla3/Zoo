module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['node_modules/**']
            },
            source: {
                files: {
                    src: ['src/javascript/**/*.js']
                }
            }
        },
        connect: {
            testing: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        },

        mocha: {
            alltests: {
                options: {
                    urls: [
                        'http://localhost:8000/test/zooTester.html'
                    ]
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('test', ['connect', 'mocha']);
    grunt.registerTask('default', ['jshint', 'test']);
};
