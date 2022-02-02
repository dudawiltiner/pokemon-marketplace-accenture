/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as S from '../styles/ModalPokemon';
import { fetchPokemonsDetails } from '../service/pokemonsAPI';

Modal.setAppElement('#root');

export default function ModalPokemon() {
  const name = 'raichu';
  const price = '20.000,00';

  const [modalIsOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [region, setRegion] = useState(false);
  const [shape, setShape] = useState(false);
  const [type, setType] = useState(false);
  const [gen, setGen] = useState(false);
  const [id, setId] = useState(false);
  const [habitat, setHabitat] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  async function getPokemonDetails(namePokemon) {
    try {
      const res = await fetchPokemonsDetails(namePokemon);
      console.log(res);
      setHabitat(res.habitat.name);
      setColor(res.color.name);
      setShape(res.shape.name);
      setGen(res.generation.name);
      setId(res.id);

      setRegion(res.pokedex_numbers[1].pokedex.name);// api 2
      setType(res.type.name);// api 2

      console.log(res.id);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPokemonDetails(name);
  }, []);

  return (
    <S.Container>
      <button className="modal-button" onClick={ handleOpenModal }>
        Modal
      </button>
      <S.ModalContainer
        isOpen={ modalIsOpen }
        onRequestClose={ handleCloseModal }
      >
        <S.Photo>
          <img src={ `https://img.pokemondb.net/artwork/large/${name}.jpg` } alt={ name } />
        </S.Photo>

        <S.Text>
          <S.NamePokemon>{name}</S.NamePokemon>

          <S.CloseButton onClick={ handleCloseModal }><S.CloseIcon /></S.CloseButton>
          <S.Paragraph>
            {`Natural from ${region} (${habitat}). 
          ${name} is a ${color} and ${shape} pokemon, ${type} type.`}
          </S.Paragraph>
          <S.Paragraph>
            {`Implemented on ${gen}.
          That pokémon have the id ${id} in pokedex.`}
          </S.Paragraph>

          <S.PriceCart>
            <S.PriceText>{`R$ ${price}`}</S.PriceText>
            <S.AddCartButton>Adicionar ao carrinho</S.AddCartButton>
          </S.PriceCart>

        </S.Text>
      </S.ModalContainer>
    </S.Container>
  );
}
