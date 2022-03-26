import React from "react";

import * as styles from "./css/index.module.css";

function NotLoggedIn() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <p className={styles.title}>Not Logged In</p>
        <p className={styles.text}>Please log in to view this page.</p>
      </div>
    </div>
  );
}

export default NotLoggedIn;
