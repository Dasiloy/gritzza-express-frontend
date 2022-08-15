import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function MuiTypography({
  gutterBottom,
  variant,
  ...rest
}:TypographyProps) {
  return (
    <Typography
      gutterBottom={gutterBottom}
      variant={variant}
      {...rest}
    />
  );
}
