import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import * as P from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <P.Home /> } />
        <Route path="/login" element={ <P.Login /> } />
        <Route path="/profile" element={ <P.Profile /> } />
        <Route path="/shoppin" element={ <P.ShoppingCart /> } />
      </Routes>
    </BrowserRouter>
  );
}
