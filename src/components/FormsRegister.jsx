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
      title="Register"
      space="space-x-6"
      funcSubmit={ formik.handleSubmit }
    >
      <Label htmlFor="fullName">
        <Subtitle>Name</Subtitle>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          value={ formik.values.fullName }
          onChange={ formik.handleChange }
          placeholder="Enter your name"
        />
      </Label>
      <StatusForms
        value={ formik.values.fullName }
        error={ formik.errors.fullName }
        sucess="Full name is valid."
      />

      <Label htmlFor="email">
        <Subtitle>E-mail</Subtitle>
        <Input
          id="email"
          name="email"
          type="email"
          value={ formik.values.email }
          onChange={ formik.handleChange }
          placeholder="Enter your email"
        />
      </Label>
      <StatusForms
        value={ formik.values.email }
        error={ formik.errors.email }
        sucess="The email is valid."
      />

      <Label htmlFor="password">
        <Subtitle>Password</Subtitle>
        <Input
          id="password"
          name="password"
          type="password"
          value={ formik.values.password }
          onChange={ formik.handleChange }
          placeholder="Enter your password"
        />
      </Label>
      <StatusForms
        value={ formik.values.password }
        error={ formik.errors.password }
        sucess="Password is valid."
      />

      <Choose>
        <Label
          htmlFor="origin"
        >
          Origin
          <Select
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
          </Select>
        </Label>

        <Label
          htmlFor="country"
        >
          Gender
          <Select
            id="sex"
            name="sex"
            defaultValue={ formik.values.sex }
            onChange={ formik.handleChange }
            autoComplete="sex"
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="-">Other</option>
          </Select>
        </Label>
      </Choose>

      <Label htmlFor="position">
        <Subtitle>Role</Subtitle>
        <Input
          id="position"
          name="position"
          value={ formik.values.position }
          onChange={ formik.handleChange }
          type="text"
          placeholder="Enter your role"
        />
      </Label>
      <StatusForms
        value={ formik.values.position }
        error={ formik.errors.position }
        sucess="The role is valid."
      />

      <S.ButtonIn margint="mt-12" type="submit">
        {loading && <LoadingIcon />}
        <p> GO!</p>
      </S.ButtonIn>

      <ButtonLo to="/login">Back to login</ButtonLo>

      {show && <Alert
        alertDescription="E-mail already registered."
        close={ setShow }
      />}
    </MainPartForms>
  );
}
