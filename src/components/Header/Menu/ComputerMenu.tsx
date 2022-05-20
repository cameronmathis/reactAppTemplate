import { Box, Typography } from "@mui/material";
import React from "react";
import { MenuItem } from "../../../constants/MenuItems";

const MenuButtonBoxStyle = {
  margin: "0 10px",
  cursor: "pointer",
  borderBottom: "1px solid transparent",
  "&:hover": {
    borderBottom: "1px solid",
  },
};

const MenuButtonTypographyStyle = {
  padding: "0 5px",
};

function MenuButton({
  isActive,
  item,
  handleClick,
}: {
  isActive: boolean;
  item: MenuItem;
  handleClick: (item: MenuItem) => void;
}) {
  return (
    <Box>
      {isActive ? (
        <Box
          sx={{
            ...MenuButtonBoxStyle,
            "&:hover": {
              borderColor: "secondary.main",
            },
          }}
          onClick={() => handleClick(item)}
        >
          <Typography
            sx={MenuButtonTypographyStyle}
            color="secondary"
            noWrap
            variant="h5"
          >
            {item.text}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            ...MenuButtonBoxStyle,
            "&:hover": {
              borderColor: "primary.main",
            },
          }}
          onClick={() => handleClick(item)}
        >
          <Typography
            sx={MenuButtonTypographyStyle}
            color="primary"
            noWrap
            variant="h5"
          >
            {item.text}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

function ComputerMenu({
  menuItems,
  activeMenuItem,
  handleClick,
}: {
  menuItems: MenuItem[];
  activeMenuItem: string;
  handleClick: (item: MenuItem) => void;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      {menuItems?.map((item, key) => {
        return (
          <MenuButton
            isActive={activeMenuItem === item.path}
            item={item}
            handleClick={handleClick}
            key={key}
          />
        );
      })}
    </Box>
  );
}

export default ComputerMenu;
