import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../styles/ShoppingCartCSS';

import NavBar from '../components/NavBar';
import CartInfoBar from '../components/CartInfoBar';
import CartProductInfo from '../components/CartProductInfo';
import CartTotal from '../components/CartTotal';
import BackAndBuyButtonsContainer from '../components/BackHomeAndBuyButtons';
import ModalShopping from '../components/ModalShopping';
// eslint-disable-next-line max-len

import useVerifyAuth from '../hooks/useVerifyAuth';

export default function ShoppingCart() {
  useVerifyAuth();
  const [modalOpen, setModalOpen] = useState(false);

  const [list, setList] = useState([]);

  const storage = useSelector((state) => state);

  useEffect(() => {
    console.log(storage.shoppingReducer.listCart);
    setList([...storage.shoppingReducer.listCart]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);

  console.log(list);
  return (

    <S.Container>
      <NavBar />
      <S.CartMain>
        <CartInfoBar />
        <S.ListProducts>
          {
            list
          && list.map((item, index) => (
            <CartProductInfo
              key={ index }
              pokemonBought={ item }
            />
          ))
          }
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
