/* eslint-disable eol-last */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';
import * as S from '../styles/ModalShopping';

Modal.setAppElement('#root');

export default function ModalShopping() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <S.Container>
      <button className="modal-button" onClick={ handleOpenModal }>
        Modal
      </button>
      <S.ModalContainer
        isOpen={ modalIsOpen }
        onRequestClose={ handleCloseModal }
      >

        <S.CloseButton onClick={ handleCloseModal }><S.CloseIcon /></S.CloseButton>

        <button onClick={ handleCloseModal }><GrClose /></button>
        <div>I am a modal</div>
      </S.ModalContainer>
    </S.Container>
  );
}