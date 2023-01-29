import React, { FunctionComponent } from 'react';
import { TextareaInputProps } from './TextareaInput.interface';

const TextareaInput: FunctionComponent<TextareaInputProps> = ({ onChange, id, value, index }) => {
  return <textarea onChange={e => onChange(e, index ?? -1)} id={id} value={value} />;
};

export default TextareaInput;
