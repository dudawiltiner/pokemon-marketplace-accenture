import React, { useEffect } from 'react';
import Aos from 'aos';
import FormsProfile from '../components/FormsProfile';
import 'aos/dist/aos.css';

export default function Profile() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <FormsProfile />
  );
}
