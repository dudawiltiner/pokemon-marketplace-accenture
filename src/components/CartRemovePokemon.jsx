import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { removePokemonCartAction } from "../redux/actions";
import * as S from "../styles/ShoppingCartCSS";

export default function CartRemovePokemon({ pokemonBought }) {
  const dispatch = useDispatch();

  function handleRemove(payload) {
    dispatch(removePokemonCartAction(payload));
  }

  return (
    <S.RemoveProduct type="submit" onClick={() => handleRemove(pokemonBought)}>
      <img src="./trash.png" alt="" />
    </S.RemoveProduct>
  );
}

CartRemovePokemon.propTypes = {
  pokemonBought: PropTypes.object,
}.isRequired;
