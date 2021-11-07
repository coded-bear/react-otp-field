import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ labelText, ...attributes }) => (
  <label className="checkbox">
    <p className="checkbox__label-text">{labelText}</p>

    <input type="checkbox" {...attributes} />

    <span className="checkmark"></span>
  </label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
};

export default Checkbox;
