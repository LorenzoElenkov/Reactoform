import React, { FunctionComponent } from 'react';
import { RegularInputProps } from './RegularInput.interface';

const RegularInput: FunctionComponent<RegularInputProps> = ({
  type,
  onChange,
  id,
  value,
  index
}) => {
  return <input type={type} onChange={e => onChange(e, index ?? -1)} id={id} value={value} />;
};

export default RegularInput;
