import { useState } from 'react';
import './App.css'
import Apiprint from './components/Practice/Apiprint';
import Zustandcart from './components/Zustandcart';
import Zustandproduct from './components/Zustandproduct';
import Maintine from './Mantine/Maintine';
import Apicall from './components/Practice/Apicall';

function App() {
  return (
    <div className='form'>
      {/* <Maintine/> */}
      <Zustandproduct />
      <Zustandcart />
      {/* <Apiprint/> */}
      {/* <Apicall/> */}
    </div>
  )
}

export default App
