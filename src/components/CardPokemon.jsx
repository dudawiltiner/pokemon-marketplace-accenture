import PropTypes from 'prop-types';
import React from 'react';
import pricesList from '../data/prices';
import * as S from '../styles/MenuPokemonsCSS';

const AOS_ANIMATION_DELAY = 100;

export default function CardPokemon({
  item, index, funcSaveDetailPokemon, funcAddPokemonToCart }) {
  return (
    <S.CardPokemon
      data-aos="fade-up"
      data-aos-delay={ index * AOS_ANIMATION_DELAY }
    >
      <S.Picture src={ `https://img.pokemondb.net/artwork/large/${item.namePokemon}.jpg` } />
      <S.Name>{ item.namePokemon }</S.Name>
      <S.Type>{`Pokemon Type ${item.typePokemon}`}</S.Type>
      <S.Detail
        onClick={ () => funcSaveDetailPokemon(
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
        onClick={ () => funcAddPokemonToCart(
          `https://img.pokemondb.net/artwork/large/${item.namePokemon}.jpg`,
          item.namePokemon,
          pricesList[index],
        ) }
      >
        Add to cart
      </S.Button>
    </S.CardPokemon>
  );
}

CardPokemon.propTypes = {
  funcSaveDetailPokemon: PropTypes.func,
  funcAddPokemonToCart: PropTypes.func,
  index: PropTypes.number,
  item: PropTypes.shape({
    namePokemon: PropTypes.string,
    typePokemon: PropTypes.string,
  }),
}.isRequired;
