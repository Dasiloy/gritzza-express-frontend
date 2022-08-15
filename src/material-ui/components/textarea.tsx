import React from "react";
import MuiInput from "./text-field";
import { TextFieldProps } from "@mui/material/TextField";

export default function MuiTextArea({
  placeholder,
  rows = 3,
  value,
  ...rest
}: TextFieldProps) {
  return (
    <MuiInput
      multiline
      fullWidth
      rows={rows}
      value={value}
      placeholder={placeholder}
      InputProps={{ disableUnderline: true }}
      {...rest}
    />
  );
}
