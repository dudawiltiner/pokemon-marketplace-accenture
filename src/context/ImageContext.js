import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export default function ImageProvider({ children }) {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('/avatar1.png');

  return (
    <ImageContext.Provider value={ { show, setShow, image, setImage } }>
      {children}
    </ImageContext.Provider>
  );
}

ImageProvider.propTypes = {
  children: PropTypes.html,
}.required;
