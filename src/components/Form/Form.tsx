import React, { useCallback, useEffect, useState } from 'react';
import Input from '../../utils/Input/Input';
import { InputProps } from '../../utils/Input/Input.interface';
import useForm from '../../utils/useForm/useForm';
import { FormProps } from './Form.interface';

const Form = <T,>({ data, multiColumn, onSubmit }: FormProps<T>) => {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [areInputsValid, setAreInputsValid] = useState<boolean[]>(() => {
    return data.map(() => false);
  });
  const { formData, handleInputChange, handleSubmit } = useForm<T>(data, onSubmit);

  const handleOnValidation = useCallback((isValid: boolean, index: number) => {
    setAreInputsValid(prevState => {
      const newState = prevState.map((oldValue: boolean, i: number) => {
        return index === i ? isValid : oldValue;
      });
      return newState;
    });
  }, []);

  useEffect(() => {
    setCanSubmit(areInputsValid.every((el: boolean) => el));
  }, [areInputsValid]);
  return (
    <form
      onSubmit={handleSubmit}
      className={''}
    >
      {data.map(
        (
          { id, label, validation, type, options }: Omit<InputProps, 'onChange' | 'onValidation'>,
          index: number
        ) => {
          return (
            <Input
              id={id}
              key={index}
              index={index}
              label={label}
              value={formData[index].value}
              type={type}
              validation={validation}
              onChange={handleInputChange}
              onValidation={handleOnValidation}
              options={options}
            ></Input>
          );
        }
      )}
      <button type="submit" disabled={!canSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
