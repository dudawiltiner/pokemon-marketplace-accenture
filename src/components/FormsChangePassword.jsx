import React from 'react';
import { Input, Label, LoadingIcon, Subtitle } from '../styles/FormsGeralCSS';
import * as S from '../styles/LoginCSS';
import { ButtonLo } from '../styles/RegisterCSS';
import MainPartForms from './MainPartForms';
import useChangePassword from '../hooks/useChangePassword';
import StatusForms from './StatusForms';
import Alert from './Alert';

export default function FormsChangePassword() {
  const { loading, show, setShow, formik } = useChangePassword();

  return (
    <MainPartForms
      title="Change password"
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
        sucess="Email is valid."
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

      <Label htmlFor="confirmPassword">
        <Subtitle>Confirm password</Subtitle>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={ formik.values.confirmPassword }
          onChange={ formik.handleChange }
          placeholder="Re-enter your password"
        />
      </Label>
      <StatusForms
        value={ formik.values.confirmPassword }
        error={ formik.errors.confirmPassword }
        sucess="The password matches."
      />

      <S.ButtonIn margint="mt-12" type="submit">
        {loading && <LoadingIcon />}
        <p> GO!</p>
      </S.ButtonIn>

      <ButtonLo to="/login">Back to login</ButtonLo>

      <S.Register margint="mt-10">
        <S.QuestionRe>Not yet a Pokemon trainer?</S.QuestionRe>
        <S.ButtonRe to="/register">Register now</S.ButtonRe>
      </S.Register>

      {show && <Alert
        alertDescription="Email not yet registered."
        close={ setShow }
      />}
    </MainPartForms>
  );
}
