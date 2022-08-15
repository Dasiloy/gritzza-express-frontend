import React from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";

export interface IMuiDrawerProps extends DrawerProps {
  maxWidth?: number;
}

export default function MuiDrawer({
  anchor,
  onClose,
  open,
  variant,
  children,
  maxWidth = 280,
  ...rest
}: IMuiDrawerProps) {
  return (
    <Drawer
      anchor={anchor}
      onClose={onClose}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: maxWidth,
        },
      }}
      {...rest}>
      {children}
    </Drawer>
  );
}
