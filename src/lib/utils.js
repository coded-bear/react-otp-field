export const generateDefaultValues = (length, inputValues) => {
  return Array.from({ length }, (_, i) => inputValues[i] || '');
};

export const isValid = (regex, value) => regex.test(value);

export const focusOnNextInput = (newValues, currentValues, setFocusInput) => {
  for (let [i, element] of newValues.entries()) {
    if (!element || i === currentValues.length - 1) {
      setFocusInput(i);
      break;
    }
  }
};
