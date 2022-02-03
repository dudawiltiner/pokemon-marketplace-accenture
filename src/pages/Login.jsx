import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FormsLogin from '../components/FormsLogin';
import { Bg, Main } from '../styles/FormsGeralCSS';

export default function Login() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Main>
      <FormsLogin />
      <Bg
        data-aos="fade-left"
        src="./bg-pikachu.png"
        alt="login with pokemon"
      />
    </Main>
  );
}
