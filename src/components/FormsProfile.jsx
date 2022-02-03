import React from 'react';
import { countryList } from '../data/countries';
import * as S from '../styles/ProfileCSS';
import MainFormsProfile from './MainFormsProfile';
import useProfile from '../hooks/useProfile';
import { LoadingIcon } from '../styles/FormsGeralCSS';
import Alert from './Alert';
import StatusForms from './StatusForms';

export default function FormsProfile() {
  const { navigate, loading, show, setShow, formik } = useProfile();

  return (
    <MainFormsProfile>
      <S.Title>Meu Perfil</S.Title>
      <S.Forms onSubmit={ formik.handleSubmit }>
        <S.Label htmlFor="fullName">
          <S.Subtitle>Nome completo</S.Subtitle>
          <S.Input
            id="fullName"
            name="fullName"
            type="text"
            value={ formik.values.fullName }
            onChange={ formik.handleChange }
            placeholder="Digite o seu nome"
          />
          <StatusForms
            value={ formik.values.fullName }
            error={ formik.errors.fullName }
            sucess="O nome completo é válido."
          />
        </S.Label>

        <S.Label
          htmlFor="sex"
        >
          <S.Subtitle>Sexo</S.Subtitle>
          <S.Select
            id="sex"
            name="sex"
            defaultValue={ formik.values.sex }
            onChange={ formik.handleChange }
            autoComplete="sex"
          >
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outro">Outro</option>
          </S.Select>
        </S.Label>

        <S.Label
          htmlFor="origin"
        >
          <S.Subtitle>Origem</S.Subtitle>
          <S.Select
            id="origin"
            name="origin"
            defaultValue={ formik.values.origin }
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
          </S.Select>
        </S.Label>

        <S.Label htmlFor="position">
          <S.Subtitle>Função</S.Subtitle>
          <S.Input
            id="position"
            name="position"
            type="text"
            value={ formik.values.position }
            onChange={ formik.handleChange }
            placeholder="Digite a sua posição"
          />
          <StatusForms
            value={ formik.values.position }
            error={ formik.errors.position }
            sucess="A função é válida."
          />
        </S.Label>

        <S.Buttons>
          <S.Button
            bg="bg-neutral-700"
            text="text-white"
            type="submit"
            hover="hover:bg-blue-700"
          >
            {loading && <LoadingIcon />}
            <p>Salvar</p>
          </S.Button>

          <S.Button
            onClick={ () => navigate('/') }
            bd="border-neutral-300"
            text="text-gray-400"
            hover="hover:bg-red-600 hover:text-white"
          >
            Cancelar
          </S.Button>
        </S.Buttons>

        {show && <Alert
          alertDescription="A modificações não foram salvas."
          close={ setShow }
        />}
      </S.Forms>
    </MainFormsProfile>

  );
}
