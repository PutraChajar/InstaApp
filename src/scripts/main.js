import 'regenerator-runtime';
import '../styles/main.css';
import './components/ptr-nav';
import './components/ptr-post';
import './components/ptr-menu';
import "font-awesome/css/font-awesome.css";
import App from './views/app';
import SessionIdb from './data/session-idb';

const app = new App({
    content: document.querySelector('#content')
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', async () => {
    if (Object.keys(await SessionIdb.cek_session()).length > 0) {
        app.renderPage();
    } else {
        window.location.href = 'signin.html';
    }
});