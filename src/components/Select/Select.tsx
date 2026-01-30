import "./Select.styles.css";
import type { SelectProps } from "./Select.types";

function Select({ name, options }: SelectProps) {
  return (
    <select name={name} className="select-form" defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {options.map((opt) => (
        <option
          className="theme-options"
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
