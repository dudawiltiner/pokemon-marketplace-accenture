import React from 'react';
import Modal from 'react-modal';

export default function ModalPokemon({ modalOpen, funcModalOpen, details }) {
  return (
    <Modal isOpen={ modalOpen }>
      <h1>MODAL</h1>
      <p>{ details.name }</p>
      <p>{ details.type }</p>
      <p>{ details.price }</p>
      <button type="button" onClick={ () => funcModalOpen(false) }>Fechar Modal</button>
    </Modal>
  );
}
