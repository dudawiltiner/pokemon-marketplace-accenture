import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import * as P from './pages';
import { GlobalStyle } from './styles/GlobalCSS';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <P.Home /> } />
        <Route path="/login" element={ <P.Login /> } />
        <Route path="/changepassword" element={ <P.ChangePassword /> } />
        <Route path="/register" element={ <P.Register /> } />
        <Route path="/profile" element={ <P.Profile /> } />
        <Route path="/shoppin" element={ <P.ShoppingCart /> } />
      </Routes>
    </BrowserRouter>
  );
}
