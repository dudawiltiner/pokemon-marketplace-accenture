import PropTypes from 'prop-types';
import React from 'react';
import * as S from '../styles/LoginCSS';

export default function MainPartForms({ title, children }) {
  return (
    <S.Container data-aos="fade-right">
      <S.Content>
        <S.Logo src="./logo.png" alt="logo" />
        <S.Title>{title}</S.Title>
        <S.Forms>
          {children}
        </S.Forms>
      </S.Content>
    </S.Container>
  );
}

MainPartForms.propTypes = {
  title: PropTypes.string,
}.required;
