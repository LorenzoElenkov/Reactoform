import { useCallback, useEffect, useState } from 'react';
import validate, { IValidate } from '../validate/validate';
import { InputValidationProps } from './useInputValidation.interface';

const useInputValidation = ({
  validators,
  inputValue
}: InputValidationProps): [boolean, string] => {
  const [valid, setValid] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const checkValidation = useCallback(() => {
    let isValid = true;
    if (validators) {
      const validation = validate(inputValue);
      for (const [key, { value, error }] of Object.entries(validators)) {
        isValid = validation[key as keyof IValidate](value as string);
        if (!isValid && inputValue) {
          setError(error as string);
          break;
        } else {
          setError('');
        }
      }
    }
    setValid(isValid);
  }, [validators, inputValue]);

  useEffect(() => {
    checkValidation();
  }, [checkValidation]);
  return [valid, error];
};

export default useInputValidation;
