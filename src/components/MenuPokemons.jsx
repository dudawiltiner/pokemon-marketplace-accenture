import React from 'react';
import * as S from '../styles/MenuPokemonsCSS';
import pricesList from '../data/prices';
import ModalPokemon from './ModalPokemon';
import Loading from './Loading';
import useMenuPokemons from '../hooks/useMenuPokemons';

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
      <div className="flex items-center justify-between w-full mb-6 -mt-10">
        <S.Button
          color="#717171"
          font="18px"
          onClick={ () => detailsPokemons(page[0]) }
          type="button"
        >
          <S.Icon1 />
          <p>PREVIUS</p>
        </S.Button>
        <S.Title>POKEMONS</S.Title>
        <S.Button
          color="#717171"
          font="18px"
          onClick={ () => detailsPokemons(page[1]) }
          type="button"
        >
          <p>NEXT</p>
          <S.Icon2 />
        </S.Button>
      </div>
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
