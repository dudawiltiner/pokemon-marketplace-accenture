import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export default function ShoppingCartProvider({ children }) {
  const [listPokemons, setListPokemons] = useState([]);
  return (
    <ShoppingCartContext.Provider value={ { listPokemons, setListPokemons } }>
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.html,
}.required;
