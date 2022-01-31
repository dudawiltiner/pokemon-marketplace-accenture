import Aos from 'aos';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function useVerifyAuth() {
  const navigate = useNavigate();
  const storage = useSelector((state) => state);

  useEffect(() => {
    const { res } = storage.reducerUser;

    if (!res.email) {
      navigate('/login');
    }
    Aos.init({ duration: 1000, once: true });
  }, [navigate, storage.reducerUser]);
}
