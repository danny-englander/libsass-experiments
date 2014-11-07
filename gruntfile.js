module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        includePaths: require('node-bourbon').includePaths
      },
      sass: {
        files: ['sass/**/*.{scss,sass}', 'sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        options: {
          includePaths: require('node-bourbon').includePaths,
          sourceMap: true,
          outputStyle: 'expanded'
        },
        files: {
          'css/styles.css': 'sass/styles.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass:dist', 'watch']);
};
