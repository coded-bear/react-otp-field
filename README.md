# react-otp-field

[![npm version](https://img.shields.io/npm/v/react-otp-field)](https://www.npmjs.com/package/react-otp-field) [![npm](https://img.shields.io/npm/l/react-otp-field)](https://github.com/coded-bear/react-otp-field/blob/main/LICENSE) [![npm](https://img.shields.io/bundlephobia/minzip/react-otp-field)](https://www.npmjs.com/package/react-otp-field)

Customizable OTP Field component for the web built with React.js

[Live Demo](https://coded-bear.github.io/react-otp-field/)

## Installation

```
npm install --save react-otp-field
```

## Basic usage

```jsx
import React, { useState } from 'react';
import OtpField from 'react-otp-field';

const App = () => {
    const [value, setValue] = useState('');

    return (
        <OtpField
            value={value}
            onChange={setValue}
            numInputs={6}
            onChangeRegex={/^([0-9]{0,})$/}
            autoFocus
            separator={<span>-</span>}
            isTypeNumber
            inputProps={{ className: 'otp-field__input', disabled: false }}
        />
    );
};
```

## API

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default value</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>value</td>
            <td>String</td>
            <td>true</td>
            <td>''</td>
            <td>The value of the OTP Field.</td>
        </tr>
        <tr>
            <td>onChange</td>
            <td>Function</td>
            <td>true</td>
            <td>console.log</td>
            <td>Returns OTP values typed in inputs.</td>
        </tr>
        <tr>
            <td>numInputs</td>
            <td>Number</td>
            <td>false</td>
            <td>4</td>
            <td>Number of inputs.</td>
        </tr>
        <tr>
            <td>onChangeRegex</td>
            <td>RegEx</td>
            <td>false</td>
            <td>none</td>
            <td>RegEx for single onChange.</td>
        </tr>
        <tr>
            <td>labelText</td>
            <td>String</td>
            <td>false</td>
            <td>'Enter verification code'</td>
            <td>Aria-label attribute for inputs.</td>
        </tr>
        <tr>
            <td>classNames</td>
            <td>String</td>
            <td>false</td>
            <td>'otp-field'</td>
            <td>Class names for OTP Field component.</td>
        </tr>
        <tr>
            <td>autoComplete</td>
            <td>String</td>
            <td>false</td>
            <td>'off'</td>
            <td>AutoComplete props for first input.</td>
        </tr>
        <tr>
            <td>autoFocus</td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>AutoFocus on first input.</td>
        </tr>
        <tr>
            <td>separator</td>
            <td>Component</td>
            <td>false</td>
            <td>none</td>
            <td>Separator between inputs.</td>
        </tr>
        <tr>
            <td>isTypeNumber</td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>Type number for inputs.</td>
        </tr>
        <tr>
            <td>hasError</td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>Error class 'otp-field--has-error' for otp-field component.</td>
        </tr>
        <tr>
            <td>inputProps</td>
            <td>Object</td>
            <td>false</td>
            <td>none</td>
            <td>Props for inputs.</td>
        </tr>
    </tbody>
</table>

## Development

#### Run the development server:

```
npm run dev
```
