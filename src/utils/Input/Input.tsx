import React, { FunctionComponent, useEffect } from 'react';
import RangeInput from '../RangeInput/RangeInput';
import RatingInput from '../RatingInput/RatingInput';
import RegularInput from '../RegularInput/RegularInput';
import SelectInput from '../SelectInput/SelectInput';
import TextareaInput from '../TextareaInput/TextareaInput';
import useInputValidation from '../useInputValidation/useInputValidation';
import { InputProps } from './Input.interface';

const Input: FunctionComponent<InputProps> = ({
  fullWidth,
  type,
  label,
  id,
  value,
  validation,
  onChange,
  onValidation,
  index,
  options,
  customClass,
  resizable
}) => {
  const [isValid, inputError] = useInputValidation({ validators: validation, inputValue: value ?? '' });
  useEffect(() => {
    onValidation(isValid, index ?? -1);
  }, [isValid, onValidation, index]);

  const renderInput = (type: string): React.ReactNode => {
    switch (type) {
      case 'textarea':
        return (
          <TextareaInput
            resizable={resizable}
            index={index}
            id={id}
            value={value}
            onChange={onChange}
          />
        );
      case 'rating':
        return <RatingInput index={index} onChange={onChange} isValid={isValid} />;
      case 'dropdown':
        return (
          <SelectInput
            options={options}
            index={index}
            onChange={onChange}
            id={id}
            isValid={isValid}
          />
        );
      case 'range':
        return <RangeInput index={index} options={options} onChange={onChange} isValid={isValid} />;
      default:
        return <RegularInput type={type} onChange={onChange} id={id} value={value} index={index} />;
    }
  };

  return (
    <div className={customClass}>
      <label htmlFor={id} className="reactoform_label">
        {label}
      </label>
      {renderInput(type)}
      {inputError && <span className="reactoform_error">{inputError}</span>}
    </div>
  );
};

export default Input;
