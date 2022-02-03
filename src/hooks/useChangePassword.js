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
      .email('Email must be valid.')
      .required('Email is mandatory.'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(MIN_LENGTH, 'Password must be at least 6 characters long!')
      .max(MAX_LENGTH, 'Password must be a maximum of 8 characters!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'The password does not match.')
      .required('Password must be confirmed.'),
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
