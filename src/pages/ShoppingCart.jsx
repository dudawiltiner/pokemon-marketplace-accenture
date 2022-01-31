import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import * as S from '../styles/ShoppingCartCSS';

// import useVerifyAuth from '../hooks/useVerifyAuth';

export default function ShoppingCart() {
  // useVerifyAuth();
  // const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const storage = useSelector((state) => state);

  useEffect(() => {
    setList(storage.shoppingReducer.listCart);
  }, [storage]);

  console.log(list);
  return (
    <S.Container>
      <NavBar />
      <S.CartMain>
        <S.CartInfo>
          <S.Produto>Produto</S.Produto>
          <S.Quantidade>Quantidade</S.Quantidade>
          <S.Preço>Preço</S.Preço>
          <S.Subtotal>Subtotal</S.Subtotal>
        </S.CartInfo>
        <S.productInfo>
          <S.imageProduct src="./pikachu.png" alt="" />
          <S.PokemonName>Pikachu</S.PokemonName>
          <S.CartControl>
            <S.SubProduct type="submit">-</S.SubProduct>
            <S.ProductAmount>1</S.ProductAmount>
            <S.AddProduct type="submit">+</S.AddProduct>
          </S.CartControl>
          <S.ProductPrice>R$ 20.000,00</S.ProductPrice>
          <S.ProductSubtortal>R$ 20.000,00</S.ProductSubtortal>
          <S.RemoveProduct type="submit">
            <img src="./trash.png" alt="" />
          </S.RemoveProduct>
          <S.HorizontalRow />
        </S.productInfo>
      </S.CartMain>
    </S.Container>

  );
}
