/* eslint-disable react/prop-types */
import React from 'react';

import * as S from '../styles/ShoppingCartCSS';
import CartImageProduct from './CartImageProduct';
import CartPokemonName from './CartPokemonName';
import CartCounter from './CartCounter';
import CartRemovePokemon from './CartRemovePokemon';

export default function CartProductInfo({ pokemonBought, total, valueTotal }) {
  return (
    <S.ProductInfo>

      <CartImageProduct img={ pokemonBought.img } />
      <CartPokemonName name={ pokemonBought.name } />
      <CartCounter
        pokemonBought={ pokemonBought }
        total={ total }
        valueTotal={ valueTotal }
      />
      <CartRemovePokemon />

      <S.HorizontalRow />
    </S.ProductInfo>
  );
}
