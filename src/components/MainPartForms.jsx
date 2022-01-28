import PropTypes from 'prop-types';
import React from 'react';
import * as S from '../styles/FormsGeralCSS';

export default function MainPartForms({ space, title, children }) {
  return (
    <S.Container data-aos="fade-right">
      <S.Content space={ space }>
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
  space: PropTypes.string,
}.required;
