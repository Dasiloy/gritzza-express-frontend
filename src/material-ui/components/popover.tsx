import React from "react";
import Popover, { PopoverProps } from "@mui/material/Popover";

function MuiPopover({
  anchorOrigin,
  transformOrigin,
  PaperProps,
  children,
  ...others
}:PopoverProps) {
  return (
    <Popover
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      PaperProps={PaperProps}
      {...others}>
      {children}
    </Popover>
  );
}

export default MuiPopover;
