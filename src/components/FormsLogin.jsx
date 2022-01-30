/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Input, Label, Subtitle } from '../styles/FormsGeralCSS';
import * as S from '../styles/LoginCSS';
import MainPartForms from './MainPartForms';
import StatusForms from './StatusForms';

export default function FormsLogin() {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();

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

  async function authUser(values) {
    dispatch({ type: 'CALL_SAGA_AUTH',
      body: {
        email: values.email,
        password: values.password,
      } });

    console.log(storage.reducerUser.res);
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
    onReset: (values) => {
      console.log('RESET', values);
      values.email = '';
      values.password = '';
    },
  });

  // email: 'string@email',
  //       password: 'string',
  return (
    <MainPartForms
      title="Faça o login"
      space="space-y-14"
      funcSubmit={ formik.handleSubmit }
      funcReset={ formik.handleReset }
    >
      <Label htmlFor="email">
        <Subtitle>E-mail</Subtitle>
        <Input
          id="email"
          name="email"
          type="email"
          value={ formik.values.email }
          onChange={ formik.handleChange }
          placeholder="Digite o seu e-mail"
        />
      </Label>
      <StatusForms
        value={ formik.values.email }
        error={ formik.errors.email }
        sucess="O email é válido"
      />

      <Label htmlFor="password">
        <Subtitle>Senha</Subtitle>
        <Input
          id="password"
          name="password"
          type="password"
          value={ formik.values.password }
          onChange={ formik.handleChange }
          placeholder="Digite a sua senha"
        />
      </Label>
      <StatusForms
        value={ formik.values.password }
        error={ formik.errors.password }
        sucess="A senha é válida"
      />

      <S.ChangePassword to="/changepassword" type="button">
        Esqueceu a senha?
      </S.ChangePassword>

      <S.ButtonIn type="submit">GO!</S.ButtonIn>

      <S.Register margint="mt-32">
        <S.QuestionRe>Ainda não é um treinador de Pokémon?</S.QuestionRe>
        <S.ButtonRe to="/register">Cadastre-se agora</S.ButtonRe>
      </S.Register>

      <div className="absolute px-4 py-3 text-red-900 bg-red-100 border-t-4 border-red-500 rounded-b shadow-md bottom-6 right-20" role="alert">
        <div className="flex">
          <div className="py-1"><svg className="w-6 h-6 mr-4 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
          <div>
            <p className="font-bold">Erro</p>
            <p className="text-md">Você ainda não está cadastro(a).</p>
          </div>
        </div>
      </div>
    </MainPartForms>
  );
}
