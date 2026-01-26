import "./Label.styles.css";
import type { LabelProps } from "./Label.types";

function Label({ htmlFor, className, children }: LabelProps) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
