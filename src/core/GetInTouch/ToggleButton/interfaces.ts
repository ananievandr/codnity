export interface ToggleButtonProps {
  content: string;
  checked: boolean;
  onChange: (value: boolean, name: string) => void;
  name: string;
}
