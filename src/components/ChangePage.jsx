import PropTypes from 'prop-types';
import React from 'react';
import * as S from '../styles/ChangePagesCSS';
import { Button } from '../styles/MenuPokemonsCSS';

export default function ChangePage({ page, funcDetailsPokemon }) {
  return (
    // Tailwind somente nessa div
    <div className="flex items-center justify-between w-full mb-6 -mt-10">
      <Button
        color="#717171"
        font="18px"
        onClick={ () => funcDetailsPokemon(page[0]) }
        type="button"
      >
        <S.Icon1 />
        <p>PREVIUS</p>
      </Button>
      <S.Title>POKEMONS</S.Title>
      <Button
        color="#717171"
        font="18px"
        onClick={ () => funcDetailsPokemon(page[1]) }
        type="button"
      >
        <p>NEXT</p>
        <S.Icon2 />
      </Button>
    </div>
  );
}

ChangePage.propTypes = {
  funcDetailsPokemon: PropTypes.func,
  page: PropTypes.array,
}.isRequired;
