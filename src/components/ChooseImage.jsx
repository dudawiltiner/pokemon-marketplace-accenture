import React from 'react';
import useImage from '../hooks/useImage';
import * as S from '../styles/ProfileCSS';

export default function ChooseImage() {
  const { setShow, setImage } = useImage();

  function changeImage(image) {
    setShow(false);
    setImage(image);
  }

  return (
    <S.ChooseImage data-aos="fade-up">
      <button onClick={ () => changeImage('/avatar1.png') } type="button">
        <S.Img
          hover="hover:border-yellow-400"
          cursor="cursor-pointer"
          w="w-24"
          src="/avatar1.png"
          alt="avatar1"
        />
      </button>

      <button onClick={ () => changeImage('/avatar2.jpg') } type="button">
        <S.Img
          hover="hover:border-yellow-400"
          cursor="cursor-pointer"
          w="w-24"
          src="/avatar2.jpg"
          alt="avatar2"
        />
      </button>
    </S.ChooseImage>
  );
}
