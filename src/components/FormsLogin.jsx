import React from 'react';
import { Input, Label, LoadingIcon, Subtitle } from '../styles/FormsGeralCSS';
import * as S from '../styles/LoginCSS';
import MainPartForms from './MainPartForms';
import StatusForms from './StatusForms';
import Alert from './Alert';
import useLogin from '../hooks/useLogin';

export default function FormsLogin() {
  const { loading, show, setShow, formik } = useLogin();
  return (
    <MainPartForms
      title="Faça o login"
      space="space-y-14"
      funcSubmit={ formik.handleSubmit }
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
        sucess="O email é válido."
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
        sucess="A senha é válida."
      />

      <S.ChangePassword to="/changepassword" type="button">
        Esqueceu a senha?
      </S.ChangePassword>

      <S.ButtonIn margint="mt-6" type="submit">
        {loading && <LoadingIcon data-aos="zoom-in" />}
        <p> GO!</p>
      </S.ButtonIn>

      <S.Register margint="mt-32">
        <S.QuestionRe>Ainda não é um treinador de Pokémon?</S.QuestionRe>
        <S.ButtonRe to="/register">Cadastre-se agora</S.ButtonRe>
      </S.Register>

      {show && <Alert
        alertDescription="Senha e/ou email incorretos."
        close={ setShow }
      />}
    </MainPartForms>
  );
}
