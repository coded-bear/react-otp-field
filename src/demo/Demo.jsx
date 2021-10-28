import React, { useState } from 'react';

import './styles/main.scss';

import OtpInput from '../../lib';

const Demo = () => {
  const [value, setValue] = useState('');

  return (
    <div className="demo">
      <OtpInput
        type="number"
        value={value}
        onChange={setValue}
        numInputs={6}
        onChangeRegex={/^([0-9]{0,})$/}
        autoFocus
        separator={<span>-</span>}
        inputProps={{ className: 'otp-input__input', disabled: false }}
      />
    </div>
  );
};

export default Demo;
