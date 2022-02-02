import React from 'react';
import * as S from '../styles/HomeCSS';
import 'aos/dist/aos.css';
import NavBar from '../components/NavBar';
import MenuPokemons from '../components/MenuPokemons';
// import useVerifyAuth from '../hooks/useVerifyAuth';

export default function Home() {
  // useVerifyAuth();

  return (
    <S.Container>
      <NavBar />
      <MenuPokemons />
    </S.Container>
  );
}
