import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import SessionIdb from '../data/session-idb';
import CONFIG from '../globals/config';

class App {
    constructor({content}) {
        this._content = content;
    }

    async renderPage() {
        let val = await SessionIdb.cek_session();
        CONFIG.USERNAME = val[0].id;
        CONFIG.TOKEN = val[0].token;

        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.loadData();
        await page.actionHandler();
    }
}

export default App;