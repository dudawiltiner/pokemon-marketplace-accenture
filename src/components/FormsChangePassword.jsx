import React from 'react';
import FormsLogin from './FormsLogin';

export default function FormsChangePassword() {
  return (
    <FormsLogin
      routeButton="/login"
      textButton="Voltar para login!"
      title="Mude a senha"
    />
  );
}
