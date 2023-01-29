import { ValidationFactoryProps } from "./validationFactory.interface";

export class ValidationFactory<T extends ValidationFactoryProps> {
  value;
  validator;
  constructor(value: string, validation: T) {
    this.value = value;
    this.validator = new validation(value);
  }

  isValid(): boolean {
    return this.validator?.checkValidation() || false;
  }

  getValidationError() {
    return this.isValid() ? '' : this.validator?.getValidationError();
  }
}
