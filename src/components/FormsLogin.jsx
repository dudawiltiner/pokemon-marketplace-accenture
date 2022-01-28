import PropTypes from 'prop-types';
import React from 'react';
import * as S from '../styles/LoginCSS';
import MainPartForms from './MainPartForms';

export default function FormsLogin({ routeButton, textButton, title }) {
  return (
    <MainPartForms title={ title }>
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

      <S.ChangePassword to={ routeButton } type="button">
        {textButton}
      </S.ChangePassword>

      <S.ButtonIn type="button">GO!</S.ButtonIn>

      <S.Register>
        <p className="text-lg text-gray-500">Ainda não é um treinador de Pokémon?</p>
        <S.ButtonRe>Cadastre-se agora</S.ButtonRe>
      </S.Register>
    </MainPartForms>
  );
}

FormsLogin.propTypes = {
  routeButton: PropTypes.string,
  textButton: PropTypes.string,
  title: PropTypes.string,
}.required;
