import React from "react";
import { useTheme } from "@mui/material/styles";
import MuiSwitch from "material-ui/components/switch";

export default function ThemeSwitch() {
  const theme = useTheme();

  const toggleTheme = () => theme.themeToggler();

  return <MuiSwitch onClick={toggleTheme} />;
}
