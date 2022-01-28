import React from 'react';
import { Input, Label, Subtitle } from '../styles/FormsGeralCSS';
import * as S from '../styles/LoginCSS';
import MainPartForms from './MainPartForms';

export default function FormsLogin() {
  return (
    <MainPartForms title="Faça o login" space="space-y-14">
      <Label htmlFor="email">
        <Subtitle>E-mail</Subtitle>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Digite o seu e-mail"
        />
      </Label>

      <Label htmlFor="password">
        <Subtitle>Senha</Subtitle>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Digite a sua senha"
        />
      </Label>

      <S.ChangePassword to="/changepassword" type="button">
        Esqueceu a senha?
      </S.ChangePassword>

      <S.ButtonIn type="button">GO!</S.ButtonIn>

      <S.Register marginT="mt-32">
        <S.QuestionRe>Ainda não é um treinador de Pokémon?</S.QuestionRe>
        <S.ButtonRe to="/register">Cadastre-se agora</S.ButtonRe>
      </S.Register>
    </MainPartForms>
  );
}
