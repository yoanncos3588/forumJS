
export function handleClickBurgerButton() {
    const buttonOpenMenu = document.querySelector(`#button-menu-burger`);
    const navMobile = document.querySelector(`#nav-mobile`);
    const navMobileMenu = document.querySelector(`#nav-mobile-menu`);
    const navMobileMask = document.querySelector(`#nav-mobile-mask`);
    const navMobileClose = document.querySelector(`#nav-mobile-close`);
    const closingElements = [navMobileClose, navMobileMask];

    //open
    buttonOpenMenu.addEventListener(`click`, () => {
        navMobile.classList.remove(`scale-0`, `opacity-0`);
        navMobileMenu.classList.remove(`-translate-x-full`);
    });

    //close
    //navMobileClose.addEventListener(`click`, closeNavMobile);
    closingElements.forEach(element => {
        element.addEventListener(`click`, () => {
            navMobile.classList.add(`opacity-0`);
            setTimeout(() => {
                navMobile.classList.add(`scale-0`);
                navMobileMenu.classList.add(`-translate-x-full`);
            }, 100);
        });
    });
}

/**
 * Callback close button mobile
 * @param {Event} e
 */
function closeNavMobile(e) {
    navMobileMask.classList.add(`opacity-0`);
    setTimeout(() => {
        navMobileMask.classList.add(`scale-0`);
        navMobile.classList.add(`-translate-x-full`);
    }, 100);
}