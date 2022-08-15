import React from "react";
import Divider, {
  DividerProps,
} from "@mui/material/Divider";

export default function MuiDivider({
  variant,
  textAlign,
  sx,
  orientation,
  light,
  children,
  ...rest
}: DividerProps) {
  return (
    <Divider
      variant={variant}
      textAlign={textAlign}
      sx={sx}
      orientation={orientation}
      light={light}
      children={children}
      {...rest}
    />
  );
}
