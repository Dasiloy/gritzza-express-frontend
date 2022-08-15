import React from "react";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

const MuiTooltip = ({ title, children, ...rest }:TooltipProps) => {
  return (
    <Tooltip title={title} {...rest}>
      {children}
    </Tooltip>
  );
};
