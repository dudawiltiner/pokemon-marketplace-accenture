import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/ShoppingCartCSS';

export default function CartTotal() {
  return (
    <S.BackAndBuyButtonsContainer>
      <Link to="/">
        <S.BackHomeCartButton
          type="submit"
          className="backHomeCartButton"
        >
          Continuar comprando

        </S.BackHomeCartButton>
      </Link>

      <S.BuyCartButton
        type="submit"
        className="buyCartButton"
      >
        Finalizar compra

      </S.BuyCartButton>
    </S.BackAndBuyButtonsContainer>
  );
}
