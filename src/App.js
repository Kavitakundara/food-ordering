// App.js
import './App.css';
import React from "react";
import Header from './Components/Header.js';
// import About from "./Components/About.js";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App; 
