import 'regenerator-runtime';
import '../styles/signin.css';
import img from '../public/images/instaapp.png';
import DataSource from './data/data-source.js';
import SessionIdb from './data/session-idb.js';

var logo = document.querySelector('#logo');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const message = document.querySelector('#message');
const btsignin = document.querySelector('#signin');

logo.setAttribute('src', img);

username.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && !btsignin.getAttribute('disabled')) {
        signin();
    } else {
        checkForm();
    }
});

password.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && !btsignin.getAttribute('disabled')) {
        signin();
    } else {
        if (password.value.length >= 6) {
            checkForm();
        }
    }
});

btsignin.addEventListener('click', ()  =>{
    signin();
});

const checkForm = () => {
    if (username.value != '' && password.value != '') {
        btsignin.removeAttribute('disabled');
    } else {
        btsignin.setAttribute('disabled', true);
    }
}

const signin = async () => {
    let form_data = {
        username: username.value,
        password: password.value
    }

    try {
        const data = await DataSource.signin(form_data);
        if (data.status == 'success') {
            let session_data = {
                id: data.username,
                token: data.jwt
            }
            await SessionIdb.putData(session_data);

            message.innerHTML = data.message;
            message.style.color = '#2ecc71';
            setTimeout(() => {
                location.reload();
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