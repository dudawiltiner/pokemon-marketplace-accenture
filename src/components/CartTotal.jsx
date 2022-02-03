import React, { useEffect, useState } from 'react';
// import { ShoppingCartContext } from '../context/ShoppingCartContext';
// import { useDispatch } from 'react-redux';
import * as S from '../styles/ShoppingCartCSS';

// eslint-disable-next-line react/prop-types
export default function CartTotal({ listPokemon }) {
  const [sum, setSum] = useState('');
  console.log(listPokemon);
  const convertPrice = (price, count) => {
    const mult = 1000;
    const initialPrice = parseFloat(price) * mult;
    const subPrice = initialPrice * count;

    console.log(subPrice);
    return subPrice;
  };

  const total = () => {
    let sumSubPrice = 0;
    console.log(listPokemon);
    // eslint-disable-next-line react/prop-types
    listPokemon.forEach((item) => {
      sumSubPrice += convertPrice(item.price, item.count);
    });
    const ToString = sumSubPrice.toLocaleString('en-US').replace(',', '.');
    setSum(ToString);
    console.log(sumSubPrice);
  };

  useEffect(() => {
    total();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listPokemon]);

  return (
    <S.TotalContainer>
      <S.CartTotal>
        { `Total: R$ ${sum},00` }
      </S.CartTotal>
    </S.TotalContainer>
  );
}
