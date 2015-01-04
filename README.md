##A project made with LibSass that plays with color, design, and photography in the context of Sass, Grunt, Bourbon, and Neat

This is an experimental project to explore LIbSass, Grunt, Node NPMs, Bourbon Sass, Neat, and more. The reason I started to play around with these is that I want to learn new things and my current Ruby Sass / Compass / Susy compile times were getting abysmal. 

Enter LibSass! It breaks the Ruby Compass Sass bottleneck and compile times with LibSass are crazy fast, even for complex loops and functions. Although LibSass is not quite up to feature parity yet with Ruby Sass, it's in the works. You can take a look at Hugo Giraudel's [Sass Compatibility](https://sass-compatibility.github.io/) site which includes LibSass.

##Introduction

*LIbSass Experiments* is multi-faceted, it contains the main *1.x-dev* branch where all the development happens. Think of this as the master branch. Then there is a git sub-module for the *gh-pages* branch which is the actual Jekyll generated site. This setup allows for a streamlined workflow. To achieve this setup, I loosely followed Bernd Jünger's tutorial, *[Generate GitHub pages in a submodule](http://blog.blindgaenger.net/generate_github_pages_in_a_submodule.html)*

##Get up and running with this repo

To get up and running, you'll need a few things

* You'll need [Node.js](http://nodejs.org/) installed locally. This is pretty easy to install, there's installers for download at the site. Node allows us to easily install all the NPM packages that this project depends on.

* Clone this repo to your local, checkout 1.x-dev and then run ```npm install```. (Note you may need to preface the command with ```sudo``` depending on your setup.)

* Run ```grunt``` and ```jekyll serve```, make a few code changes and watch the speed of Grunt and LibSass. You can preview any changes at ```http://localhost:4000/```.  

* If you want to push this code to your own repo / site, you can adjust the site url and other settings in *config.yml* to suit your needs. Check out the [Jekyll documentation](http://jekyllrb.com/docs/home/) for more info. 

Your local top level directory structure should look something like this if all went well with ```npm install```

```
|____css
|____gruntfile.js
|____index.html
|____node_modules
| |____grunt
| |____grunt-contrib-watch
| |____grunt-sass
| |____node-bourbon
| |____node-neat
| |____[etc...]
|____package.json
|____sass
| |_____(partials here...)
| |____styles.scss
| |____normalize.scss
```

##Node Modules used

* [grunt-contrib-watch](https://www.npmjs.org/package/grunt-contrib-watch)
* [grunt-sass](https://www.npmjs.org/package/grunt-sass) (Grunt LibSass compiler)
* [node-bourbon](https://www.npmjs.org/package/node-bourbon)
* [node-neat](https://www.npmjs.org/package/node-neat)
* This repo also uses a slightly modified version of [normalize.css](http://necolas.github.io/normalize.css/) by Nicolas Gallagher and co-created with Jonathan Neal.


##@TODO

Here are some ideas that I have for this project going forward.

1. Add favicon and retina touch icons
2. Add CSS comb, a CSS formatter, or prettifier 
3. <del>Covert to Jekyll?</del>
4. Add photo gallery

