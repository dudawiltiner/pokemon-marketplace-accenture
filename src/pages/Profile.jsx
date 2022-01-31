import React from 'react';
import FormsProfile from '../components/FormsProfile';
import 'aos/dist/aos.css';
import useVerifyAuth from '../hooks/useVerifyAuth';
import ImageProvider from '../context/ImageContext';
import NavBar from '../components/NavBar';

export default function Profile() {
  useVerifyAuth();

  return (
    <ImageProvider>
      <NavBar />
      <FormsProfile />
    </ImageProvider>
  );
}
