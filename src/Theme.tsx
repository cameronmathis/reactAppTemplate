import { createTheme } from "@mui/material";

const primaryMain = "#000000";

const secondaryMain = "#757575";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
  typography: {
    allVariants: {
      color: primaryMain,
    },
  },
});

export default theme;
