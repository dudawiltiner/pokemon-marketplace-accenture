import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const ImageContext = createContext();

export default function ImageProvider({ children }) {
  const [show, setShow] = useState(false);
  const storage = useSelector((state) => state);
  const { res } = storage.reducerUser;
  const [image, setImage] = useState(res.image);

  return (
    <ImageContext.Provider value={ { show, setShow, image, setImage } }>
      {children}
    </ImageContext.Provider>
  );
}

ImageProvider.propTypes = {
  children: PropTypes.html,
}.required;
