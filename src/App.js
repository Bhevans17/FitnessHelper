import React from "react";
import Calculator from "./components/Calculator";
import Example from "./components/NavBar";
import SearchFood from "./components/SearchFood";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Example />
      <Main />
      <Calculator />
      <SearchFood />
      <Footer />
    </div>
  );
}

export default App;
