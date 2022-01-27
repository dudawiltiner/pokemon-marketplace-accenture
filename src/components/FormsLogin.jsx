import React from 'react';
import * as S from '../styles/LoginCSS';

export default function FormsLogin() {
  return (
    <S.Login>
      <S.ContentLogin>
        <S.Logo src="./logo.png" alt="logo" />
        <S.Title>Faça o login</S.Title>
        <S.FormsLogin>
          <S.Label htmlFor="email">
            <S.Subtitle>E-mail</S.Subtitle>
            <S.Input
              id="email"
              name="email"
              type="email"
              placeHolder="Digite o seu e-mail"
            />
          </S.Label>
          <S.Label htmlFor="password">
            <S.Subtitle>Senha</S.Subtitle>
            <S.Input
              id="password"
              name="password"
              type="password"
              placeHolder="Digite a sua senha"
            />
          </S.Label>
          <S.ChangePassword type="button">
            <p className="text-center pl-14 w-96">Esqueceu a sua senha?</p>
          </S.ChangePassword>
          <S.ButtonIn type="button">GO!</S.ButtonIn>
          <S.Register>
            <p className="text-lg text-gray-500">Ainda não é um treinador de Pokémon?</p>
            <S.ButtonRe>Cadastre-se agora</S.ButtonRe>
          </S.Register>
        </S.FormsLogin>
      </S.ContentLogin>
    </S.Login>
  );
}
