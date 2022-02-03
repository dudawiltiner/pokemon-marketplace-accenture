import React from 'react';
import * as S from '../styles/HomeCSS';
import 'aos/dist/aos.css';
import NavBar from '../components/NavBar';
import MenuPokemons from '../components/MenuPokemons';
// import ModalPokemon from '../components/ModalPokemon';
import useVerifyAuth from '../hooks/useVerifyAuth';

export default function Home() {
  useVerifyAuth();
  // const [show, setShow] = useState(false);
  // const pokemonDetails = showPokemonDetails();
  return (
    <S.Container>
      <NavBar />
      {/* <ModalPokemon /> */}
      <MenuPokemons />
      {/* mostrar ou nao component modal */}
    </S.Container>
  );
}
