import React from 'react';
import { Input, Label, Subtitle } from '../styles/FormsGeralCSS';
import * as S from '../styles/LoginCSS';
import { ButtonLo } from '../styles/RegisterCSS';
import MainPartForms from './MainPartForms';

export default function FormsChangePassword() {
  return (
    <MainPartForms title="Mude a senha" space="space-y-14">
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

      <Label htmlFor="password">
        <Subtitle>Confirmar Senha</Subtitle>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Digite novamente a sua senha"
        />
      </Label>

      <S.ButtonIn type="button">GO!</S.ButtonIn>

      <ButtonLo to="/login">Voltar para login</ButtonLo>

      <S.Register margint="mt-10">
        <S.QuestionRe>Ainda não é um treinador de Pokémon?</S.QuestionRe>
        <S.ButtonRe to="/register">Cadastre-se agora</S.ButtonRe>
      </S.Register>
    </MainPartForms>
  );
}
