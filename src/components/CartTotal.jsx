import PropTypes from "prop-types";
import React from "react";
import useCartTotal from "../hooks/useCartTotal";
import * as S from "../styles/ShoppingCartCSS";

export default function CartTotal({ listPokemon }) {
  const { sum } = useCartTotal(listPokemon);

  return (
    <S.TotalContainer>
      <S.CartTotal>{`Total: US$ ${sum},00`}</S.CartTotal>
    </S.TotalContainer>
  );
}

CartTotal.propTypes = {
  listPokemon: PropTypes.shape({
    forEach: PropTypes.func,
  }),
}.isRequired;
