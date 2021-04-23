import 'regenerator-runtime';
import '../styles/signup.css';
import img from '../public/images/instaapp.png';
import DataSource from './data/data-source.js';
import SessionIdb from './data/session-idb.js';
import Avatar from './views/modal/avatar';

const logo = document.querySelector('#logo');
const email = document.querySelector('#email');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const message = document.querySelector('#message');
const btsignup = document.querySelector('#signup');
const modals = document.querySelector('#modals');

logo.setAttribute('src', img);

email.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && !btsignup.getAttribute('disabled')) {
        signup();
    } else {
        checkForm();
    }
});

email.addEventListener('blur', () => {
    if (email.value != '') {
        checkEmail();
    }
});

const checkEmail = async () => {
    let form_data = {
        email: email.value
    }

    try {
        const data = await DataSource.checkEmail(form_data);
        if (data.status == 'yes') {
            message.innerHTML = data.message;
            message.style.color = '#2ecc71';
            email.style.borderBottomColor = '#2ecc71';
            checkForm();
        } else {
            message.innerHTML = data.message;
            message.style.color = '#ed4956';
            email.style.borderBottomColor = '#ed4956';
            btsignup.setAttribute('disabled', true);
        }
    } catch (error) {
        message.innerHTML = error;
    }
}

fullname.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && !btsignup.getAttribute('disabled')) {
        signup();
    } else {
        checkForm();
    }
});

username.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && !btsignup.getAttribute('disabled')) {
        signup();
    } else {
        checkForm();
    }
});

username.addEventListener('blur', () => {
    if (username.value != '') {
        checkUsername();
    }
});

const checkUsername = async () => {
    let form_data = {
        username: username.value
    }

    try {
        const data = await DataSource.checkUsername(form_data);
        if (data.status == 'yes') {
            message.innerHTML = data.message;
            message.style.color = '#2ecc71';
            username.style.borderBottomColor = '#2ecc71';
            checkForm();
        } else {
            message.innerHTML = data.message;
            message.style.color = '#ed4956';
            username.style.borderBottomColor = '#ed4956';
            btsignup.setAttribute('disabled', true);
        }
    } catch (error) {
        message.innerHTML = error;
    }
}

password.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && !btsignup.getAttribute('disabled')) {
        signup();
    } else {
        if (password.value.length >= 6) {
            checkForm();
        }
    }
});

btsignup.addEventListener('click', async ()  =>{
    signup();
});

const checkForm = () => {
    if (email.value != '' && fullname.value != '' && username.value != '' && password.value != '') {
        btsignup.removeAttribute('disabled');
    } else {
        btsignup.setAttribute('disabled', true);
    }
}

const signup = async () => {
    let form_data = {
        email: email.value,
        fullname: fullname.value,
        username: username.value,
        password: password.value
    }

    try {
        const data = await DataSource.signup(form_data);
        if (data.status == 'success') {
            message.innerHTML = data.message;
            message.style.color = '#2ecc71';
            setTimeout( async () => {
                modals.innerHTML = await Avatar.render();
                await Avatar.actionHandler(data.data, username.value);
            }, 1000);
        } else {
            message.innerHTML = data.message;
            message.style.color = '#ed4956';
        }
    } catch (error) {
        message.innerHTML = error;
    }
}

window.addEventListener('load', async () => {
    if (Object.keys(await SessionIdb.cek_session()).length > 0) {
        window.location.href = 'main.html';
    } else {
        checkForm();
    }
});