import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon, Label } from 'semantic-ui-react'
import Home from './components/Home';
import AboutPage from './About/AboutPage';
import BasicExample from './Links/BasicExample';

class App extends Component {
  render() {
    return (
      //<Home />
      //<AboutPage />
      <BasicExample />
    );
  }
}

export default App;
