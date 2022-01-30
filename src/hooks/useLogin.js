import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';

export default function useLogin() {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

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
  });

  function authUser(values) {
    setLoading(true);
    dispatch({
      type: 'CALL_SAGA_AUTH',
      body: values,
    });

    const { message } = storage.reducerUser.res;
    setLoading(false);
    if (message.includes('error')) {
      setShow(true);
    } else {
      navigate('/');
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log('SUBMIT', values);
      authUser(values);
    },
  });

  return { loading, show, setShow, formik };
}
