import React from "react";
import Avatar, { AvatarProps } from "@mui/material/Avatar";

export default function MuiAvatar({
  alt,
  src,
  ...rest
}: AvatarProps) {
  return <Avatar alt={alt} src={src} {...rest} />;
}
