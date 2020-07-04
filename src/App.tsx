import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bin2Dec from "./services/Bin2Dec";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [decimal, setDecimal] = Object(useState());
  const [bin, setBin] = Object(useState());

  function handleResults() {
    const binObj = new Bin2Dec(inputValue);
    const binObjConv = JSON.stringify(binObj.binConversor());
    Object(setDecimal(binObjConv));
    Object(setBin(binObj.bin));
  }

  return (
    <div className="App">
      <body>
        <Header title="Binary App" />
        <div id="wrapper">
          <h1>
            Decimal:
            <p>{decimal}</p>
          </h1>
          <h1>
            Binary:
            <p>{bin}</p>
          </h1>
          <input
            type="text"
            onChange={(event) => setInputValue(event.target.value)}
            className="forms"
          />
          <button className="forms" onClick={handleResults}>
            Conversor
          </button>
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default App;
