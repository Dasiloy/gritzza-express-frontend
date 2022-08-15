import React from "react";
import Badge , {BadgeProps} from "@mui/material/Badge";

export default function MuiBadge({
  color,
  badgeContent,
  children,
  ...others
}:BadgeProps) {
  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      {...others}>
      {children}
    </Badge>
  );
}
