import { ValidationFactoryProps } from "../ValidationFactory/validationFactory.interface";

export interface InputValidationProps<T extends ValidationFactoryProps> {
  validator: T;
  value: string;
}
