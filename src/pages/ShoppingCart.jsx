import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../styles/ShoppingCartCSS';

import NavBar from '../components/NavBar';
import CartInfoBar from '../components/CartInfoBar';
import CartProductInfo from '../components/CartProductInfo';
import CartTotal from '../components/CartTotal';
import BackAndBuyButtonsContainer from '../components/BackHomeAndBuyButtons';

// import useVerifyAuth from '../hooks/useVerifyAuth';

export default function ShoppingCart() {
  // useVerifyAuth();
  // const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const storage = useSelector((state) => state);

  useEffect(() => {
    console.log(storage.shoppingReducer.listCart);
    setList([...storage.shoppingReducer.listCart]);
  }, [storage]);

  console.log(list);
  console.log(total);
  return (
    <S.Container>
      <NavBar />
      <S.CartMain>
        <CartInfoBar />
        {
          list
          && list.map((item, index) => (
            <CartProductInfo
              valueTotal={ total }
              total={ setTotal }
              key={ index }
              pokemonBought={ item }
            />
          ))
        }
        <CartTotal />
        <BackAndBuyButtonsContainer />

      </S.CartMain>

    </S.Container>

  );
}
