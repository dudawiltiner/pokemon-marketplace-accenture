import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Bg, Main } from '../styles/FormsGeralCSS';
import FormsRegister from '../components/FormsRegister';

export default function Register() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Main>
      <FormsRegister />
      <Bg
        data-aos="fade-left"
        src="./bg-squirtle.png"
        alt="registro com pokemon"
      />
    </Main>
  );
}
