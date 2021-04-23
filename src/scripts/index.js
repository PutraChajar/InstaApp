import 'regenerator-runtime';
import '../styles/index.css';
import img from '../public/images/logo.png';
import SessionIdb from './data/session-idb.js';

var logo = document.querySelector('#logo');
logo.setAttribute('src', img);

window.addEventListener('load', () => {
    setTimeout(async () => {
        if (Object.keys(await SessionIdb.cek_session()).length > 0) {
            window.location.href = 'main.html';
        } else {
            window.location.href = 'signin.html';
        }
    }, 2000);
});