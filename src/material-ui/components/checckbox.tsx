import React from "react";
import Checkbox, {
  CheckboxProps,
} from "@mui/material/Checkbox";

const MuiCheckbox = ({
  checked,
  indeterminate,
  onChange,
  ...rest
}: CheckboxProps) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      indeterminate={indeterminate}
      {...rest}
    />
  );
};

export default MuiCheckbox;
