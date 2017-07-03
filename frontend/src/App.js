import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    }
  }
  componentDidMount() {
    fetch("/places")
      .then(apiResponse => apiResponse.json())
      .then(parsedData => {
        this.setState({ places: parsedData })
      }); 
  }
  displayCities() {
    // create array of react elements
    return this.state.places.map(place => {
      return <div key={place.key}>{place.city}</div>
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.displayCities()}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
