export interface CodinityFormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  onClick?: () => void;
  onChange?: (value: string) => void;
  upload?: boolean;
}
