import MuiInput from "material-ui/components/text-field";
import { TextFieldProps } from "@mui/material/TextField";


export default function TextInput({
  error,
  value,
  onChange,
  onBlur,
  label,
  fullWidth = true,
  placeholder,
  helperText,
  sx,
  ...rest
}: TextFieldProps) {
  return (
    <MuiInput
      sx={{ ...sx,my: 1 }}
      label={label}
      error={error}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      InputProps={{
        disableUnderline: true,
      }}
      fullWidth={fullWidth}
      helperText={error ? helperText : " "}
      {...rest}
    />
  );
}
