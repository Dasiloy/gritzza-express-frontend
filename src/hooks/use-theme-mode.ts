import { useState, useEffect } from "react";
import type { PaletteMode } from "@mui/material";
import { ThemeToggler } from "types/themeToggler";


export default function useThemeMode() {
  const [themeMode, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] =
    useState(false);

  const setMode = (mode: PaletteMode) => {
    try {
      window.localStorage.setItem("themeMode", mode);
    } catch {
      /* do nothing */
    }
    setTheme(mode);
  };

  const themeToggler: ThemeToggler = () => {
    themeMode === "light"
      ? setMode("dark")
      : setMode("light");
  };

  useEffect(() => {
    try {
      const localTheme =
        window.localStorage.getItem("themeMode");
      localTheme ? setTheme(localTheme) : setMode("light");
    } catch {
      setMode("light");
    }
    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent] as [
    PaletteMode,
    ThemeToggler,
    boolean
  ];
}
