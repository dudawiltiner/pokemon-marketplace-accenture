import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
// import { useDispatch } from 'react-redux';
import * as S from '../styles/ShoppingCartCSS';

export default function CartTotal() {
  const context = useContext(ShoppingCartContext);

  const { listPokemons } = context;
  console.log(listPokemons);
  return (
    <S.TotalContainer>
      <S.CartTotal>
        Total:
        { total }
      </S.CartTotal>
    </S.TotalContainer>
  );
}
