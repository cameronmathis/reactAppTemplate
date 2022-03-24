import React from "react";
import * as styles from "./css/Header.module.css";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>React App</h1>
      </div>
      <div className={styles.right}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
