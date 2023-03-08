import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Transfer from './Components/Transfer';
import { useState } from 'react';

function App() {



  const fromAddress = "0xDBC05B1ECB4FDAEF943819C0B04E9EF6DF4BABD6";
  const toAddress = "0x721B68FA152A930F3DF71F54AC1CE7ED3AC5F867";
  return (
    <div className="App">
        <Transfer fromAddress={fromAddress} toAddress={toAddress}/>
    </div>
  );
}

export default App;
