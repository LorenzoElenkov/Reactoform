export interface ValidationFactoryProps {
  new (value: string): { checkValidation: () => boolean; getValidationError: () => string };
}

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
