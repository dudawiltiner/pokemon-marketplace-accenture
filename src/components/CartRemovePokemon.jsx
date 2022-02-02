import React from 'react';
import { useDispatch } from 'react-redux';
// import storage from 'redux-persist/lib/storage';
import { removePokemonCartAction } from '../redux/actions';
import * as S from '../styles/ShoppingCartCSS';

export default function CartRemovePokemon() {
  const dispatch = useDispatch();

  function handleRemove(payload) {
    dispatch({ type: 'REMOVE_POKEMON_CART' });
    dispatch(removePokemonCartAction(payload));
  }

  return (
    <S.RemoveProduct type="submit" onClick={ () => handleRemove }>
      <img src="./trash.png" alt="" />
    </S.RemoveProduct>
  );
}
