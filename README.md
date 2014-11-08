#Retro Films and Color Palettes

###An experimental project with LibSass that pays homage to classic films, design, and colors

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
| |_____base.scss
| |_____layout.scss
| |_____mixins.scss
| |_____modules.scss
| |_____variables.scss
| |____styles.scss
```

