import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Card/>
      </div>
    );
  }
}

export default App;
