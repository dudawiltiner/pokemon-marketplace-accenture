import React from 'react';
import { FiUser } from 'react-icons/fi';
import { CgShoppingCart } from 'react-icons/cg';
import { MdInput } from 'react-icons/md';
import { SiPokemon } from 'react-icons/si';
import * as S from '../styles/NavBarCSS';

export default function NavBar() {
  return (
    <S.NavBar>
      <S.IconPoke>
        <SiPokemon size={ 95 } />
      </S.IconPoke>
      <S.Icon>
        <CgShoppingCart size={ 25 } />
      </S.Icon>
      <S.Icon>
        <FiUser size={ 25 } />
      </S.Icon>
      <S.Icon>
        <MdInput size={ 25 } />
      </S.Icon>
    </S.NavBar>
  );
}
