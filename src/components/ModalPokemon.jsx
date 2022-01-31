/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Modal from 'react-modal';
import * as S from '../styles/ModalPokemon';

Modal.setAppElement('#root');

export default function ModalPokemon() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const name = 'Pikachu';
  const description = 'pokemon elétrico';
  const price = '20000';

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
          <p>{description}</p>
          <p>{price}</p>
          <button className="addCart">Adicionar ao carrinho</button>
        </S.Text>
      </S.ModalContainer>
    </S.Container>
  );
}
