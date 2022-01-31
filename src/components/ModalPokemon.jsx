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
  const [setDescription] = useState(false);

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
      setDescription(res.flavor_text_entries[0].flavor_text);
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
          {/* <p>
            {`${name} It is a type ${type} pokemon
            introduced in the ${gen} generation.`}
          </p>
          <p>
            {`It evolves from ${preEv} when ${preEvCondition}
            and evolves to ${postEv} when ${postEvCondition}.`}
          </p>
          <p>
            {`In Alola, ${name} will evolve to ${alolaPostEv}
            when ${alolaPostEvCondition}`}
          </p>
          <p>
            {`{name} has a form ${gigantamax}. ${name}
            with Gigantamax factor cannot evolve.`}
          </p> */}
          <p>{price}</p>
          <button className="addCart">Adicionar ao carrinho</button>
        </S.Text>
      </S.ModalContainer>
    </S.Container>
  );
}
