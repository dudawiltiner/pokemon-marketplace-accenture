import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { fetchRegisterUser } from '../service/authAPi';

export default function useLogin() {
  const navigate = useNavigate();

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
      .string()
      .required('O sexo é obrigatório'),
    email: yup
      .string()
      .email('O email deve ser válido.')
      .required('O email é obrigatório.'),
    origin: yup
      .string()
      .required('A origem é obrigatória.'),
    position: yup
      .string()
      .required('A função é obrigatória.'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(MIN_LENGTH, 'A senha deve ter no mínimo 6 caracteres!')
      .max(MAX_LENGTH, 'A senha deve ter no máximo 8 caracteres!'),
  });

  async function saveUser(values) {
    setLoading(true);
    let image = './avatar1.png';
    if (values.sex === 'Feminino') {
      image = '/avatar.jpg';
    }
    const res = await fetchRegisterUser({ ...values, image });
    setLoading(true);
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
      sex: '',
      email: '',
      origin: '',
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
