import React from 'react';
import NavBar from '../components/NavBar';
import pikachu from '../images/pikachu.png';
import trash from '../images/trash.png';
import * as S from '../styles/ShoppingCartCSS';

export default function ShoppingCart() {
  return (
    <S.Container className="container">
      <NavBar />
      <S.CartMain className="cartMain">
        <S.CartInfo className="cartInfo">
          <S.Produto>Produto</S.Produto>
          <S.Quantidade>Quantidade</S.Quantidade>
          <S.Preço>Preço</S.Preço>
          <S.Subtotal>Subtotal</S.Subtotal>
        </S.CartInfo>
        <S.productInfo className="productInfo">
          <S.imageProduct src={ pikachu } alt="" />
          <S.PokemonName className="pokemonName">Pikachu</S.PokemonName>
          <S.CartControl className="cartControls">
            <S.SubProduct type="submit" className="SubProduct">-</S.SubProduct>
            <S.ProductAmount className="productAmount">1</S.ProductAmount>
            <S.AddProduct type="submit" className="addProduct">+</S.AddProduct>
          </S.CartControl>
          <S.ProductPrice className="productPrice">R$ 20.000,00</S.ProductPrice>
          <S.ProductSubtortal className="subtotal">R$ 20.000,00</S.ProductSubtortal>
          <S.RemoveProduct type="submit" className="removeProduct">
            <img src={ trash } alt="" />
          </S.RemoveProduct>

          <S.HorizontalRow className="horizontalRow" />
        </S.productInfo>
      </S.CartMain>
    </S.Container>

  );
}

// https://i1.sndcdn.com/artworks-b6gqnrQ8CzjPRMFr-9zxwjw-t500x500.jpg
