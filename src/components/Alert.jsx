import PropTypes from 'prop-types';
import React from 'react';
import * as S from '../styles/AlertCSS';

export default function Alert({ alertDescription, close }) {
  return (
    <S.AlertConatiner data-aos="zoom-in" role="alert">
      <S.ButotnClose onClick={ () => close(false) }><S.CloseIcon /></S.ButotnClose>
      <S.Alert>
        <S.AlertIcon />
        <div>
          <S.Title>Error</S.Title>
          <S.Description>{ alertDescription }</S.Description>
        </div>
      </S.Alert>
    </S.AlertConatiner>
  );
}

Alert.propTypes = {
  alertDescription: PropTypes.string,
}.isRequired;
