import * as React from 'react';

declare const OtpInput: React.FunctionComponent<OtpInputProps>;

interface OtpInputProps {
    type?: string,
    value: string,
    onChange: Function,
    numInputs?: number,
    onChangeRegex?: RegExp,
    classNames?: string,
    autoComplete?: string,
    autoFocus?: boolean,
    inputProps?: Object,
}

export { OtpInputProps };
export default OtpInput;
