import * as React from 'react';

declare const OtpField: React.FunctionComponent<OtpFieldProps>;

interface OtpFieldProps {
    value: string;
    onChange: Function;
    numInputs?: number;
    onChangeRegex?: RegExp;
    labelText?: string;
    classNames?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    separator?: JSX.Element;
    isTypeNumber?: boolean;
    hasError?: boolean;
    inputProps?: Object;
}

export { OtpFieldProps };
export default OtpField;
