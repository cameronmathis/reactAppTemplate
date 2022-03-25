import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

import useStore from "../../../Store";
import * as styles from "./css/MobileMenu.module.css";

const MobileMenu = ({ menuItems, getRandomKey, handleClick }) => {
  const currentPath = useStore((state) => state.currentPath);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleMobileClick = (item) => {
    handleExpand();
    handleClick(item);
  };

  return (
    <div className={styles.menu}>
      <Button className={styles.menuIcon} onClick={handleExpand}>
        <MenuIcon
          className={isExpanded ? styles.expandedIcon : styles.closedIcon}
        />
      </Button>
      <Drawer
        anchor={"right"}
        open={isExpanded}
        onClose={() => setIsExpanded(false)}
      >
        <Paper square elevation={0} className={styles.drawer}>
          {menuItems?.map((item) => {
            return (
              <Box
                className={
                  currentPath === item.path ? styles.boxSelected : styles.box
                }
                key={getRandomKey(item.text)}
                onClick={() => handleMobileClick(item)}
              >
                <Typography
                  variant="inherit"
                  className={
                    currentPath === item.path
                      ? styles.linkSelected
                      : styles.link
                  }
                >
                  <h2>{item.text}</h2>
                </Typography>
              </Box>
            );
          })}
        </Paper>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
