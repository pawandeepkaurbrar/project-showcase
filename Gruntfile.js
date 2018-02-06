module.exports = function(grunt) { 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'js/slideshow.js',
                dest: 'js/slideshow.min.js'
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'css/simple-slideshow-styles.css': 'css/styles.css' 
                }
            }
        },
        watch: {
            styles: {
                files: ['css/styles.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify']);
};
