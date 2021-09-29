const burgerFunction = () => {
    const burger = document.querySelector('.humburger-menu');
    const menuElem = document.querySelector('.menu');

    const toggleMenu = () => {
        menuElem.classList.toggle('menu-active');
        burger.classList.toggle('humburger-menu-active');
    }
    burger.addEventListener('click', toggleMenu);
    menuElem.addEventListener('click', (event) => {
        
    if (event.target.classList.contains('menu-list__link')) {
            burger.classList.remove('humburger-menu-active');
            menuElem.classList.remove('menu-active');
        }
    });
}
export default burgerFunction;