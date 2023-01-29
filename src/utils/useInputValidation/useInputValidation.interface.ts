import { ValidationFactoryProps } from '../ValidationFactory/validationFactory';

export interface InputValidationProps<T extends ValidationFactoryProps> {
  validator: T;
  value: string;
}
