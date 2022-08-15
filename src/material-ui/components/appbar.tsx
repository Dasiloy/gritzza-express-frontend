import React from "react";
import AppBar, { AppBarProps } from "@mui/material/AppBar";

function MuiAppBar({
  position,
  sx,
  elevation,
  children,
  ...rest
}: AppBarProps) {
  return (
    <AppBar
      position={position}
      sx={sx}
      elevation={elevation}
      {...rest}>
      {children}
    </AppBar>
  );
}

export default MuiAppBar;
