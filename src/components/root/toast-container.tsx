import { Toaster } from "react-hot-toast";
import { useTheme } from "@mui/material/styles";

export default function AppToaster() {
  const theme = useTheme();
  const themeMode = theme.palette.mode;
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 2500,
        style: {
          backgroundColor:
            themeMode === "light"
              ? theme.palette.background.level1
              : theme.palette.background.level3,
          color: theme.palette.text.primary,
        },
      }}
    />
  );
}
