import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React from "react";

import * as styles from "./css/index.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
};

const Modal = ({ isOpen, closeModal, header, message }) => {
  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal className={styles.module} open={isOpen} onClose={handleClose}>
      <Box className={styles.box} sx={style}>
        <div className={styles.body}>
          <h2 className={styles.header}>{header}</h2>
          <p className={styles.message}>{message}</p>
          <Button
            className={styles.button}
            variant="outlined"
            onClick={handleClose}
          >
            Dismiss
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default GameOverModal;
