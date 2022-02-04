/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import * as S from '../styles/ShoppingCartCSS';
import 'aos/dist/aos.css';
import NavBar from '../components/NavBar';
import CartInfoBar from '../components/CartInfoBar';
import CartProductInfo from '../components/CartProductInfo';
import CartTotal from '../components/CartTotal';
import BackAndBuyButtonsContainer from '../components/BackHomeAndBuyButtons';
import NoPokemonsCart from '../components/NoPokemonsCart';
import ModalShopping from '../components/ModalShopping';
import useShoppingCart from '../hooks/useShoppingCart';

export default function ShoppingCart() {
  const { modalOpen, setModalOpen, list } = useShoppingCart();

  return (

    <S.Container>
      <NavBar />
      <S.CartMain data-aos="fade-up">
        <CartInfoBar />
        <S.ListProducts>
          {list.length === 0
            ? <NoPokemonsCart />
            : list.map((item, index) => (
              <CartProductInfo
                key={ index }
                pokemonBought={ item }
              />
            ))}
        </S.ListProducts>
        {list.length > 0
        && <CartTotal listPokemon={ list } />}
        <BackAndBuyButtonsContainer funcModalOpen={ setModalOpen } />
      </S.CartMain>
      <ModalShopping
        modalOpen={ modalOpen }
        funcModalOpen={ setModalOpen }
      />
    </S.Container>

  );
}
