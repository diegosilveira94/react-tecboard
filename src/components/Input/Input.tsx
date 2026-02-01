import "./Input.styles.css";
import type { InputProps } from "./Input.types";

function Input({ className, id, type, placeholder, name }: InputProps) {
  return (
    <input
      className={className}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
