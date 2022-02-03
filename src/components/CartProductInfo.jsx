/* eslint-disable react/prop-types */
import React from 'react';

import * as S from '../styles/ShoppingCartCSS';
import CartImageProduct from './CartImageProduct';
import CartPokemonName from './CartPokemonName';
import CartCounter from './CartCounter';
import CartRemovePokemon from './CartRemovePokemon';

const AOS_ANIMATION_DELAY = 150;
export default function CartProductInfo({ pokemonBought, number }) {
  return (
    <S.ProductInfo
      data-aos="fade-up"
      data-aos-delay={ number * AOS_ANIMATION_DELAY }
    >
      <CartImageProduct img={ pokemonBought.img } />
      <CartPokemonName name={ pokemonBought.name } />
      <CartCounter
        pokemonBought={ pokemonBought }
      />
      <CartRemovePokemon pokemonBought={ pokemonBought } />

      <S.HorizontalRow />
    </S.ProductInfo>
  );
}
