import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import * as P from './pages';
import { GlobalStyle } from './styles/GlobalCSS';

export default function App() {
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={ <P.Home /> } />
            <Route path="/login" element={ <P.Login /> } />
            <Route path="/changepassword" element={ <P.ChangePassword /> } />
            <Route path="/register" element={ <P.Register /> } />
            <Route path="/profile" element={ <P.Profile /> } />
            <Route path="/cart" element={ <P.ShoppingCart /> } />
            <Route path="*" element={ <P.Custom404 /> } />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
