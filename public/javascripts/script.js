// (function () {
//     const registerBtn = $('#registerBtn'), myModal = $('#myModal'), close = $('.close')

//     $(registerBtn).click(function (e) {
//         e.preventDefault()
//         $(myModal).css('display', 'block')
//     })
//     $(close).click(function (e) {
//         $(myModal).css('display', 'none')
//     })
    
// })()

const registerBtn = document.querySelector('#register-btn');
const loginBtn = document.querySelector('#login-btn');

const loginModal = document.querySelector('#login-modal');
const registerModal = document.querySelector('#register-modal');
const close = document.querySelectorAll('.close');

const handleLoginModal = () => {
    if (loginModal.classList.contains('h-0')) {
        loginModal.classList.remove('h-0');
        loginModal.classList.add('h-screen')
    } 
}

const handleRegisterModal = () => {
    if (registerModal.classList.contains('h-0')) {
        registerModal.classList.remove('h-0');
        registerModal.classList.add('h-screen')
    }    
}

const handleCloseModal = () => {
    loginModal.classList.remove('h-screen');
    loginModal.classList.add('h-0');
    registerModal.classList.remove('h-screen');
    registerModal.classList.add('h-0');
}

loginBtn.addEventListener('click', handleLoginModal);
registerBtn.addEventListener('click', handleRegisterModal)

close.forEach(e => {
    e.addEventListener('click', handleCloseModal);
});