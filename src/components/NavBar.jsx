import React from 'react';

import * as S from '../styles/NavBarCSS';

export default function NavBar() {
  return (
    <S.NavBar>
      <S.LogoPoke src="./logo.png" alt="logo" />
      <S.ContainerIcons>
        <S.Icon1 />
        <S.Icon2 />
        <S.Icon3 />
      </S.ContainerIcons>
    </S.NavBar>
  );
}
