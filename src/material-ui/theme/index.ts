import type { PaletteMode } from "@mui/material";
import type { ThemeToggler } from "types/themeToggler";
import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

// custom theme modification
import { lightPallete, darkPalette } from "./pallete";
import { createTypography } from "./typography";
import { componentsCreator } from "./components";
import { shadowsGenerator } from "./shadows";

const getTheme = (
  mode: PaletteMode,
  themeToggler: ThemeToggler
) =>
  responsiveFontSizes(
    createTheme(
      mode === "light"
        ? {
            palette: lightPallete,
            typography: createTypography(mode),
            components: componentsCreator(mode),
            shadows: shadowsGenerator(),
            themeToggler,
          }
        : {
            palette: darkPalette,
            typography: createTypography(mode),
            components: componentsCreator(mode),
            themeToggler,
          }
    )
  );

export default getTheme;
