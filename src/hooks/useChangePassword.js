import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { fetchChangePassword } from '../service/authAPi';
import { changePasswordAction } from '../redux/actions';

export default function useLogin() {
  const dispatch = useDispatch();
  const storage = useSelector((state) => state);
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'A senha não confere.')
      .required('É necessário confirmar a senha.'),
  });

  useEffect(() => {
    const { res } = storage.reducerUser;
    if (Object.keys(res).length > 0) {
      navigate('/');
    }
  }, [navigate, storage.reducerUser]);

  async function changePassword(values) {
    setLoading(true);
    dispatch(changePasswordAction({}));
    const res = await fetchChangePassword({
      email: values.email,
      password: values.password,
    });

    const { message } = res;
    console.log(message);
    setLoading(false);
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
      changePassword(values);
    },
  });

  return { loading, show, setShow, formik };
}
