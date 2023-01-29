export interface TextareaInputProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => void;
  id: string;
  value?: string;
  index?: number;
}
