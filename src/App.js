import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Random from './components/Random';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Search" component={Search} />
          <Route path="/Random" component={Random} />
        </Switch>

      </Router>



    </div>
  )
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App