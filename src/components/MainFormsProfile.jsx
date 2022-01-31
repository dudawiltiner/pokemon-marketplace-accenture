import PropTypes from 'prop-types';
import React from 'react';
import useImage from '../hooks/useImage';
import * as S from '../styles/ProfileCSS';
import ChooseImage from './ChooseImage';

export default function MainFormsProfile({ children }) {
  const { show, setShow, image } = useImage();

  return (
    <S.Container>
      <S.Content data-aos="fade-up">
        <S.ContentImage>
          <S.Img w="w-56" src={ image } alt="avatar1" />
          <S.ButotnIcon onClick={ () => setShow(!show) }>
            <S.Icon />
          </S.ButotnIcon>
          {show && <ChooseImage />}
        </S.ContentImage>
        <S.ContentForms>
          {children}
        </S.ContentForms>
      </S.Content>
    </S.Container>
  );
}

MainFormsProfile.propTypes = {
  children: PropTypes.html,
}.required;
