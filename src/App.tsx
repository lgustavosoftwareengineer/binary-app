import React, { useState } from 'react';
import './App.css';
import Bin2Dec from './Bin2Dec'



import logo from './logo.png';

function App() {

  const [inputValue, setInputValue] = useState('')
  const [decimal, setDecimal] = Object(useState())
  const [bin, setBin] = Object(useState())
  
  
  
  function handleResults() {
    const binObj = new Bin2Dec(inputValue);
    const binObjConv = JSON.stringify(binObj.binConversor())
    Object(setDecimal(binObjConv));
    Object(setBin(binObj.bin))
  }


  

  return (

    <div className="App">
      <header>
        
        
      </header>

      <body>
          <div id="wrapper">
            <img src={logo} alt="logo"/>
            <h1>Decimal {decimal}</h1>
            <h1>Binary {bin}</h1>
            <input type="text" onChange={event => setInputValue(event.target.value)} className="forms"/> 
            <button className='forms' onClick={handleResults}>Conversor</button>  
          </div>
      </body>
      
    </div>
  );
}

export default App;
