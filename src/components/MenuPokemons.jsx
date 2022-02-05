import React from 'react';
import * as S from '../styles/MenuPokemonsCSS';
import ModalPokemon from './ModalPokemon';
import Loading from './Loading';
import useMenuPokemons from '../hooks/useMenuPokemons';
import ChangePage from './ChangePage';
import CardPokemon from './CardPokemon';

export default function MenuPokemon() {
  const {
    pokemons,
    show,
    modalOpen,
    setModalOpen,
    pokemonList,
    addPokemonToCart,
    page,
    saveDetailPokemon,
    detailsPokemons } = useMenuPokemons();

  return (
    <S.ContainerPokemon>
      {modalOpen
      && <ModalPokemon
        pokemonList={ pokemonList }
        modalOpen={ modalOpen }
        funcModalOpen={ setModalOpen }
        addPokemon={ addPokemonToCart }
      />}
      <ChangePage page={ page } funcDetailsPokemon={ detailsPokemons } />
      { show
        ? <Loading />
        : (
          <ul>
            { pokemons.map((item, index) => (
              <CardPokemon
                item={ item }
                index={ index }
                key={ index }
                funcSaveDetailPokemon={ saveDetailPokemon }
                funcAddPokemonToCart={ addPokemonToCart }
              />
            ))}
          </ul>) }
    </S.ContainerPokemon>
  );
}
