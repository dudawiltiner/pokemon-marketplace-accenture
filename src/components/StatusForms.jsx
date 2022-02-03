import PropTypes from 'prop-types';
import React from 'react';
import { Message } from '../styles/StatusFormsCSS';

export default function StatusForms({ value, error, sucess }) {
  return (
    <div>
      {error ? (
        <Message color="text-red-600">{error}</Message>
      ) : value !== '' && (
        <Message color="text-green-700">{sucess}</Message>
      )}
    </div>
  );
}

StatusForms.propTypes = {
  error: PropTypes.string,
  sucess: PropTypes.string,
}.isRequired;
