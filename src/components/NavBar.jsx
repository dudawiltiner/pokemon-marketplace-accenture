import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import * as S from '../styles/NavBarCSS';
import { changePasswordAction } from '../redux/actions';

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOut() {
    console.log('aqui');
    dispatch(changePasswordAction({}));
    navigate('/login');
  }

  return (
    <S.NavBar>
      <Link to="/">
        <S.LogoPoke src="./logo.png" alt="logo" />
      </Link>
      <S.ContainerIcons>
        <Link to="/cart">
          <S.Icon1 />
        </Link>
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
