import { PaletteMode } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles";

export const shadowsGenerator = (
  themeMode: PaletteMode = "light"
): Shadows => {
  const rgb = themeMode === "light" ? "#8c98a4" : "#000000";

  return [
    "none",
    `0 3px 6px 0 ${alpha(rgb, 0.1)}`,
    `0 12px 15px ${alpha(rgb, 0.1)}`,
    `0 6px 24px 0 ${alpha(rgb, 0.125)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
  ];
};
