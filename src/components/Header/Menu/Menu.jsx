import React from "react";
import { useNavigate } from "react-router-dom";

import { MENU_ITEMS } from "../../../constants/MenuItems";
import useStore from "../../../Store";
import ComputerMenu from "./ComputerMenu";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const isMobile = useStore((state) => state.isMobile);
  const navigate = useNavigate();

  const getRandomKey = () => {
    return Math.random().toString(36).substring(2, 5);
  };

  const handleClick = (item) => {
    if (currentPage != item.path) {
      navigate(item.path);
      setCurrentPage(item.path);
    }
  };

  const menuProps = {
    menuItems: MENU_ITEMS,
    getRandomKey,
    handleClick,
  };

  return (
    <div>
      {isMobile ? (
        <MobileMenu {...menuProps} />
      ) : (
        <ComputerMenu {...menuProps} />
      )}
    </div>
  );
};

export default Menu;
