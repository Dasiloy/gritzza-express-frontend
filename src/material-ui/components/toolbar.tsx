import React from "react";
import PropTypes from "prop-types";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";

export default function MuiToolBar({
  className,
  classes,
  sx,
  disableGutters,
  variant,
  children,
  ...rest
}:ToolbarProps) {
  return (
    <Toolbar
      sx={sx}
      classes={classes}
      className={className}
      disableGutters={disableGutters}
      variant={variant}
      {...rest}>
      {children}
    </Toolbar>
  );
}
