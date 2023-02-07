import { InputProps } from "../../utils/Input/Input.interface";

export interface FormProps<T> {
  data: Omit<InputProps, 'onChange' | 'onValidation'>[];
  onSubmit: (value: T) => void;
}
