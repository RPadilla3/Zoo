
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
   testig: {
     options: {
       port: 6969,
       base: '.'
     }
   }
 },

 mocha: {
   alltests: {
     options: {
       url: [
         'https://localhost:6969/test/thoughterTester.html'
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
