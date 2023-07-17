import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
