import React from "react";
import InputAdornment, {
  InputAdornmentProps,
} from "@mui/material/InputAdornment";

export default function MuiInputAdornment({
  position,
  children,
  ...rest
}: InputAdornmentProps) {
  return (
    <InputAdornment position={position} {...rest}>
      {children}
    </InputAdornment>
  );
}
