const email = document.getElementById('exampleInputEmail');
const mobile = document.getElementById('exampleInputMobile');
const password = document.getElementById('exampleInputPassword');
const terms = document.getElementById('exampleCheck1');
const form = document.querySelector('form');

const emailHelp = document.getElementById('emailHelp');
const phoneHelp = document.getElementById('phoneHelp');
const passwordHelp = document.getElementById('passwordHelp');
const termsHelp = document.getElementById('termsHelp');
let myError;
const emailRegex = /^[a-zA-Z0-9._-]+@(hotmail|gmail|yahoo).com$/;
const phoneRegex = /077[0-9]{7}/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,18}$/;


function checkIfEmpty() {
    try {
        if (email.value === '') {
            myError = 'email';
        } else if (mobile.value === '') {
            myError = 'mobile';
        } else if (password.value === '') {
            myError = 'password';
        }
        throw 'This field is required!';

    } catch (error) {
        showError(error);
    }
}

function showError(errorMessage) {
    if (myError === 'email') {
        emailHelp.innerHTML = errorMessage;
    } else
    if (myError === 'mobile') {
        phoneHelp.innerText = errorMessage;
    } else if (myError === 'password') {
        passwordHelp.innerText = errorMessage;
    }
}

function validation() {
    try {
        if (email.value !== '') {
            if (emailRegex.test(email.value)) {
                emailHelp.innerText = '';
            } else {
                throw 'eg: username@domain.com';
            }
        } else {
            checkIfEmpty();
        }
        if (mobile.value !== '') {
            if (phoneRegex.test(mobile.value)) {
                console.log(phoneRegex.test(mobile.value));
                phoneHelp.innerText = '';
            } else {
                throw 'eg: 077*******';
            }
        } else {
            checkIfEmpty();
        }
        if (password.value !== '') {
            if (passwordRegex.test(password.value)) {
                passwordHelp.innerText = '';
            } else {
                throw 'The password should be between 6-18 characters';
            }
        } else {
            checkIfEmpty();
        }
    } catch (error) {
        showError(error);
    }
}
email.addEventListener('blur', validation);
mobile.addEventListener('blur', validation);
password.addEventListener('blur', validation);

// Submit form
const page_right = document.querySelector('.page_right');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(emailHelp);
    console.log(phoneHelp);
    console.log(passwordHelp);
    if (emailHelp.innerText === '' || phoneHelp.innerText === '' || passwordHelp.innerText === '') {
        if (terms.checked) {
            form.style.display = 'none'
            const email_activiation = document.createElement('p');
            email_activiation.innerHTML = `There is only one step left for you to be <span>successfully</span> registered <br>
            We have sent you an activation email<br>
            Follow the link to activate your account`;
            email_activiation.classList.add('activation');
            page_right.appendChild(email_activiation);
            const back_button = document.createElement('button');
            page_right.appendChild(back_button);
            back_button.textContent = 'Back to Home Page';
            back_button.classList.add('back');
        } else {
            termsHelp.innerText = 'terms & conditions not checked!'

        }
    }
})