import DataSource from '../data/data-source';
import UrlParser from '../routes/url-parser';
import Alert from '../utils/alert-initiator';
import './ptr-photo';
import './ptr-nopost';

class PtrPostProfile extends HTMLElement {
    async connectedCallback() {
        await this.render();
        await this.afterRender();
    }

    render() {
        this.innerHTML = `
            <div class="postprofile" id="postprofile"></div>
        `;
    }

    async afterRender() {
        const postprofile = document.querySelector('#postprofile');
        const url = UrlParser.parseActiveUrlWithoutCombiner();

        let form_data = {
            username: url.id
        }

        try {
            const datas = await DataSource.loadPostProfile(form_data);
            if (datas.length > 0) {
                datas.forEach( data => {
                    const PostElement = document.createElement('ptr-photo');
                    PostElement.data = data;
                    postprofile.appendChild(PostElement);
                });
            } else {
                const NoPostElement = document.createElement('ptr-nopost');
                postprofile.appendChild(NoPostElement);
            }
        } catch (error) {
            Alert.show('error', error);
        }
    }
}

customElements.define('ptr-postprofile', PtrPostProfile);