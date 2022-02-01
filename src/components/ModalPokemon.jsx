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
  const name = 'pikachu';
  const price = '20000';

  const [modalIsOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [region, setRegion] = useState(false);
  const [shape, setShape] = useState(false);
  const [type, setType] = useState(false);
  const [gen, setGen] = useState(false);
  const [id, setId] = useState(false);

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
      setColor(res.color.name);
      setRegion(res.pokedex.name);
      setShape(res.shape.name);
      setType(res.type.name);
      setGen(res.gen.name);
      setId(res.id.name);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPokemonDetails(name);
  }, [getPokemonDetails]);

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
          <img src="./pikachu.png" alt={ name } />
        </S.Photo>

        <S.Text>
          <p>{name}</p>

          <S.CloseButton onClick={ handleCloseModal }><S.CloseIcon /></S.CloseButton>

          <p>
            {`Natural from ${region}. 
          ${name} is a ${color} and ${shape} pokemon, ${type} type.`}

          </p>
          <p>
            {`Implemented on ${gen} generation. 
          That pokémon have the id ${id} in pokedex.`}

          </p>

          <p>{price}</p>
          <button className="addCart">Adicionar ao carrinho</button>
        </S.Text>
      </S.ModalContainer>
    </S.Container>
  );
}
