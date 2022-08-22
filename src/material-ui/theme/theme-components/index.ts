import { PaletteMode, Components } from "@mui/material";
import { lightPallete, darkPalette } from "../pallete";
import cardCreator from "./card";
import inputOutlinedCreator from "./input-outlined";
import inputBaseCreator from "./inputbase";
import buttonCreator from "./button";

export const componentsCreator = (
  mode: PaletteMode
): Components => {
  const basePallete =
    mode === "dark" ? darkPalette : lightPallete;
  return {
    MuiButton: buttonCreator(basePallete),
    MuiInputBase: inputBaseCreator(basePallete),
    MuiOutlinedInput: inputOutlinedCreator(basePallete),
    MuiCard: cardCreator(basePallete),
  };
};
