/**
 * Create an alert after site header
 * @param {String} type type of alert [error, warning, success]
 * @param {String} content message to display
 */
export function createAlert(type, content) {
    const alert = document.querySelector(`#template-alert`).content.cloneNode(true);
    const header = document.querySelector(`#header`);

    // type of alert
    if (typeof type !== `string` || type instanceof String) {
        alert.querySelector(`[slot="alert"]`).classList.add(`alert--${type}`);
    }

    // content
    if (typeof content === `string` || content instanceof String) {
        alert.querySelector(`[slot="alert-content"]`).textContent = content;
    }

    // close notif
    const closeButton = alert.querySelector(`[slot="alert-close"]`);
    closeButton.addEventListener(`click`, (e) => {
        e.target.closest(`[slot="alert"]`).remove();
    });

    // auto hide
    setTimeout(() => {
        const alertDom = document.querySelector(`[slot="alert"]`);
        if (alertDom) alertDom.remove();
    }, 2000);

    header.after(alert);
}
