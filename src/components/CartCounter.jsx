/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { plusPokemonAction, subPokemonAction } from '../redux/actions';
import * as S from '../styles/ShoppingCartCSS';

export default function CartCounter({ pokemonBought }) {
  // const context = useContext(ShoppingCartContext);
  // const { total, setTotal } = context;

  const dispatch = useDispatch();

  const plusPokemon = () => {
    dispatch(plusPokemonAction(pokemonBought));
  };

  const subPokemon = () => {
    dispatch(subPokemonAction(pokemonBought));
  };

  const [newPrice, setNewPrice] = useState(pokemonBought.price);

  const handlePrice = () => {
    const mult = 1000;
    const initialPrice = parseFloat(pokemonBought.price) * mult;
    const subPrice = initialPrice * pokemonBought.count;

    setNewPrice(subPrice.toLocaleString('en-US').replace(',', '.'));
  };

  useEffect(() => {
    handlePrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonBought]);
  return (
    <>
      <S.CartCounter>

        <S.SubProduct type="submit" onClick={ subPokemon }>-</S.SubProduct>
        <S.ProductAmount>{pokemonBought.count}</S.ProductAmount>
        <S.AddProduct type="submit" onClick={ plusPokemon }>+</S.AddProduct>

      </S.CartCounter>
      <S.ProductPrice>{ `R$ ${pokemonBought.price}` }</S.ProductPrice>
      <S.ProductSubtotal>
        { `R$ ${newPrice},00` }
      </S.ProductSubtotal>
    </>

  );
}
