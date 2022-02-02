/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as S from '../styles/ModalPokemon';
import { fetchPokemonsDetails } from '../service/pokemonsAPI';

Modal.setAppElement('#root');

export default function ModalPokemon({ pokemonList,
  modalOpen,
  funcModalOpen,
  addPokemon }) {
  const [color, setColor] = useState('');
  const [region, setRegion] = useState('');
  const [shape, setShape] = useState('');
  const [gen, setGen] = useState('');
  const [id, setId] = useState('');
  const [habitat, setHabitat] = useState('');

  function handleCloseModal() {
    funcModalOpen(false);
  }

  async function getPokemonDetails() {
    try {
      console.log(pokemonList.name);
      const res = await fetchPokemonsDetails(pokemonList.name);
      console.log(res);
      setHabitat(res.habitat.name);
      setColor(res.color.name);
      setShape(res.shape.name);
      setGen(res.generation.name);
      setId(res.id);
      setRegion(res.pokedex_numbers[1].pokedex.name);
      console.log(res.id);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <S.ModalContainer
      isOpen={ modalOpen }
      onRequestClose={ handleCloseModal }
      className="shadow-2xl"
    >
      <S.Photo>
        <img src={ `https://img.pokemondb.net/artwork/large/${pokemonList.name}.jpg` } alt={ pokemonList.name } />
      </S.Photo>

      <S.Text>
        <S.NamePokemon>{pokemonList.name}</S.NamePokemon>

        <S.CloseButton onClick={ handleCloseModal }><S.CloseIcon /></S.CloseButton>
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
          <S.PriceText>{`R$ ${pokemonList.price}`}</S.PriceText>
          <S.AddCartButton
            onClick={ () => addPokemon(`https://img.pokemondb.net/artwork/large/${pokemonList.name}.jpg`,
              pokemonList.name,
              pokemonList.type) }
          >
            Add to cart

          </S.AddCartButton>
        </S.PriceCart>

      </S.Text>
    </S.ModalContainer>
  );
}
