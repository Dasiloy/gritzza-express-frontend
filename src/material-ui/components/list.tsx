import React from "react";
import List, { ListProps } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

export default function MuiList({
  className,
  classes,
  dense,
  disablePadding,
  sx,
  children,
  ...rest
}: ListProps) {
  return (
    <List
      className={className}
      classes={classes}
      dense={dense}
      disablePadding={disablePadding}
      sx={sx}
      {...rest}>
      {children}
    </List>
  );
}

MuiList.Item = ListItem;
(MuiList.Avatar = ListItemAvatar),
  (MuiList.Button = ListItemButton);
MuiList.Icon = ListItemIcon;
MuiList.Text = ListItemText;
MuiList.SubHeader = ListSubheader;
MuiList.secondaryAction = ListItemSecondaryAction;
