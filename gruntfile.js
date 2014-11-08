module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        includePaths: require('node-neat').includePaths
      },
      sass: {
        files: ['sass/**/*.{scss,sass}', 'sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      }, //sass
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: { livereload: true }
      } // livereload
    }, //watch
    sass: {
      dist: {
        options: {
          includePaths: require('node-neat').includePaths,
          sourceMap: true,
          outputStyle: 'expanded',
          sourceComments: 'none'
        },
        files: {
          'css/styles.css': 'sass/styles.scss'
        } //files
      } //dist
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass:dist', 'watch']);
};
