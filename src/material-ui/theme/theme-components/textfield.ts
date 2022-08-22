import { PaletteOptions } from "@mui/material";

const textFieldCreator = (basePallete: PaletteOptions) => ({
  styleOverrides: {
    root: {
      borderRadius: 8,
      borderColor: basePallete.inputBorderColor,
    },
  },
});
export default textFieldCreator;
