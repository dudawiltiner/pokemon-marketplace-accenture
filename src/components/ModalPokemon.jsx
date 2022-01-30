/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ModalPokemon() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const name = 'Pikachu';
  const description = 'pokemon elétrico';
  const price = '20000';

  return (
    <div className="container">
      <button className="modal-button" onClick={ handleOpenModal }>
        Modal
      </button>
      <Modal
        isOpen={ modalIsOpen }
        onRequestClose={ handleCloseModal }
        style={ customStyles }
      >
        <h1>{name}</h1>

        <button onClick={ handleCloseModal }><GrClose /></button>
        <div>{description}</div>
        <p>{price}</p>
        <button className="addCart">Adicionar ao carrinho</button>
      </Modal>
    </div>
  );
}
