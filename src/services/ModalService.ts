const ModalService = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  openModal(content) {
    document.dispatchEvent(
      new CustomEvent("openModal", { detail: { content } })
    );
  },
  closeModal() {
    document.dispatchEvent(new CustomEvent("closeModal"));
  },
};

export default ModalService;
