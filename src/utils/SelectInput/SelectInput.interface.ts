export interface SelectInputProps {
  index?: number;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, index: number) => void;
  options?: string[];
  isValid: boolean;
}
