import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
// import Home from './components/Home';
import Basic from './components/Basic';
import Apiprint from './components/Apiprint';

function App() {
  return (
    <div className='form'>
      {/* <Home/> */}
      <Apiprint />
    </div>
  )
}

export default App
