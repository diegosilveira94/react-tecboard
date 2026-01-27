import "./TitleTheme.styles.css";
import type { TitleThemeProps } from "./TitleTheme.types";

function TitleTheme({ className, themes }: TitleThemeProps) {
  return (
    <div className="themes-container">
      {themes.map((theme) => (
        <h3 key={theme.id} className={className}>
          {theme.name}
        </h3>
      ))}
    </div>
  );
}

export default TitleTheme;
