import "./Button.styles.css";
import type { ButtonProps } from "./Button.types";

function Button({ className, id, children }: ButtonProps) {
  return (
    <button className={className} id={id}>
      {children}
    </button>
  );
}

export default Button;
