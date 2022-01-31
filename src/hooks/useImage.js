import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

export default function useImage() {
  const context = useContext(ImageContext);

  const { show, setShow, image, setImage } = context;
  return { show, setShow, image, setImage };
}
