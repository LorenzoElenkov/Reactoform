import React, { FunctionComponent, useState, useEffect } from 'react';
import { SelectInputProps } from './SelectInput.interface';

const SelectInput: FunctionComponent<SelectInputProps> = ({
  options,
  index,
  onChange,
  id,
  isValid
}) => {
  const [chosenOption, setChosenOption] = useState<string>('');

  const handleOptionChoice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChosenOption(e.target.value);
    onChange(e, index ?? -1);
  };

  useEffect(() => {
    if (!isValid) {
      setChosenOption('');
    }
  }, [isValid]);

  return (
    <select onChange={handleOptionChoice} id={id} value={chosenOption} className="reactoform_dropdown_input__container">
      <option></option>
      {options?.map((option: string, index: number) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default SelectInput;
