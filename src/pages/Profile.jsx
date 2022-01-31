import React from 'react';
import FormsProfile from '../components/FormsProfile';
import 'aos/dist/aos.css';
import useVerifyAuth from '../hooks/useVerifyAuth';
import ImageProvider from '../context/ImageContext';

export default function Profile() {
  useVerifyAuth();

  return (
    <ImageProvider>
      <FormsProfile />
    </ImageProvider>
  );
}
