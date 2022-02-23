import React, { useState, useEffect } from "react";

import "./App.css";
import Pessoa from "./components/Pessoa";
import Cafe from "./components/Cafe";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/coffee/random_coffee?size=20")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  const pessoa = {
    nome: "joao",
    idade: 23,
  };

  return (
    <div className="App">
      <header className="App-header">
        <Pessoa props={pessoa} />
        <div className="grid-container">
          {data.map((item) => (
            <Cafe key={item.id} props={item} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
