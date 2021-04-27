export interface MobileViewProps {
  isMobileMenuOpen: boolean;
  onClose: () => void;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
}
