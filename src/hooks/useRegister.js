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
      .required('Full name is required.')
      .min(MIN_LENGTH, 'The name must be at least 6 characters long!'),
    sex: yup
      .string(),
    email: yup
      .string()
      .email('Email must be valid.')
      .required('Email is mandatory.'),
    origin: yup
      .string(),
    position: yup
      .string()
      .required('Role is mandatory.'),
    password: yup
      .string()
      .required('Password is mandatory')
      .min(MIN_LENGTH, 'Password must be at least 6 characters long!')
      .max(MAX_LENGTH, 'Password must be a maximum of 8 characters!'),
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
    if (values.sex === 'Female') {
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
      sex: 'Female',
      email: '',
      origin: 'Japan',
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
