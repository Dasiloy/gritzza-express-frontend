import React from "react";
import { useTheme } from "@mui/material/styles";
import MuiButton, {
  MuiButtonProps,
} from "material-ui/components/button";

export type IMuiButtonProps = MuiButtonProps & {
  icon: React.ReactNode;
};

export const ContainedButton = ({
  sx,
  ...rest
}: MuiButtonProps) => {
  return (
    <MuiButton
      variant={"contained"}
      {...rest}
      sx={{
        ...sx,
        boxShadow:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        ":hover": {
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        },
      }}
    />
  );
};

export const OutlinedButton = ({
  sx,
  ...rest
}: MuiButtonProps) => {
  return (
    <MuiButton
      variant={"outlined"}
      {...rest}
      sx={{
        ...sx,
        boxShadow:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        ":hover": {
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        },
      }}
    />
  );
};

export const TextButton = ({
  sx,
  ...rest
}: MuiButtonProps) => {
  return (
    <MuiButton
      variant={"text"}
      {...rest}
      sx={{
        ...sx,
        boxShadow:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        ":hover": {
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        },
      }}
    />
  );
};

export const OutlinedButtonWithIconStart = ({
  icon,
  size = "small",
  children,
  ...rest
}: IMuiButtonProps) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant="outlined"
      startIcon={icon}
      size={size}
      sx={{
        color: "text.primary",
        fontSize: "0.85rem !important",
        fontWeight: 600,
        borderColor: theme.palette.divider,
        boxShadow:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        "&: hover": {
          color: theme.palette.primary.main,
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        },
      }}
      {...rest}>
      {children}
    </MuiButton>
  );
};

export const OutlinedButtonWithIconEnd = ({
  icon,
  size = "small",
  children,
  ...rest
}: IMuiButtonProps) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant="outlined"
      endIcon={icon}
      size={size}
      sx={{
        color: "text.primary",
        fontSize: "0.85rem !important",
        fontWeight: 600,
        borderColor: theme.palette.divider,
        boxShadow:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        "&: hover": {
          color: theme.palette.primary.main,
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)",
        },
      }}
      {...rest}>
      {children}
    </MuiButton>
  );
};
