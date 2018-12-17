import React, { Component } from 'react';

import FormBuilder from './containers/FormBuilder/FormBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Skygate form</h1>
        </header>
        <FormBuilder />
      </div>
    )
  }
}

export default App;
