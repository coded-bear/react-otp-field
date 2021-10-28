import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const generateDefaultValues = (length, inputValues) => {
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

const OtpInput = ({
  type = 'text',
  value = '',
  onChange = (value) => console.log(value),
  numInputs = 4,
  onChangeRegex,
  labelText = 'Enter verification code',
  classNames = 'otp-input',
  autoComplete = 'off',
  autoFocus = false,
  inputProps,
}) => {
  const defaultValues = generateDefaultValues(numInputs, value.split(''));
  const [values, setValues] = useState(defaultValues);
  const [focusInput, setFocusInput] = useState(autoFocus ? 0 : null);
  const inputRefs = useRef([]);

  useEffect(() => {
    setValues(defaultValues);
  }, [value]);

  useEffect(() => {
    const input = inputRefs.current[focusInput];
    !!input && input.focus();
  }, [focusInput]);

  const handleChange = (inputValue, index) => {
    if (!!onChangeRegex && !isValid(onChangeRegex, inputValue)) return;

    const newValues = [...values];

    // adding and removing values
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
    <div className={classNames}>
      {values.map((element, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type={type}
          value={element}
          onChange={(e) => handleChange(e.target.value, index)}
          aria-label={labelText}
          aria-required="true"
          autoComplete={index === 0 ? autoComplete : 'off'}
          onKeyDown={({ key }) => onKeyPressed(key, index)}
          {...inputProps}
        />
      ))}
    </div>
  );
};

OtpInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  numInputs: PropTypes.number.isRequired,
  onChangeRegex: PropTypes.instanceOf(RegExp),
  labelText: PropTypes.string,
  classNames: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  inputProps: PropTypes.object,
};

export default OtpInput;
