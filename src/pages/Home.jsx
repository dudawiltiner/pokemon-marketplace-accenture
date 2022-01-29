import React from 'react';
import * as S from '../styles/HomeCSS';
import NavBar from '../components/NavBar';
import MenuPokemons from '../components/MenuPokemons';

export default function Home() {
  return (
    <S.Container>
      <NavBar />
      <MenuPokemons />
    </S.Container>
  );
}
