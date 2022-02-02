/* eslint-disable react/prop-types */
import React from 'react';
import * as S from '../styles/ShoppingCartCSS';

export default function CartPokemonName({ name }) {
  return (
    <S.CartPokemonName>{name}</S.CartPokemonName>
  );
}
