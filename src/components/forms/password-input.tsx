import React from "react";
import type { TButtonEvent } from "types/event-types";
import MuiInputAdornment from "material-ui/components/input-adornment";
import MuiIconButton from "material-ui/components/icon-button";
import { TextFieldProps } from "@mui/material/TextField";
import MuiInput from "material-ui/components/text-field";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

export interface IPasswordAdornmentProps {
  togglePasswordVisibility: () => void;
  showPassword: boolean;
  handleMouseDown: (event: TButtonEvent) => void;
}

function PasswordAdornment({
  togglePasswordVisibility,
  handleMouseDown,
  showPassword,
}: IPasswordAdornmentProps) {
  return (
    <MuiInputAdornment position="end">
      <MuiIconButton
        aria-label="toggle password visibility"
        onClick={togglePasswordVisibility}
        onMouseDown={handleMouseDown}
        edge="end">
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </MuiIconButton>
    </MuiInputAdornment>
  );
}

export default function PasswordInput({
  value,
  error,
  errorText = "",
  onBlur,
  label = "Password",
  placeholder,
  helperText = "",
  disabled,
  onChange,
  fullWidth = true,
  sx,
  ...props
}: TextFieldProps & { errorText?: string }) {
  const [showPassword, setShowPassword] =
    React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (event: TButtonEvent) => {
    event.preventDefault();
  };
  return (
    <MuiInput
      sx={{ ...sx, my: 1 }}
      error={error}
      value={value}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <PasswordAdornment
            showPassword={showPassword}
            handleMouseDown={handleMouseDown}
            togglePasswordVisibility={
              togglePasswordVisibility
            }
          />
        ),
      }}
      fullWidth={fullWidth}
      helperText={error ? helperText : " "}
      {...props}
    />
  );
}
