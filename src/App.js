import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Random from './components/Random';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import axios from 'axios'

const accessToken = "AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAA1Pyh30C82i9UpYmoekr3TOGM7wA%3D2C6UxXsdmoIQFdeuYeAqHG1xpMEbKMDBl0wcQ5jfSJniLNFfJt"

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

export default App