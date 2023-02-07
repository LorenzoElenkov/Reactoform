
export interface InputValidationProps {
  validators: Record<string, Record<'value' | 'error', string | number | RegExp>>;
  inputValue: string;
}
