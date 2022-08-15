import { PaletteMode } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { lightPallete, darkPalette } from "./pallete";

export const createTypography = (
  mode: PaletteMode
): TypographyOptions => {
  const basePalette =
    mode === "light" ? lightPallete : darkPalette;
  return {
    htmlFontSize: 15,
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontFamily: "'Open Sans', 'sans-serif'",
    h1: {
      fontFamily: '"Montserrat", "Roboto",sans-serif',
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      color: basePalette.text?.primary,
    },
    h2: {
      fontFamily: '"Montserrat", "Roboto",sans-serif',
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.3,
      color: basePalette.text?.primary,
    },
    h3: {
      fontFamily: '"Montserrat", "Roboto",sans-serif',
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.35,
      color: basePalette.text?.primary,
    },
    h4: {
      fontFamily: '"Montserrat", "Roboto",sans-serif',
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
      color: basePalette.text?.secondary,
    },
    h5: {
      fontFamily: '"Montserrat", "Roboto",sans-serif',
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.45,
      color: basePalette.text?.secondary,
    },
    h6: {
      fontFamily: '"Montserrat", "Roboto",sans-serif',
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: basePalette.text?.secondary,
    },
    subtitle1: {
      fontFamily: '"Open Sans",sans-serif',
      color: basePalette.text?.primary,
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: '"Open Sans",sans-serif',
      color: basePalette.text?.secondary,
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Open Sans",sans-serif',
      color: basePalette.text?.primary,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Open Sans",sans-serif',
      color: basePalette.text?.secondary,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Open Sans",sans-serif',
      textTransform: "capitalize",
      letterSpacing: "0.03rem",
      fontWeight: 500,
    },
  };
};
