import React from "react";
import TextField ,{TextFieldProps} from "@mui/material/TextField";

function MuiInput({
  id,
  label,
  variant,
  required,
  defaultValue,
  disabled,
  type,
  autoComplete,
  error,
  helperText,
  value,
  onChange,
  InputProps,
  hiddenLabel,
  size,
  fullWidth,
  placeholder,
  name,
  children,
  ...rest
}:TextFieldProps) {
  return (
    <TextField
      id={id}
      size={size}
      name={name}
      type={type}
      error={error}
      value={value}
      label={label}
      variant={variant}
      required={required}
      onChange={onChange}
      disabled={disabled}
      fullWidth={fullWidth}
      helperText={helperText}
      InputProps={InputProps}
      hiddenLabel={hiddenLabel}
      placeholder={placeholder}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      {...rest} />
  );
}

export default MuiInput;
