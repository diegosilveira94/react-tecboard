export interface Theme {
  id: string;
  name: string;
}

export interface TitleThemeProps {
  className: string;
  themes: Theme[];
}
