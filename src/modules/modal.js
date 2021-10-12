'use strict';
const modalFunc = () => {
    const modalBtns = document.querySelectorAll('.more')
    const modal = document.querySelector('.modal')

    modalBtns.forEach(btnmodal => {
        btnmodal.addEventListener('click', () => {
            modal.classList.remove('hidden')
        })
    })
    

    modal.addEventListener('click', (event) => {
        const target = event.target

        if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
            modal.classList.add('hidden')
        }
    })

}
export default modalFunc;
