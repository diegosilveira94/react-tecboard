import "./Fieldset.styles.css";
import type { FieldsetProps } from "./Fieldset.types";

function Fieldset({ className, children }: FieldsetProps) {
  return <fieldset className={className}>{children}</fieldset>;
}

export default Fieldset;
