/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Modal from 'react-modal';
import * as S from '../styles/ModalShoppingCSS';

Modal.setAppElement('#root');

export default function ModalShopping({ modalOpen, funcModalOpen }) {
  function handleCloseModal() {
    funcModalOpen(false);
  }

  return (
    <S.ModalContainer
      isOpen={ modalOpen }
      onRequestClose={ handleCloseModal }
      className="shadow-2xl"
    >

      <S.CloseButton onClick={ handleCloseModal }><S.CloseIcon /></S.CloseButton>
      <S.CartIcon />
      <S.Text1>Compra realizada com sucesso!</S.Text1>
      <S.Text2>Em beve você receberá um e-mail com todos os detalhes</S.Text2>
      <S.ContentButton>
        <S.HomeButton to="/">Voltar para home</S.HomeButton>
      </S.ContentButton>
    </S.ModalContainer>

  );
}
