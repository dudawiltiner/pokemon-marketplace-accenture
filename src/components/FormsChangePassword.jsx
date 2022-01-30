import React from 'react';
import { Input, Label, Subtitle } from '../styles/FormsGeralCSS';
import * as S from '../styles/LoginCSS';
import { ButtonLo } from '../styles/RegisterCSS';
import MainPartForms from './MainPartForms';
import useChangePassword from '../hooks/useRegister';
import StatusForms from './StatusForms';
import Alert from './Alert';

export default function FormsChangePassword() {
  const { show, setShow, formik } = useChangePassword();

  return (
    <MainPartForms
      title="Mude a senha"
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

      <Label htmlFor="confirmPassword">
        <Subtitle>Confirmar Senha</Subtitle>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={ formik.values.confirmPassword }
          onChange={ formik.handleChange }
          placeholder="Digite novamente a sua senha"
        />
      </Label>
      <StatusForms
        value={ formik.values.confirmPassword }
        error={ formik.errors.confirmPassword }
        sucess="A senha confere."
      />

      <S.ButtonIn margint="mt-12" type="submit">GO!</S.ButtonIn>

      <ButtonLo to="/login">Voltar para login</ButtonLo>

      <S.Register margint="mt-10">
        <S.QuestionRe>Ainda não é um treinador de Pokémon?</S.QuestionRe>
        <S.ButtonRe to="/register">Cadastre-se agora</S.ButtonRe>
      </S.Register>

      {show && <Alert
        alertDescription="Email ainda não cadastrado."
        close={ setShow }
      />}
    </MainPartForms>
  );
}
