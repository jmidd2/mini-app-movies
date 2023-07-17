import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Nav from './Components/Nav/Nav';

export const AppContext = createContext({});

function App() {
  const [movieList, setMovieList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="container">
        {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
        <AppContext.Provider value={{ movieList, setMovieList }}>
          <Outlet />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
