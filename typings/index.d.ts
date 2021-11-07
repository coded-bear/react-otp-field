import * as React from 'react';

declare const OtpInput: React.FunctionComponent<OtpInputProps>;

interface OtpInputProps {
    value: string,
    onChange: Function,
    numInputs?: number,
    onChangeRegex?: RegExp,
    labelText?: string,
    classNames?: string,
    autoComplete?: string,
    autoFocus?: boolean,
    separator?: JSX.Element,
    isTypeNumber: boolean,
    hasErrored?: boolean,
    inputProps?: Object,
}

export { OtpInputProps };
export default OtpInput;
