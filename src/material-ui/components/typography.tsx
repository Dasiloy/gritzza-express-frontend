import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function MuiTypography({
  gutterBottom,
  variant,
  children,
  ...rest
}:TypographyProps) {
  return (
    <Typography
      gutterBottom={gutterBottom}
      variant={variant}
      {...rest}
    >
      {children}
    </Typography>
  );
}
