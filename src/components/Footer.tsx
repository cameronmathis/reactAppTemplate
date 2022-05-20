import { Box, IconButton } from "@mui/material";
import React from "react";
import { FOOTER_ITEMS } from "../constants/FooterItems";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid",
        borderColor: "primary.main",
        padding: "5px",
      }}
    >
      {FOOTER_ITEMS.map((item, key) => (
        <IconButton color="primary" href={item.link} key={key}>
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default Footer;
