import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import useVerifyAuth from './useVerifyAuth';

export default function useShoppingCart() {
  useVerifyAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [list, setList] = useState([]);
  const storage = useSelector((state) => state);

  useEffect(() => {
    setList([...storage.shoppingReducer.listCart]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return { modalOpen, setModalOpen, list };
}
