import { ChangeEvent, useState } from 'react';
import { InputProps } from '../Input/Input.interface';

const useForm = <T = Record<string, string>>(
  initialState: Omit<InputProps, 'onChange' | 'onValidation'>[],
  onSubmit: (value: T) => void
) => {
  const [formData, setFormData] = useState<Pick<InputProps, 'value' | 'id'>[]>(() => {
    return initialState.map(({ id, value, label }) => ({ id: id ?? label.replace(/ /g, ""), value: value || '' }));
  });

  const handleInputChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const changedFormData = [...formData];
    if ('value' in e.target) {
      changedFormData[index].value = e.target.value as string;
    }
    setFormData(changedFormData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let refinedFormData = {} as T;
    formData.forEach(({ id, value }: Pick<InputProps, 'value' | 'id'>) => {
      refinedFormData = { ...refinedFormData, [id]: value };
    });
    onSubmit(refinedFormData);
    setFormData(prevState => {
      const newState = prevState.map((input: Pick<InputProps, 'value' | 'id'>) => {
        return { ...input, value: '' };
      });
      return newState;
    });
  };

  return { formData, handleInputChange, handleSubmit };
};

export default useForm;
