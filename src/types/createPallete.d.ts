import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    paper: string;
    default: string;
    level2: string;
    level1: string;
    level3: string;
    footer: string;
  }

  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    icon?: string;
    link: string;
  }

  interface PaletteOptions {
    alternate: {
      main: string;
      dark: string;
    };
    chart: {
      violet: [string, string];
      blue: [string, string];
      green: [string, string];
      yellow: [string, string];
      red: [string, string];
    };

    primary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    }

    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    }

    inputBorderColor: string;
  }

  interface Palette {
    alternate: {
      main: string;
      dark: string;
    };
    chart: {
      violet: [string, string];
      blue: [string, string];
      green: [string, string];
      yellow: [string, string];
      red: [string, string];
    };

    primary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };

    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };

    inputBorderColor: string;
  }
}
