import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { fetchRegisterUser } from '../service/authAPi';

export default function useLogin() {
  const navigate = useNavigate();
  const storage = useSelector((state) => state);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const MIN_LENGTH = 6;
  const MAX_LENGTH = 8;
  const schema = yup.object({
    fullName: yup
      .string()
      .required('O nome completo é obrigatório.')
      .min(MIN_LENGTH, 'O nome deve ter no mínimo 6 caracteres!'),
    sex: yup
      .string(),
    email: yup
      .string()
      .email('O email deve ser válido.')
      .required('O email é obrigatório.'),
    origin: yup
      .string(),
    position: yup
      .string()
      .required('A função é obrigatória.'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(MIN_LENGTH, 'A senha deve ter no mínimo 6 caracteres!')
      .max(MAX_LENGTH, 'A senha deve ter no máximo 8 caracteres!'),
  });

  useEffect(() => {
    const { res } = storage.reducerUser;
    if (Object.keys(res).length > 0) {
      navigate('/');
    }
  }, [navigate, storage.reducerUser]);

  async function saveUser(values) {
    setLoading(true);
    let image = './avatar1.png';
    if (values.sex === 'Feminino') {
      image = '/avatar2.jpg';
    }
    const res = await fetchRegisterUser({ ...values, image });
    setLoading(false);
    const { message } = res;
    console.log(message);
    if (message.includes('error')) {
      setShow(true);
    } else {
      navigate('/login');
    }
  }

  const formik = useFormik({
    initialValues: {
      fullName: '',
      sex: 'Feminino',
      email: '',
      origin: 'Japão',
      position: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log('SUBMIT', values);
      saveUser(values);
    },
  });

  return { loading, show, setShow, formik };
}
