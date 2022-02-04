import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';
import * as S from '../styles/ModalPokemonCSS';
import useModalPokemon from '../hooks/useModalPokemon';

Modal.setAppElement('#root');

export default function ModalPokemon({ pokemonList,
  modalOpen, funcModalOpen, addPokemon }) {
  const {
    color,
    region,
    shape,
    gen,
    id,
    habitat,
    handleCloseModal,
  } = useModalPokemon(pokemonList, funcModalOpen);

  return (
    <S.ModalContainer
      isOpen={ modalOpen }
      onRequestClose={ () => handleCloseModal() }
      className="shadow-2xl"
    >
      <S.Photo>
        <img src={ `https://img.pokemondb.net/artwork/large/${pokemonList.name}.jpg` } alt={ pokemonList.name } />
      </S.Photo>

      <S.Text>
        <S.NamePokemon>{pokemonList.name}</S.NamePokemon>

        <S.CloseButton
          onClick={ () => handleCloseModal() }
        >
          <S.CloseIcon />
        </S.CloseButton>
        <S.Paragraph>
          {`Natural from ${region} (${habitat}).
          Is a ${color} and ${shape} pokemon,
          ${pokemonList.type} type.`}
        </S.Paragraph>
        <S.Paragraph>
          {`Implemented on ${gen}.
          That pokémon have the id ${id} in pokedex.`}
        </S.Paragraph>

        <S.PriceCart>
          <S.PriceText>{`US$ ${pokemonList.price}`}</S.PriceText>
          <S.AddCartButton
            onClick={ () => addPokemon(`https://img.pokemondb.net/artwork/large/${pokemonList.name}.jpg`,
              pokemonList.name,
              pokemonList.price) }
          >
            Add to cart
          </S.AddCartButton>
        </S.PriceCart>

      </S.Text>
    </S.ModalContainer>
  );
}

ModalPokemon.propTypes = {
  addPokemon: PropTypes.func,
  funcModalOpen: PropTypes.func,
  modalOpen: PropTypes.boolean,
  pokemonList: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    type: PropTypes.string,
  }),
}.isRequired;
