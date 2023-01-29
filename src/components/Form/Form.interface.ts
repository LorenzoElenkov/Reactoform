import { InputProps } from "../../utils/Input/Input.interface";

export interface FormProps<T> {
  data: Omit<InputProps, 'onChange' | 'onValidation'>[];
  multiColumn: boolean;
  onSubmit: (value: T) => void;
}
