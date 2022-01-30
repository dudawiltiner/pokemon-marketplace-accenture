import PropTypes from 'prop-types';
import React from 'react';
import { Container, Message } from '../styles/StatusFormsCSS';

export default function StatusForms({ value, error, sucess }) {
  return (
    <Container>
      {error ? (
        <Message color="text-red-600">{error}</Message>
      ) : value !== '' && (
        <Message color="text-green-700">{sucess}</Message>
      )}
    </Container>
  );
}

StatusForms.propTypes = {
  error: PropTypes.string,
  sucess: PropTypes.string,
}.isRequired;
