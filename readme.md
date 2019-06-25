## Introduction

Webpack and Babel have been setup to work with es6.
Notice in the package.json @babel/register was installed.
Then we had to call the webpack file webpack.config.babel.js

I used the following tutorial to find this 
https://medium.com/oredi/webpack-with-babel-7-b61f7caa9565

Notice that in the .babelrc when setting up the presets I had to include {legacy:  ....} as show below.
 ["@babel/plugin-proposal-decorators", {"legacy": true}]
 
 Notice also to use babel/core 7.4
