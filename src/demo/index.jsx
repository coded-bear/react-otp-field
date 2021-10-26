import React, { useState } from 'react';
import { render } from 'react-dom';

import OtpInput from '../../lib';

const Demo = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <OtpInput
        type="number"
        value={value}
        onChange={setValue}
        numInputs={6}
        onChangeRegex={/^([0-9]{0,})$/}
        autoFocus
      />
    </div>
  );
};

render(<Demo />, document.getElementById('root'));
