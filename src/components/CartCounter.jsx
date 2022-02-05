import PropTypes from "prop-types";
import React from "react";
import * as S from "../styles/ShoppingCartCSS";
import useCartCounter from "../hooks/useCartCounter";
export default function CartCounter({ pokemonBought }) {
  const { plusPokemon, subPokemon, newPrice } = useCartCounter(pokemonBought);

  return (
    <>
      <S.CartCounter>
        <S.SubProduct type="button" onClick={subPokemon}>
          -
        </S.SubProduct>
        <S.ProductAmount>{pokemonBought.count}</S.ProductAmount>
        <S.AddProduct type="button" onClick={plusPokemon}>
          +
        </S.AddProduct>
      </S.CartCounter>
      <S.ProductPrice>{`US$ ${pokemonBought.price}`}</S.ProductPrice>
      <S.ProductSubtotal>{`US$ ${newPrice},00`}</S.ProductSubtotal>
    </>
  );
}

CartCounter.propTypes = {
  pokemonBought: PropTypes.shape({
    count: PropTypes.number,
    price: PropTypes.string,
  }),
}.isRequired;
