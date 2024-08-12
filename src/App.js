// App.js
import './App.css';
import React from "react";
import Header from './Components/Header.js';
// import About from "./Components/About.js";
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import userContext from './utils/userContex.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';

function App() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Kavita Kundara",
    };
    setUserInfo(data.name);
  }, [])


  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedIn: userInfo }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
}

export default App; 
