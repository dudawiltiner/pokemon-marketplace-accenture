import React, { useEffect } from 'react';
import Aos from 'aos';
import * as S from '../styles/HomeCSS';
import 'aos/dist/aos.css';
import NavBar from '../components/NavBar';
import MenuPokemons from '../components/MenuPokemons';
// import useVerifyAuth from '../hooks/useVerifyAuth';

export default function Home() {
  // useVerifyAuth();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>

      <S.Container>
        <NavBar />
        <MenuPokemons />
      </S.Container>

    </div>
  );
}
