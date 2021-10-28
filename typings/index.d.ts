import * as React from 'react';

declare const OtpInput: React.FunctionComponent<OtpInputProps>;

interface OtpInputProps {
    type?: string,
    value: string,
    onChange: Function,
    numInputs?: number,
    onChangeRegex?: RegExp,
    labelText?: string,
    classNames?: string,
    autoComplete?: string,
    autoFocus?: boolean,
    separator?: JSX.Element,
    inputProps?: Object,
}

export { OtpInputProps };
export default OtpInput;
