/* É importante desabilitar essas configurações para o uso do Tailwind */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React from 'react';
import { MdCatchingPokemon } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import * as S from '../styles/404CSS';

export default function Custom404() {
  return (
    <S.Main>
      <S.Container>
        <S.Images>
          <S.Img1 src="/gotcha.png" alt="Gotcha" />
          <S.Img2 src="/404.png" alt="Não encontrado" />
        </S.Images>
        <S.Text>
          <S.Title>
            <p>4</p>
            <MdCatchingPokemon />
            <p>4</p>
          </S.Title>
          <S.Descrip1>
            Oops...Pokemon não encontrado.
          </S.Descrip1>
          <S.Descrip2>
            Você deve ter digitado o endereço errado ou a página foi deslocada.
          </S.Descrip2>
          <S.LinkHome to="/">
            <p><b>Ir para Home</b></p>
            <BsArrowRight />
          </S.LinkHome>
        </S.Text>
      </S.Container>
    </S.Main>

  );
}
