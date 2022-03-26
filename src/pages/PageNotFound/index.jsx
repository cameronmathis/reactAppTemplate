import React from "react";

import * as styles from "./css/index.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <p className={styles.title}>Page Not Found</p>
        <p className={styles.text}>Sorry, the requested page was not found.</p>
      </div>
    </div>
  );
}

export default PageNotFound;
