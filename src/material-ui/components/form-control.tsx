import React from "react";
import FormControl ,{FormControlProps} from "@mui/material/FormControl";
import { FormControlLabel } from "@mui/material";

export default function MuiFormControl({
  children,
  ...rest
}:FormControlProps) {
  return <FormControl {...rest}>{children}</FormControl>;
}

MuiFormControl.Label = FormControlLabel;
