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