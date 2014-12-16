/* globals module, require */

module.exports = function(grunt) {

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
     //   files: ["index.html", "writing.html", "about.html", "_layouts/*.html", "_posts/*.md", "_projects/*.md", "_includes/*.html"],
        files: ['*.html', "typography.html", 'js/**/*.{js,json}', 'css/*.css', "_layouts/*.html", "_includes/*.html", "_posts/*.md", 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        tasks: ["shell:jekyllBuild"]
      },
      js: {
        files: ["js/*.js"],
        tasks: ["uglify", "shell:jekyllBuild"]
      },
      css: {
        files: ["scss/*.scss"],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      }
    }

  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("default", ["sass", "autoprefixer", "shell:jekyllBuild", "watch"]);

};
