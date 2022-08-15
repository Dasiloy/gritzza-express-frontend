import React from "react";
import InputBase, {
  InputBaseProps,
} from "@mui/material/InputBase";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function MuiInputBase({
  sx,
  placeholder,
  value,
  onChange,
  inputProps,
  inputComponent,
  ...rest
}: InputBaseProps) {
  return (
    <InputBase
      value={value}
      onChange={onChange}
      sx={sx}
      placeholder={placeholder}
      inputProps={inputProps}
      {...rest}
    />
  );
}

MuiInputBase.Input = Input;
MuiInputBase.Label = InputLabel;
MuiInputBase.FilledInput = FilledInput;
MuiInputBase.OutLinedInput = OutlinedInput;
