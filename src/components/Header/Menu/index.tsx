import { Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem, MENU_ITEMS } from "../../../constants/MenuItems";
import useStore from "../../../Store";
import ComputerMenu from "./ComputerMenu";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string>("/home");
  const isMobile = useStore((state) => state.isMobile);
  const navigate = useNavigate();

  const handleClick = (item: MenuItem) => {
    if (activeMenuItem !== item.path) {
      navigate(item.path);
      setActiveMenuItem(item.path);
    }
  };

  const menuProps = {
    menuItems: MENU_ITEMS,
    activeMenuItem,
    handleClick,
  };

  return (
    <Box>
      {isMobile ? (
        <MobileMenu {...menuProps} />
      ) : (
        <ComputerMenu {...menuProps} />
      )}
    </Box>
  );
};

export default Menu;
