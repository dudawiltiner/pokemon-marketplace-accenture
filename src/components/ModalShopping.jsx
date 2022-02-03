/* eslint-disable eol-last */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Modal from 'react-modal';
import * as S from '../styles/ModalShoppingCSS';

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
        <S.CartIcon />
        <S.Text1>Compra realizada com sucesso!</S.Text1>
        <S.Text2>Em beve você receberá um e-mail com todos os detalhes</S.Text2>
        <S.ContentButton>
          <S.HomeButton to="/">Voltar para home</S.HomeButton>
        </S.ContentButton>
      </S.ModalContainer>
    </S.Container>
  );
}