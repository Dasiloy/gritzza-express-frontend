import React from "react";
import MenuList from "@mui/material/MenuList";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function MuiMenu({
  open,
  anchorEl,
  onClose,
  PaperProps,
  anchorOrigin,
  transformOrigin,
  children,
  ...rest
}: MenuProps) {
  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      PaperProps={{
        ...PaperProps,
      }}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...rest}>
      {children}
    </Menu>
  );
}

MuiMenu.List = MenuList;
MuiMenu.Item = MenuItem;

export default MuiMenu;
