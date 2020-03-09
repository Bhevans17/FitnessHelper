import React from "react";
import Calculator from "./components/Calculator";
import Example from "./components/NavBar";
import SearchFood from "./components/SearchFood";

function App() {
  return (
    <div className='App'>
      <Example />
      <Calculator />
      <SearchFood />
    </div>
  );
}

export default App;
