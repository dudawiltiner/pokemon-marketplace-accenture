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
      title="Login account"
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
          placeholder="Enter your email"
        />
      </Label>
      <StatusForms
        value={ formik.values.email }
        error={ formik.errors.email }
        sucess="The email is valid."
      />

      <Label htmlFor="password">
        <Subtitle>Password</Subtitle>
        <Input
          id="password"
          name="password"
          type="password"
          value={ formik.values.password }
          onChange={ formik.handleChange }
          placeholder="Enter your password"
        />
      </Label>
      <StatusForms
        value={ formik.values.password }
        error={ formik.errors.password }
        sucess="The password is valid."
      />

      <S.ChangePassword to="/changepassword" type="button">
        Forgot password?
      </S.ChangePassword>

      <S.ButtonIn margint="mt-6" type="submit">
        {loading && <LoadingIcon />}
        <p> GO!</p>
      </S.ButtonIn>

      <S.Register margint="mt-32">
        <S.QuestionRe>Not yet a Pokemon trainer?</S.QuestionRe>
        <S.ButtonRe to="/register">Register now</S.ButtonRe>
      </S.Register>

      {show && <Alert
        alertDescription="Incorrect password and/or email."
        close={ setShow }
      />}
    </MainPartForms>
  );
}
