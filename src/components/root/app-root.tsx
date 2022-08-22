import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiPaper from "material-ui/components/paper";
import PropTypes from "prop-types";
import getTheme from "material-ui/theme";
import AOS from "aos";
import useThemeMode from "hooks/use-theme-mode";

export interface AppRootProps {
  children: React.ReactNode;
}

export function AppRoot({ children }: AppRootProps) {
  const [themeMode, themeToggler, mountedComponent] =
    useThemeMode();

  // Remove the server-side injected CSS.
  React.useEffect(() => {
    const jssStyles = document.querySelector(
      "#jss-server-side"
    )!;
    if (jssStyles) {
      jssStyles!.parentElement!.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: "ease-in-out",
    });
  }, []);

  // re-render the whole app when theme mode changes
  React.useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider
      theme={getTheme(themeMode, themeToggler)}>
      <CssBaseline />
        <MuiPaper
          elevation={0}
          sx={{
            flex: 1,
            width: "100%",
            minHeight: "100vh",
          }}>
          {children}
        </MuiPaper>
    </ThemeProvider>
  );
}

AppRoot.propTypes = {
  children: PropTypes.node.isRequired,
};
