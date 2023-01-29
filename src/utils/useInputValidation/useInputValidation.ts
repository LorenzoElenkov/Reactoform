import { useCallback, useEffect, useState } from 'react';
import { ValidationFactory } from '../ValidationFactory/validationFactory';
import { ValidationFactoryProps } from '../ValidationFactory/validationFactory.interface';
import { InputValidationProps } from './useInputValidation.interface';

const useInputValidation = <T extends ValidationFactoryProps>({
  validator,
  value
}: InputValidationProps<T>): [boolean, string] => {
  const [valid, setValid] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const checkValidation = useCallback(() => {
    const input = new ValidationFactory<T>(value, validator);
    const isValid = input.isValid();
    setValid(isValid);
    if (value) {
      setError(input.getValidationError());
    }
  }, [validator, value]);

  useEffect(() => {
    checkValidation();
  }, [checkValidation]);
  return [valid, error];
};

export default useInputValidation;
