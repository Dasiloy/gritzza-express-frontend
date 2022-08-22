import { PaletteOptions } from "@mui/material";
import { CHART_COLORS } from "./chart-colors";

export const lightPallete: PaletteOptions = {
  mode: "light",
  common: {
    black: "#000",
    white: "#fff",
  },
  alternate: {
    dark: "#c07b0c",
    main: " #d88a0e",
  },
  primary: {
    light: "#f1a427",
    main: "#f09a0f",
    dark: "#c87d0a",
    contrastText: "#fff",
  },
  secondary: {
    light: "#9cc9a0",
    main: "#8cc090",
    dark: "#0a6f63",
    contrastText: "#fff",
  },
  chart: {
    violet: [
      CHART_COLORS.violet[0],
      CHART_COLORS.violet[1],
    ],
    blue: [CHART_COLORS.blue[0], CHART_COLORS.blue[1]],
    green: [CHART_COLORS.green[0], CHART_COLORS.green[1]],
    yellow: [
      CHART_COLORS.yellow[0],
      CHART_COLORS.yellow[1],
    ],
    red: [CHART_COLORS.red[0], CHART_COLORS.red[1]],
  },
  text: {
    primary: "#000000de",
    link: "#000000b3",
    secondary: "#00000099",
    disabled: "#00000040",
  },
  inputBorderColor: "#D2D2D2",

  background: {
    paper: "#ffffff",
    default: "#ffffff",
    level1: "#fcfcfc",
    level2: "#fbfbfb",
    level3: "#fafafa",
    footer: "#f5f5f5",
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  common: {
    black: "#000",
    white: "#fff",
  },
  alternate: {
    dark: "#f9d69f",
    main: "#fae1b7",
  },
  primary: {
    main: "#f4b857",
    light: "#f6c26f",
    dark: "#f3ae3f",
    contrastText: "#000000de",
  },
  secondary: {
    light: "#cee4d0",
    dark: "#a9cba8",
    main: "#b8d9c8",
    contrastText: "#000000de",
  },
  chart: {
    violet: [
      CHART_COLORS.violet[2],
      CHART_COLORS.violet[3],
    ],
    blue: [CHART_COLORS.blue[2], CHART_COLORS.blue[3]],
    green: [CHART_COLORS.green[2], CHART_COLORS.green[3]],
    yellow: [
      CHART_COLORS.yellow[2],
      CHART_COLORS.yellow[3],
    ],
    red: [CHART_COLORS.red[2], CHART_COLORS.red[3]],
  },
  text: {
    primary: "#fff",
    link: "#ffffffcc",
    secondary: "#ffffffb3",
    disabled: "#ffffff80",
    icon: "#ffffff80",
  },
  inputBorderColor: "#fff",
  background: {
    paper: "#121212",
    default: "#121212",
    level1: "#1a1a1a",
    level2: " #262626",
    level3: "#333333",
    footer: "#151515",
  },
};


export type ColorPallete = typeof lightPallete | typeof darkPalette;