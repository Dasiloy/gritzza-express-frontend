import React from "react";
import IconButton, {
  IconButtonProps,
} from "@mui/material/IconButton";

function MuiIconButton({
  children,
  color,
  ...rest
}: IconButtonProps) {
  return (
    <IconButton color={color} {...rest}>
      {children}
    </IconButton>
  );
}

export default MuiIconButton;
