import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { fetchChangePassword } from '../service/authAPi';

export default function useLogin() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const MIN_LENGTH = 6;
  const MAX_LENGTH = 8;
  const schema = yup.object({
    email: yup
      .string()
      .email('O email deve ser válido.')
      .required('O email é obrigatório.'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(MIN_LENGTH, 'A senha deve ter no mínimo 6 caracteres!')
      .max(MAX_LENGTH, 'A senha deve ter no máximo 8 caracteres!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'A senha não confere.')
      .required('É necessário confirmar a senha.'),
  });

  async function authUser(values) {
    const res = await fetchChangePassword({
      email: values.email,
      password: values.password,
    });

    const { message } = res;
    console.log(message);

    if (message.includes('error')) {
      console.log('aqui');
      setShow(true);
    } else {
      navigate('/login');
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log('SUBMIT', values);
      authUser(values);
    },
  });

  return { show, setShow, formik };
}
