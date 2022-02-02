import React from 'react';
import * as S from '../styles/ShoppingCartCSS';

export default function CartInfoBar() {
  return (
    <S.CartInfo>

      <S.Produto>Produto</S.Produto>
      <S.Quantidade>Quantidade</S.Quantidade>
      <S.Preço>Preço</S.Preço>
      <S.Subtotal>Subtotal</S.Subtotal>

    </S.CartInfo>
  );
}
