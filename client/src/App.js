import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Random from './components/Random';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from "./Footer"


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
      <Footer />
    </div>
  )
}

export default App