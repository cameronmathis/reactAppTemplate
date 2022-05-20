import { Box } from "@mui/material";
import React from "react";

import ModalRoot from "../components/ModalRoot";
import SnackbarRoot from "../components/SnackbarRoot";

function Page({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
      <SnackbarRoot />
      <ModalRoot />
    </Box>
  );
}

export default Page;
