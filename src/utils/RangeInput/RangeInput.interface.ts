export interface RangeInputProps {
  options?: string[];
  index?: number;
  onChange: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => void;
  isValid: boolean;
}
