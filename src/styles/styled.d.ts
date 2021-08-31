import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      dark: string;
      light: string;
      primary: string;
      secondary: string;
      danger: string;
      action: string;
      success: string;
    };
    fontSize: {
      small: string;
      medium: string;
      mediumForm: string;
      large: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  }
}
