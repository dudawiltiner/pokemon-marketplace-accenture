import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import useImage from './useImage';

export default function useLogin() {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { res } = storage.reducerUser;

  const { image } = useImage();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const MIN_LENGTH = 6;
  const schema = yup.object({
    fullName: yup
      .string()
      .required('Full name is required.')
      .min(MIN_LENGTH, 'The name must be at least 6 characters long!'),
    sex: yup
      .string(),
    origin: yup
      .string(),
    position: yup
      .string()
      .required('Role is mandatory.'),
  });

  useEffect(() => {
    if (res.message) {
      setShow(true);
    }
  }, [res.message, storage.reducerUser]);

  async function saveUser(values) {
    const TIME = 1000;
    setLoading(true);
    await setTimeout(() => {
      dispatch({
        type: 'CALL_SAGA_UPDATE',
        body: { ...values, image, email: res.email },
      });
      setLoading(false);
    }, TIME);
  }

  const formik = useFormik({
    initialValues: {
      fullName: res.fullName,
      sex: res.sex,
      origin: res.origin,
      position: res.position,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log('SUBMIT', values);
      saveUser(values);
    },
  });

  return { navigate, loading, show, setShow, formik };
}
