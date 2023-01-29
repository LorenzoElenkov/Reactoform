export interface RegularInputProps {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  id: string;
  index?: number;
  value?: string;
}
