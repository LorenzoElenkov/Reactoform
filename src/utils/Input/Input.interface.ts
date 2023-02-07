import React, { ChangeEvent } from 'react';

export interface InputProps {
  label: string;
  type: string;
  validation: Record<string, Record<'value' | 'error', string | number | RegExp>>;
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
  customClass: string;
  resizable: boolean;
}
