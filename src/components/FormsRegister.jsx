/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { countryList } from '../data/countries';
import { Input, Label, LoadingIcon, Subtitle } from '../styles/FormsGeralCSS';
import * as S from '../styles/LoginCSS';
import { ButtonLo, Choose, Select } from '../styles/RegisterCSS';
import Alert from './Alert';
import MainPartForms from './MainPartForms';
import StatusForms from './StatusForms';
import useRegister from '../hooks/useRegister';

export default function FormsRegister() {
  const { loading, show, setShow, formik } = useRegister();

  return (
    <MainPartForms
      title="Faça o cadastro"
      space="space-x-6"
      funcSubmit={ formik.handleSubmit }
    >
      <Label htmlFor="fullName">
        <Subtitle>Nome</Subtitle>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          value={ formik.values.fullName }
          onChange={ formik.handleChange }
          placeholder="Digite o seu nome"
        />
      </Label>
      <StatusForms
        value={ formik.values.fullName }
        error={ formik.errors.fullName }
        sucess="O nome completo é válido."
      />

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
        sucess="O nome completo é válido."
      />

      <Choose>
        <div>
          <Label
            htmlFor="origin"
          >
            Origem
            <Select
              id="origin"
              name="origin"
              onChange={ formik.handleChange }
              autoComplete="origin"
            >
              {countryList.map((item, idx) => (
                <option
                  value={ item }
                  key={ idx }
                >
                  {item}
                </option>))}
            </Select>
          </Label>
          <StatusForms
            value={ formik.values.origin }
            error={ formik.errors.origin }
            sucess="origem escolhida."
          />
        </div>

        <div>
          <Label
            htmlFor="country"
          >
            Sexo
            <Select
              id="sex"
              name="sex"
              onChange={ formik.handleChange }
              autoComplete="sex"
            >
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="-">-</option>
            </Select>
          </Label>
          <StatusForms
            value={ formik.values.sex }
            error={ formik.errors.sex }
            sucess="sexo escolhido."
          />
        </div>
      </Choose>

      <Label htmlFor="position">
        <Subtitle>Função</Subtitle>
        <Input
          id="position"
          name="position"
          value={ formik.values.position }
          onChange={ formik.handleChange }
          type="text"
          placeholder="Digite a sua função"
        />
      </Label>
      <StatusForms
        value={ formik.values.position }
        error={ formik.errors.position }
        sucess="A função é válida."
      />

      <S.ButtonIn margint="mt-12" type="submit">
        {loading && <LoadingIcon data-aos="zoom-in" />}
        <p> GO!</p>
      </S.ButtonIn>

      <ButtonLo to="/login">Voltar para login</ButtonLo>

      {show && <Alert
        alertDescription="Email já cadastrado."
        close={ setShow }
      />}
    </MainPartForms>
  );
}
