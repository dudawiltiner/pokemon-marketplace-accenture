import React from 'react';
import * as S from '../styles/MenuPokemonsCSS';

export default function MenuPokemon() {
  return (
    <S.ContainerPokemon>
      <S.CardPokemon>
        <S.Picture />
        <S.Name>Pikachu</S.Name>
        <S.Type>Pokemon tipo elétrico</S.Type>
        <S.Detail>+ detalhes</S.Detail>
        <S.Price>R$ 20.000,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.CardPokemon>
    </S.ContainerPokemon>
  );
}
