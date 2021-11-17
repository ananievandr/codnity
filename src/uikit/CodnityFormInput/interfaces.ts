export interface CodinityFormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  onClick?: () => void;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  value?: string;
  upload?: boolean;
  errorMessage?: string;
}
