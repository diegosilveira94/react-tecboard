import "./Select.styles.css";
import type { SelectProps } from "./Select.types";

function Select({ id, name, options }: SelectProps) {
  return (
    <select id={id} name={name} className="select-form" defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {options.map((opt) => (
        <option className="theme-options" key={opt.id} value={opt.name}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
