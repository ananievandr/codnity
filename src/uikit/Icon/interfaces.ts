import { Icons } from './utils/interfaces';

export interface IconProps {
  id?: string;
  name?: Icons;
  size?: number;
  height?: string;
  width?: string;
  className?: string;
  transform?: number;
  onClick?: () => void;
}
