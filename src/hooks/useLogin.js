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
      .email('O email deve ser válido.')
      .required('O email é obrigatório.'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(MIN_LENGTH, 'A senha deve ter no mínimo 6 caracteres!')
      .max(MAX_LENGTH, 'A senha deve ter no máximo 8 caracteres!'),
  });

  useEffect(() => {
    const { res } = storage.reducerUser;

    if (Object.keys(res).length > 0) {
      console.log('aqui2');
      if (res.message) {
        console.log('aqui1');
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
