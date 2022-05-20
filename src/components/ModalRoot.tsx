import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";

import ModalService from "../services/ModalService";

const ModalRoot = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [rootContent, setRootContent] = useState({
    content: null,
  });

  useEffect(() => {
    ModalService.on("openModal", ({ content }) => {
      setRootContent({ content });
      setOpen(true);
    });
    ModalService.on("closeModal", () => {
      handleClose();
    });
  }, []);

  const handleClose = () => {
    setRootContent({
      content: null,
    });
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          bgcolor: "background.paper",
          boxShadow: 25,
        }}
      >
        {rootContent.content}
      </Box>
    </Modal>
  );
};

export default ModalRoot;
