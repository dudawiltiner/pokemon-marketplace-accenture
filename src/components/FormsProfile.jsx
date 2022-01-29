/* eslint-disable react/jsx-max-depth */
import React from 'react';
import ImageProvider from '../context/ImageContext';
import { countryList } from '../data/countries';
import * as S from '../styles/ProfileCSS';
import MainFormsProfile from './MainFormsProfile';

export default function FormsProfile() {
  return (
    <ImageProvider>
      <MainFormsProfile>
        <S.Title>Meu Perfil</S.Title>
        <S.Forms>
          <S.Label htmlFor="name">
            <S.Subtitle>Nome completo</S.Subtitle>
            <S.Input
              id="name"
              name="name"
              type="text"
              placeholder="Digite o seu nome"
            />
          </S.Label>

          <S.Label
            htmlFor="sex"
          >
            <S.Subtitle>Sexo</S.Subtitle>
            <S.Select
              id="sex"
              name="sex"
              autoComplete="sex"
            >
              <option>Feminino</option>
              <option>Masculino</option>
              <option>-</option>
            </S.Select>
          </S.Label>

          <S.Label
            htmlFor="country"
          >
            <S.Subtitle>Origem</S.Subtitle>
            <S.Select
              id="country"
              name="country"
              autoComplete="country"
            >
              {countryList.map((item, idx) => <option key={ idx }>{item}</option>)}
            </S.Select>
          </S.Label>

          <S.Label htmlFor="position">
            <S.Subtitle>Nome completo</S.Subtitle>
            <S.Input
              id="position"
              name="position"
              type="text"
              placeholder="Digite a sua posição"
            />
          </S.Label>

          <S.Buttons>
            <S.Button
              bg="bg-neutral-700"
              text="text-white"
            >
              Salvar
            </S.Button>

            <S.Button
              bd="border-neutral-300"
              text="text-gray-400"
            >
              Cancelar
            </S.Button>
          </S.Buttons>
        </S.Forms>
      </MainFormsProfile>
    </ImageProvider>
  );
}
