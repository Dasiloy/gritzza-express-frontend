import * as React from "react";
import Breadcrumbs, { BreadcrumbsProps} from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function MuiBreadCrumbs({
  children,
  ...rest
}:BreadcrumbsProps) {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      {...rest}>
      {children}
    </Breadcrumbs>
  );
}
