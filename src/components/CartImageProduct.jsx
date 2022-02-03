/* eslint-disable react/prop-types */
import React from 'react';
import * as S from '../styles/ShoppingCartCSS';

export default function CartImageProduct({ img }) {
  return (<S.ImageProduct src={ img } alt="" />);
}
