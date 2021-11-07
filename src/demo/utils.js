export const numInputsLimit = 30;

export const numInputsLimitValidation = (value) => {
  if (value > 30) return 30;
  return value;
};
