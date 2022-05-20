import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import SnackbarService from "../services/SnackbarService";

const SnackbarRoot = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [rootContent, setRootContent] = useState({ content: null });

  useEffect(() => {
    SnackbarService.on("openSnackbar", ({ content }) => {
      setRootContent({ content });
      setOpen(true);
    });
    SnackbarService.on("closeSnackbar", () => {
      setRootContent({ content: null });
      setOpen(false);
    });
  }, []);

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setRootContent({ content: null });
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      {rootContent.content}
    </Snackbar>
  );
};

export default SnackbarRoot;
