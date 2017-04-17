import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Display from './components/display';
import Keys from './components/keys';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <div className="box">
          <Display />
          <Keys />
        </div>
      </div>
    );
  }
}

export default App;
