import React from 'react';
import * as S from '../styles/MenuPokemonsCSS';
import pricesList from '../data/prices';
import ModalPokemon from './ModalPokemon';
import Loading from './Loading';
import useMenuPokemons from '../hooks/useMenuPokemons';
import ChangePage from './ChangePage';

const AOS_ANIMATION_DELAY = 100;

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
              <S.CardPokemon
                data-aos="fade-up"
                data-aos-delay={ index * AOS_ANIMATION_DELAY }
                key={ index }
              >
                <S.Picture src={ `https://img.pokemondb.net/artwork/large/${item.namePokemon}.jpg` } />
                <S.Name>{ item.namePokemon }</S.Name>
                <S.Type>{`Pokemon Type ${item.typePokemon}`}</S.Type>
                <S.Detail
                  onClick={ () => saveDetailPokemon(
                    item.namePokemon,
                    item.typePokemon,
                    pricesList[index],
                  ) }
                >
                  + details
                </S.Detail>
                <S.Price>{ `US$ ${pricesList[index]}` }</S.Price>
                <S.Button
                  bgcolor="#717171"
                  onClick={ () => addPokemonToCart(
                    `https://img.pokemondb.net/artwork/large/${item.namePokemon}.jpg`,
                    item.namePokemon,
                    pricesList[index],
                  ) }
                >
                  Add to cart
                </S.Button>
              </S.CardPokemon>
            ))}
          </ul>) }
    </S.ContainerPokemon>
  );
}
