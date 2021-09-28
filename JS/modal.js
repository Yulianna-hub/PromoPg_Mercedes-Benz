'use strict';
const modalBtns = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

modalBtns.forEach(moreBtn => {
    moreBtn.addEventListener('click', (event) => {
        modal.classList.remove('hidden');
    })
})
modal.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden');
    }

})
