import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

import useStore from "../../Store";
import * as styles from "./css/index.module.css";

const Snackbar = ({ isOpen, closeSnackbar, message }) => {
  const SNACKBAR_DURATION = 5000;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    closeSnackbar();
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      class={styles.snackbar}
      open={isOpen}
      autoHideDuration={SNACKBAR_DURATION}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default Snackbar;
