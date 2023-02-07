const validate = (toTest: string): IValidate => {
  const required = () => {
    return toTest ? true : false;
  };

  const email = () => {
    return /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/.test(toTest);
  };

  const pattern = (pattern: string) => {
    const check = new RegExp(pattern);
    return check.test(toTest);
  };

  const minLength = (value: string) => {
    return toTest.length > Number(value);
  };

  const maxLength = (value: string) => {
    return toTest.length <= Number(value);
  };

  return {
    required,
    email,
    pattern,
    minLength,
    maxLength
  };
};

export interface IValidate {
  required: () => boolean;
  email: () => boolean;
  pattern: (pattern: string) => boolean;
  minLength: (value: string) => boolean;
  maxLength: (value: string) => boolean;
}

export default validate;