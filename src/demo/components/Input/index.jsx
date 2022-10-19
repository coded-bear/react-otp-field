import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Input = ({ labelText, ...props }) => (
    <label className="input">
        <p className="input__label-text">{labelText}</p>

        <input {...props} />
    </label>
);

Input.propTypes = {
    labelText: PropTypes.string,
};

export default Input;
