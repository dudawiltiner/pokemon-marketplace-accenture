import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FormsChangePassword from '../components/FormsChangePassword';
import { Bg, Main } from '../styles/LoginCSS';

export default function ChangePassword() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Main>
      <FormsChangePassword />
      <Bg
        data-aos="fade-left"
        src="./bg-bulbasaur.png"
        alt="login com pokemon"
      />
    </Main>
  );
}
