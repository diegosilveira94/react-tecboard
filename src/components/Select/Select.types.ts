export interface SelectOption {
  id: string;
  name: string;
}

export interface SelectProps {
  options: SelectOption[];
  id?: string;
  name: string;
  placeholder?: string;
}
