import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Login />
    </BrowserRouter>
  );
}

export default App;
