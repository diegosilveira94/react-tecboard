import "./TitleForm.styles.css";
import type { TitleProps } from "./TitleForm.types";

function TitleForm({ className, children }: TitleProps) {
  return <h2 className={className}> {children} </h2>;
}

export default TitleForm;
