import { PaletteOptions } from "@mui/material";

const cardCreator = (basePallete: PaletteOptions) => ({
  styleOverrides: {
    root: {
      borderRadius: 8,
    },
  },
});
export default cardCreator;
