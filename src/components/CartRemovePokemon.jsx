import React from 'react';
import { useDispatch } from 'react-redux';
// import storage from 'redux-persist/lib/storage';
import { removePokemonCartAction } from '../redux/actions';
import * as S from '../styles/ShoppingCartCSS';

// eslint-disable-next-line react/prop-types
export default function CartRemovePokemon({ pokemonBought }) {
  const dispatch = useDispatch();

  function handleRemove(payload) {
    dispatch(removePokemonCartAction(payload));
  }

  return (
    <S.RemoveProduct type="submit" onClick={ () => handleRemove(pokemonBought) }>
      <img src="./trash.png" alt="" />
    </S.RemoveProduct>
  );
}
