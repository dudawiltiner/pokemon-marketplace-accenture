import React from 'react';
import { countryList } from '../data/countries';
// import { fetchRegisterUser } from '../service/authAPi';
import { Input, Label, Subtitle } from '../styles/FormsGeralCSS';
import * as S from '../styles/LoginCSS';
import { ButtonLo, Choose, Select } from '../styles/RegisterCSS';
import MainPartForms from './MainPartForms';

export default function FormsRegister() {
  return (
    <MainPartForms title="Faça o cadastro" space="space-x-6">
      <Label htmlFor="name">
        <Subtitle>Nome</Subtitle>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Digite o seu nome"
        />
      </Label>

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

      <Choose>
        <Label
          htmlFor="country"
        >
          Origem
          <Select
            id="country"
            name="country"
            autoComplete="country"
          >
            {countryList.map((item, idx) => <option key={ idx }>{item}</option>)}
          </Select>
        </Label>

        <Label
          htmlFor="country"
        >
          Sexo
          <Select
            id="sex"
            name="sex"
            autoComplete="sex"
          >
            <option>Feminino</option>
            <option>Masculino</option>
            <option>-</option>
          </Select>
        </Label>
      </Choose>

      <Label htmlFor="position">
        <Subtitle>Função</Subtitle>
        <Input
          id="position"
          name="position"
          type="text"
          placeholder="Digite a sua função"
        />
      </Label>

      <S.ButtonIn margint="mt-6" type="button">GO!</S.ButtonIn>

      <ButtonLo to="/login">Voltar para login</ButtonLo>

    </MainPartForms>
  );
}
