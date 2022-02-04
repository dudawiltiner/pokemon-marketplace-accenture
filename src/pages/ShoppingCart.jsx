/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import * as S from '../styles/ShoppingCartCSS';
import 'aos/dist/aos.css';
import NavBar from '../components/NavBar';
import CartInfoBar from '../components/CartInfoBar';
import CartProductInfo from '../components/CartProductInfo';
import CartTotal from '../components/CartTotal';
import BackAndBuyButtonsContainer from '../components/BackHomeAndBuyButtons';
import ModalShopping from '../components/ModalShopping';
// eslint-disable-next-line max-len

// import useVerifyAuth from '../hooks/useVerifyAuth';
import NoPokemonsCart from '../components/NoPokemonsCart';

export default function ShoppingCart() {
  // useVerifyAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [list, setList] = useState([]);
  const storage = useSelector((state) => state);

  useEffect(() => {
    setList([...storage.shoppingReducer.listCart]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

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
