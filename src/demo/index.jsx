import React, { useState } from 'react';
import { render } from 'react-dom';

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
        inputProps={{ className: 'otp-input__input' }}
      />
    </div>
  );
};

render(<Demo />, document.getElementById('root'));
