import React from "react";
import Stack from "@mui/material/Stack";
import { StackProps } from "@mui/system";

function MuiStack({
  direction,
  spacing,
  children,
  alignItems,
  justifyContent,
  ...rest
}: StackProps) {
  return (
    <Stack
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...rest}>
      {children}
    </Stack>
  );
}

export default MuiStack;
