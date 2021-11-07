import React, { useState } from 'react';

import { numInputsLimit, numInputsLimitValidation } from '../utils';

import OtpInput from '../../lib';
import Input from './atoms/Input';
import Checkbox from './atoms/Checkbox';

const Demo = () => {
  const [value, setValue] = useState('');
  const [config, setConfig] = useState({
    numInputs: 6,
    otpValue: '',
    separator: '-',
    regex: /^([0-9]{0,})$/,
    isDisabled: false,
    isTypeNumber: false,
    hasErrored: false,
  });

  const updateConfig = ({ target }) => {
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if (target.name === 'numInputs') {
      value = numInputsLimitValidation(target.value);
    }

    setConfig({ ...config, [target.name]: value });
  };

  return (
    <div className="demo">
      <div className="demo__config-view">
        <div>
          <Input
            type="number"
            name="numInputs"
            value={config.numInputs}
            onChange={updateConfig}
            labelText="number of inputs"
            min={1}
            max={numInputsLimit}
          />
          <Input
            type="text"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            labelText="value"
            maxLength={parseInt(config.numInputs) || 0}
          />
          <Input
            type="text"
            name="separator"
            value={config.separator}
            onChange={updateConfig}
            labelText="separator"
            maxLength={1}
          />
          <Input type="text" name="regex" value={config.regex} onChange={updateConfig} labelText="onChange regex" />
          <Checkbox name="isDisabled" checked={config.isDisabled} onChange={updateConfig} labelText="isDisabled" />
          <Checkbox
            name="isTypeNumber"
            checked={config.isTypeNumber}
            onChange={updateConfig}
            labelText="isTypeNumber"
          />
          <Checkbox name="hasErrored" checked={config.hasErrored} onChange={updateConfig} labelText="hasErrored" />
        </div>

        <a className="link" href="https://github.com/coded-bear/react-otpinput" target="_blank">
          Documentation and source
        </a>
      </div>

      <div className="demo__content">
        <OtpInput
          value={value}
          onChange={setValue}
          numInputs={Number(config.numInputs)}
          onChangeRegex={config.regex}
          autoFocus
          separator={<span>{config.separator}</span>}
          isTypeNumber={config.isTypeNumber}
          hasErrored={config.hasErrored}
          inputProps={{ className: 'otp-input__input', disabled: config.isDisabled }}
        />
      </div>
    </div>
  );
};

export default Demo;
