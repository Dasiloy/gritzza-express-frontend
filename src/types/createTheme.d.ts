import {
  Theme,
  ThemeOptions,
} from "@mui/material/styles/createTheme";
import type { ThemeToggler } from "./themeToggler";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    themeToggler: ThemeToggler;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    themeToggler: ThemeToggler;
  }
}
