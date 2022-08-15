import * as React from "react";
import Select, { SelectProps } from "@mui/material/Select";

export default function MuiSelect({
  disableUnderline = true,
  value = "",
  onChange = () => {},
  ...rest
}:SelectProps) {
  return (
    <Select
      disableUnderline={disableUnderline}
      labelId="demo-simple-select-filled-label"
      value={value}
      onChange={onChange}
      {...rest} />
  );
}
