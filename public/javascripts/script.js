// (function () {
//     const registerBtn = $('.register')

//     $(registerBtn).click(function (e) 
//         e.preventDefault()
//        alert()
//     })

// })()
const loaded = () => {
    if (window.location.hash.includes('login')) {
        console.log($('#login-modal'))
        handleLoginModal()
    };
}

const registerBtn = document.querySelector('#register-btn');
const loginBtn = document.querySelector('#login-btn');

const loginModal = document.querySelector('#login-modal');
const registerModal = document.querySelector('#register-modal');
const close = document.querySelectorAll('.close');

const sideBarAccordeon = document.querySelector("#sidebar-accordeon");
const arrowIcon = document.querySelector("#sidebar-accordeon");

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

loaded()

try {

    if (loginBtn || registerBtn) {
        loginBtn.addEventListener('click', handleLoginModal);
        registerBtn.addEventListener('click', handleRegisterModal)

        close.forEach(e => {
            e.addEventListener('click', handleCloseModal);
        });

    }



    const registerForm = document.getElementById('register')
    const loginForm = document.getElementById('login')

    if (registerForm) {

        registerForm.addEventListener('submit', (e) => {

            e.preventDefault()

            const target = e.target

            const data = { email: target.elements['email'].value, password: target.elements['password'].value }

            const error_message_span = $('.error-message'),
                pass_error = $('.password-error-message'),
                email_error = $('.email-error-message')

            //POST request with body equal on data in JSON format
            fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.status != 200) {
                        throw Error(response.statusText)
                    }
                    return response
                })
                //Then with the data from the response in JSON...
                .then((data) => {
                    console.log({ data })
                    if (data) {
                        handleCloseModal()
                        window.location.assign('/#login')
                        window.location.reload()
                    }
                })
                //Then with the error genereted...
                .catch((error) => {

                    console.log(error.toString().includes('password'))

                    if (error.toString().includes('password')) {
                        $(pass_error).removeClass('hidden')
                        $(pass_error).html(error)
                    } else if (error.toString().includes('email')) {
                        $(email_error).removeClass('hidden')
                        $(email_error).html(error)
                    } else {
                        $(pass_error).addClass('hidden')
                        $(error_message_span).removeClass('hidden')
                        $(error_message_span).html(error)
                    }




                })


        })

       

    }


    if(loginForm){

        console.log({loginForm})
        
        loginForm.addEventListener('submit', (e) => {

            e.preventDefault()

            const target = e.target

            const data = { email: target.elements['email'].value, password: target.elements['password'].value }

            const error_message_span = $('.error-login-message'),
                pass_error = $('.password-login-error-message'),
                email_error = $('.email-login-error-message')

            //POST request with body equal on data in JSON format
            fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.status != 200) {
                        throw Error(response.statusText)
                    }
                    return response
                })
                //Then with the data from the response in JSON...
                .then((data) => {

                    if (data) {

                        location.replace(data.url.includes('admin') ? '/admin' : data.url.includes('dashboard')?'/dashboard':'services')

                    }
                })
                //Then with the error genereted...
                .catch((error) => {

                    console.log(error.toString().includes('password'))

                    if (error.toString().includes('password')) {
                        $(pass_error).removeClass('hidden')
                        $(pass_error).html(error)
                    } else if (error.toString().includes('email')) {
                        $(email_error).removeClass('hidden')
                        $(pass_error).addClass('hidden')
                        $(email_error).html(error)
                    } else {
                        $(email_error).addClass('hidden')
                        $(pass_error).addClass('hidden')
                        $(error_message_span).removeClass('hidden')
                        $(error_message_span).html(error)
                    }




                })


        })
    }



} catch (e) {
    console.log(e)
}

// sideBarAccordeon.addEventListener('click', () => {
//     console.log("You just clicked me!!") /* it's not working bruh */
// });


