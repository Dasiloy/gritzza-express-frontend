import React from "react";
import Grid, { GridProps } from "@mui/material/Grid";

function MuiGrid({
  item,
  container,
  spacing,
  justifyContent,
  alignItems,
  children,
  ...rest
}:GridProps) {
  return (
    <Grid
      item={item}
      container={container}
      spacing={spacing}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}>
      {children}
    </Grid>
  );
}

export default MuiGrid;
