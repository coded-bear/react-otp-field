import React, { useState } from 'react';

import './style.scss';

import OtpField from '../../../lib';
import Input from '../Input';
import Checkbox from '../Checkbox';

const Demo = () => {
    const [value, setValue] = useState('');
    const [config, setConfig] = useState({
        numInputs: 6,
        otpValue: '',
        separator: '-',
        regex: /^([0-9]{0,})$/,
        isDisabled: false,
        isTypeNumber: false,
        hasError: false,
    });

    const updateConfig = ({ target }) => {
        let value = target.type === 'checkbox' ? target.checked : target.value;

        if (target.name === 'numInputs') {
            value = target.value > 30 ? 30 : target.value;
        }

        setConfig({ ...config, [target.name]: value });
    };

    return (
        <div className="demo">
            <div className="demo__config-view">
                <div>
                    <h1 className="h1">react-otp-field</h1>

                    <Input
                        type="number"
                        name="numInputs"
                        value={config.numInputs}
                        onChange={updateConfig}
                        labelText="number of inputs"
                        min={1}
                        max={30}
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
                    <Input
                        type="text"
                        name="regex"
                        value={config.regex}
                        onChange={updateConfig}
                        labelText="onChange regex"
                    />
                    <Checkbox
                        name="isDisabled"
                        checked={config.isDisabled}
                        onChange={updateConfig}
                        labelText="isDisabled"
                    />
                    <Checkbox
                        name="isTypeNumber"
                        checked={config.isTypeNumber}
                        onChange={updateConfig}
                        labelText="isTypeNumber"
                    />
                    <Checkbox
                        name="hasError"
                        checked={config.hasError}
                        onChange={updateConfig}
                        labelText="hasError"
                    />
                </div>

                <a
                    className="link"
                    href="https://github.com/coded-bear/react-otp-field"
                    target="_blank"
                >
                    Documentation and Source
                </a>
            </div>

            <div className="demo__content">
                <OtpField
                    value={value}
                    onChange={setValue}
                    numInputs={Number(config.numInputs)}
                    onChangeRegex={config.regex}
                    autoFocus
                    separator={<span>{config.separator}</span>}
                    isTypeNumber={config.isTypeNumber}
                    hasError={config.hasError}
                    inputProps={{ className: 'otp-field__input', disabled: config.isDisabled }}
                />
            </div>
        </div>
    );
};

export default Demo;
