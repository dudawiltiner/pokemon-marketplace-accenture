import React from 'react';
import FormsLogin from '../components/FormsLogin';
import { BgLogin, MainLogin } from '../styles/LoginCSS';

export default function Login() {
  return (
    <MainLogin>
      <FormsLogin />
      <BgLogin src="./bg-pikachu.png" alt="login com pokemon" />
    </MainLogin>
  );
}
