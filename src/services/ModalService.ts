export function on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
}

export function openModal(content) {
    document.dispatchEvent(
        new CustomEvent('openModal', { detail: { content } })
    );
}

export function closeModal() {
    document.dispatchEvent(new CustomEvent('closeModal'));
}
