import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

import { MenuItem } from "../../../constants/MenuItems";

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
    <Box
      sx={{
        margin: "10px",
      }}
      onClick={() => handleClick(item)}
    >
      {isActive ? (
        <Typography color="primary.light" noWrap variant="h5">
          {item.text}
        </Typography>
      ) : (
        <Typography color="primary" noWrap variant="h5">
          {item.text}
        </Typography>
      )}
    </Box>
  );
}

function MobileMenu({
  menuItems,
  activeMenuItem,
  handleClick,
}: {
  menuItems: MenuItem[];
  activeMenuItem: string;
  handleClick: (item: MenuItem) => void;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleMobileClick = (item) => {
    handleExpand();
    handleClick(item);
  };

  return (
    <Box>
      <IconButton color="primary" onClick={handleExpand}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={isExpanded}
        onClose={() => setIsExpanded(false)}
      >
        <Paper square elevation={0}>
          {menuItems?.map((item, key) => {
            return (
              <MenuButton
                isActive={activeMenuItem === item.path}
                item={item}
                handleClick={handleMobileClick}
                key={key}
              />
            );
          })}
        </Paper>
      </Drawer>
    </Box>
  );
}

export default MobileMenu;
