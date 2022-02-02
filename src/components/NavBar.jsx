import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import * as S from '../styles/NavBarCSS';
import { changePasswordAction } from '../redux/actions';

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storage = useSelector((state) => state);
  const [count, setCount] = useState(0);

  function logOut() {
    console.log('aqui');
    dispatch(changePasswordAction({}));
    navigate('/login');
  }

  useEffect(() => {
    setCount((storage.shoppingReducer.listCart).length);
  }, [storage]);

  return (
    <S.NavBar className="shadow-md">
      <Link to="/">
        <S.LogoPoke src="./logo.png" alt="logo" />
      </Link>
      <S.ContainerIcons>
        <S.CartIcon to="/cart">
          <S.Icon1 />
          <S.Count><S.TextCount>{ count }</S.TextCount></S.Count>
        </S.CartIcon>
        <Link to="/profile">
          <S.Icon2 />
        </Link>
        <button
          type="button"
          aria-label="Log Out"
          onClick={ logOut }
        >
          <S.Icon3 />
        </button>
      </S.ContainerIcons>
    </S.NavBar>
  );
}
