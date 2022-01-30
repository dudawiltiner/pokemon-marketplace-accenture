import React from 'react';
import * as S from '../styles/HomeCSS';
import NavBar from '../components/NavBar';
import MenuPokemons from '../components/MenuPokemons';

export default function Home() {
  // lógica de verificação
  return (
    <S.Container>
      <NavBar />
      <MenuPokemons />
    </S.Container>
  );
}
