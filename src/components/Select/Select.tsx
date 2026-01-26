import "./Select.styles.css";
import type { SelectProps } from "./Select.types";

function Select({ name, className, id, options }: SelectProps) {
  return (
    <select name={name} id={id} className={className}>
      {options.map((opt) => (
        <option value={opt.value}>{opt.children}</option>
      ))}
    </select>
  );
}

export default Select;
