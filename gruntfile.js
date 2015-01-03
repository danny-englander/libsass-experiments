/* globals module, require */
var timer = require("grunt-timer");
module.exports = function(grunt) {
  timer.init(grunt);
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    uglify: {
      global: {
        files: {
          "js/script.min.js": ["js/script.js"]
        }
      }
    },

    sass: {
      global: {
        options: {
          style: "expanded"
        },
        files: {
          "css/styles-unprefixed.css": "sass/styles.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "css/styles-unprefixed.css",
        dest: "css/styles.css"
      }
    },

    shell: {
      jekyllServe: {
        command: "jekyll serve --baseurl="
      },
      jekyllBuild: {
        command: "jekyll build --config _config-dev.yml"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ['*.html', 'js/**/*.{js,json}', 'css/*.css', "_layouts/*.html", "_includes/*.html", "_posts/*.md", 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        tasks: ["shell:jekyllBuild"]
      },
      js: {
        files: ["js/*.js"],
        tasks: ["uglify", "shell:jekyllBuild"]
      },
      css: {
        files: ["sass/*.scss"],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      }
    }

  });

  require("load-grunt-tasks")(grunt);
  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("default", ["sass", "autoprefixer", "shell:jekyllBuild", "watch"]);
};
