import "./TitleTheme.styles.css";
import type { TitleThemeProps } from "./TitleTheme.types";

function TitleTheme({ theme }: TitleThemeProps) {
  return <h3 className="title-theme">{theme}</h3>;
}

export default TitleTheme;
