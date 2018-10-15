import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Navbar from "./component/nav/Navbar";
import About from './component/layout/About'
import Add from './component/layout/Add'
import NotFound from './component/layout/NotFound'
import Contacts from './component/contacts/Contacts'

/* App.js */
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path='/add' component={Add}/>
              <Route exact path='/About' component={About}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
