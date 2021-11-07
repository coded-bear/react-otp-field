import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ labelText, ...attributes }) => (
  <label className="input">
    <p className="input__label-text">{labelText}</p>

    <input {...attributes} />
  </label>
);

Input.propTypes = {
  labelText: PropTypes.string,
};

export default Input;
