import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const generateDefaultValues = (length, inputValues) => {
  if (length < 1) return [];
  return Array.from({ length }, (_, i) => inputValues[i] || '');
};

const isValid = (regex, value) => regex.test(value);

const focusOnNextInput = (newValues, currentValues, setFocusInput) => {
  for (let [i, element] of newValues.entries()) {
    if (!element || i === currentValues.length - 1) {
      setFocusInput(i);
      break;
    }
  }
};

const OtpField = ({
  value = '',
  onChange = (value) => console.log(value),
  numInputs = 4,
  onChangeRegex,
  labelText = 'Enter verification code',
  classNames = 'otp-field',
  autoComplete = 'off',
  autoFocus = false,
  separator,
  isTypeNumber = false,
  hasErrored = false,
  inputProps,
}) => {
  const defaultValues = generateDefaultValues(numInputs, value.split(''));
  const [values, setValues] = useState(defaultValues);
  const [focusInput, setFocusInput] = useState(autoFocus ? 0 : null);
  const inputRefs = useRef([]);

  useEffect(() => {
    setValues(defaultValues);
  }, [value, numInputs]);

  useEffect(() => {
    const input = inputRefs.current[focusInput];
    !!input && input.focus();
  }, [focusInput]);

  const handleChange = (inputValue, index) => {
    if (!!onChangeRegex && !isValid(onChangeRegex, inputValue)) return;

    const newValues = [...values];

    let j = 0;
    values.forEach((element, i) => {
      const isNewValuesAndAnyEmptyInput = !element && !!inputValue;
      const isActionRemoveInputValue = !!element && index === i && !inputValue;

      if (isNewValuesAndAnyEmptyInput) {
        newValues[i] = inputValue.split('')[!values[index] ? j : j + 1] || '';
        j++;
      } else if (isActionRemoveInputValue) {
        newValues[i] = '';
      }
    });

    if (inputValue) {
      focusOnNextInput(newValues, values, setFocusInput);
    }

    onChange(newValues.join(''));
  };

  const onKeyPressed = (key, index) => {
    switch (key) {
      case 'Backspace':
      case 'ArrowLeft':
        return setFocusInput(index - 1);
      case 'ArrowRight':
        return setFocusInput(index + 1);
      default:
        return;
    }
  };

  return (
    <div className={`${classNames} ${hasErrored ? 'otp-field--has-errored' : ''}`.trim()}>
      {values.map((element, index) => (
        <div key={index}>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type={isTypeNumber ? 'number' : 'text'}
            value={element}
            onChange={(e) => handleChange(e.target.value, index)}
            aria-label={labelText}
            aria-required="true"
            autoComplete={index === 0 ? autoComplete : 'off'}
            onKeyDown={({ key }) => onKeyPressed(key, index)}
            {...inputProps}
          />

          {index !== values.length - 1 && separator && separator}
        </div>
      ))}
    </div>
  );
};

OtpField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  numInputs: PropTypes.number.isRequired,
  onChangeRegex: PropTypes.instanceOf(RegExp),
  labelText: PropTypes.string,
  classNames: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  separator: PropTypes.node,
  isTypeNumber: PropTypes.bool,
  hasErrored: PropTypes.bool,
  inputProps: PropTypes.object,
};

export default OtpField;
