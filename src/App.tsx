import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Auth />
    </BrowserRouter>
  );
}

export default App;
