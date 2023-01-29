import React, { ChangeEvent } from 'react';
import { ValidationFactoryProps } from '../ValidationFactory/validationFactory';

export interface InputProps {
  label: string;
  type: string;
  validation: ValidationFactoryProps;
  id: string;
  fullWidth?: boolean;
  index?: number;
  onChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
  onValidation: (isValid: boolean, index: number) => void;
  value?: string;
  options?: string[];
}
