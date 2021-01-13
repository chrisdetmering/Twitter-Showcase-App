import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Random from './components/Random'
import Search from './components/Search'
import Nav from './components/Nav'


const App = () => {
  return(
    <div>
      


      <Nav />
      <Random />
      <Search />
      <Header />
    </div>
  )
}

export default App