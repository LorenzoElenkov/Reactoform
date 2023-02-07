import React, { FunctionComponent } from 'react';
import { TextareaInputProps } from './TextareaInput.interface';

const TextareaInput: FunctionComponent<TextareaInputProps> = ({
  onChange,
  id,
  value,
  index,
  resizable
}) => {
  return (
    <textarea
      className="reactoform_textarea_input"
      onChange={e => onChange(e, index ?? -1)}
      id={id}
      value={value}
      style={resizable === false ? { resize: 'none' } : {}}
    />
  );
};

export default TextareaInput;
