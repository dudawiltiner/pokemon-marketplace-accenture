import React from 'react';
// import { useDispatch } from 'react-redux';
import * as S from '../styles/ShoppingCartCSS';

export default function CartTotal() {
  return (
    <S.TotalContainer>
      <S.CartTotal>
        Total:
        {/* {price} */}
      </S.CartTotal>
    </S.TotalContainer>
  );
}
