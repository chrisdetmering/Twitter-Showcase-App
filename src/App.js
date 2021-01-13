import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Random from './components/Random'
import Search from './components/Search'
 
const App = () => {
  return(
    <div>
      



      <Random />
      <Search />
      <Header />
    </div>
  )
}

export default App