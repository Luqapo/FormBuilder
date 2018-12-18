import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import FormBuilder from './containers/FormBuilder/FormBuilder';
import FormsList from './containers/FormsList/FormsList';
import Nav from './components/Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Skygate form</h1>
        </header>
        <Nav />
        <Switch>
          <Route path="/form-builder" component={FormBuilder} />
          <Route path="/form" component={FormsList} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
