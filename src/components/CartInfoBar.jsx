import React from "react";
import * as S from "../styles/ShoppingCartCSS";

export default function CartInfoBar() {
  return (
    <S.CartInfo>
      <S.Produto>Product</S.Produto>
      <S.Quantidade>Amount</S.Quantidade>
      <S.Preço>Price</S.Preço>
      <S.Subtotal>Subtotal</S.Subtotal>
    </S.CartInfo>
  );
}
