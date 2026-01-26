export interface OptionProps {
  value: string;
  children: React.ReactNode;
}

export interface SelectProps {
  options: OptionProps[];
  id: string;
  className: string;
  name?: string;
  placeholder?: string;
}
