#A LibSass experiment with color, design, and photography

##A project made with LibSass that plays with color, design, and photography in the context of Sass, Grunt, Bourbon, and Neat 

This is an experimental project to explore LIbSass, Grunt, Node NPMs, Bourbon, Neat, and more. The reason I started to play around with this is that I want to learn new things and my current Ruby Sass / Compass / Susy setup is getting long in the tooth. Compile times are getting abysmal with large projects. 

Enter LibSass! It breaks the Ruby Sass bottleneck and compile times with LibSass are crazy fast, even for complex loops and functions. Although LibSass is not quite up to feature parity yet with Ruby Sass, [it's in the works](https://github.com/sass/LibSass/releases/tag/3.0rc1). 

1. To get up and running, you'll need [Node.js](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed locally. 

2. Clone this repo to your local and then run ```npm install```. (Note you may need to preface the command with ```sudo``` depending on your setup.)

3. Run ```grunt```, make a few code changes and watch the speed.

Your local top-level directory structure should look something like this if all went well with ```npm install```

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
|____package.json
|____sass
| |_____(partials here...)
| |____styles.scss
| |____normalize.scss
```

##Node Packaged Modules used

* [grunt-contrib-watch](https://www.npmjs.org/package/grunt-contrib-watch)
* [grunt-sass](https://www.npmjs.org/package/grunt-sass) (Grunt LibSass compiler)
* [node-bourbon](https://www.npmjs.org/package/node-bourbon)
* [node-neat](https://www.npmjs.org/package/node-neat) (Note, for some reason NPM does not bring in bitters, you may need to add in manually. See this [folder structure](https://github.com/wittawasw/node-neat-bitters/tree/master/assets/stylesheets) for more info)
* This repo also uses a slightly modified version of [normalize.css](http://necolas.github.io/normalize.css/) by Nicolas Gallagher and co-created with Jonathan Neal.

##@TODO

Here are some ideas that I have for this project going forward.

1. Add favicon and retina touch icons
2. Add CSS comb, a CSS formatter, or prettifier 
3. Covert to Jekyll?
4. Add photo gallery


