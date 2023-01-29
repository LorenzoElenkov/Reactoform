export interface ValidationFactoryProps {
  new (value: string): { checkValidation: () => boolean; getValidationError: () => string };
}