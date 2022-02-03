import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { changePasswordAction } from '../redux/actions';

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
      .email('Email must be valid.')
      .required('Email is mandatory.'),
    password: yup
      .string()
      .required('Password is mandatory.')
      .min(MIN_LENGTH, 'Password must be at least 6 characters long!')
      .max(MAX_LENGTH, 'Password must be a maximum of 8 characters!'),
  });

  useEffect(() => {
    const { res } = storage.reducerUser;

    if (Object.keys(res).length > 0) {
      console.log('here2');
      if (res.message) {
        console.log('here1');
        setShow(true);
        dispatch(changePasswordAction({}));
      } else {
        navigate('/');
      }
    }
  }, [dispatch, loading, navigate, storage]);

  async function authUser(values) {
    const TIME = 1000;
    setLoading(true);
    await setTimeout(() => {
      dispatch({
        type: 'CALL_SAGA_AUTH',
        body: values,
      });
      setLoading(false);
    }, TIME);
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
