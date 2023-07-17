import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import NavBar from './Components/Nav/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
