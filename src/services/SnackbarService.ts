const SnackbarService = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  openSnackbar(content) {
    document.dispatchEvent(
      new CustomEvent("openSnackbar", { detail: { content } })
    );
  },
  closeSnackbar() {
    document.dispatchEvent(new CustomEvent("closeSnackbar"));
  },
};

export default SnackbarService;
