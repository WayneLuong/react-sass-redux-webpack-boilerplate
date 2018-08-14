# react-sass-webpack-boilerplate

https://www.codementor.io/valentinrad/roll-your-own-tiny-react-environment-using-webpack-babel-and-sass-ei70wyhjl

-----------webpack.config.js----------
/* webpack.config.js */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Tell webpack to begin building its 
    // dependency graph from this file.
    entry: path.join(__dirname, 'src', 'components', 'App.js'),
    // And to place the output in the `build` directory
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    /* ... */
    module: {
        rules: [{
                test: /\.jsx?$/,
                /* We'll leave npm packages as is and not 
                   parse them with Babel since most of them 
                   are already pre-transpiled anyway. */
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            /* ... */
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    /* inline if smaller than 10 KB, otherwise load as a file */
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff2?|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    /* ... */
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}

------package.json----------
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --inline --hot",
    "sass-build": "sass ./src:./build --style compressed "
  },
    "babel": {
    "presets": [
      "env",
      "react"
    ]
  }
  
  -------------------App.js-------------
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import './js/module1';


/* Main js file renders to index.html */
class App extends Component {
  render() {
    return <div className="App">{/* one main div only */}
            <h1>Hello World!!</h1>;
        </div>;
  }
}
/* renders the JSX from 'App' to div 'root' */
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

-------------index.html-----------
<body>
  <div id="root"></div>
</body>
