https://www.codementor.io/valentinrad/roll-your-own-tiny-react-environment-using-webpack-babel-and-sass-ei70wyhjl

npm init

-----------------------INSTALLATION--------------------
npm install --save react
npm install --save react-dom

npm install --save webpack
touch webpack.config.js

BABEL
npm install --save babel-core  # base of the Babel ecosystem, parses JS code,
npm install --save babel-loader  # allows Webpack to transpile JS code via Babel
npm install --save babel-preset-env  # allows transpilation from latest ES2015+# features to ES5 
npm install --save babel-preset-react  #and finally, JSX to ES5 transpilation

npm install --save html-webpack-plugin
npm install --save webpack-dev-server

SASS LOADERS
npm install --save style-loader  #creates style tags from JS strings
npm install --save css-loader  # translates CSS into JS strings
npm install --save sass-loader  # translates Sass into CSS
npm install --save node-sass  # Sass compiler used by the loader above

FILE & IMAGE LOADERS
npm install --save file-loader  # adds an asset to the output directory
npm install --save url-loader  # loads small assets as dataURIs# large assets get handled by file-loader

--------------------------COMMANDS--------------------
npm run start or npm start
 "start": "webpack-dev-server --inline --hot",
"sass-build": "sass ./src:./build --style compressed "
