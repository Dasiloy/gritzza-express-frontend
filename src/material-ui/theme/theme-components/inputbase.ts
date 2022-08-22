import { PaletteOptions } from "@mui/material";

const inputBaseCreator = (basePallete: PaletteOptions) => ({
  styleOverrides: {
    root: {
      borderRadius: 8,
    },
  },
});
export default inputBaseCreator;
