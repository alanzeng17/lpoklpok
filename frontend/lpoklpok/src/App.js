import React, { Component } from 'react';
import logo from './logo.svg';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent.js'
import RouteContainer from "./components/RouteComponent";
import './index.css';
import './App.css';
class App extends Component {
  render() {
    return (            
    <Router>
      <div class='main'>
          <NavbarComponent />
          <RouteContainer />
      </div>
      </Router>

    );
  }
}

export default App;
