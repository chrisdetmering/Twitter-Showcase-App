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
          <Route path="/Search" component={Search} />
          <Route path="/Random" component={Random} />
      </Router>



    </div>
  )
}

export default App