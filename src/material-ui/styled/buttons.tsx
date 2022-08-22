import React from "react";

import MuiButton, {
  MuiButtonProps,
} from "material-ui/components/button";
import { styled } from "@mui/material/styles";

export const StyledtextButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  color: theme.palette.primary.main,
  cursor: "pointer",
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.dark,
  },
}));

export type IMuiButtonProps = MuiButtonProps & {
  icon: React.ReactNode;
};

export const ContainedButton = ({
  sx,
  ...rest
}: MuiButtonProps) => {
  return (
    <MuiButton sx={sx} variant={"contained"} {...rest} />
  );
};

export const OutlinedButton = ({
  sx,
  ...rest
}: MuiButtonProps) => {
  return (
    <MuiButton sx={sx} variant={"outlined"} {...rest} />
  );
};

export const TextButton = ({
  sx,
  ...rest
}: MuiButtonProps) => {
  return (
    <MuiButton
      disableRipple
      sx={{
        ...sx,
        ":hover": {
          backgroundColor: "transparent !important",
          boxShadow: "none",
        },
      }}
      variant={"text"}
      {...rest}
    />
  );
};
