import React, { Component } from 'react';
import { LeftBlock, Transfers } from './components'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LeftBlock />
          <Transfers />
      </div>
    );
  }
}

export default App;
