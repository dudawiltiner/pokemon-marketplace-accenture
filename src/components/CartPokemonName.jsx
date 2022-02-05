import PropTypes from "prop-types";
import React from "react";
import * as S from "../styles/ShoppingCartCSS";

export default function CartPokemonName({ name }) {
  return <S.CartPokemonName>{name}</S.CartPokemonName>;
}

CartPokemonName.propTypes = {
  name: PropTypes.string,
}.isRequired;
