import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Menu,
  Responsive,
  Visibility,
  Segment
} from 'semantic-ui-react'
import Home from '../components/Home';
import AboutPage from '../About/AboutPage';

const Routing = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" componet={AboutPage} />
    </div>
  </Router>
);


export default Routing