import Box, { BoxProps } from "@mui/material/Box";

export default function MuiBox({
  children,
  ...rest
}: BoxProps) {
  return <Box {...rest}>{children}</Box>;
}
