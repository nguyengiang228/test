const register = document.querySelectorAll('.header__navbar-item--separate');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.btn--back');
const modalBody = document.querySelector('.modal__body');

function run() {
    for (const registerBtn of register)
    {
        registerBtn.addEventListener('click',showModal);
    }
    
    modalClose.addEventListener('click',closeModal);
    modal.addEventListener('click', closeModal);
    
    modalBody.addEventListener('click', (event) => {
        event.stopPropagation();
    });

}
run();

function showModal() {
    modal.classList.add('open');
    
}

function closeModal() {
    modal.classList.remove('open');
}