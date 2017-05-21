module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'assets/js/*.js' // All JS in the libs folder
                ],
                dest: 'build/js/index.js'
            }
        },
        uglify: {
            build: {
                src: 'assets/js/*.js',
                dest: 'build/js/index.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'build/img/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    compress: false,
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'assets/scss/',
                    src: ['**/style.scss'],
                    dest: 'build/css/',
                    ext: '.css'
                }]
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass' ]);

};