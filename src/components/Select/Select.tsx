import "./Select.styles.css";
import type { SelectProps } from "./Select.types";

function Select({ name, className, options }: SelectProps) {
  return (
    <select name={name} className={className}>
      {options.map((opt) => (
        <option
          key={opt.id}
          value={opt.name}
          id={`${opt.name}-option-${opt.id}`}
        >
          {opt.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
