export function on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
}

export function openSnackbar(content) {
    document.dispatchEvent(
        new CustomEvent('openSnackbar', { detail: { content } })
    );
}

export function closeSnackbar() {
    document.dispatchEvent(new CustomEvent('closeSnackbar'));
}
