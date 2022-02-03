import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearPokemonCartAction } from '../redux/actions';
import * as S from '../styles/ShoppingCartCSS';

export default function CartTotal({ funcModalOpen }) {
  const dispatch = useDispatch();

  function endShopping() {
    funcModalOpen(true);
    dispatch(clearPokemonCartAction([]));
  }

  return (
    <S.BackAndBuyButtonsContainer>
      <Link to="/">
        <S.BackHomeCartButton
          type="button"
          className="backHomeCartButton"
        >
          Keep buying

        </S.BackHomeCartButton>
      </Link>

      <S.BuyCartButton
        onClick={ () => endShopping() }
        type="button"
        className="buyCartButton"
      >
        Checkout
      </S.BuyCartButton>
    </S.BackAndBuyButtonsContainer>
  );
}

CartTotal.propTypes = {
  funcModalOpen: PropTypes.func,
}.isRequired;
