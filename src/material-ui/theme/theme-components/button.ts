import { PaletteOptions } from "@mui/material";

const buttonCreator = (basePallete: PaletteOptions) => ({
  styleOverrides: {
    root: {
      fontWeight: 500,
      borderRadius: 8,
      boxShadow: "none",
    },
  },
});
export default buttonCreator;
