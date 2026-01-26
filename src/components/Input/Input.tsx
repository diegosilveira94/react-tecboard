import "./Input.styles.css";
import type { InputProps } from "./Input.types";

function Input({ className, id, type, placeholder }: InputProps) {
  return (
    <input
      className={className}
      id={id}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
