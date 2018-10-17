import React, { Component } from 'react';
import Counter from './components/counter'

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="main">
        <Counter/>
      </main>
    );
  }
}

export default App;
