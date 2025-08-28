export type topBarLinkProps = {
    label: React.ReactNode;
    showSeparator: boolean;
}

export interface DropdownItem {
  label: string;
  onClick?: () => void;
}
export interface DropdownProps {
  label?: string;
  items: DropdownItem[];
  isOpen: boolean;
  onClick: () => void;
  className?: string
}