import { Box, Typography } from "@mui/material";
import React from "react";
import Menu from "./Menu";

const LeftRightBoxStyle = {
  width: "50%",
  display: "flex",
  alignItems: "center",
  margin: "0 10px",
};

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        borderBottom: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <Box
        sx={{
          ...LeftRightBoxStyle,
          justifyContent: "left",
        }}
      >
        <Typography noWrap variant="h2">
          React App
        </Typography>
      </Box>
      <Box
        sx={{
          ...LeftRightBoxStyle,
          justifyContent: "right",
        }}
      >
        <Menu />
      </Box>
    </Box>
  );
};

export default Header;
