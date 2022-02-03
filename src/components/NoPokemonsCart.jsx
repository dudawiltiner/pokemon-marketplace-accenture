/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/NoPokemonCSS';

export default function NoPokemonsCart() {
  return (
    <S.ContainerNoPokemon>
      <S.Figure src="/cartPokemon.png" alt="pokemon" />
      <div>
        <S.Text1>You don't have any pokemon yet :(</S.Text1>
        <Link to="/">
          <S.Text2>Go back home to choose yours!</S.Text2>
        </Link>
      </div>
    </S.ContainerNoPokemon>
  );
}
